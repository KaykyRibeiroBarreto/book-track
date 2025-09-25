import mongoose from "mongoose";

// conection string é sua url de conexão com o banco de dados
// a função mongoose.connect() é responsável por estabelecer a conexão com o banco de dados MongoDB usando a string de conexão fornecida. 
async function connectInDatabase() {  
    mongoose.connect("mongodb+srv://kaykyribeiro207:kayky702@cluster0.vi7tjwl.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0");

    return mongoose.connection;
};

export default connectInDatabase; 
