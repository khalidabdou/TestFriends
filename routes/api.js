const express = require('express')
const apiRout = express.Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()



//get user by id 
apiRout.get('/getUser', async (req, res) => {
    const user = await prisma.user.findFirst({
        where: {
            username: "abdellah",
        },
    })
    res.send(user)
})
//get user by id 


//create user 
apiRout.post('/insertUser', async (req, res) => {

    const bodyUser=req.body
    let user = await prisma.user.create({
        data: {
            username: bodyUser.username,
            email: bodyUser.email,
            name: bodyUser.username,
            token: bodyUser.token,
            image: bodyUser.img,
        },
    })
  
        console.log(user.id);
    
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