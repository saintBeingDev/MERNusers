import React,{useEffect, useState} from 'react'

export default function Home() {
    const [userData, setUserData] = useState({})
    const [show, setShow] = useState(false)
    const homePage = async ()=>{
        try {
            const res = await fetch('/auth/getdata',{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                  },
            })
            const data = await res.json()
            setUserData(data)
            setShow(true)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        homePage();
    },[])

    return (
        <>
            <div className="home-page">
                <div className="home-div">
                    <p>WELCOME</p>
                    <h1>{userData.name}</h1>
                    <h2>{show?"Happy to see you back!! ":"We are the Programmer"}</h2>
                </div>
            </div>
        </>
    )
}
