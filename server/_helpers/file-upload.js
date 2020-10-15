const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const {CloudinaryStorage} = require('multer-storage-cloudinary');
const config = require('../config.json');

//Documentation for cloudinary 
//https://cloudinary.com//documentation/node_integration 
cloudinary.config({ 
    cloud_name: config.cloudName, 
    api_key: config.apiName, 
    api_secret: config.apiSecret 
});


// Storage for files 
const imageStorage = new CloudinaryStorage({ 
    cloudinary: cloudinary, 
    params: {
        folder: "CPortfolio",  //Not working? 
        allowed_formats: ["jpeg", "jpg", "png"] 
    } 
    //Can also make picture circle or something 
    //transformations: []
}); 

const pdfStorage = new CloudinaryStorage({ 
    cloudinary: cloudinary, 
    params:{
        folder: "CPortfolio",  //Not working? 
        allowed_formats: "pdf"
    }
}); 

const storage = new CloudinaryStorage({ 
    cloudinary: cloudinary, 
    params: {
        folder: 'CPortfolio'
    }
}); 


//Used to upload files
//Max is currently 16MB (Mongo limit)
const upload = multer({storage: storage, 
    limits: {fileSize: 1024*1024*16} 
});

const uploadImage = multer({
    storage: imageStorage, 
    limits: {fileSize: 1024*1024*16}
}); 

const uploadPdf = multer({ 
    storage: pdfStorage, 
    limits:{fileSize: 1024*1024*16}
}); 

module.exports = {upload, uploadImage, uploadPdf}; 

//How to use middleware, add in between path "/create" and function create
//Call by using upload.single('file') where file is the name of the field which gets the image/file
//.single is a function that uploads a single file (as part of multer) 
