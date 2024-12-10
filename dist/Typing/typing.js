"use strict";
const input = document.getElementById("input");
const Subject = document.getElementById("Subject");
const Right = document.getElementById("right");
const Wrong = document.getElementById("wrong");
const timer = document.getElementById("timer");
const Answer = document.getElementById("correctanswers");
let Time = 30;
let count = 0;
const countdown = setInterval(() => {
    timer.textContent = `制限時間: ${Time}秒`;
    Time--;
    if (Time < 0) {
        finish();
    }
}, 1000);
const finish = () => {
    clearInterval(countdown);
    const fadeout = () => {
        input.style.display = "none";
        Subject.style.display = "none";
        Right.style.display = "none";
        Wrong.style.display = "none";
    };
    fadeout();
    setTimeout(() => {
        if (count < 5) {
            Answer.textContent = `正解数は${count}です。 もう少し頑張りましょう`;
            Answer.style.animation = "fadeup 2s ease-in-out forwards";
        }
        else if (count < 10) {
            Answer.textContent = `正解数は${count}です。 いいですね。その調子です`;
            Answer.style.animation = "fadeup 2s ease-in-out forwards";
        }
        else {
            Answer.textContent = `正解数は${count}です。 素晴らしいです。よく頑張りましたね!`;
            Answer.style.animation = "fadeup 2s ease-in-out forwards";
        }
    }, 1000);
};
const textList = [
    "エステルとエーテル",
    "界面活性剤",
    "FT-IRでピークを見る",
    "sp3混成軌道",
    "バイオベースは難しい",
    "経験則はお友達",
    "メタノールは恐ろしい",
    "ブラウン運動",
    "ヒドロキシ伸縮振動",
    "チャー収率",
    "TNTは爆弾よ",
    "UV照射光で修復させる",
    "キラルは語感が可愛い",
    "ジスルフィド結合",
    "有機化学を勉強する",
    "ベンゼンをニトロ化する",
    "触媒を入れる",
    "真空乾燥機",
    "高分子化学は難しい",
    "研究と勉強は違う",
    "白衣が汚れた",
    "学会発表は緊張する",
    "教授に質問する",
    "配向性を考慮する",
    "中和試験は気を付けよう",
    "研究職に憧れる",
    "フィルムを作製する",
    "ホスゲンは猛毒です",
    "ハーバー・ボッシュ法",
    "一日撹拌する間に作業する",
    "反応の進行を確認した",
    "研究室に入り浸る",
    "使い終わったらしっかり洗おう",
    "実験機器を予約する",
    "クロロホルムは危ない",
    "健康診断に行く",
    "良識を語る",
    "就活はつらい",
    "分析装置は大切に使おう",
    "呑み会は誘われたら行こう",
    "サンプルを引っ張る",
    "教室から退出する",
    "教養を身に着ける",
    "遅刻しないようにしよう",
    "機嫌を良くする",
    "手袋を付ける",
    "文献を探す",
    "純水で洗う",
    "学食で欧風カレー",
    "工業大学生",
    "お酒で酔いつぶれる",
    "カラオケでオールする"
];
const setRandomText = () => {
    const rnd = Math.floor(Math.random() * textList.length);
    Subject.textContent = textList[rnd];
};
setRandomText();
const scheduleNextTextChange = () => {
    setInterval(() => {
        setRandomText();
        scheduleNextTextChange();
    }, 15000); // 15秒後にテキストを変更 };
};
Subject.addEventListener("animationstart", scheduleNextTextChange);
const ShowInput = () => {
    console.log(input.value);
    if (input.value === Subject.textContent) {
        Right.textContent = "正解です";
        count++;
        console.log();
        setRandomText();
        setTimeout(() => {
            Right.textContent = "";
        }, 500);
    }
    else {
        Wrong.textContent = "不正解です";
        setRandomText();
        setTimeout(() => {
            Wrong.textContent = "";
        }, 800);
    }
    input.value = "";
};
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        ShowInput();
    }
});
input.addEventListener("input", () => {
    ShowInput;
});
