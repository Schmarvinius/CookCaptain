const { MongoClient } = require('mongodb');
const passwort = 'OVJigPqPN3S626vL';
const username = 'admin';

const main = async () => {
    const uri = `mongodb+srv://${username}:${passwort}@cookcaptain.978poqd.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        // Make the appropriate DB calls
        //! Reads out the Databases
        // await listDatabases(client);
        //! Adds an new User Document to the Collection User
        await addUser(client,{
                passwort: 'yannis',
                username: 'yannis',
                email: 'hi'
            }); 
        //! Reads one User Doc out of the User Col
        // await readUser(client,'yannis');
        
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
//! Reads one User Doc out of the User Col
const readUser = async (client,nameofUser) =>{
    const result = await client.db('CookCaptain').collection('User').findOne({username : nameofUser});
    console.log(result)
}
//! Adds an new User Document to the Collection User
const addUser = async (client,user) =>{
    const result = await client.db("CookCaptain").collection("User").insertOne(user);
    console.log(result.insertedId);
}

//! Reads out the Databases
const listDatabases = async (client) => {
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};



main().catch(console.error);