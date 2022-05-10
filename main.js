//랜덤 번호 지정
//유저가 번호를 입력한다. 그리고 go 라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤 번호 < 유저번호 down!!!
//랜덤 번호 > 유저번호 up !!!
//reset 버튼을 누르면 게임이 리셋된다.
//5번의 기회를 다 쓰면 게임이 끝난다. (더이상 추측 불가, 버튼이 disable)
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깎지 않는다.
//유저가 이미 입력한 숫자를 재입력시 알려준다.기회를 깎지 않는다.

//랜덤번호 지정
let computerNum=0;
let resultArea= document.querySelector(".result-area");
let chanceArea= document.querySelector(".chance-area");
let userInput = document.getElementById("user-input");
let playButton = document.getElementById("play-button");
let resetButton= document.getElementById("reset-button");
let mainImg = document.getElementById("main-img")
let chances=5;
let userValueList=[]; 
let gameOver = false;

playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
chanceArea.innerHTML = `남은 기회: ${chances}회`;
userInput.addEventListener("focus",focusInput);

function pickRandomNum(){
    computerNum=Math.floor(Math.random()*50)+1;
    console.log("정답",computerNum);
}

function play(){
    const userValue= userInput.value;

    if(userValue<1||userValue>50){
        mainImg.src="https://t1.daumcdn.net/cfile/tistory/99AB1B395DFFA09124";
        resultArea.textContent="1에서 50까지의 숫자를 입력해주세요.";
        return;
    }

    if(userValueList.includes(userValue)){
        mainImg.src="https://t1.daumcdn.net/cfile/tistory/99AB1B395DFFA09124";
        resultArea.textContent="이미 입력한 숫자입니다.";
        return;  
    }

    chances --;
    chanceArea.innerHTML=`남은 기회: ${chances}회`;
    userValueList.push(userValue);


    if(userValue > computerNum){
        mainImg.src="https://c.tenor.com/eAt5EfLNIuEAAAAC/joaquin-phoenix-commodus.gif";
        resultArea.textContent="down!";
    } else if(userValue < computerNum){
        mainImg.src="https://media0.giphy.com/media/26BRQTysSSS26jgYM/200.gif";
        resultArea.textContent="up!";
    } else if(userValue == computerNum){
        mainImg.src="http://file3.instiz.net/data/file3/2018/03/17/0/6/1/0619ca0f3c6ee10d50d369866613f165.gif";
        resultArea.textContent="정답입니다!"
        gameOver=true;
        
    }

    
    
    if (gameOver == true){
        playButton.disabled=true;
        return;
    }

    if(chances == 0){
        gameOver=true;
        mainImg.src="https://media3.giphy.com/media/ehOWm8vxKMcZeEvveE/giphy.gif";
        resultArea.textContent="리셋을 눌러 다시 시작!"
    }

    if (gameOver == true){
        playButton.disabled=true;
    }
} 


function focusInput(){
    userInput.value="";
}

function reset(){
    pickRandomNum();
    mainImg.src="https://c.tenor.com/Yys9p7Gv_sMAAAAC/mino-jinu.gif";
    resultArea.textContent="죽기 싫으면 맞춰라"
    chances =5;
    chanceArea.innerHTML = `남은 기회: ${chances}회`;
    userValueList=[];
    gameOver=false;
    playButton.disabled=false;
    userInput.value="";
}































pickRandomNum();