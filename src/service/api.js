import axios from "axios"

async function getData(){
    const res = await axios.get('http://localhost:3000/api/data')
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
async function getStoreData(){
    const res = await axios.get('http://localhost:3000/api/storelocation')
    return res.data
}

async function getData3(){
    const res = await axios.get('http://localhost:3000/api/alldata3')
    return res.data
}



export {getData,getData3,getNavLinks,getMenuItems,getStoreData }