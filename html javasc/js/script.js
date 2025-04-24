/*var num1=prompt("請輸入數字1");
var num2=prompt("請輸入數字2");
num1= parseFloat(num1);
num2= parseFloat(num2);
document.write(num1 +num2);*/
//陣列
/*var scores =[80,15,60,23,18];
var friends = ["小黃","校黑","小綠"];
var score1 = 80;
var score2 = 15;
var score3 = 60;
var score4 = 23;
var score5 = 18;
document.write(friends);*/
//function add(num1,num2){
    //document.write(num1 + num2;)
    //return num1 + num2;}//
//document.write( add(3,6) );//
/*var hungry = true = false;
if(hungry){
    document.write("我就去吃飯");
}

var rainy = true;
if(rainy){
    document.write("我就開車去上班");
}
else{
    document.write("我就揍路去上班");
}*/
/*var Score = 100;
if(Score==100){
    document.write("給他一千元");
} else if(Score >= 80){
    document.write("給他800元");
} else if(Score >= 60){
    document.write("給他500元");
} else {
    document.write("你給我錢");
}*/
/*var score= 90;
var rainy = false;

if(score==100 && rainy){
    document.write("我給你1000元")
}
else{
    document.write("你給我100元")
}*/
/*var score = 100;
var rainy = false;
if(score==100 || !rainy){
    document.write("我給你100")
}
else{
    document.write("你給我100")
}*/
/*function max_num(num1,num2,num3){
    if(nim1>=num2 && num1>=num3){
        return num1;
    }
    else if (num2>=num1 && num2>=num3){
        return num2;
    } 
    else if(num2>=num1 && num2>=num3) {
        return num3;
    }
}
document.write(max_num(10,99,5));*/
/*var person = {
    name:"旻廣",
    age:23,
    is_male:true ,
    print_name:function(){
        document.write(this.name);
    }
};

person.print_name();*/
/*var movie ={
    title:"克在你心底的鳴子",
    marker:"氧氣電影",
    duration:114,
    actors:[
        {
        name:"蔡旻廣",
        age:18,
            is_male:true

    },
    {
        name:"簾子狗",
        age:17,
        is_male:true
    }
    ]
};
document.write(movie.actors[0].name);*/
/*var i = 5;
while(i<=5){
    document.write(i);
    document.write("<br/>");
    i=i++;
}*/
//密碼檢測系統

/*var password = 123456;
var input;
var entry_count = 0;
var entry_limit = 3;
var out_of_limit = false;

while(password!=input &&!out_of_limit){
    entry_count++;
    if(entry_count<=entry_limit){
        input=prompt("請輸入密碼");
    }
    else{
        out_of_limit=true;
    }
    
}
if(out_of_limit){
    alert("超出登入次數");
}
else{
    alert("登入成功");
}*/
/*var i = 0;
while(i<10){
    document.write(i);
    document.write("<br/>");
    i++;
}*/
/*var friends = ["小黑","黑鬼","白人"];
for(var i = 0; i<friends.length; i++ ){
    document.write(friends[i]);
    document.write("<br/>");
}*/
//問答城市
/*var question = [
    {
        prompt:"香蕉甚麼顏色?\n(a)綠色(b)黃色(c)藍色",
        answer:"b"
    },
    {
        prompt:"草莓是甚麼顏色?(a)紅色(b)黃色(c)藍色",
        answer:"a"
    },
    {
        prompt:"一公尺等於幾公分?(a)10(b)20(c)100",
        answer:"c"
    },
];

var score = 0;
for (var i = 0; i < question.length; i++) {
    var input = prompt(question[i].prompt);
    if (input == question[i].answer) {
        score++;
        alert("真聰明你答對了");
    } else {
        alert("笨蛋你答錯了真可愛");
    }
}
alert("共答對了" + score + "題!");*/

//二為陣列
/*var number = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [0]
];
document.write(number[3][0]);*/

/*for(var i=0 ; i<4 ;i++){
for(var j=0 ; j<3 ;j++){
    document.write("i:"+ 1 +",j:" + j);
    document.write("<br/>");
}
}*/

/*class Phone{
    constructor(number,year,is_waterproof){
        this.number = number;
        this.year = year;
        this.is_waterproof = is_waterproof;
    }
    phone_age(){
        return 2025 -this.year;
    }
}
var Phone1 = new Phone("123 ",2010,false);
document.write(Phone1.number);*/
/*var phone1 = {
    number:"123",
    year:2020,
    is_waterproof:false,
    phone_age:function(){
        return 2025 - this.year
    }
}
var phone2 = {
    number:"456",
    year:2011,
    is_waterproof:false,
    phone_age:function(){
        return 2025 - this.year
    }
}
var phone3 = {
    number:"789",
    year:2023,
    is_waterproof:true,
    phone_age:function(){
        return 2025 - this.year
    }
}*/
//獲取html元素
/*document.getElementById("header");
console.log(h1);*/
function handle_click(element) {
    element.innerText = "案闢阿";
    element.style.color = "red";
}

var img = document.getElementById("img");
img.addEventListener("mouseover", function() {
    this.src = "hotpot2.jpg";
});
img.addEventListener("mouseout", function() {
    this.src = "hotpot.jpg";
});
