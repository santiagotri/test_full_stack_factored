import LogIn from "./LogIn";
import InteligentNavBar from "../NavBar/InteligentNavBar";
import { isLoggedIn } from "../../services/userService";
import React, { useState } from "react";
import UserInformation from "./UserInformation";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());

  const content = () => {
    if (!loggedIn) {
      return <LogIn setLoggedIn={setLoggedIn}></LogIn>;
    } else {
      return <UserInformation></UserInformation>;
    }
  };
  return (
    <div>
      <InteligentNavBar
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      ></InteligentNavBar>
      {content()}
    </div>
  );
}
