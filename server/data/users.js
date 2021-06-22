const bcrypt = require('bcryptjs')

const users =[
    
    {
        name: 'admin',
        email: 'admin@example.com',
        password: bcrypt.hashSync('admin1234', 10),
        isAdmin: true
    },
    {
        name: 'med',
        email: 'med@example.com',
        password: bcrypt.hashSync('med1234', 10),
        isAdmin: false
    },
    {
        name: 'ali',
        email: 'ali@example.com',
        password: bcrypt.hashSync('ali1234', 10),
        isAdmin: false
    }
]

module.exports = users