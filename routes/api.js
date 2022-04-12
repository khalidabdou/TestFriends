const express = require('express')
const apiRout = express.Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()



//get user by id 
apiRout.get('/getUser', async (req, res) => {
    const user = await prisma.user.findFirst({
        where: {
            username: 'ABDELLAH',
        },
    })
    res.send(user)
})

//create user 
apiRout.get('/insertUser', async (req, res) => {
    let user = await prisma.user.create({
        data: {
            username: 'ABDELLAH',
            email: 'elsa@prisma.io',
            name: 'abdellah khalid',
            token: 'hgjvbisajhflsakf33455d',
            image: 'skfskfskaljfik',
        },
    })
  
        console.log(user);
    
})


//insert result
apiRout.post('/insertResults', async (req, res) => {
    let insertRes = await prisma.result.create({
        data: {
            sender:10,
            receiver:11,
            answers:'{}'
        }
    })

    res.send(insertRes)
})

//get result for user
apiRout.get('/getResults', async (req, res) => {

})

//get questions 
apiRout.get('/quetions', (req, res) => {

})

module.exports = apiRout