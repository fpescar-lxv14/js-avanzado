/** Symbol: 
 *  Dato de Tipo Primitivo 
 *  Garantiza un elemento unico
 *  Solamente coincide con si mismo
 *  Permite mejorar la seguridad
 *  Preve la manipulacion de datos
*/
const ADMIN = Symbol('admin')
const USER = Symbol('user')
const INVITED = Symbol('invited')

const users = [
    { username: 'WayneBruce', rol: ADMIN },
    { username: 'Patch', rol: Symbol('user') },
    { username: 'Prince.Diana', rol: USER },
    { username: 'MJ-watson', rol: ADMIN },
    { username: 'Stacey.G', rol: Symbol('user') },
    { username: 'Parker.Peter', rol: USER },
    { username: 'Kent.Clark', rol: ADMIN },
    { username: 'Wolverine', rol: USER },
    { username: 'D-Pooly', rol: INVITED },
    { username: 'Simmons_Al', rol: INVITED },
    { username: 'Malevolgia', rol: Symbol('admin') },
]
const roles = [
    {  rol: ADMIN, msg:"tiene control total, creacion y eliminacion de usuario" 
    },
    {  rol:USER, msg: "tiene control de perfil y visualizacion de otros usuarios" 
    },
    {  rol:INVITED, msg: "tiene acceso limitado a visualizacion"
    },
]
function checkUser ({username:u, rol:r}){
    const notFound = "no posee un rol definido por la aplicacion"
    const match = roles.find(({rol}) => rol === r)
    return `El usuario ${u} ${match?.msg ?? notFound}`
}
users.forEach((user) => console.log(checkUser(user)))

/**
 * Proxy:
 * Objeto interceptor
 * Crea una copia de otro objeto
 * Aplica logica a los getters y setters
 * Ideal para definir logica en objetos
 */
const target = {
    username: "cristian Racedo",
    email: "cristian@hotmail.com",
    password: "1234"
}
const validity = {
    text: /\w*/,
    username: /^\w{4,20}$/,
    email: /^(?=^@)\w+@\w+(\.\w+)+$/,
    phone: /^(\d{6,25}|\(\d{2,6}\)(\s*\-*\d{2,4}){2,4})$/,
    password: /^((?=.[A-Z]+)(?=.[a-z]+)(?=.\d+)(?=.[@#!$+-_]+)).{8,}$/,
    website: /^http(s){0,1}:\/\/\S+(\.\S+){1,}$/,
    credit: /^((?=^\-)(\d{4})){4}/
}
const handler = {
    get: (obj,k) => {
        if (k in obj){
            if(!/admin|role|status/.test(k)) return obj[k]
            else return `no tiene permisos para acceder a este valor`
        }
        else return `la propiedad ${k} no existe`
    },
    set: (obj,k,v) => {
        if(k in obj){
            if(validity[k].test(v)) obj[k] = v
        }
        else return "no se puede definir la propiedad " + k 
    }
}
const userProxy = (target) => new Proxy(target, handler)