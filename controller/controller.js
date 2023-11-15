const getAllData = (req, res) => {
    return res.status(200).json([{name: 'Jumong', age: 24 }, { name: "Toxir", age: 46 }])
}

const saveData = (req, res) => {

    res.status(200).json({ 
        message: 'Student data added successfully',
        newUser: req.body
    });
}

module.exports = {
    getAllData,
    saveData
}