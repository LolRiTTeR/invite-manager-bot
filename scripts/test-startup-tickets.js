const assert = require('assert');

const { RabbitMqService } = require('../bin/framework/services/RabbitMq');
const { BotType } = require('../bin/types');

const makeChannel = () => {
  let acked = 0;
  let nacked = 0;
  return {
    on: () => undefined,
    prefetch: async () => undefined,
    assertQueue: async () => ({}),
    consume: (_queue, handler) => {
      handler({ content: Buffer.from('{}') });
    },
    ack: () => {
      acked += 1;
    },
    nack: () => {
      nacked += 1;
    },
    close: async () => undefined,
    _counts: () => ({ acked, nacked })
  };
};

const makeService = (config) => {
  const client = {
    flags: [],
    type: BotType.custom,
    instance: 'l',
    shardId: 0,
    shardCount: 1,
    hasStarted: false,
    config
  };
  const service = new RabbitMqService(client);
  return service;
};

const testSkipWhenDisabled = async () => {
  const service = makeService({ startupTickets: { enabled: false, requeue: false } });
  let createCalls = 0;
  service.conn = {
    createChannel: async () => {
      createCalls += 1;
      return makeChannel();
    }
  };
  await service.waitForStartupTicket();
  assert.strictEqual(createCalls, 0, 'should skip startup tickets for custom when disabled');
};

const testAcquireWhenEnabled = async () => {
  const service = makeService({ startupTickets: { enabled: true, requeue: false } });
  let createCalls = 0;
  const channel = makeChannel();
  service.conn = {
    createChannel: async () => {
      createCalls += 1;
      return channel;
    }
  };
  await service.waitForStartupTicket();
  assert.strictEqual(createCalls, 1, 'should create channel when startup tickets enabled');
  assert.ok(service.startTicket, 'should store startup ticket');
};

const testAckOnEndStartup = async () => {
  const service = makeService({ startupTickets: { enabled: true, requeue: false } });
  const channel = makeChannel();
  service.conn = {
    createChannel: async () => channel
  };
  await service.waitForStartupTicket();
  await service.endStartup();
  const { acked, nacked } = channel._counts();
  assert.strictEqual(acked, 1, 'should ack startup ticket when requeue is false');
  assert.strictEqual(nacked, 0, 'should not nack startup ticket when requeue is false');
};

const run = async () => {
  await testSkipWhenDisabled();
  await testAcquireWhenEnabled();
  await testAckOnEndStartup();
  console.log('Startup ticket tests passed.');
};

run().catch((err) => {
  console.error('Startup ticket tests failed.');
  console.error(err);
  process.exit(1);
});
