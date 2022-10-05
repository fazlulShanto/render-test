const Express = require('express');
const cors = require('cors');
const app = Express();
const PORT = process.env.PORT;
app.use(cors());


app.get('/',(req,res)=>{
    res.send('hello world');
})


app.listen(PORT,()=>{
    console.log(`app is running at : ${PORT}`);
})