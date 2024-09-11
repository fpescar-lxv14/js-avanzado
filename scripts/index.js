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
    const { target } = event
    const { tagName } = target
    const get = (value) => target.getAttribute(value)
    const ds = (attr) => target.dataset[attr]
    switch(tagName){
        case "INPUT":
        case "BUTTON":
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
const events = ['click', 'input','keydown','keypress', 'keyup', 'submit','focus','blur','bubbles']

events.forEach(ev => document.addEventListener(ev, () => {
    console.log("disparaste el evento "+ev);
}))

document.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData()
    const controls = e.target.querySelectorAll('input, textarea, select')
    controls.forEach(ctl => {
        validate(ctl) && formData.append(ctl.name, ctl.value)
    })
})
document.addEventListener('input', ({target}) => {
    console.log(target, target.value, target.checkValidity())
})

const carrito = new EventTarget()
function addToChart (data) {   
    const agregar = new Event('agregar');
    carrito.addEventListener(agregar, () => {
        carrito.push(data)
    })
    carrito.dispatchEvent('agregar');
    carrito.removeEventListener(agregar);   
}

/* Expresiones Regulares

    Clases
    \w caracteres  | \W todo excepto caracteres    
    \d digitos     | \D todo excepto digitos
    \s espacios    | \S todo excepto espacios
    [abc] cualquiera de los caracteres
    (abc) grupo de caracteres
    a|b opcional

    Cuantificadores
    . un caracter
    + uno o mas repeticiones
    * una, ninguna o varias repeticiones
    {n} cantidad fija de repeticiones
    {n,} por lo menos n repeticiones
    {n,m} entre n y m repeticiones

    Posicion
    ^ empieza con
    $ termina con
    \b al principio o al final de una cadena

    correo = /\S+@\S{2,}\.\w{2,}/
*/
function validate(object){
    const { type, value, innerText } = object
    let regexp = /\w{5,100}/
    
    return regexp.test(value ?? innerText);
}
