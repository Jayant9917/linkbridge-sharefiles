import express from 'express';
import upload from '../utils/upload.js';
import { uploadImage, getImage } from '../controller/image-controller.js';

const router = express.Router();

router.post('/upload', upload, uploadImage);
router.get('/file/:fileId', getImage);

export default router;
//hello//S