const loginForm = document.querySelector('#login-form')
const userContainer = document.querySelector('#login-container')

const login = body => axios.post(`http://localhost:4004/api/users`, body).then( res => {
    showUserCard(res.data)
}).catch(err => {
    console.log(err)
    console.log('Request did not work.')
  })

function changeHandler(e){
    e.preventDefault
    let newCard = document.querySelector('#card-change')
    let newColor = document.querySelector('#color-change')

    
}
function loginHandler(e){
    e.preventDefault()
    let username = document.querySelector('#username-login')
    let password = document.querySelector('#password-login')
    
    let bodyObj = {
        username: username.value,
        password: password.value
    }

    login(bodyObj)

}

function showUserCard(userObj){
    loginForm.style.display = "none"
        const userCard = document.createElement('div')
        userCard.classList.add('user-card')
        userCard.innerHTML = `<h1 class = "username">${userObj.username}'s profile</h1>
        <h2> Favorite Card: ${userObj.card}</h2>
        <h2> Favorite Color: ${userObj.color}</h2>
        <form id="change-form">
        <h1 style="  color: aliceblue;">Change your favorites</h1>
        <input type="text" id="card-change" placeholder="New Favorite Card">
        <input type="text" id="color-change" placeholder="New Favorite Color">
        <button>Submit Changes</button>
        </form>`
        userContainer.appendChild(userCard)
}
loginForm.addEventListener('submit', loginHandler)