console.log("--------------------------------------데이터 타입--------------------------------------------");


const sym1 = Symbol("test"); //심볼 함수로 값 생성
let Symbol1 = sym1;// 변수 초기화
const airline = ['비행가',320,'airbus',['V1',true]];
//다양한 데이터 배열

//빈 객체 생성
const obj1 = {};

//속성을 추가하여 객체 생성
const obj2 = {
    name : 'john',
    age : 30,
    inMale: true,
};

console.log(Symbol1.toString());//문자열 변환 출력
console.log(obj1, obj2,airline); //여러 개 출력

console.log("--------------------------------------------");

const users = new Map(); // 사용자 정보 Map 객체 생성

users.set("user1", { // 사용자 정보 추가
    id: 1, 
    password: "password123",
});

users.set("user2", {
    id: 2, 
    password: "password456",
});

// Map 객체의 모든 사용자 정보 반복 출력
for (const [username, user] of users) {
    console.log(`사용자 이름: ${username}`, `ID: ${user.id}`);
    console.log(`비밀번호: ${user.password}`);
}

// Set 객체 활용 (예), 이름만 저장할 Set 객체 생성
const usernames = new Set();

usernames.add("user1"); // 사용자 이름 추가
usernames.add("user2");

// Set 객체의 모든 사용자 이름 반복 출력
for (const username of usernames) {
    console.log(`사용자 이름: ${username}`);
}