import express, { Express } from 'express';
import router from  './routes/service.routes'
import cors from 'cors'


const app: Express = express();
const port = 8000;

app.use(cors())
app.use(express.json())
app.use(router)



app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});


