import { routes } from "./routes"
import express from 'express'

const app = express()

app.use(routes);

app.listen(3000, () => {
    console.log ('Server is running on 3000 port !!!')
})