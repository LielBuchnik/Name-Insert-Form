let userTable = document.getElementById("user-table");
let progBar = document.getElementById("progBar");
let fnameinput = document.getElementById("pname");
let lnameinput = document.getElementById("psurname");
let pageinput = document.getElementById("page");
let pcityinput = document.getElementById("pcity");
let userDB = [];

// Creating the class here;
class User {
    constructor(pname, psurname, page, pcity) {
        this.pname = pname;
        this.psurname = psurname;
        this.page = page;
        this.pcity = pcity;
    }
}


// Creating an arrow function for timeout
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// User Submittion Button
async function userSubmition(pname, psurname, page , pcity) {
    fnameinput.value = '';
    lnameinput.value = '';
    pageinput.value = '';
    pcityinput.value = '';
    move();
    clearLog();
    await delay(2000);
// New Person is created by the fname, lname in userSubmition function.
    let person = new User(pname, psurname, page , pcity);
    let userName =  "<span class='user'>" +  person.pname + " " + person.psurname +
    person.page + " " + person.pcity + "</span>"
    if (pname != undefined && pname != null && pname != "" &&
    psurname != undefined && psurname != null && psurname != "") {
        userDB.push(person);
        console.log(person);
        console.log(userDB);
        userTable.innerHTML = "User " + userName + " Submitted Successfully";
        clearLog()
    } else {
        userTable.innerHTML = "Invalid input. User not submitted.";
        clearLog()
    }
}

// User Display Button
async function usersDisplay() {
    for (let user = 0; user < userDB.length; user++) {
        move();
        await delay(2000);
        let columnCreate = document.createElement("p");
        columnCreate.innerText = `${userDB[user].pname} ${userDB[user].psurname} ${userDB[user].page} ${userDB[user].pcity}`;
        userTable.appendChild(columnCreate);
        console.log("User displayed:", userDB[user]);
    }
}

// A function to remove the text in userTable for example the text "User Submitted";
async function clearLog(){
    await delay(3000);
    userTable.innerHTML = "";
}

function clearLogger(){
    userTable.innerHTML = "";
}

function move() {

    let elem = document.getElementById("pinkBar");
    let stepValue = 0;
    let id = setInterval(frame, 500);
  
    function frame() {
  
      if (stepValue >= 100) {
        clearInterval(id);
        elem.style.display = "none";
        
      } else {
        elem.style.display = "block";
        elem.style.width = (stepValue + 25) + "%";
        elem.innerHTML = (stepValue + 25) + "%";
        stepValue=(stepValue + 25);
      }
    }
  }
