
/**
 * utilisez les nouveau guillets ` (alt gr + 7) pour concaténer le nom et le prénom passé en paramètre
 * Renvoi le résultat
 * 
 * exemple: "John", "Doe" => "John Doe"
 * 
 * contrainte:
 *  - ne pas utiliser l'opérateur +
 *  - ne pas utiliser la fonction concat de String
 */

const concat = (firstName, lastName) =>  `${firstName} ${lastName}`;

module.exports = {concat};





/*${firstName} ${lastName} cette syntaxe c'est pou inserer la valeur de firstname et last name dans une chaine de caractere et les separant ainsi par un espace " " */