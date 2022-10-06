const {MongoClient} = require('mongodb');
const db = require('../db/db.js');
const mongoose = require('mongoose')

const express = require('express');
const { query } = require('express');
const router = express.Router();


const BooksSchema = new mongoose.Schema(
    {
        _id: {type: mongoose.Schema.Types.ObjectId, require: true},
        author: {type: String, require: true},
        country: {type: String, require: true },
        imageLink: { type: String, require: true },
        language: { type : String, require: true },
        link: { type: String , require: true},
        pages: { type: Number, require: true},
        title: { type: String, require: true },
        year: { type: Number, require: true}
    }
)

const Books = mongoose.model("Books", BooksSchema);

async function allBooks() {
  return Books.find()
}
async function oneBook(query) {
  return Books.findOne(query).lean()
}

/* GET books listing. */

router.get('/:id?', async (req, res) => {
  const id = req.params.id;
  if(!id) {
    const books = await allBooks();
    res.render('books', {
      books: books
    })
  }else {
    const book = await oneBook({ _id: id});
    res.render('book', {
      book: book
    })
  }
});
module.exports = router;
