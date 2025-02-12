import express from 'express';
import { configDotenv } from 'dotenv';
import userRoutes from './routes/user.routes.js';
configDotenv();

const app=express();

const PORT=process.env.PORT || 3000;

app.use(express.json());
app.use('/api/users',userRoutes);
app.get('/',(req,res)=>{
   res.send('Hello World');
})
app.listen(PORT,()=>{
   console.log(`Server is running on port ${PORT}`);
})