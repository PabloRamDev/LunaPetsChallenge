import express, { Express} from 'express';
import router from  './routes/service.routes'


const app: Express = express();
const port = 3000;
app.use(express.json())


app.use(router)
// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World!');
// });

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});


