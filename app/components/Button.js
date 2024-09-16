export const Button = ({className='', text='', action='', ...props}) => `
<button class="${className}"
    onclick="${action}"
    ${mapAttributes(props)}>
    ${text}
</button>`

export const mapAttributes = (props, data='') =>{
    const keys = Object.keys(props)
    keys.forEach(k => data+=`${k}="${props[k]}" `)
    return data
}