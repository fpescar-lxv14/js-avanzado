export default function Photo ({thumbnailUrl, title}){
    return `
    <figure class="col-md-5 col-xl-3">
        <img src=${thumbnailUrl}>
        <figcaption>${title}</figcaption>
    </figure>
    `
}