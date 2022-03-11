
const searchContainer = document.querySelector("#search-container")
const searchWord = document.querySelector('#username-search')
const searchBttn = document.querySelector('#search')
const getAllBttn = document.querySelector('#all-users')

const baseURL = `http://localhost:4004/api/allusers`

const getAllUsers = (e) => {
    console.log(e)
    e.preventDefault()
    axios.get(baseURL).then(usersCallback)
}
const searchAllUsers = (e) => {
    e.preventDefault()
    
    axios.get(baseURL).then(res=>usersSearchCallback(res))
}

const usersCallback = ({ data: users }) => displayUsers(users)
const usersSearchCallback = ({data: users}) => search(users)

function showUserCard(userObj){
        const userCard = document.createElement('div')
        userCard.classList.add('user-card')
        userCard.innerHTML = `<div id ="user"><h1 class = "username"">${userObj.username}'s profile</h1>
        <h2> Favorite Card: ${userObj.card}</h2>
        <h2> Favorite Color: ${userObj.color}</h2>
        </div>`
        searchContainer.appendChild(userCard)
}

function displayUsers(arr) {
    searchContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        showUserCard(arr[i])
    }
}

function search(arr){
    searchContainer.innerHTML = `` 
    for (let i = 0; i < arr.length; i++) {
        if (searchWord.value === arr[i].username) {
            showUserCard(arr[i])
        }
    }
}
searchBttn.addEventListener('click', searchAllUsers)
getAllBttn.addEventListener('click', getAllUsers)



