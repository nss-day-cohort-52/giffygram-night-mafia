import { GiffyGram, GiffyGramWithPost, GiffyGramWithMessage } from "./GiffyGram.js"
import { LoginForm } from "./auth/Login.js"
import { fetchUsers, fetchPosts, fetchMessages } from "./data/provider.js"


const applicationElement = document.querySelector(".giffygram")
// export was below
const renderApp = () => {
    const user = parseInt(localStorage.getItem("gg_user"))
    fetchUsers()
        .then(() => fetchPosts())
        .then(() => {
            if (user) {
                applicationElement.innerHTML = GiffyGram()
            } else {
                applicationElement.innerHTML = LoginForm()
            }
        })
}
renderApp()




applicationElement.addEventListener("statechanged", customEvent => { renderApp() })
applicationElement.addEventListener("postEntryAsk", customEvent => { renderAppWithPostForm() })
applicationElement.addEventListener("messageForm", customEvent => { renderAppWithMessageForm() })
//above event listener will render the callback function if messageForm is clicked

const renderAppWithPostForm = () => {
    const user = parseInt(localStorage.getItem("gg_user"))
    fetchUsers()
        .then(() => fetchPosts())
        .then(() => {
            if (user) {
                applicationElement.innerHTML = GiffyGramWithPost()
            } else {
                applicationElement.innerHTML = LoginForm()
            }
        })
}

const renderAppWithMessageForm = () => {  //! little confused by this breakdown
    const user = parseInt(localStorage.getItem("gg_user"))
    fetchUsers()
        .then(() => fetchPosts())
        .then(() => {
            if (user) { //! if there is a user render GiffyGramWithMessage() else render Loginform?
                applicationElement.innerHTML = GiffyGramWithMessage()
            } else {
                applicationElement.innerHTML = LoginForm()
            }
        })
}
