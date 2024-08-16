const mongoose = require('mongoose');
const uri = "mongodb://mongo:LayvRqtsexDzQmlUkiNeajjHJejncTxv@viaduct.proxy.rlwy.net:29157/?retryWrites=true&w=majority";
const connectDB = async () => {
    try {
        await mongoose.connect(uri, 
        {useNewUrlParser: true, 
        useUnifiedTopology: true}
        );
        console.log("MongoDB Connected")
    }
    catch (error) {
        console.error(error.message);
        process.exit(1);
    } 
}

module.exports = connectDB;
