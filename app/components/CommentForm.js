import { Button } from "./Button.js";

export default function commentForm(){

    return(
    `<form class="d-grid | bg-light p-2 | sticky-bottom">
        <label for="title">titulo</label>
        <input class="form-control" id="title" name="title"/>
        <label for="description">descripcion</label>
        <textarea class="form-control" id="description" name="description"></textarea>
        ${Button({className: 'btn btn-success', text:'comentar'})}
    </form>`
)}