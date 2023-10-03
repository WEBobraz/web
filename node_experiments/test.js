// Node.js
var fs = require('fs');
var https = require('https');

// Создаем файл с Н1 заголвком внутри
fs.writeFile(__dirname + "/index.html", "<h1>HTML from node</h1>", function(error){
    if (error) {
        return console.log(error);
    } else {
      return console.log("Congrats");
    }
})
// Скачиваем каотинку из интернета в туже папку
var myPhotoLocation = 'https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg'
https.get(myPhotoLocation, function(response){
    response.pipe(fs.createWriteStream(__dirname + "/mydog.jpg"));
})