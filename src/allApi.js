import axios from "axios";

const base_url="https://contactapplication-xbnf.onrender.com"

export const addContactapi=async(data)=>{
    return await axios.post(`${base_url}/contacts`,data)
}
export const getContactapi=async()=>{
    return await axios.get(`${base_url}/contacts`)
}
export const deleteContact=async(id)=>{
    return await axios.delete(`${base_url}/contacts/${id}`)

}
export const updateContactApi = (id,data) => {
    return axios.put( `${base_url}/contacts/${id}`,data);
  };


  
