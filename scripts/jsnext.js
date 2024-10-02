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
    { rol:EXTRA, msg: "tiene un papel nuevo en el juego"
    }
]
function checkUser ({username:u, rol:r}){
    const notFound = "no posee un rol definido por la aplicacion"
    const match = roles.find(({rol}) => rol === r)
    return `El usuario ${u} ${match?.msg ?? notFound}`
}
users.forEach((user) => console.log(checkUser(user)))