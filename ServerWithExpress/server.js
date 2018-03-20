var express = require('express')
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('public'))
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
})

app.get('/', function (req, res) {
  res.send('Hello, World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.post('/user', function (req, res) {
  console.log('데이터 확인', req.body);

  res.send({state: 'OK', data: req.body});
});
app.get('/user/search', function (req, res) {
  console.log('데이터 확인', req.query.name)

  if (req.query.name == 'John') {
    var users = [{
      userId: 13579,
      name: 'John',
      email: 'yohany_AT_gmail.com',
      company: 'KossLAB'
    }];
  }else{
    var users = [{
    }];
  }

  res.send({result: users});
});
app.get('/user/:userId', function (req, res) {
  console.log(req.params.userId + '의 정보를 가져옵니다');
  var user = {
    userId: 13579,
    name: 'Yang',
    email: 'stardung86@gmail.com',
    company: 'DevFallingstar'
  }

  res.send(user)
});
app.put('/user/:userId', function (req, res) {
  res.send('PUT (Update) ')
});
app.delete('/user/:userId', function (req, res) {
  res.send('DELETE (Delete) ')
});
