/** Tipos de Datos
 *  PRIMITIVOS
 *  string
 *  number
 *  boolean
 *  undefined
 *  null
 *  NaN
 * 
 *  COMPLEJOS
 *  array
 *  object
 *  function
 */

// Primitivos
let texto="cristian", numero=33,bool=true,nulo=null
// Complejos
const 
    array = ["rojo", "verde", "azul"],
    objeto = { nombre: "cristian", edad: 33},
    funcion = function (data){ console.log(data) }

let textoCopia = texto, objetoCopia = objeto;

console.log(texto, textoCopia, objeto, objetoCopia,)

texto = "c215714n";
objeto.nombre = "c215714n";

console.log(texto, textoCopia, objeto, objetoCopia,)

/** Propagacion de Eventos
 *  fase 1 (Capturing): Javascript recorre el arbol DOM desde el objeto WINDOW hasta el elemento afectado por el evento
 *  fase 2 (Target) : Javascript encuentra el nodo afectado/disparado el evento llevado a cabo.
 *  fase 3 (Bubbling): Javascript recorre en sentido inverso el arbol DOM, desde el nodo objetivo, hasta el objeto WINDOW
 */
document.addEventListener('click', (event) => {
    console.log(event.target)
})