import { getCurrentUser } from "../data/provider.js"


export const Logout = () => {
    localStorage.removeItem("gg_user")
    
    let currentUser = getCurrentUser()
    currentUser = {}

    document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
}