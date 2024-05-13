const mongoose = require('mongoose')

const connection = mongoose.connect(
  process.env.MONGO_URL || 'mongodb://localhost:27017/',
  //   {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //     useCreateIndex: true,
  //     useFindAndModify: false
  //   }
)

connection
  .then(db => {
    console.log('Database is connected')
  })
  .catch(err => {
    console.log('Error in connection')
  })

module.exports = connection
