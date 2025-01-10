import multer from "multer";

const  storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

export const upload = multer({
    storage
    // storage : storage                 // if both key and value is same the we can write only one  
})