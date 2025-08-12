const {app} = require("./app")

const port = 3000;

app.listen(port,()=>{
    console.log(`Fruity API currently running on port ${port}`)
})