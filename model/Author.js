var sql = require('../db');
var Author = function(author){
    this.name = author.name;
    this.created_at = new Date();
};

Author.save = async function (author) {
    let promise = new Promise((resolve, reject) => {
        sql.query("INSERT INTO authors SET ?", author, function (err, res) {
            if(err) {
                reject(err.sqlMessage);
            }
            else{
                sql.query("SELECT * FROM authors WHERE id = " + res.insertId + " LIMIT 1 ;", function (err, res) {
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
Author.getAll = async function () {
    let promise = new Promise((resolve, reject) => {
        sql.query("SELECT * FROM authors", function (err, res) {
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
Author.findId = async function (userID) {
    let promise = new Promise((resolve, reject) => {
        sql.query("SELECT * FROM authors WHERE id = " + userID + " LIMIT 1 ;", function (err, res) {
            if(err) {
                reject(err.sqlMessage);
            }
            else{
                resolve(res[0]);
            }
        })
    })
    let result = await promise
    return result
};
Author.findName = function (name, result) {
    sql.query("Select * from authors WHERE name = " + name + ";", function (err, res) {
        if(err) {
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};
module.exports= Author;