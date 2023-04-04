
const userKey = "user";

export function isLoggedIn() {
  if (localStorage.getItem(userKey) === null) {
    console.log("User not found");
    return false;
  } else {
    console.log("User found!", localStorage.getItem(userKey));
    return true;
  }
}

export function getUser() {
  var user = JSON.parse(localStorage.getItem(userKey));
  return user;
}

export async function login(email, password) {
  var rta = false;
  await fetch("http://localhost:8000/login/" + email + "/" + password + "/")
    .then((response) => response.json())
    .then( (data) => {
      console.log(data);
      if (data.email) {
        saveUser(data);
        rta = true;
      }
    }).catch(function (error){
      console.log(error.response.data);
    });
  return rta;
}

function saveUser(user) {
  localStorage.setItem(userKey, JSON.stringify(user));
}

export function logout() {
  localStorage.clear();
}

export function getSkills() {
  const skills = getUser().skills;
  var rta = [[], []];
  for (var i = 0; i < skills.length; i++) {
    rta[0].push(skills[i].title);
    rta[1].push(skills[i].value);
  }
  return rta;
}
