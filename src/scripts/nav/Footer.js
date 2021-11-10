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

// applicationElement.addEventListener("change", changevent => {
//     if (changevent.target.id === "postsbyuser_posts") {
//         applicationElement.dispatchEvent(new CustomEvent("footerUsersClickStateChanged",{detail:{userId: changevent.target.value}}));
//     } else if (changevent.target.id === "postsbydate_posts") {
//         applicationElement.dispatchEvent(new CustomEvent("footerStateChanged",{detail:{postId: changevent.target.value}}));
//     }
// });

// applicationElement.addEventListener("change", (event) => {
//     if (event.target.id === "showFavoritesToggle") {
//         applicationElement.dispatchEvent(new CustomEvent("showOnlyFavorites"));
//     }
// })

// export const footer = () => {
//     const posts = getPosts()
//     const users = getUsers()

// return`
//   <div class= "footer">
//     <div>
//         <label class="footer_item" for="postsbydate_posts"> Post since </label>
  
//         <select id="postsbydate_posts" class="selectUser" name="postsbydate_posts">
//             <option value="">Choose a Year...</option>
//             ${posts.map(post => {
//                 return `<option class="post" value="${post.year}">${post.year}</option>`}).join("")
//             }
//         </select>
//     </div>
//     <div>
//         <label class="footer_item" for="postsbyuser_posts">Post by User </label>
//         <select id="postsbyuser_posts" class="selectUser" name="postsbyuser_posts">
//             <option value="0">Choose a User...</option>
//             ${users.map(user => {
//                 return `<option class="user" value="${user.id}">${user.name}</option>`}).join("")
//             }
//         </select>
//     </div>
    
//     <div> 
//     Show Favorites Only
//     <input id="showFavoritesToggle" class="showOnlyFavorites_input" type="checkbox" />
//             </div>
//   </div>
// `
// };