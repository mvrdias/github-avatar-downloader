var request = require('request');
var fs = require('fs');

var GITHUB_USER = "mvrdias";
var GITHUB_TOKEN = "a74fa7a0900348d02b5d7e1c1762515ff30c0f78";

var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + 'jquery' + '/' + 'jquery' + '/contributors';

const options = {
  url:
    requestURL,
  headers: {
    "User-Agent": GITHUB_USER
  }
};

console.log (requestURL);

function downloadImageByURL(url, filePath) {

   request.get(url).pipe(fs.createWriteStream(filePath));
}

request(options, function( err, response, body) {
    var contList = JSON.parse(body);
    console.log(body);
    console.log(contList);
    contList.forEach(function(element) {
       console.log('each', element.avatar_url, element.login);
       downloadImageByURL( element.avatar_url,
                          'avatar/' + element.login + '.jpg')
       console.log ("downloads done !!!");
    })
});