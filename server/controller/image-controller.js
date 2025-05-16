import File from '../models/file.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

export const uploadImage = async (request, response) => {
    if (!request.file) {
        return response.status(400).json({ error: 'No file uploaded' });
    }

    const fileObj = {
        path: request.file.path,
        name: request.file.originalname,
    }
    
    try {
        const file = await File.create(fileObj);
        const baseUrl = process.env.NODE_ENV === 'production' 
            ? 'https://linkbridge-backend.onrender.com'
            : `http://localhost:${process.env.PORT || 10000}`;
            
        response.status(200).json({ 
            path: `${baseUrl}/file/${file._id}`,
            message: 'File uploaded successfully'
        });
    } catch (error) {
        console.error('Upload error:', error.message);
        response.status(500).json({ 
            error: 'Error uploading file',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
}

export const getImage = async (request, response) => {
    try {   
        const file = await File.findById(request.params.fileId);
        
        if (!file) {
            return response.status(404).json({ error: 'File not found' });
        }

        file.downloadCount++;
        await file.save();

        response.download(file.path, file.name);
    } catch (error) {
        console.error('Download error:', error.message);
        response.status(500).json({ 
            error: 'Error downloading file',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
}