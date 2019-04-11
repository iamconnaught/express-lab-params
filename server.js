const express = require('express');

const app = express();

app.get('/greeting/:name', (req,res) =>{
	res.send("Greetings, " + req.params.name)
});

app.listen(3001, ()=> {
	console.log('server is listening to 3001');
})