import fs from 'fs';
import multer from 'multer';
import path from 'path';

import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Return image location 
const getImagePath = (image) => {
    return path.join(__dirname + `/../../public/images/${image}`)
}

// Return image in base64 
export const getImage = (image) => {
    const path = getImagePath(image)

    return new Promise((resolve, reject) => {
        fs.readFile(path, { encoding: "base64" }, (err, data) => {
            if (err) reject(err)
            else resolve(data)
        });
    })
}

// Remove the file 
export const removeImage = (image) => {
    const path = getImagePath(image)

    return new Promise((resolve, reject) => {
        fs.stat(path, (err, stats) => {
            if (err?.code === "ENOENT") resolve()
            else {
                fs.unlink(path, (err) => {
                    if (err) reject(err)
                    else resolve()
                });
            }
        })
    })
}

// file storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname + '/../../public/images'))
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file?.originalname)
    }
})

// file filter
const fileFilter = (req, file, cb) => {
    const allowFileType = ['image/jpg', 'image/jpeg', 'image/png'];
    if (!allowFileType.includes(file?.mimetype)) {
        cb({ status: 400, message: "Only JPD, JPEG or PNG files are allowed !!" }, false)
    }
    cb(null, true)
}

// file upload
export const fileUpload = multer({ storage, fileFilter })