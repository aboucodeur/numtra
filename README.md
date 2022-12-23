# numtra

## Description
- numtra : est une librairie javascript qui vous permet de traduire les chiffres en lettres pour le moment la librairie prend en charge la langue française peut aller jusqu'a 999.999.999.999 (bilions) de chiffres  
Open source et accessible a tous j'ai le probleme lors du developpement de mon projet d'application de gestion de stock qui devait avoir la traduction du montant de la facture en tout lettres

## Installation
`npm install @abouta/numtra`

## Utilisation 
- COMMONJS like node js
```js
    const { formatWord } = require("@abouta/numtra")
    const translate = formatWord(123)
    console.log(translate) // output : Cents vingt trois
```
- ES6 like Browser

```js
    import { formatWord } from "@abouta/numtra"
    const translate = formatWord(123)
    console.log(translate) // output : Cents vingt trois
```