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
function checkUser (user){
    if (user.rol === ADMIN){
        console.log(`El usuario ${user.username} tiene control total, creacion y eliminacion de usuario`)
    }
    else if (user.rol === USER){
        console.log(`El usuario ${user.username} tiene control de perfil y visualizacion de otros usuarios`)
    }
    else if (user.rol === INVITED){
        console.log(`El usuario ${user.username} tiene acceso limitado a visualizacion`)
    }
    else {
        console.log(`El usuario ${user.username} no posee un rol definido por la aplicacion`)
    }
}
