// Połączenie z serverem
const express = require('express');
const {MongoClient} = require('mongodb');
const cors = require('cors');
const app = express();
const port = 3000;
const uri = "mongodb+srv://Majes:miki2002@cluster0.t7imd.mongodb.net/KDSzczerbaty?retryWrites=true&w=majority";
const client = new MongoClient(uri);

app.use(cors()); 
app.use(express.json());

async function connectToDatabase() {
    try {
        await client.connect();
        const database = client.db('KDSzczerbaty');
        return database;
    }
    catch (error) {
        console.error("Błąd połączenia z MongoDB:", error);
    }
  }
// -------------------------------------------------------------------------------------------------------------------------------------------------------

async function logowanie(database, login, password) {
    const collection_lekarze = database.collection('baza_lekarze');
    const lekarz = await collection_lekarze.findOne({login: login, haslo: password});
    if (lekarz) {
        return lekarz;
    }
    else {
        return null;
    }
}
app.post('/login', async (req, res) => {
    const {login, password} = req.body;
    try {
        const database = await connectToDatabase();
        const lekarz = await logowanie(database, login, password);
    
        if (lekarz) {
            res.json(lekarz);
        }
        else {
            res.status(404).json({ message: "Nie znaleziono użytkownika." });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Nasłuchiwanie servera ---------------------------------------------------------------------------------------------------------------------------------
app.listen(port, () => {
    console.log(`Serwer działa na http://localhost:${port}`);
});
