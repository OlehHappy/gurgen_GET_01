var xhr = new XMLHttpRequest();
// config request
// xhr.open('GET', 'https://api.vk.com/method/user.get?user_ids=198047774&fields=photo', false);
// otherID 949 888 27
// otherID 9125068
// send request
// xhr.send();

/* 
if (xhr.status != 200) {
  console.log('xhr status: ' + xhr.status);
  console.log('xhr statusTXT: ' + xhr.statusText);
} else {
  console.log('Response: ' + xhr.responseText);
};
*/

/*
function show() {
  $.ajax({
    url: "https://api.vk.com/method/users.get?user_ids=91",
    jsonp: "callback",
    dataType: "jsonp",
    success: function(response) {
      var firstPerson = response.response[0];
      draw(firstPerson);
      console.log(firstPerson.first_name);
    }   
  });
};
*/

/*
function draw(firstPerson) {
  var div = document.createElement('div');
  console.log(firstPeson.firs_name);
};
*/

var res = [{"response":[{"uid": 9125068, "first_name": "Gergen", last_name: "Abagyan", "photo": "htttp:/blabla.com/photo.jpg"}]},

 {"response":[{"uid": 9125070, "first_name": "Oleh", last_name: "Abagyan", "photo": "htttp:/blabla.com/photo.jpg"}]},

 {"response":[{"uid": 9125067, "first_name": "Nataliia", last_name: "Abagyan", "photo": "htttp:/blabla.com/photo.jpg"}]},

{"response":[{"uid": 9125069, "first_name": "Vania", last_name: "Abagyan", "photo": "htttp:/blabla.com/photo.jpg"}]}];

function show() {
  var input = document.getElementById('vkId').value;
  for (i = 0; i < res.length; i++) {
    var uid = res[i].response[0].uid;
    var fullName = res[i].response[0].first_name + ' ' + res[i].response[0].last_name;
    if (input == uid) {
      var div = document.createElement('div');
      var img = document.createElement('img');
      var text = document.createTextNode(fullName);
      div.appendChild(text);
      document.body.appendChild(div);
    };
  };
};

