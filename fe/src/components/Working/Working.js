import InteligentNavBar from "../NavBar/InteligentNavBar";
import React, { useState } from "react";
import { isLoggedIn } from "../../services/userService";
import GenericInformation from "../GenericInformation/GenericInformation";
import imagen from "../../assets/working.png";

export default function Working() {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());

  return (
    <div>
      <InteligentNavBar
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      ></InteligentNavBar>
      <GenericInformation
        img={imagen}
        title="We are working on it..."
        content="This part of the webge is not finished yet. "
      ></GenericInformation>
    </div>
  );
}
