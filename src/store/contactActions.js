

export const addcontact=(contact)=>{
    return{
    type:"ADD_CONTACT",
    payload:contact}
    }

export const delcontact=(contact_id)=>{
    return{
        type:"DEL_CONTACT",
        payload:contact_id
    }
}