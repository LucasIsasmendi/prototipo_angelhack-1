
console.log("hohohoads");
function login(){
  FB.login(function(response) {
    console.log("Logged In");
  }, {scope: 'publish_actions,user_status,friends_status,read_stream'});
}

function getFeed(){

FB.api('/me/home?locale=es_LA', function(response) {
  console.log(response);
});

}


