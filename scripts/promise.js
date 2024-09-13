export const ajaxPromise = ({url, method = "GET"}) => {
    return new Promise ((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method,url)
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4) {
            if (xhr.status === 200){
                resolve(xhr.response)
            }
            else reject([{
                error: 404,
                message: "no se ha encontrado la pagina"
            }])
        }
    })
    xhr.send()
})}

ajax({url: `${server}/posts`})
.then(response => JSON.parse(response))
.then(data => data.map(d => ajax(`${server}/comments?postId=${d.id}`)))
.then(comments => comments.map(comment => console.log(comment)))
.catch(error => console.error(error.message))