"use strict";
const input = document.getElementById("input");
const Subject = document.getElementById("Subject");
const ShowInput = () => {
    console.log(input.value);
};
input.addEventListener("keypress", ShowInput);
const textList = [
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
];
const setRandomText = () => {
    const rnd = Math.floor(Math.random() * textList.length);
    Subject.textContent = textList[rnd];
};
setRandomText();
Subject.addEventListener("animationstart", () => {
    setInterval(() => {
        setRandomText();
    }, 10000);
});
