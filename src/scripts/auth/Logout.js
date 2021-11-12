import { clearCurrentUser, getCurrentUser } from "../data/provider.js"


export const Logout = () => {
    let user = getCurrentUser()
    
    clearCurrentUser(user)

    document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
}