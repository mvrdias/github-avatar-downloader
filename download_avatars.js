// Project 01 - GitHub Avatar Downloader
// Oct, 9 2017

var repoOwner = process.argv[2];
var repoName = process.argv[3];

// test: console.log(`Repo Owner: '${repoOwner}', RepoName: '${repoName}'`);

if (repoOwner && repoName) {


  // Var , Const and Personal Informations
  var request = require('request');
  var fs = require('fs');

  var GITHUB_USER = "mvrdias";
  var GITHUB_TOKEN = "a74fa7a0900348d02b5d7e1c1762515ff30c0f78";

  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN +
                   '@api.github.com/repos/' + repoOwner + '/' +
                   repoName + '/contributors';

  const options = {
    url:
      requestURL,
    headers: {
      "User-Agent": GITHUB_USER
    }
  };


  // Check .. if it is working well
  console.log (requestURL);

  // Download Images
  function downloadImageByURL(url, filePath) {

     request.get(url).pipe(fs.createWriteStream(filePath));
  }

  // Request Infomations
  request(options, function( err, resp, body) {
      var contList = JSON.parse(body);
      //console.log(body);
      //console.log(contList);

      contList.forEach(function(elem) {
         console.log('each', elem.avatar_url, elem.login);
         downloadImageByURL( elem.avatar_url,
                            'avatar/' + elem.login + '.jpg')
      })
  });
} else {
  console.log ("Please, re-enter with corrects datas: download_avatars.js <owner> <repo>");
}