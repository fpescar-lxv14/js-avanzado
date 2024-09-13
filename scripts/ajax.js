function ajax(url, callback){
    // 0: solicitud sin cargar
    const xhr = new XMLHttpRequest()
    // 1: carga de solicitud
    xhr.open("GET", url)
    // 3-4: procesamiento y finalizacion
    xhr.addEventListener('progress', (e) => {
        if (e.lengthComputable){
            return (`${e.loaded}/${e.total}`)
        }
    })
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4){
            if (xhr.status < 400) 
            callback(xhr.responseText)
        } 
    } )
    // 2: envio de solicitud
    xhr.send()
}
const main = document.querySelector('main');
const linkButtons = document.querySelectorAll('[data-link]')

linkButtons.forEach(btn => {
    btn.onclick = (e) => {
        const link = e.target.getAttribute('data-link');
        const url = `/assets/${link}.txt`
        const response = (data) => main.innerHTML=data
        ajax(url,response)
    }
})