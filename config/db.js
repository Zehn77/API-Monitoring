const mongoose = require("mongoose")

const { DATABASE_URL, DATABASE_NAME } = process.env

const connect = () => {
    const urlToDatabase = `${DATABASE_URL}${DATABASE_NAME}`
    mongoose.connect(urlToDatabase, {  })
    .then(() => {
        console.log("Connected to the database");
    })
    .catch((error) =>{
        console.log(`Database connection failed.`)
        console.log(error)
        process.exit(1)
    })
}

exports.connect = connect