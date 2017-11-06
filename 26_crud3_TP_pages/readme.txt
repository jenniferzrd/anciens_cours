##### TP CRUD 3 - PAGES ####

Ce TP est en 2 parties
Il fait partie d'un cycle important : appliquez vous !
Avec les TD CRUD 1 et 2, nous avons posé les bases d'un mini-cms fait maison
Au cours de ce TP, nous codons le module gérant les pages d'un site
(Ne pas hésiter à améliorer cette base en y ajoutant vos idées)

###################
#### Prérequis ####
###################

Coder et comprendre les exos suivants

- Looper VII
- Listes I exo 1, 2, 3
- Listes II exo 1

#### Note ####

Utiliser le code des sessions CRUD 1 et 2


#############
#### BDD ####
#############

Créer une table pages dans la bdd crud2, ayant le schéma suivant

- id (small int, unsigned, AI, PK)
- id_parent (small int, unsigned, default NULL)
- title (VARCHAR, 128, UNIQUE)
- content (TEXT)
- url (VARCHAR, 256)
- position (tiny int)

##########################
#### HTML (PHP) / CSS ####
##########################

Créer et styliser sommairement les pages suivantes:

- pages.php
- page.php

1 / pages.php listes les pages insérées en base.
Des boutons permettent de supprimer ou éditer les pages

2/ page.php contient un formulaire.
Ce formulaire permet d'ajouter ET de mettre à jour une page.
Si mise à jour, utiliser un paramètre GET pour récupérer l'id de la page.

Une page est constituée de :
- un titre,
- un id de page parente (null si la page est à la racine de la navigation)
- un contenu (texte ou html)
- une url (relative index.php, vers un fichier html, représentant une page)
- un ordre (d'apparition dans le menu / sous-menu du site)

Utiliser la fonction php include() pour structure le template (squelette HTML du site)

####################
#### PHP : CRUD ####
####################

Coder les fonctions suivantes (appelées au choix en synchrone ou via AJAX)

- createPage()
- getPage($id)
- getPages()
- updatePage($id)

###################
#### JS : AJAX ####
###################

Sur la page lister-pages.php,
Coder un programme JS mettant en pratique les exos sur les listes.
Réaliser avec la méthode AJAX une UI pour réorganiser les pages de notre site =>
Utiliser les méthodes de manipulation du DOM pour changer l'ordre des pages => Mettre à jour la base de données en fonction de ces changements.
