
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://VoidChesca10:chesca10mongodbatlas@cluster0.rurf3.mongodb.net/PCSP?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 9000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
