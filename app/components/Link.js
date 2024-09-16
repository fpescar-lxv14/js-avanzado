export const Link = ({text,link}) => `<a class="nav-link" href="${link}">${text}<a>`
export const MapLinks = (arr, data='') => {
    arr.forEach(item => data+=`<li>${Link(item)}</li>`)
    return data;
}