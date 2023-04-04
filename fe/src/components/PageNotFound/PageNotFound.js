import InteligentNavBar from "../NavBar/InteligentNavBar";
import React, { useState } from "react";
import { isLoggedIn } from "../../services/userService";
import GenericInformation from "../GenericInformation/GenericInformation";
import imagen from "../../assets/404.avif";

export default function PageNotFound() {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());

  return (
    <div>
      <InteligentNavBar
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      ></InteligentNavBar>
      <GenericInformation
        img={imagen}
        title="Ups, I think you are lost :("
        content="It looks like you may have typed the URL incorrectly or followed a broken link. Don't worry though, we're here to help you get back on track.

Here are a few things you can try:

Double check the URL and try again.
Use the search bar at the top of the page to find what you're looking for.
Navigate to our homepage to start fresh and explore our site.
If you're still having trouble finding what you need, please don't hesitate to contact us at [contact information]. We're always here to help."
      ></GenericInformation>
    </div>
  );
}
