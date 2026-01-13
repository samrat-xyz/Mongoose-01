const mongoose = require('mongoose');

const connectDB = async()=>{
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log('mongodb connected sucessfully')
        
    } catch (error) {
        console.error(`failed to connect mongodb (error):${error} `)
        
    }
}

module.exports=connectDB