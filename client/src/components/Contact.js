import React ,{useEffect, useState} from "react";
import "./Contact.css"
const initialState = {
  
}
export default function Contact() {

  const [userData, setUserData] = useState({name:"", email:"", message:""})// seting user data as per DB
  
  const userContact = async()=>{
    try {
      const res = await fetch('/auth/getdata' , {
        method:"GET",
        headers:{"Content-Type":"application/json" }
      })

      const data = await res.json();
      console.log('this is data',data)
      setUserData({...userData, name:data.name, email:data.email})// setting that userData from DB to our state

        if(!res.status === 200){
          const error = new Error(res.error)
          throw error
        }

    } catch (err){
      console.log(err)
    }

  }
  useEffect(() => {
    // ? We can't use async functions inside useEffect, can use promises
    userContact();
  }, [])// [] means page fakt 1 time reload hoil 

  //! We are storing data in states
  const handleChange = (e)=>{
    const {name, value} = e.target

    setUserData({
      ...userData, 
      [name] : value
    })
    console.log(userData)
  }

  // ! Send the data to backend i.e. contact page vrcha message
  const contactForm = async (e)=>{
    // userData made sagla data ahe 
    const {name , email, message} = userData
    const res = await fetch('/auth/contact', {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      // server la data json format mdhla nhi kalat
      body: JSON.stringify({
        name, email, message
      })
    })
    const data = await res.json()

    if(!data){
      console.log('msg not send')
    }else{
      alert('message send')
      setUserData({...userData, message:""})
    }
  }

  return (
    <>
      <div className="container">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Address</div>
              <div className="text-one">Surkhet, NP12</div>
              <div className="text-two">Birendranagar 06</div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Phone</div>
              <div className="text-one">+0098 9893 5647</div>
              <div className="text-two">+0096 3434 5678</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">codinglab@gmail.com</div>
              <div className="text-two">info.codinglab@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>
              If you have any work from me or any types of quries related to my
              tutorial, you can send me message from here. It's my pleasure to
              help you.
            </p>
            <form method="POST">
              <div className="input-box">
                <input type="text" placeholder="Enter your name" value={userData.name} 
                name="name" onChange={handleChange} />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your email" value={userData.email}  
                name="email" onChange={handleChange}/>
              </div>
              <div className="input-box message-box">
                <textarea type="textarea" placeholder="Your message"
                rows="4" cols="50"
                name="message" 
                value={userData.message} 
                onChange={handleChange}>
                </textarea>
              </div>
              <div className="button">
                <input type="button" value="Send Now" onClick={contactForm} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
