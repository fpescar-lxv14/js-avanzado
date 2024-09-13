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