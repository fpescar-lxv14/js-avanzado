const ajax = ({url, method = "GET", callback}) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method,url)
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4) {
            if (xhr.status === 200){
                const data = JSON.parse(xhr.response)
                callback(data)
            }
            else callback([{
                error: 404,
                message: "no se ha encontrado la pagina"
            }])
        }
    })
    xhr.send()
}
// callback Hell | Pyramid of Doom
ajax({
    url: `${server}/${posts}`,
    callback: (posts) => {
        if (posts.length){ 
            posts.map(post => {
                ajax({
                    url: `${server}/comments?postId=${post.id}`,
                    callback: (comments) => {
                        if (comments.length){
                            comments.map(comment => {
                                console.log(comment)
                            })
                        }
                        else {
                            console.log("no se encontraron comentarios")
                        }
                    }
                })
            })
        }
        else {
            console.log("no se encontraron publicaciones")
        }
    }
})