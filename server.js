const express = require('express');

const app = express();

// app.get('/greeting/:name', (req,res) =>{
// 	res.send("Greetings, " + req.params.name)
// });

const magicResponses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


app.get('/tip/:total/:tipPercentage', (req,res)=>{
	res.send("Tip is " + (req.params.total / 100) * req.params.tipPercentage)
})

app.get('/magic/:question', (req,res)=>{
	res.send(req.params.question + magicResponses[Math.floor(Math.random() * magicResponses.length)])
})

app.listen(3001, ()=> {
	console.log('server is listening to 3001');
})

