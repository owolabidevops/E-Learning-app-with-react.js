import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Login from "./Login";
import Register from "./Register";
import Body from "./Body";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Navbar />
            <Banner />
            <div className="body-info">
              <h1>
                Comprehensive learning programs for school students aged 4-18
                years
              </h1>
              <h4>
                Become lifelong learners with Nigeria’s best teachers, engaging
                videos lessons and personalised learning journeys
              </h4>
            </div>
            <div className="home-row">
              <Body
                image="https://cdn1.byjus.com/byjusweb/img/home/image/byjus-classes.png"
                title="Personalised online tutoring program"
              />
              <Body
                image="https://cdn1.byjus.com/byjusweb/img/home/image/btla.png"
                title=" Personalised learning app to learn anytime anywhere"
              />
              <Body
                image="https://cdn1.byjus.com/byjusweb/img/home/image/dbel.png"
                title=" A specially crafted Early Learning Program for young minds"
              />
            </div>

            <div className="home-row">
              <Body
                image="https://cdn1.byjus.com/byjusweb/img/home/image/concept-clarity.png"
                title="Conceptual clarity through visualisation"
              />
              <Body
                image="https://cdn1.byjus.com/byjusweb/img/home/image/personalised-learning.png"
                title=" Personalised learning programs"
              />
              <Body
                image="https://cdn1.byjus.com/byjusweb/img/home/image/unmatched-attention.png"
                title=" Unmatched individual attention"
              />
              
            </div>
            <div className="home-row">
              <Body
              desc="Professional Exams"
                image="https://adminpanel.myafrilearn.com/exam_images/FIL5cdd8e93671ba29584920190516162347.png"
                title=" ICAN"
               
              />
            </div>
            <div className="home-row">
              <Body
              desc="Universities"
                image="https://myafrilearn.com/assets/img/avatar.jpg"
                title=" OBAFEMI AWOLOWO UNIVERSITY IFE"
               
              />
            </div>
            <div className="home-row">
              <Body
                desc="Courses"
                image="https://myafrilearn.com/assets/img/avatar.jpg"
                title=" Vocational Courses"
               
              />
            </div>
              
              

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
