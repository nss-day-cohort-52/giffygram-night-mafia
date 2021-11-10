const apiURL = "http://localhost:3000"
const applicationElement = document.querySelector(".giffygram")


const applicationState = {
    users:[],
    posts: [],
    likes: [],
    followers: [],
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    }
}

const API = "http://localhost:3000"


export const fetchUsers = () => {   // creating a function that grabs the information users put into radio buttons

    return fetch(`${API}/users`) //asking for the data from users array from the API
        .then(response => response.json())  //grabbing JSON parsing to JS
        .then((users) => { //by this time data will be converted from a string to an array 
            applicationState.users = users  //setting the users array from api database to be the same as applicationsState users
        })
}

export const getUsers = () => {
    return applicationState.users.map(user => ({ ...user })) //exporting a copy of users array data
}
export const getPosts = () => {
    return applicationState.posts.map(post => ({ ...post })) //exporting a copy of posts array data
}