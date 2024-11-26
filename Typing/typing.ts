const input= document.getElementById("input") as HTMLInputElement

const ShowInput = () => {
    console.log(input.value)
}


input.addEventListener("keypress",ShowInput)

const textList : string[] = [
"エステルとエーテルはなんか似ている",
"界面活性剤",
"FT-IRでピークを見る",
"sp3混成軌道はメタンでしょ",
"TNTは爆弾よ",
"バイオベースは難しい",
"経験則はお友達",
"メタノールは恐ろしい",
"分子は常に動いているよ",
"ヒドロキシ伸縮振動"
]