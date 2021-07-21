const mongodb = require('mongodb');
/* const bcrypt = require('bcrypt');
const saltRounds = 10; */

const { MongoClient } = mongodb;

const URI = "mongodb://localhost:27017"
const DB_NAME = "SintraDesporto"
let client  

async function connect(uri) {
    try {
        if(client) return client;
        // Cria o cliente
        client = new MongoClient(uri, {
            useUnifiedTopology: true
        })

        // Aguarda a ligacao
        await client.connect()
        // Retorna o cliente
        return client;
        
    } catch (err) {
        console.log(err);
    }
}

function closeConnection() {
    client.close();
}

async function getCollection(dbName, collectionName) {
    const user = await connect(URI);
    const db = user.db(dbName);
    return db.collection(collectionName);
}

async function insereUser(user) {
    const collection = await getCollection(DB_NAME, "users")
    const res = await collection.insertOne(user)
    console.log(user, res)
    return res.insertId;
}

async function obtemUser(user_id) {
    const collection = await getCollection(DB_NAME, "users")
    const res = await collection.FindOne({_id: mongodb.ObjectId(user_id)})
    return res
}

module.exports = {
    insereUser,
    obtemUser,
    closeConnection
}