
const users = [
    {
        username: 'Cameron',
        password: 'butts',
        card:      'Dept to the Deathless',
        color:  'White'
    },
    {
        username: 'Trent',
        password: 'howdy',
        card:      'Desecration Demon',
        color:  'Black'
    },
    {
        username: 'Ernesto',
        password: 'cashmoney',
        card:      'Master of Waves',
        color:  'Blue'
    }
]
module.exports = {
    register: (req,res) =>{
       const {username, password, card, color} = req.body //userObj
       const newUser = {username, password, card, color}
       users.push(newUser)
       res.sendStatus(200)
    },
    login: (req,res) =>{
        console.log('Logging User In')
        console.log(req.body)
        const {username, password} = req.body
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === username && users[i].password === password) {
                console.log(`Logged in as ${users[i].username}`)
                res.status(200).send(users[i])
                return
            }
        }
        res.status(400).send('User not found')
    }, 
    getUsers: (req,res) =>{
        console.log('Searching for users')
        res.status(200).send(users)
    }
    
}