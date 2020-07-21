const express = require('express')  // express 모듈 가져옴
const app = express()               // express 앱 만들고
const port = 5000                   // 5000 포트를 백서버로 두고
const bodyParser = require('body-parser');

const config = require('./config/key');

const { User } = require("./models/User"); // User.js 에서 객체 가져오기


//bodyParser: 클라이언트에서 오는 정보를 서버에서 분석해서 가져올 수 있게 해줌
//application/x-www-form-urlencoded 이런 형식을 분석해서 가져옴
app.use(bodyParser.urlencoded({extended: true}));

//application/json 을 분석해서 가져옴
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!~~안녕하세요~~ '))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
//port 5000 실행

app.post('/register', (req, res) =>{

    // 회원 가입 할 때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터베이스에 넣어준다.

    const user = new User(req.body)  //인스턴스 만들기

    user.save((err, userinfo) => {
        if(err) return res.json({ succsss: false, err})
        return res.status(200).json({
            success: true
        })
    }) //몽고 DB 메소드
})