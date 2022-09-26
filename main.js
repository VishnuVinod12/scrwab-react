var express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors')
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

var transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: 'scrwabtest@outlook.com',
        pass: '123456789aqws!',
    },
});

app.post('/text-mail', (req, res) => {
    const {to, name, msg } = req.query;
    console.log("here");
    const mailData = {
        from: 'scrwabtest@outlook.com',
        to: 'scrwabtest@outlook.com',
        subject:"Contact ",
        text: "text",
        html: '<b>Message from '+name+' '+to+'! </b><p>'+msg+'<p/>',
    };

    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send(error)
        }else{
            res.status(200).send({ message: "Mail send", message_id: info.messageId });
        }
    });
});

app.listen(9000,()=>{
    console.log("Listening");
})