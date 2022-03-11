const form = document.querySelector('#register-form')



function registerUser(e){
    e.preventDefault()

    let username = document.querySelector('#username-register')
    let password = document.querySelector('#password-register')
    let card = document.querySelector('#card-register')
    let color = document.querySelector('#color-register')


   let userObj = {
       username: username.value,
       password: password.value,
       card: card.value,
       color: color.value

    }
    axios.post('http://localhost:4004/api/register', userObj).then((res)=>{
        console.log(userObj)
    window.location.href="./login.html"
    })
}


form.addEventListener('submit', registerUser)