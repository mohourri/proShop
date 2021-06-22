const mongoose = require('mongoose')
const dotenv = require('dotenv')
const products = require('./data/products')
const users = require('./data/users')
const connectDB = require('./config/db.config')

const User = require('./Models/userModel')
const Product = require('./Models/productModel')
const Order = require('./Models/orderModel')

dotenv.config()
connectDB()


const importData = async () =>{

    try{
        await User.deleteMany()
        await Order.deleteMany()
        await Product.deleteMany()

        const insertedUsers = await User.insertMany(users)

        const admin = insertedUsers[0]._id

        const productsToInsert = products.map( product => {
           return {...product, user: admin}
        })

        await Product.insertMany(productsToInsert)

        console.log('Data imported succefully !');
        process.exit()
    
        
    
    }catch(error){
    
        console.log(`${error}`.red.inverse);
        process.exit(1)
        
    }
}

const destroyData = async () => {

    try{
        await User.deleteMany()
        await Order.deleteMany()
        await Product.deleteMany()


        console.log('Data Distroyed succefully !'.green.inverse);
        process.exit()
    
        
    
    }catch(error){
    
        console.log(`${error}`.red.inverse);
        process.exit(1)

    }
}

if(process.argv[2] === '-d'){
    destroyData()
}else{
    importData()
}

