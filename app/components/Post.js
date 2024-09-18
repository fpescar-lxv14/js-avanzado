import Request from "../controllers/request.js"
import commentForm from "./CommentForm.js"
import Comments from "./Comments.js"

export default async function Post({ id, userId, title, body }){
    const { username } = await Request(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const commentsData = await Request(`https://jsonplaceholder.typicode.com/comments?postId=${id}`) ?? []
    const comments = Comments(commentsData)
return(
`<article class="card">
    <header class="card-header">
        <h2 class="h5">${title}</h2>
        <p class="fw-bold">Publicado por ${ username }</p>
    </header>
    <p class="card-body">${body}</p>
    <footer class="card-footer">
        <h3 class="h6">Comentarios</h3>
        <ul class="list-group">${comments}</ul>
        ${commentForm()}
    </footer>
</article>`
)}