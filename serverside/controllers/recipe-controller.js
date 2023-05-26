const {getDB, getClient} = require('../db/database.js');

const addRecipe = async (req,res) => {
    try{
        const recipe = req.body;


        const  client = await getClient();
        const result = await client.db("CookCaptain").collection("Recipe").insertOne(recipe);
        console.log(result);
        return res.status(200).json({'id': result.insertedId});
    }catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
    

}

module.exports = {
    addRecipe
  };