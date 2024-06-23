const recipes=require('../Model/model')


//get recipies

// exports.getAllRecipies=async(req,res)=>{
//     const searchKey=req.query.search
//     // console.log(searchKey);
//     const query={
//         name:{$regex:searchKey,$options:"i"}
//     }
//     try {
//         const result=await recipes.find(query)
//         res.status(200).json(result)
//     } catch (error) {
//         res.status(401).json(error)
//     }
// }

//get all items
exports.getAllRecipies=async(req,res)=>{
    const searchKey=req.query.search
    const query={
        name:{$regex:searchKey,$options:"i"}
    }
    try{
        const result = await recipes.find(query)
        res.status(200).json(result)
    }catch(error){
        res.status(401).json(error)
    }
}

//get an item detail

exports.getARecipieDetail=async(req,res)=>{
    console.log(req);
    const id=req.params
    try {
        const result=await recipes.findOne(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(401).json(error)
    }
}

//add new recipie

exports.addRecipieDetails=async(req,res)=>{
    const {id,name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,tags,userId,image,rating,reviewCount,mealType}=req.body
    try {
        const existingRecipie=await recipes.findOne({name})
        if (existingRecipie) {
            res.status(401).json("Recipie already exist...")
        } else {
            const newRecipie=new recipes({
                id,name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,tags,userId,image,rating,reviewCount,mealType
            })
            await newRecipie.save()
            res.status(200).json(newRecipie)

        }
    } catch (error) {
        res.status(401).json(error)
    }
}

//delete a recipie detail

exports.deleteARecipieDetail=async(req,res)=>{
    const id=req.params
    try {
       const result= await recipes.findOneAndDelete(id)
       res.status(200).json(result)
    } catch (error) {
         res.status(401).json(error)      
    }
}

