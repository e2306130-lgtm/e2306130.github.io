function uranai(myHand){
// 必要となる変数の整理
// じゃんけんの手を格納する変数を用意
let handArrey = ["やはり左","ド真ん中","漢なら右"];

// じゃんけんの結果の文字列を格納する変数を用意
let resultArrey = ["大吉","大大吉","大大大吉"];

let computerHand = 0;

let result = 0;

console.log("あなたの目は：" + handArrey[myHand]);


let rand = Math.random() * 100;
console.log("乱数：" + rand);

let rand_int = Math.floor(rand);
console.log("乱数(整数)：" + rand_int);

computerHand = rand_int % 3;
console.log("computerHand:" + computerHand);
console.log("コンピュータの手は：" + handArrey[computerHand]);

 
// 勝敗判定
// if文？
    if (myHand === 0){
        if(computerHand === 0){
            result = 0
        } else if (computerHand === 1){
            result = 2
        } else if (computerHand === 2){
            result = 1
        }



    } else if (myHand === 1){
         if(computerHand === 0){
            result = 1
        } else if (computerHand === 1){
            result = 0
        } else if (computerHand === 2){
            result = 2
        }

    } else if (myHand === 2){
        if(computerHand === 0){
            result = 2
        } else if (computerHand === 1){
            result = 1
        } else if (computerHand === 2){
            result = 0
        }
    }

    
// 結果の表示
// consoleの表示
    console.log(resultArrey[result])
    console.log("------------------------------")

// HTMLに表示
const janken_result = document.querySelector("#result");
janken_result.textContent = resultArrey[result];

}