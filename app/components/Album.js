export default function Album({id,title}){
    return `
    <article id=${"album-"+id} class="card col-3 p-3 m-2 pb-5 position-relative">
        <h3 class="h5">${title}</h3>
        <button class="link position-absolute bottom-0 start-0 w-100 | btn btn-primary" data-link="photos?albumId=${id}">ver</button>
    <article>`
}