const express = require('express')
const apiRout = express.Router()
const http = require('http');
const url = require('url');

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
var FCM = require('fcm-node');
var serverKey = 'AAAAUSC50us:APA91bHb9VwRi8WWVSGFJ8-2ZRLGSIQ1nCjoBapD_qAmExdVNYKnBmgpLuCHEhOdk8ad4784rwvvXFRPzrVRMFJop5Gj0dpQ5NdWte1IWstyNYm4nsNwq88EZ2kQx4kd8e1Q50TD7euD';



//get user by id 
apiRout.get('/getUser', async (req, res) => {
    const id = parseInt(req.query.id)
    const user = await prisma.user.findFirst({
        where: {
            id: id,
        },
    })
    if (user)
        res.send(user)
    else res.send(null)
})

apiRout.post('/updateMyQuestions', async (req, res) => {
    try {
        //const questions = JSON.parse(req.body.questions)
        //console.log(questions);
        const id = parseInt(req.query.id)
        const quetions = req.query.questions
        let result = await prisma.user.update({
            where: {
                id: id
            },
            data: {
                myQuetions: quetions
            }
        })

        if (result) {
            res.send('success ')
        }

    } catch (err) {
        console.log(err);
        res.send('err ' + err)
    }
})

//create user 
apiRout.post('/insertUser', async (req, res) => {

    const bodyUser = req.body
    let user = await prisma.user.create({
        data: {
            username: bodyUser.username,
            email: bodyUser.email,
            name: bodyUser.username,
            token: bodyUser.token,
            image: bodyUser.img,
        },
    })
    res.send(user)

})


apiRout.get('/pushNot', (req, res) => {
    const token1 = 'cvqC5Ft5T_OW4rlSTs6OxD:APA91bHnztvutVc2cSV8dzr70VYXXhDMUh3poFBD2HE5pzVWzNpQYBunKupwz-B4c_qQI89U6bEK5QlX68P3cZr1EreJ_u1IPrVY8u7GFgYod_cDcTRNXFplSdl0GTKUtAxWYyCDS_7k'
    const token2 = 'efMkmixqTSKTKWqNI16hWe:APA91bETwDJJllTVlF8Eq0Q86KNPKeEwPceOGZBfNEeeqcnrcdDptPTZEfN4GGdAuuCqCsqsyJJ2lcouIqA28GmybYGstcKbt0oGz1ZiK8gvo_IJU5D6MCFu1ercjQ-H5HBDmsfouUu-'
    var fcm = new FCM(serverKey);
    var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
        to: token1,
        collapse_key: '',
        notification: {
            title: 'Title of your push notification',
            body: 'Body of your push notification'
        },

        data: {  //you can send only notification or only data(or include both)
            my_key: 'my value',
            my_another_key: 'my another value'
        }
    }

    fcm.send(message, function (err, response) {
        if (err) {
            console.log("Something has gone wrong!")
            res.send("Something has gone wrong!")
        } else {
            console.log("Successfully sent with response: ", response)
            res.send(response)
        }
    })


})

//insert result
apiRout.post('/createResult', async (req, res) => {
    
    const token = req.query.token
    const receiver = parseInt(req.query.receiver)
    const sender =parseInt (req.query.sender)
    const answers = req.query.answers
    const insert = await prisma.TblResluts.create({
        data: {
            sender:sender,
            receiver:receiver,
            answers:answers
        }
    })
    if (insert) {
        pushNotifcation(token)
    }
    res.send("")

    //res.send(insertRes)
})

//get result for user
apiRout.get('/getResults', async (req, res) => {

})

//get questions 
apiRout.get('/quetions', (req, res) => {

})


function pushNotifcation(token) {
    const token1 = 'cvqC5Ft5T_OW4rlSTs6OxD:APA91bHnztvutVc2cSV8dzr70VYXXhDMUh3poFBD2HE5pzVWzNpQYBunKupwz-B4c_qQI89U6bEK5QlX68P3cZr1EreJ_u1IPrVY8u7GFgYod_cDcTRNXFplSdl0GTKUtAxWYyCDS_7k'
    const token2 = 'efMkmixqTSKTKWqNI16hWe:APA91bETwDJJllTVlF8Eq0Q86KNPKeEwPceOGZBfNEeeqcnrcdDptPTZEfN4GGdAuuCqCsqsyJJ2lcouIqA28GmybYGstcKbt0oGz1ZiK8gvo_IJU5D6MCFu1ercjQ-H5HBDmsfouUu-'
    var fcm = new FCM(serverKey);
    var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
        to: token,
        collapse_key: '',
        notification: {
            title: 'Title of your push notification',
            body: 'Body of your push notification'
        },

        data: {  //you can send only notification or only data(or include both)
            my_key: 'my value',
            my_another_key: 'my another value'
        }
    }

    fcm.send(message, function (err, response) {
        if (err) {
            console.log("Something has gone wrong!")
            res.send("Something has gone wrong!")
        } else {
            console.log("Successfully sent with response: ", response)
        }
    })

}

module.exports = apiRout