import express from 'express'
const app = express()
const port = process.env.PORT || 3000
import usuariosRoutes from "./routes/usuariosRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"

// middlewares
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// motor
app.set('views', './src/views')
app.set('view engine', 'ejs')




app.use("/", usuariosRoutes)
app.use("/", adminRoutes)


app.listen(port, () => {
    console.log(`Servidor ONLINE ${port}`)
})