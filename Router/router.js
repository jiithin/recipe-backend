const express= require('express')
const router= new express.Router()

const recipeController=require('../Controller/controller')

//get all items
router.get('/recipes',recipeController.getAllRecipies)

//get an item
router.get('/details/:id',recipeController.getARecipieDetail)

//add an item
router.post('/add',recipeController.addRecipieDetails)

//delete an item 
router.delete('/remove/:id',recipeController.deleteARecipieDetail)


module.exports = router;