import { Button } from "./Button.js";
const Friend = ({id, name, username, email, address}) => 
`<article class="card my-1 p-0">
    <header class="card-header">
        <h3>${name} (${username})</h3>
        <address>
            <a href="mailto:${email}">${email}</a>
            <br>
            ${address.street} (${address.city})
        </address>
        ${Button({className: 'w-100 | btn btn-primary link', text: 'ver perfil', "data-link":`users/${id}`})}
    </header>
</article>`
export default Friend;