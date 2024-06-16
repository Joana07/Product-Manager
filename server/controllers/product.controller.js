const Product = require('../models/product.models');    

module.exports.createProduct = (request, response) => {
    
    Product.create(request.body)
        .then(product => response.json(product))
        .catch(err => response.json(err));
}






module.exports.getAllProducts=(request, response) => {
    Product.find({})
    .then(products =>{console.log(products) 
        response.json(products)
    })
    .catch(err =>{
        console.log(err) 
        response.json(err)
    })
}




module.exports.getProduct=(request,response)=>{
    Product.findOne({_id:request.params.id})
    .then((singleItem)=>{
        response.json(singleItem)
    })
    .catch(err=>response.json(err))
}





module.exports.updateProduct=(request,response)=>{
    Product.findOneAndUpdate({_id:request.params.id},request.body,{new:true})
    .then((updatedProduct)=>{
        response.json(updatedProduct)
    })
    .catch(err=>response.json(err))
}



module.exports.deleteProduct=(request,response)=>{
    Product.deleteOne({_id:request.params.id})
    .then((deletedItem)=>{
        response.json(deletedItem)
    })
    .catch(err=>response.json(err))
}