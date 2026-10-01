# Ça tient ? — Site public

Site statique français destiné à https://catientgame.github.io/. Aucun build, aucune dépendance distante, aucun outil de suivi, aucune police externe.

## Pages
- `index.html` : présentation du jeu actuel et aperçu clairement identifié de la version 1.1 à venir.
- `support.html` : assistance actuelle et section séparée pour la version 1.1.
- `contact.html` : contact par e-mail, sans formulaire.
- `privacy.html` : politique de confidentialité, données locales, services tiers et identité de l’éditeur.
- `404.html` : erreur GitHub Pages, avec liens depuis la racine pour les URL imbriquées.
- `app-ads.txt` : fichier publicitaire existant, inchangé.

## Visuels réels
- `app-icon.png` : icône du jeu.
- `gameplay.png` : capture réelle, sans retouche, de la version 1.1, explicitement présentée comme à venir.
- `site.js` conserve un repli avec l’icône si la capture est absente, échoue au chargement, ou si JavaScript est désactivé.

## Prévisualisation
Depuis ce dossier : `python3 -m http.server 4173 --bind 127.0.0.1`, puis ouvrir http://127.0.0.1:4173/.

Vérifier desktop, 320 px et 390 px, navigation clavier, réduction des animations et liens internes. L’URL canonique utilise le domaine réel ; les liens et ressources de la page 404 partent de la racine pour les chemins inconnus imbriqués. Le lien d’évitement conserve l’URL de la page courante.

## Avant publication
L’aperçu 1.1 est volontairement marqué « À venir ». Mettre ce libellé à jour seulement après approbation et disponibilité. Conserver `app-ads.txt` à la racine.
