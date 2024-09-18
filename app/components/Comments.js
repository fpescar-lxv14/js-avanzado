export default function Comments(arr, data=''){
    arr.forEach(({name, body, email}) => data+=`
    <li class="list-group-item">
        <a href="mailto:${email}">${email}</a>
        <p><strong>${name}: </strong><br>${body}</p>
    </li>`)
    return data
}