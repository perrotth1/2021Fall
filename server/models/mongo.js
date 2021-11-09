//This is the mongoDb driver code, code for interfacing with mongo (account created with obsidiansoda google account)
//This code was copied over from the mongo example driver code they provide on the site. Only the access variables are changed with dotenv


const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.4zqzg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const isConnected = client.connect();

module.exports = {
    client, isConnected
}

