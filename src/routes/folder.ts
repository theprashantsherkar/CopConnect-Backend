import express from "express";
import { getFolders} from '../controllers/folder';

const router = express.Router();

router.get('/', getFolders);

export default router;

