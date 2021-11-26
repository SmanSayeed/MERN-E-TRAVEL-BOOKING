const express = require('express');
var cors = require('cors')
const { MongoClient } = require('mongodb');
require('dotenv').config()
const ObjectId = require('mongodb').ObjectId;

const app = express();
const port = process.env.PORT || 5000;
//saadman
//q0jFmlFeOLQKengP


app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9jft6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;



const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        const database = client.db('travelManagement');

        const bookingCollection = database.collection('orders');
        const servicesCollection = database.collection('services');

        // GET API
  
        app.get('/test', async (req, res) => {
            // const cursor = servicesCollection.find({});
            // const services = await cursor.toArray();
            res.send('services');
        });
        app.get('/services', async (req, res) => {
            const cursor = servicesCollection.find({});
            const services = await cursor.toArray();
            res.send(services);
        });

        // GET Single Service
        app.get('/services/:id', async (req, res) => {
            const id = req.params.id;
            console.log('getting specific service', id);
            const query = { _id: ObjectId(id) };
            const service = await servicesCollection.findOne(query);
            res.json(service);
        })

        // POST API
        app.post('/services', async (req, res) => {
            // res.json(req);

            const service = req.body;
            console.log('hit the post api', service);

            const result = await servicesCollection.insertOne(service);
            console.log(result);
            res.json(result)
        });

        // DELETE API
        app.delete('/services/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await servicesCollection.deleteOne(query);
            res.json(result);
        })

          // Add Orders API
          app.post('/bookings', async (req, res) => {
            const order = req.body;
            const result = await bookingCollection.insertOne(order);
            res.json(result);
        })

        app.get('/bookings', async (req, res) => {
            const cursor = bookingCollection.find({});
            const bookings = await cursor.toArray();
            res.send(bookings);
        });

        app.delete('/delete-booking/:id', async (req, res) => {

            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await bookingCollection.deleteOne(query);
            res.json(result);
        });

        app.put('/update-status/:id', async (req, res) => {
            const id = req.params.id;
            
            const filter = { _id: ObjectId(id) };
            const updateStatus = req.body;
            
            const result = await bookingCollection.updateOne(
                { _id:new ObjectId(req.params.id) },
                { $set: {'status':'completed'} }
            );

            res.send(result);

        });

       

    }
    finally {
        // await client.close();
    }
}


run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Server is Running!')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})