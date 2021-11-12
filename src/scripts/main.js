import { GiffyGram, GiffyGramWithPost, GiffyGramWithMessage } from "./GiffyGram.js"
import { LoginForm } from "./auth/Login.js"

import { fetchUsers, fetchPosts, fetchCurrentUser, fetchMessages } from "./data/provider.js"


const applicationElement = document.querySelector(".giffygram")
// export was below
const renderApp = () => {
    const user = parseInt(localStorage.getItem("gg_user"))
    fetchUsers()
        .then(() => fetchPosts())
        .then(() => fetchMessages())
        .then(() => fetchCurrentUser())
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
applicationElement.addEventListener("cancelGif", customEvent => { renderApp() }) //!added code
//above event listener will render the callback function if messageForm is clicked

const renderAppWithPostForm = () => {
    const user = parseInt(localStorage.getItem("gg_user"))
    fetchUsers()
        .then(() => fetchPosts())
        .then(() => fetchMessages())
        .then(() => fetchCurrentUser())
        .then(() => {
            if (user) {
                applicationElement.innerHTML = GiffyGramWithPost()
            } else {
                applicationElement.innerHTML = LoginForm()
            }
        })
}

const renderAppWithMessageForm = () => { 
    const user = parseInt(localStorage.getItem("gg_user"))
    fetchUsers()
        .then(() => fetchPosts())
        .then(() => fetchMessages())
        .then(() => fetchCurrentUser())
        .then(() => {
            if (user) { 
                applicationElement.innerHTML = GiffyGramWithMessage()
            } else {
                applicationElement.innerHTML = LoginForm()
            }
        })
}
