import axios from "axios"
const baseUrl = "http://localhost:3002/persons"

const getAll = ()=>{
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newObject)=>{
    const request = axios.post(baseUrl,newObject)
    return request.then(response => response.data)
}

const remove = (id) => axios.delete(`${baseUrl}/${id}`)

const update = (id, updatedObject) => {
    const request = axios.put(`${baseUrl}/${id}`, updatedObject)
    return request.then(response => response.data.number)
}

export default {getAll, create, remove, update}