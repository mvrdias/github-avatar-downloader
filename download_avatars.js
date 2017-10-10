var request = require('request');
//console.log('Welcome to the GitHub Avatar Downloader!')
function getRepoContributors(repoOwner, repoName, cb) {

  var GITHUB_USER = "mvrdias";
  var GITHUB_TOKEN = "2126ba4fed94b96b37ea97b7e4b1ac177f4319cc";

  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  const options = {
    url: requestURL,
    headers: {
      "User-Agent": GITHUB_USER
    }
  }

  request(options, cb);

}

getRepoContributors("jquery", "jquery", function(err, result) {
   console.log("Errors:", err);
   console.log("Result:", result.toJSON());
});


