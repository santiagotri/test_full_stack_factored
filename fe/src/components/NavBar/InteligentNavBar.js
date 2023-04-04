import NotLoggedNavBar from "../NavBar/NotLoggedNavBar";
import LoggedNavBar from "./LoggedAppBar";

export default function InteligentNavBar(props) {
  if (props.loggedIn) {
    return (
      <div>
        <LoggedNavBar setLoggedIn={props.setLoggedIn}></LoggedNavBar>
      </div>
    );
  } else {
    return (
      <div>
        <NotLoggedNavBar></NotLoggedNavBar>
      </div>
    );
  }
}
