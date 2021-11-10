import { GiffyGram } from "./GiffyGram.js"
import { LoginForm } from "./auth/Login.js"
import { fetchUsers, fetchPosts } from "./data/provider.js"

const applicationElement = document.querySelector(".giffygram")
// export was below
    const renderApp = () => {
    const user = parseInt(localStorage.getItem("gg_user"))
    fetchUsers()
    .then(()=>fetchPosts())
    .then(()=> {
    if (user) {
        applicationElement.innerHTML = GiffyGram()
    } else {
        applicationElement.innerHTML = LoginForm()
    }
})
}
renderApp()

applicationElement.addEventListener("statechanged", customEvent=>{renderApp()})