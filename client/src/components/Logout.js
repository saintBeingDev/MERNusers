import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
    const navigate = useNavigate();
    // promises
    useEffect(() => {
        fetch('/auth/logout',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type" : "application/json",
              },
            credentials: "include"
        }).then((res)=>{
            navigate('/login', {replace: true})
            if(res.status != 200){
                throw new Error(res.error)
            }
        }).catch(error=>console.log(error))

    }, [])

    return (
        <>
            <h1>log out ka page</h1>
        </>
    )
}
