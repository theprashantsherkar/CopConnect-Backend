import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import FolderRoutes from './routes/folder';

export const app = express();

dotenv.config({
    path: './database/config.env'
});

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/api/folders', FolderRoutes);





