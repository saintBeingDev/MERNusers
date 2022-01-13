import React from "react";
import me from "../images/subject_me.jpeg";

export default function About() {
  return (
    <>
      <div className="container emp-profile">
        <form method="">
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

                <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                    >
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
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
                      <label> College</label>
                    </div>
                    <div className="col-md-6">
                      <p>Government Polytechnic Nashik</p>
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
