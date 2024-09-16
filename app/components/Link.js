export function Link({text, link}){
    return `<a href="${link}">${text}<a>`
}
export function MapLinks (arr, data=''){
    arr.map((item) => data+=`
        <li>${Link(item)}</li>
    `)
    return data;
}