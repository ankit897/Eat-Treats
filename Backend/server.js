import app from "./app.js"

app.listen(process.env.PORT, ()=>{
    console.log(`server is running in the port ${process.env.PORT}`)
})