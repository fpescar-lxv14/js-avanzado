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

events.forEach(ev => document.addEventListener(ev, (e) => {
    console.log("disparaste el evento "+ev);
    console.log("el valor es "+e.target.value)
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
    let regexp = /^\w{5,100}$/
    switch (type){
        case "date": 
        case "time":
            const today = new Date()
            const userDate = new Date(value)
            if (today.getFullYear() < userDate.getFullYear() )return false
            regexp = /(\d{2}[/\-:]{1}){2}\d{2,4}/
            /* 
            31/12/1991
            01/02/80
            07:50:0000
            */
        break;
        case "day":
            regexp = /(?=0[1-9])(?=[1-2][0-9])(?=3[0-1])/
        break;
        case "email":
            regexp = /^\w+@\w+(\.\w{2,}){1,4}$/
            /** ejemplos validos
                cristiandracedo@hotmail.com
                usuario@subdominio.com.ar
                prueba@test.net
                mail12345@nomail.com.ar
            */
        break;
        case "tel":
            regexp = /(^\(\d{2,6}\)\s*(\d{2,4}[\- ]*){1,4}\d{4}$)|^[0-9]{6,20}$/
            /* ejemplos validos
                (5411)0303-4567
                (5411)03-03-4567
                (5411)0303 4567
                (5411)03 03 4567
                (02224)030-4567
                (54)11-03-03-4567
                541103034567 
            */
        break;
        case "password":
            regexp = /(^(?=.[A-Z])+(?=.[a-z])+(?=.[0-9])+(?=.[$_\-!.:#])+$){8,}/
        break;
    }
    return regexp.test(value ?? innerText);
}
