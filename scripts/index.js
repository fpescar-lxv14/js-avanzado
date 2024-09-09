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

console.log(texto, objeto, textoCopia, objetoCopia,)

texto = "c215714n";
objeto.nombre = "c215714n";

console.log(texto, objeto, textoCopia, objetoCopia,)

/** Propagacion de Eventos
 *  fase 1 (Capturing): Javascript recorre el arbol DOM desde el objeto WINDOW hasta el elemento afectado por el evento
 *  fase 2 (Target) : Javascript encuentra el nodo afectado/disparado el evento llevado a cabo.
 *  fase 3 (Bubbling): Javascript recorre en sentido inverso el arbol DOM, desde el nodo objetivo, hasta el objeto WINDOW
 */
const toggle = (selector, className) => 
    document.querySelector(selector)
    .classList.toggle(className)

const select = (e) => console.log(e)

document.addEventListener('click', (event) => {
    event.stopPropagation();
    const {target} = event
    const { id, tagName } = target
    const get = (value) => target.getAttribute(value)
    const ds = (attr) => target.dataset[attr]
    switch(tagName){
        case "INPUT":
        case "BUTTON":
            event.preventDefault();
            if (get('data-target')){
                get('data-toggle') && toggle(ds('target'),ds('toggle'))
                get('data-select') && select(event);
            }
            return
        case "A":
            console.log("no soy un boton")
            return
    }
})