const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const {CloudinaryStorage} = require('multer-storage-cloudinary');
const config = require('../config.json');
// cloudinary.uploader.upload("sample.jpg", {"crop":"limit","tags":"samples","width":3000,"height":2000}, function(result) { console.log(result) });
// cloudinary.image("sample", {"crop":"fill","gravity":"faces","width":300,"height":200,"format":"jpg"});

//Documentation for cloudinary 
//https://cloudinary.com//documentation/node_integration 
cloudinary.config({ 
    cloud_name: config.cloudName, 
    api_key: config.apiName, 
    api_secret: config.apiSecret 
  });


// Storage for files 
const storage = new CloudinaryStorage({ 
    cloudinary
}); 

//Used to upload files
//Max is currently 16MB (Mongo limit)
const upload = multer({storage: storage, 
    limits: {fileSize: 1024*1024*16}
});

module.exports = upload; 
