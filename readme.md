# Javascript Avanzado

Bienvenidos a la capacitacion de __js avanzado__ que se dicta los dias _lunes, miercoles y viernes de 14hs a 17hs_, donde veremos los diferentes temas y tendran acceso a practicas; asi como tambien, la posibilidad de agregar cambios a este repositorio (siempre y cuando soliciten acceso).

## Tipos de datos

Hacen referencia a la minima porcion de información que se trabaja, también se puede considerar como el rango de valores que puede tomar una variable durante la ejecución del programa. 

Si bien javascript utiliza tipado dinamico, es decir que se puede modificar la clase o atributo de los datos ingresados, en el estandar de ECMAScript se definen los siguientes grupos de datos:

### Primitivos

* __Number__: Entero o decimal, numero que ocupa 64 bits de espacio en memoria
* __String__: Secuencia de caracteres utilizada para representar texto
* __Boolean__: Dato lógico que solo puede tener los valores true o false.
* __Symbol__: Utilizado para añadir claves de propiedades únicas a un objeto.
* __Undefined__: Valor asignado a los argumentos formales sin argumentos reales.
* __Null__: Referencia que apunta a un objeto o dirección inexistente o inválido.

### Objetos

* __Array__: Objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación.
* __Object__: Estructura que contiene datos e instrucciones para trabajar, es usado para guardar una colección de datos definidos y entidades más complejas.
* __Function__: fragmento de código que puede ser llamado por otro código o por sí mismo, o por una variable que haga referencia a la función

## Constructores

Una variable es un contenedor para un valor, como un número que va a ser utilizado en una suma, o una cadena de texto como parte de una oración. Pero los valores que estas contienen pueden cambiar.

Podemos declarar variables utilizando cualquiera de las _instrucciones var, let y const_. Cada una posee su propias caracteristicas, como se muestran en la tabla que aparece a continuacion:

| __inicializador__ | var 	| let 	| const |
|-------------------|-------|-------|-------|
| __Alcance__ 	    | global| local | local |
| __Redeclarable__	| si 	| no	| no 	|
| __Redefinible__ 	| si 	| si 	| no 	|

## Modelos de Objetos

### BOM (Browser Object Model)

El objeto __window__ es compatible con todos los navegadores y representa la ventana del Navegador. 

No existen estándares oficiales para el modelo de objetos de navegador debido a que los navegadores modernos han implementado los casi los mismos métodos y propiedades para la interactividad de JavaScript.

|Propiedad|Descripcion|
|-|-|
|innerHeight| Devuelve el alto interno de la ventana |
|innerWidth| Devuelve el ancho interno de la ventana |
|outterHeight| Devuelve el alto total de la ventana |
|outterWidth| Devuelve el ancho total de la ventana |
|screenX| Posición horizontal de la ventana respecto al monitor |
|screenY| Posición vertical de la ventana respecto al monitor |
|scrollX| Posición horizontal de desplazamiento actual en la ventana |
|scrollY| Posición vertical de desplazamiento actual en la ventana |
|location| Devuelve el objeto Ubicacion |
|history| Devuelve el objeto Historial |
|navigator| Devuelve el objeto Navegador |

Todos los objetos, funciones y variables globales se convierten automáticamente en miembros del objeto de window. Las variables globales son propiedades del objeto window y las funciones globales son métodos.

|Metodo|Descripcion|
|-|-|
|alert(`message`)| Muestra un mensaje en pantalla |
|prompt(`message`)| Cuadro de dialogo para el ingreso datos |
|confirm(`message`)| Cuadro de dialogo de confirmacion |
|open(`URL`,`name`,`specs`)| Abre una nueva ventana de navegador |
|resizeTo(`width`,`height`)| Establece las dimensiones de la ventana |
|resizeBy(`width`,`height`)| Aumenta el tamaño de la ventana |
|scrollTo(`x`,`y`)|	Desplaza la ventana a las coordenadas especificadas |
|scrollBy(`x`,`y`)|	Desplaza la ventana de manera relativa a su posicion actual |
|close()| Cierra la ventana actual si fue abierta por script |

### DOM (Document Object Model)

Cuando se carga una página web, el navegador crea un modelo de objeto de documento de la página. El modelo HTML DOM se construye como un árbol de objetos

El HTML DOM es un modelo de objeto estándar y una interfaz de programación para HTML. Se define:

* Los elementos HTML como objetos
* Las propiedades de todos los elementos HTML
* Los métodos para acceder a todos los elementos HTML
* Los eventos para todos los elementos HTML

|Propiedad|Descripcion|
|-|-|
|title| Devuelve el titulo de la pestaña|
|URL| Devuelve la direccion URL de la pagina|
|characterSet| Devuelve la codificacion de caracteres utilizada|
|head| Devuelve el objeto __HEAD__ del documento|
|body| Devuelve el objeto __BODY__ del documento|
|links| Devuleve un array de objetos __&lt;A>__ |
|images| Devuelve un array de objetos __&lt;IMG>__ |
|activeElement| Devuelve el elemento que posee el foco|

En otras palabras: el HTML DOM es un estándar sobre cómo obtener, cambiar, agregar o eliminar elementos HTML.

|Metodo|Descripcion|
|-|-|
|createElement(`tag`)| Crea un Elemento HTML|
|getElementById(`id`)| Devuelve el objeto con el id especificado
|getElementsByClassName(`className`)| Devuelve un array de objetos por su nombre de clase
|getElementsByName(`name`)| Devuelve un array de objetos con el atributo name
|getElementsByTagName(`tagname`)| Devuelve un array de objetos por su tipo de etiqueta
|querySelector(`selector`)| Devuelve el primer elemento que coincide con un selector CSS
|querySelectorAll(`selector`)| Devuelve una lista de nodos que coinciden con un selector CSS
|addEventListener(`event`,`function`)| Adjunta un controlador de eventos al documento|

## API de Eventos

Los eventos pueden representar cualquier cosa, como por ejemplo, interacciones básicas del usuario para notificar sobre lo que sucede en el modelo de representación.

Correponden a objetos que se envían para notificar al código los cambios que hayan ocurrido. Cada evento  se basa en la __interfaz Event__, y puede tener _campos y/o funciones personalizadas_ adicionales para obtener más información. 

|Evento|Descripcion|
|-|-|
|_DOMContentLoaded_|El documento termino de cargar todo su contenido|
|_load_| Se ha cargado correctament el contenido de un elemento HTML|
|_progress_| Se esta descargando contenido Multimedia|
|_mouseover_| Se ha posicionado el cursor sobre un elemento HTML|
|_mouseout_| Se ha alejado el cursor de un elemento HTML|
|_click_| Un elemento ha sido pulsado con el dispositivo señalador|
|_contextmenu_| Se hizo click con el boton secundario del dispositivo señalador|
|_scroll_| Se esta utilizando la Barra de desplazamiento de un elemento |
|_focus_| Se ha enfocado un elemento HTML|
|_blur_| Se ha perdido el foco de un elemento HTML|
|_input_| El valor de un campo de formulario ha cambiado|
|_keydown_| Se ha pulsado una tecla|
|_keypress_| Se esta presionando una tecla|
|_keyup_| Se ha soltado la tecla presionada|
|_submit_| Se ha realizado el envio de un formulario HTML|

### Propagacion de Eventos

Una de las intenciones de JavaScript con la creación del patrón de propagación de eventos era facilitar la captura de eventos de una fuente, el elemento padre, en lugar de configurar un controlador de eventos en cada elemento secundario interno. Hay tres fases por las que pasa la propagación de eventos

![event Propagation](https://frontend.turing.edu/lessons/module-1/assets/images/propagation-diagram.png)

1. __capture phase:__ El evento empieza con la propagacion del evento padre, el objeto de window y luego baja por los demás elementos internos.
1. __target phase:__ La segunda fase corresponde cuando se llega al elemento sobre el que se realizo la accion, identificado como _event.target_
1. __bubbling phase:__ El evento se propaga hasta llegar nuevamente al elemento padre superior, aunque el evento no se vuelve a ser llamado.

## Expresiones Regulares

Son patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadenas. En JavaScript, las expresiones regulares también son objetos. Los patrones simples se construyen con caracteres para los que deseas encontrar una coincidencia directa, estos pueden pertenecer a los siguientes tipos:

### Caracteres

Son valores reservados que se utilizan para distinguir entre diferentes tipos de caracteres o su opuesto en caso que se escriba en mayusculas o se incorpore el signo de potencia dentro del selector.

| clase | coincidencia | opuesto |
|-|-|-|
| __\w__    | palabras | __\W__
| __\d__    | digitios | __\D__
| __\s__    | espacios | __\S__
| __[ABC]__ | conjunto | __[^ABC]__

### Cuantificadores

Correponde a signos que indican grupos y rangos de caracteres de la expresion, se utilizan inmediatamente despues de la referencia. Tambien indican la cantidad de repeticiones que deben coincidir.

| cuantificador | coincidencia|
|-|-|
| __?__     | cero o una repeticion
| __+__     | una o mas repeticiones
| __*__     | cero o mas repeticiones
| __\|__    | alternacion de caracteres
| __{n,m}__ | min. y max. de repeticiones

### Ascerciones

Establecen los límites que indican el comienzo y el final de líneas y palabras de la expresion. Asi como otros patrones que indican de alguna manera que el reconocimiento es posible.

| posicion  | coincidencia |
|-|-|
| __^__     | principio de una linea
| __$__     | final de una linea
| __\b__    | perimetro de una cadena
| __\B__    | no esta en el perimetro

## Programacion Asincrona

El término asíncrono se refiere al concepto de que más de una cosa ocurre al mismo tiempo, o múltiples cosas relacionadas ocurren sin esperar a que la previa se haya completado

### callback

Es una función que se pasa a otra función como un argumento y que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción. Los callbacks aseguran que una función se ejecute despues de que se resuelva una tarea, para ello es necesario pasarla como parámetro y luego llamarla de vuelta después de que haya ocurrido algo o se haya completado alguna tarea. 

* __cbFn:__ funcion invocada (callBack)
* __args:__ argumentos de la funcion (callback)
* __el:__   elemento del array (iteracion)
* __i:__    indice del array (iteracion)
* __Arr:__  array de referencia (iteracion)
* __acc:__  variable acumuladora (iteracion)
* __dy:__   retraso en milisegundos (tiempo)

| funcion | parametros | descripcion
|-|-|-|
| __forEach__(`cbFn`)     | `el`, `i`, `Arr`  | ejecuta una funcion callback por cada elemento dentro de un array
| __filter__(`cbFn`)      | `el`, `i`, `Arr`  | ejecuta una funcion que devuelve cada elemento que coincida
| __find__(`cbFn`)        | `el`, `i`, `Arr`  | encuentra el primer elemento que devuelva la funcion callback
| __map__(`cbFn`)         | `el`, `i`, `Arr`  | genera un array nuevo a partir del resultado de la funcion
| __findIndex__(`cbFn`)   | `el`, `i`, `Arr`  | devuelve el indice del primer elemento que corresponda
| __reduce__(`cbFn`)      | `acc`, `el`       | sumariza todos los valores de un array en una valor acumulado
| __setInterval__(`cbFn`, `dy`) | `args` | ejecuta una funcion callback cada cierto periodo de tiempo
| __setTimeout__(`cbFn`, `dy`)  | `args` | ejecuta una funcion despues de transcurrido cierto lapso de tiempo

#### XMLHttpRequest
```js
function getData(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () =>
        xhr.status === 200 ? 
        callback(null, JSON.parse(xhr.responseText)) : 
        callback("se produjo un error", null)
    )
    xhr.open('GET',url);
    xhr.send();
}
```

A pesar de ser una forma flexible y potente de controlar la asincronía, que permite realizar múltiples posibilidades, las funciones callbacks tienen ciertas desventajas evidentes. En primer lugar, el código creado con las funciones es algo caótico y tener que pasar un __NULL__ como parámetro en algunas funciones es poco elegante.

### promise

Es un proxy de un valor que no se conoce necesariamente y le permite asociar controladores con el valor eventual de éxito o el motivo de falla de una acción asíncrona. Esto permite a los métodos asíncronos que en lugar de devolver inmediatamente el valor final, devuelvan la promesa que proporciona el valor, en algún momento futuro.

|estado|descripcion|
|-|-|
| __pending__ | la operacion esta pendiente, estado inicial|
| __fulfilled__ | la operación se completó con éxito|
| __rejected__ | la operación falló por algun motivo|

Una _promesa pendiente puede cumplirse_ con un valor o _rechazarse con un motivo (error)_. Cuando ocurre cualquiera de estas opciones, se llama a los controladores asociados en cola por el _método then_. Si la promesa ya se ha cumplido o rechazado cuando se adjunta un manejador correspondiente, se llamará al manejador, por lo que no existe una condición de carrera entre la finalización de una operación asíncrona y la conexión de sus manejadores.

|metodo|descripcion|
|-|-|
|__then__(`resolve`,`reject`)| Permite adjuntar funciones para manejar el éxito o el rechazo de la promesa |
|__catch__(`reject`)| Permite manejar explicitamente los errores de rechazo de la promesa |
|__finally__(`callback`) | Permite ejecutar una función independientemente del resultado, útil para limpiar recursos |

#### API fetch
```js
function getData(url) {
    return new Promise((resolve, reject) => {
    fetch(url)
    .then((res) => { 
        if(!res.ok) throw new Error("error: "+res.status);
        return res.json();
    })
    .then((data) => resolve(data))
    .catch((error) => reject(error))
})}
```

Las promesas son una mejora significativa sobre los callbacks para manejar la asincronía en JavaScript, ofreciendo un _código más legible y mantenible_, además de _facilitar la gestión de errores_ y el _flujo de control_ en operaciones asíncronas.

### async/await

Característica que proporciona una forma más concisa y fácil de trabajar con funciones asíncronas y promesas. async se utiliza para declarar que una función devuelve una promesa y permite usar await dentro de esa función para esperar a que una promesa se resuelva o se rechace antes de continuar con la ejecución del código. 

| concepto | descripción |
|-|-|
| __async function__ |	Declaración de una función como asíncrona, que _retorna Promise_ |
| __await__ |	Utilizado para esperar de manera síncrona la _resolución de la promesa_ |
| __try/catch__ | _Manejo de errores_ que capturan excepciones de operaciones asincrónicas |
| __Paralelismo__ |	Se puede lograr esperando múltiples promesas con _Promise.all() y await_ |
| __Compatibilidad__ |	Se puede utilizar en _navegadores modernos y entornos Node.js_ |

#### Try... Catch
```js
async function getData({url, ...req}) {
    try {
        const res = await fetch(url,req);
        if (!res.ok) throw new Error("error: "+ res.status)
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}
```

__async/await__ es una herramienta poderosa que simplifica la escritura y el manejo de código asíncrono en JavaScript, mejorando la legibilidad y mantenibilidad del código en comparación con el uso tradicional de callbacks y encadenamiento de promesas.
