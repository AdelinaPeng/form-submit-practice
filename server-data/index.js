const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())
app.post('/',(req,res)=>{
	console.log(req.body);
	// res.json(req.body)
	// res.json({
	// 	data: 200,
	// 	info: 'success 2023'
	// })

})

var data = 	{
	name: '张三',
	gender: [
		{ name: '男', value: '0', checked: false },
		{ name: '女', value: '1', checked: true }
	],
	skills: [
		{ name: 'HTML', value: 'html', checked: true },
		{ name: 'CSS', value: 'css', checked: true },
		{ name: 'Javascript', value: 'js', checked: false },
		{ name: 'Photoshop', value: 'ps', checked: false}
	],
	opinion: '测试'
}
app.get('/',(req,res)=>{
	res.json(data)
})
app.listen(3000,()=>{
	console.log('server running at http://127.0.0.1:3000')
})