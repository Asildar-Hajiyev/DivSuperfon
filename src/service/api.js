import axios from "axios"

async function getData(){
    const res = await axios.get('http://localhost:3000/api/alldata')
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
async function getData2(){
    const res = await axios.get('http://localhost:3000/api/alldata2')
    return res.data
}



export {getData,getData2,getNavLinks,getMenuItems,getStoreData}