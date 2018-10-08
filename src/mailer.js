var express = require('express')
var nodemailer = require('nodemailer');

app = express()

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'aaron.dubenion@gmail.com',
		pass: 'aws1234++'
	}
});
var mailOptions = {
    from: '"Aaron DuBenion-Souza" <foo@blurdybloop.com>', // sender address
    to: 'sigma10100@gmail.com', // list of receivers
    subject: 'Hello world test', // Subject line
    text: 'Hello world ?', // plaintext body
    // html: '<b>Hello world ?</b>' // html body
};

app.get('/', (req,res) => {
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return res.send(console.log(error));
	    }
	    res.send(console.log('Message sent: ' + info.response));
	});
})


// send mail with defined transport object

app.listen('5050', () => {
	console.log( 'mail server running on port 5050' )
})