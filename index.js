

const nodemailer = require("nodemailer");



let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "youremail@email.com",
        pass: "password"
    }
});


transporter.sendMail({
    from: "Site teste <youremail@email.com>",
    to: "email@email.com",
    subject: "teste de envio de email usando nodemailer",
    text: "teste de envio ",
}).then(message => {
    console.log(message);

}).catch(err => {
    console.log(err);
});

console.log('enviado com sucesso')











