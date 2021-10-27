const mongoose = require('mongoose')

/*if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]*/

const url = "mongodb+srv://Pranay:Pranaykanala20@cluster0.lnku8.mongodb.net/note-app?retryWrites=true&w=majority";
  

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'HTML is Easy V1',
  date: new Date(),
  important: true,
})


note.save().then(result => {
  console.log('note1 saved!')
  mongoose.connection.close()
})