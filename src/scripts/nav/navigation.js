import { LoginForm } from "../auth/Login.js"
import { Logout } from "../auth/Logout.js"
import { MessageForm } from "../message/MessageForm.js"



const applicationElement = document.querySelector(".giffygram")

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "directMessageIcon") {
       applicationElement.dispatchEvent(new CustomEvent("messageForm")) //creating a custom event listener that will listen on another module

    }
})



//!Below is event listener for log out button needs functionality

document.addEventListener("click", clickEvent => {
       if (clickEvent.target.id === "logout") {
           Logout()
           localStorage.removeItem("gg_user")
        applicationElement.dispatchEvent(new CustomEvent("statechanged"))

    }
})


//!Tried to add message.length for counter on line 42 might need to add seed data?

//let messages = GetMessages()  can put messages.length in post


export const navbar = ()=>{

    let navbarhtml= `
       <navbar class="navigation">
           <div class="navigation__icon"> <img src="images/pb.png" alt="giffy logo"/> </div>
           <div id="navigation__name">GiffyGram</div>
           <div id="directMessageIcon"> Pen  <img id ="directMessageIcon" src="images/fountain-pen.svg" alt="pen"/> </div>
           <div class="notification__count"> 0 </div>
           <button id="logout"> logout </button>
       
       </navbar>
   
       `
       return navbarhtml
   }

  