import axios from "axios"

async function getData(){
    const res = await axios.get('http://localhost:3000/api/mehsullar')
    return res.data
}
async function getNavLinks(){
    const res = await axios.get('http://localhost:3000/api/navlinks')
    return res.data
}
async function getMenuItems(){
    const res = await axios.get('http://localhost:3000/api/menuitems')
    return res.data
}

export {getData,getNavLinks,getMenuItems}