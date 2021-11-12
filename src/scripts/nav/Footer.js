import { getUsers, getPosts } from "../data/provider.js"

const applicationElement = document.querySelector(".giffygram");

export const footer = () => {
   
    let users = getUsers()
    let posts = getPosts()
 
    //function to auto populate selectable users in footer
    const usersOptions = () => {
       let optionHTML = `${users.map((user) => {
          return `
             <option id="userOption" value="${user}--${user.id}">${user.name}</option>  
          `
       })}`
       return optionHTML
    }
 
    let footerHTML = `
       <footer class="footer">
             <div class="footer__item">
                 Posts since <select id="yearSelection">
                     <option>2021</option>
                 </select>
                 <span id="postCount">${posts.length}</span>
             </div>
             <div class="footer__item">
                Posts by user <select id="userSelection">
                   <option>Select a user!</option>
                   ${usersOptions()}
                </select>
             </div>
             <div class="footer__item">
             Show only favorites <input id="showOnlyFavorites" type="checkbox">
             </div>
         </footer>
    `
    return footerHTML
 }

