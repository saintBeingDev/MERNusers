import React, {useEffect} from "react";
import me from "../images/subject_me.jpeg";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function About() {

  const navigate = useNavigate()
  
  const callAboutPage = async()=>{
    // e.preventDefault() 
    try {
      console.log('Before fetch of callAboutPage')
      let res = await fetch('/auth/about',{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type" : "application/json"
        },
        credentials: "include" // these should be written for us to get data from cookies and tokens 
      })
      console.log('after fetch of callAboutPage')

      const data = await res.json();
      
      console.log(data)

      if(!res.status === 200){
        const error = new Error(res.error)
        throw error
      }

    } catch (error){
      console.log(error)
      navigate('/login')
    }


    // try {
    //   const res = await axios.get('/auth/about')
    //   const data = await res.json()
    //   console.log(data);
    // } catch (error) {
    //   console.log('Inside callAboutPage func '+error)
    //   navigate('/login')
    // } 
  }


  // when we are showing about page we have to make sure that user is authenticated 
  // so to do that we are using useEffect() method to automatically call the authenticate method
  useEffect(() => {
    // ? We can't use async functions inside useEffect, can use promises
    callAboutPage();
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])// [] means page fakt 1 time reload hoil 


  return (
    <>
      <div className="container emp-profile">
        <form method="GET">
          <div className="col-md-4">
            <div className="profile-img">
              <img src={me} alt="my photo" width="30%" />
            </div>
          </div>

          <div className="col-md-4">
            <div className="col-md-6">
              <div className="profile-head">
                <h5>Om Nikam</h5>
                <h6>Web Developer</h6>
                <p className="profile-rating mt-3 mb-5">
                  RANKING: <span>1/10</span>
                </p>

                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <input
                type="submit"
                className="btn btn-secondary profile-edit-btn"
                name="btn"
                value="Edit"
              />
            </div>
          </div>

          <div className="row">
            {/* left side url */}
            <div className="col-md-4">
              <div className="profile-work">
                <p>Work Link</p>
                <a href="https://www.youtube.com/" target="_blank">
                  Youtube
                </a>
                <br />
                <a href="https://www.facebook.com/" target="_blank">
                  Facebook
                </a>
                <br />
                <a href="https://www.instagram.com/" target="_blank">
                  Instagram
                </a>
                <br />
                <a href="https://www.twitter.com/" target="_blank">
                  Twitter
                </a>
                <br />
                <a href="https://www.reddit.com/" target="_blank">
                  Reddit
                </a>
                <br />
              </div>
            </div>

            {/* Right side data toggle */}
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label> User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>6987621348</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label> Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Om Nikam</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label> Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>om@gmail.com</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label> Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>978651387</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label> Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>Computer Engineer</p>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade "
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label> Experience</label>
                    </div>
                    <div className="col-md-6">
                      <p>Mythical</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label> Hourly Rate</label>
                    </div>
                    <div className="col-md-6">
                      <p>9000$/hr</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label> Total Projects</label>
                    </div>
                    <div className="col-md-6">
                      <p>More than you can think of !!!</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label> Course</label>
                    </div>
                    <div className="col-md-6">
                      <p>Computer Technology</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label> Roll No</label>
                    </div>
                    <div className="col-md-6">
                      <p>196139</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
