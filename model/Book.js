var sql = require('../db');
var Book = function(book){
    this.name = book.name;
    this.price = book.price;
    this.author_id = book.author_id;
    this.created_at = new Date();
};

Book.save = async function (book) {
    let promise = new Promise((resolve, reject) => {
        sql.query("INSERT INTO books set ?", book, function (err, res) {
            if(err) {
                reject(err.sqlMessage);
            }
            else{
                sql.query("SELECT * FROM books WHERE id = " + res.insertId + " LIMIT 1 ;", function (err, res) {
                    if(err) {
                        reject(err.sqlMessage);
                    }
                    else{
                        resolve(res[0]);
                    }
                })
            }
        })
    })
    let result = await promise
    return result
};
Book.getAll = async function () {
    let promise = new Promise((resolve, reject) => {
        sql.query("Select * from books", function (err, res) {
            if(err) {
                reject(err.sqlMessage);
            }
            else{
                resolve(res);
            }
        })
    })
    let result = await promise
    return result
};
Book.findId = async function (bookID) {
    let promise = new Promise((resolve, reject) => {
        sql.query("Select * from books WHERE id = " + bookID + ";", function (err, res) {
            if(err) {
                reject(err.sqlMessage);
            }
            else{
                resolve(res);
            }
        })
    })
    let result = await promise
    return result
};
module.exports= Book;