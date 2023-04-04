import InteligentNavBar from "../NavBar/InteligentNavBar";
import React, { useState } from "react";
import { isLoggedIn } from "../../services/userService";
import GenericInformation from "../GenericInformation/GenericInformation";
import imagen from "../../assets/about-us-page.png";
export default function About() {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());
  return (
    <div>
      <InteligentNavBar
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      ></InteligentNavBar>
      <GenericInformation
        img={imagen}
        title="About"
        content="Welcome to the Factored profile page! This page is designed to help you manage your information and connect with your colleagues at Factored.

At Factored, we believe that our people are our greatest asset, and we are committed to creating a supportive and inclusive workplace where everyone can thrive. Your profile is an important part of that mission, as it allows you to showcase your skills and experiences and connect with your peers and supervisors.

On this page, you can update your personal information, such as your job title, department, and contact information. You can also add a bio and photo to help your colleagues get to know you better. In addition, you can view and edit your project assignments and check your schedule to stay on top of upcoming deadlines and meetings."
      ></GenericInformation>
    </div>
  );
}
