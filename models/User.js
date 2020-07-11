const mongoose = reuiqre('mongoose');   // 몽구스 가져오기

    /*
    <MongoDB Model&Schema>
    Model : 스키마를 감싸주는 역할
    Schema : 정보들 하나하나를 지정해줄 수 있는 것
    */


const userSchema = mongoose.Schema({    //몽구스를 이용해서 스키마 생성
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim : true,    //사용자로부터 이메일 주소 입력 받을 때 혹시 공백 있으면 공백없애주는 역할
        unique: 1       //똑같은 이메일 쓰지 못하게 unique 조건 걸어둠
    },
    password: {
        type:String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { //관리자(1)인지 일반유저(0)인지 권한이 다 다르기 때문에 주는 값
        type: Number,
        default: 0
    },
    image: String,
    token: { // 유효성 관리
        type: String
    },
    tokenExp: { // token이 사용할 수 있는 기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema) //모델로 스키마를 감싸줌

module.exports = { User }