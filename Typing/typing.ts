const input= document.getElementById("input") as HTMLInputElement
const Subject = document.getElementById("Subject") as HTMLInputElement
const Right = document.getElementById("right") as HTMLInputElement
const Wrong = document.getElementById("wrong") as HTMLInputElement




const textList : string[] = [
    "エステルとエーテルはなんか似ている",
    "界面活性剤",
    "FT-IRでピークを見る",
    "sp3混成軌道はメタンでしょ",
    "バイオベースは難しい",
    "経験則はお友達",
    "メタノールは恐ろしい",
    "分子は常に動いているよ",
    "ヒドロキシ伸縮振動を探す",
    "チャー収率はチャーシューとは関係ない",
    "TNTは爆弾よ",
    "UV照射光で修復させる",
    "キラルは語感が可愛い",
    "ジスルフィド結合は欠かせない",
    "有機化学を勉強する",
    "ベンゼンをニトロ化する",
    "触媒を入れて反応を促進させる",
    "たんぱく質が熱で失活する",
    "高分子化学は難しい",
    "研究と勉強は似ているけど違う",
    "白衣が汚れた",
    "学会発表は緊張する",
    "教授に質問する",
    "配向性を考慮する",
    "中和試験は気を付けよう",
    "研究職に憧れる",
    "フィルムを作製する",
    "ホスゲンは猛毒です",
    "ハーバー・ボッシュ法は世界を救った",
    "一日撹拌する間に作業する",
    "反応の進行を確認した",
    "研究室に入り浸る",
    "使い終わったらしっかり洗おう",
    "実験機器を予約する",
    "クロロホルムは危ない",
    "健康診断に行く",
];


const setRandomText = () => {
    const rnd:number = Math.floor(Math.random()*textList.length)
    Subject.textContent = textList[rnd]
}
setRandomText();

const scheduleNextTextChange = () => {
     setInterval(() => { 
        setRandomText(); 
       
},15000);
} // 15秒後にテキストを変更 };


Subject.addEventListener("animationstart", scheduleNextTextChange);



const ShowInput = () => {
    console.log(input.value)
    let count:number = 0;
    if(input.value === Subject.textContent ){
        Right.textContent = "正解です"
        count++
        setRandomText()
        Subject.style.animation = "none"
        requestAnimationFrame(() => {
          
            })
        
      
        setTimeout(() => {
           Right.textContent = ""; 
        },800)
    
    }else{
        Wrong.textContent = "不正解です" 
        
        setTimeout(() => {
            Wrong.textContent = "";
        },800)
    }
    input.value = "";
}
input.addEventListener("keydown", (event) => { 
    if (event.key === "Enter") { 
        ShowInput(); 
    } 
});

input.addEventListener("input",() => {
    ShowInput;
})
