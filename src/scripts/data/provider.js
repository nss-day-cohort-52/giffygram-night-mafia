const applicationElement = document.querySelector(".giffygram")


const applicationState = {
    users: [],
    posts: [],
    messages: [],
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


export const getMessages = () => {
    return applicationState.messages.map(message => ({ ...message })) //exporting a copy of users array data
}



export const fetchPosts = () => {
    return fetch(`${API}/posts`)
        .then(response => response.json())
        .then((posts) => {
            applicationState.posts = posts
        }
        )
    }




export const getPosts = () => {
    return applicationState.posts.map(post => ({ ...post }))
}
export const savePost = (post) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    }


    return fetch(`${API}/posts`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })

}


export const sendMessage = (messageContent) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messageContent)
    }

    return fetch(`${API}/messages`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            alert("Your Message Has Been Sent! :D");
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        })
};


export const setCurrentUser = (userObj) => {
    applicationState.currentUser = userObj
}
export const getCurrentUser = () => {
    return applicationState.currentUser
}
export const clearCurrentUser = () => {
    applicationState.currentUser = {}
}
