import { getCurrentUser } from "../data/provider.js"


export const Logout = () => {
    
    
    let currentUser = getCurrentUser()
    currentUser = {}

    document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
}