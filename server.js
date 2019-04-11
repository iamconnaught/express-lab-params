const express = require('express');

const app = express();

// app.get('/greeting/:name', (req,res) =>{
// 	res.send("Greetings, " + req.params.name)
// });



app.get('/tip/:total/:tipPercentage', (req,res)=>{
	res.send("Tip is " + (req.params.total / 100) * req.params.tipPercentage)
})



app.listen(3001, ()=> {
	console.log('server is listening to 3001');
})
