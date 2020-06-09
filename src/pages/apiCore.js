import {API} from '../config'
import {isAuth} from '../components/helpers'
///// create order //// 


export const createCategory = (date) => {

    return fetch(`${API}/date/create`,
    {
        method:"POST",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json",
           // Authorization:`Bearer ${token}`
        },
        body:JSON.stringify(date)
    })

    .then(response => {
        return response.json(); 
    })
    .catch( err => { 
        console.log(err)
    })

}

export const getDates = (token) => {
    return fetch(`${API}/date/list`, 
    {
        method: "GET",
        headers: {
            Accept:"application/json",
            Authorization:`Bearer ${token}`
        }

    })
    .then( response => {
        return response.json()
    })
    .catch(err => console.log(err))
}


export const deleteDates = (dateId,userId, token) => {
    return fetch(`${API}/date/${dateId}`, {
        method: "DELETE",
        headers: {
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
        },
    })
    .then( response => {
        return response.json()
    })
    .catch(err => console.log(err))
}
