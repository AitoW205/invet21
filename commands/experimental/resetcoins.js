const Discord = require('discord.js');
const mysql = require('mysql');

var coins = 0;

module.exports = {
    name: "resetcoins",
    description: "...",
    run: (client, message, args) => {

      var con = mysql.createConnection({
        host: process.env.dbhost,
        user: process.env.dbuser,
        password: process.env.dbpass,
        database: process.env.dbuser
      });
      
      con.connect(err => {
        if(err) throw err;
        if(err) console.log("Database error:", err);
      });
      
      var id = message.author.id;
      
      con.query(`SELECT * FROM userCoins WHERE userID = '${id}'`, (err, rows) => {
        if(err) throw err;
      
        con.query(`UPDATE userCoins SET coins = ${coins} WHERE userID = ${id}`);
        message.channel.send("You have succesfully reseted you coins!");
      });
    }
}