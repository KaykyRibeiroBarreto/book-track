import mongoose from "mongoose";

// conection string é sua url de conexão com o banco de dados
// a função mongoose.connect() é responsável por estabelecer a conexão com o banco de dados MongoDB usando a string de conexão fornecida. 
async function connectInDatabase() {  
    mongoose.connect(process.env.MONGODB_URI);
    return mongoose.connection;
};

export default connectInDatabase; 
