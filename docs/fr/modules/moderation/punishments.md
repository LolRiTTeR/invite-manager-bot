# Sanctions

### Que sont les sanctions ?

Les sanctions sont des actions comme `ban`, `kick` ou `mute` qui peuvent être données à un utilisateur quand il enfreint les règles. Tu peux soit directement sanctionner les utilisateurs en utilisant les commandes, ou définir une sanction qui se déclenche après qu'un utilisateur ai atteint un certain nombre d'avertissements.

### Comment puis-je sanctionner un utilisateur après un certain nombre d'avertissements ?

Avec la commande `punishmentconfig` tu peux configurer après combien d'avertissements une certaine sanction sera donnée.

```text
!punishmentconfig <punishmentType><numberOfStrikesNeeded>
```

Une liste des sanctions disponibles :

- ban
- softban
- kick
- mute
- warn

Donc si tu veux expulser un utilisateur après 5 avertissements, tu devrais utiliser cette commande

```text
!punishmentconfig kick 5
```

Si tu veux supprimer un `punishmentconfig`, paramètre juste les avertissements à `0` comme ceci :

```text
!punishmentconfig kick 0
```

Pour voir tous les paramètres de sanction, utilise la commande sans argument :

```text
!punishmentconfig
```
