// basicの間はここにJavaScriptを直接記載しましょう
// 定数btnを作成する
const btn = document.getElementById("btn");
// 定数textを作成する
const text = document.getElementById("text");
// 定数btnがクリックされたら
    btn.onclick = () =>{
        // 変数 textValueを作成し、textのvalueを代入する
        let textValue = document.getElementById("text").value;
        // コンソール画面に変数textValueを表示
        console.log(textValue);
        // console.dir(btn);
    }