# InviteManager Discord Bot

## Description

This is the code repository for the InviteManager Discord Bot.

## Docs

[Click here to view the documentation](https://invitemanager.cc)

## Self hosting quick setup

### Requirements

- NodeJS (tested using v14)
- Database (tested using `MySQL` 8.0, `MariaDB` 10.4+ should work)

### Setup

1. `npm install`
1. Setup databases
   1. Use the `scripts/db/setup_db0.sql` script to set up the global database `im_0`
   1. Use the `scripts/db/setup_dbx.sql` script to set up the data databases `im_1`, `im_2`, ... (you need at least one)
1. Copy the `config.example.json` to `config.json` and fill in required data
1. `npm start`
