

const nodemailer = require("nodemailer");



let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "shennonflavio@gmail.com",
        pass: "oagzsejfvvpwadwa"
    }
});


transporter.sendMail({
    from: "Site teste <shennonflavio@gmail.com>",
    to: "shennonflavio@gmail.com",
    subject: "teste de envio de email usando nodemailer",
    text: "teste de envio ",
}).then(message => {
    console.log(message);

}).catch(err => {
    console.log(err);
});

console.log('enviado com sucesso')











