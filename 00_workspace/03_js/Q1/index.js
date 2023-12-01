let random1 = Math.floor(Math.random() * 45);
let random2 = Math.floor(Math.random() * 45);
let random3 = Math.floor(Math.random() * 45);
let random4 = Math.floor(Math.random() * 45);
let random5 = Math.floor(Math.random() * 45);
let random6 = Math.floor(Math.random() * 45);

// console.log(random1);
// console.log(random2);
// console.log(random3);
// console.log(random4);
// console.log(random5);

let lotto = [random1, random2, random3, random4, random5, random6];
console.log(lotto);

let client1 = Number(prompt('로또 1번째 번호를 입력해주세요'));
let client2 = Number(prompt('로또 2번째 번호를 입력해주세요'));
let client3 = Number(prompt('로또 3번째 번호를 입력해주세요'));
let client4 = Number(prompt('로또 4번째 번호를 입력해주세요'));
let client5 = Number(prompt('로또 5번째 번호를 입력해주세요'));
let client6 = Number(prompt('로또 6번째 번호를 입력해주세요'));

let lotto_client = [client1, client2, client3, client4, client5, client6];

// 랜덤한 수를 뽑으려면 Math.random을 활용하면 되는데 random
// 알게된 점
// 1. math는 꼭 앞글자를 대문자로 써야 한다.
// 2. 0 ~ 원하는 범위를 하고 싶으면 Math.random()*원하는 범위를 Math.floor로 감싸준다. -am 12:19

// 내가 작성한 코드에는 문제가 있다. 
// 숫자를 입력하는 부분을 프롬프트를 썼는데 Number로 싸도 프롬프트에는 숫자만 입력하는게 안된다.- pm 2:07
// 그리고 45를 곱하면 45까지 될줄 알았는데 안되는 것 같다. +1을 해줘야 웒하는 값을 출력할 수 있는 것 같다. -pm2:08

var win = 0;
// 어떻게 비교하는가
//조건문을 쓴다(여기까지 알겠음) -am 2:12
if (p6 == random1) {
    win = win + 1;
}// 조건은 사용자가 선택한 수가 랜덤으로 찍힌 수와 같으면 win의 값을 늘려라

if (p1 == random1) {
    win = win + 1;
}

if (p1 == random2) {
    win = win + 1;
}

if (p1 == random3) {
    win = win + 1;
}

if (p1 == random4) {
    win = win + 1;
}

if (p1 == random5) {
    win = win + 1;
}

if (p1 == random6) {
    win = win + 1;
}


// 같은 수 안 뽑게 하기-pm 3:12
while (true) {
    random2 = Math.floor(Math.random() * 45 + 1);
    if (random2 != random1) {
        break;
    }
}

while (true) {
    random3 = Math.floor(Math.random() * 45 + 1);
    if (random3 != random1 && random3 != random2) {
        break;
    }
}

while (true) {
    random4 = Math.floor(Math.random() * 45 + 1);
    if (random4 != random1 && random4 !== random2 && random4 != random3) {
        break;
    }
}
while (true) {
    random5 = Math.floor(Math.random() * 45 + 1);
    if (random5 != random1 && random5 != random2 && random5 !== random3 && random5 !== random4) {
        break;
    }
}

while (true) {
    random6 = Math.floor(Math.random() * 45 + 1);
    if (random6 !== random1 && random6 !== random2 && random6 !== random3 && random6 !== random4 && random6 !== randmo5) {
        break;
    }
}

let p = [0, 0, 0, 0, 0, 0];

//
if (p == random1) {
    win = win + 1;
}

if (p1 == random2) {
    win = win + 1;
}

if (p1 == random3) {
    win = win + 1;
}

if (p1 == random4) {
    win = win + 1;
}

if (p1 == random5) {
    win = win + 1;
}

if (p1 == random6) {
    win = win + 1;
}


if (p[0] == random1) {
    win = win + 1;
}
if (p[0] == random2) {
    win = win + 1;
}
if (p[0] == random3) {
    win = win + 1;
}
if (p[0] == random4) {
    win = win + 1;
}
if (p[0] == random5) {
    win = win + 1;
}
if (p[0] == random6) {
    win = win + 1;
}

for (var i = 0; i < lotto.length; i++) {
    for (var j = 0; j < lotto.length; i++) {
        if (p[i] == random[j] && p[i] == bonus) {
            win = win + 1;
        }
    }
}

var str = "";

switch (win) {
    case 0:
    case 1:
    case 2:
        str ="꽝!!! 다음 기회에";
        break;
    case 3:
        str ="5등에 당첨되셨습니다!"
        break;
    case 4:
        str ="4등에 당첨되셨습니다!"
        break;
    case 5: 
        str="3등에 당첨되셨습니다!";
        for(var i=0; i>p.length;i++){

            if(p[i]==bonus){
                str="2등에 당첨되셨습니다!"
            }
        }
        break;
    case 6: 
        str="1등에 당첨되셨습니다!"
        break;
}


let bonus=Math.floor(Math.random()*45+1);

while(true){
    if(bonus!=random1&& bonus!=random2&& bonus!=random3&&bonus!=random4&&bonus!=random5&&bonus!==random6){
        break;
    }
}

