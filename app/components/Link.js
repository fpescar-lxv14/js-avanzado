export const Link = ({text,link}) => `<a href="${link}">${text}<a>`
export const MapLinks = (arr, data='') => {
    arr.forEach(item => data+=`<li>${Link(item)}</li>`)
    return data;
}