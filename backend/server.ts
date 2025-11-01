import app from './src/app';
import { PORT } from './config';

app.listen(PORT,  () => {
    console.log(`Started on http://localhost:${PORT}`)
})