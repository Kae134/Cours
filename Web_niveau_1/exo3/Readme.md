# COMMENT LE COURS EST INCROYABLE EHEH

## Aujourd'hui on va apprendre le js !
Pour faire simple, JavaScript est un langage de programmation qui permet d'ajouter de l'interactivité aux pages web. Il fonctionne côté client, ce qui signifie qu'il s'exécute dans le navigateur de l'utilisateur.

### Comment relier le JS ?
Bon, il existe plusieurs facon de relier le js. 

#### En ligne (inline)
Tu peux écrire du JavaScript directement dans une balise `<script>` dans le fichier HTML.
Voir scriptInline.html

#### Externe
Tu peux également écrire du JavaScript dans un fichier séparé et l'inclure dans l'HTML. Cela rend le code plus propre et plus facile à gérer.
Voir ExternExample

Ok, maintenant que tu as relier ton javascript à ton html, qu'est ce qu'on en fait ?!

#### Petit plus
Si tu veux avoir une meilleur organisation des fichiers, creer un dossier "assets" à la racine de ton projet, dedans tu pourras y mettre ton css, tes images et tes scripts dans leur dossier respectif, on aura donc :
assets  -
        -> img  -
        -       -> test.jpg
        -       -> ...
        -
        -> js   - 
        -       -> script.js
        -       -> ...
        -
        -> css  -
        -       -> style.js
        -       -> ...
De même pour les pages, ton index sera à la racine mais si tu as d'autres pages, tu les mettras dans un dossier pages (il ne s'agit que d'une facon de faire).
N'oublie pas de bien tout relier dans ton html.

### HEEEEEEEEELLLLOOOOOO NIG- ... WORLD
On va faire l'habituel Hello World ! Puis passer en revu quelques petites choses pour la suite des exos.

#### Comment on parle ?
Simple et efficace, va dans ton fichier js et ecrit :

```
console.log()
```

console.log() permet d'afficher ce qui est contenu dans les parentheses (il fonctionne d'une facon similaire à print si tu as deja fait du python)

#### Comment on ecrit ?
En javascript comme dans d'autres languages, on a plusieurs types de données :

    Nombres : let age = 25; 
    Chaînes de caractères : let nom = "Alice";
    Booléens : let estVrai = true;
    Tableaux : let fruits = ["pomme", "banane", "cerise"];
    Objets : let personne = { nom: "Alice", age: 25 };
    Null et Undefined : let valeurNulle = null; et let valeurIndefinie;

Tu demandes surement ce à quoi correspond le "let" devant, il s'agit du moyen de declarer une variable.
En effet, il en existe 3, var, let et const :

    let nom = "Alice"; // variable modifiable
    const PI = 3.14; // constante


