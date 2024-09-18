import { root, main } from "../models/index.js";
import Album from "./Album.js"
import Friend from "./Friend.js";
import Photo from "./Photo.js";
import Post from "./Post.js";

const ArrayPaths = {
    posts: Post,
    users: Friend,
    albums: Album,
    photos: Photo,
}
const ObjPaths = {

}
const whatsThis = (obj, word) => {
    let thisIsIt;
    Object.keys(obj).map(k => { 
        if(word.includes(k)) thisIsIt = obj[k]
    })
    return thisIsIt;
}
export default function Render(data, link){
    main.innerHTML = ''
    let Component;
    const section = document.createElement('section')
    section.setAttribute('class', 'container row col-md-9 col-xl-6 mx-auto')
    if (data.length){
        Component = whatsThis(ArrayPaths, link)
        data.forEach(async item => {
            const renderData = await Component(item)
            section.innerHTML += renderData
        })
    }
    else{
        Component = whatsThis(ObjPaths, link)
        section.innerHTML = Component(data)
    }
    main.appendChild(section)
    root.appendChild(main)
}