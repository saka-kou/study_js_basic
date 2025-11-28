    // basicの間はここにJavaScriptを直接記載しましょう
    // オリジナル PPAPペンパイナッポーアッポーペンを作成しコンソール画面に出力
    // 3つのテキストボックスにそれぞれ単語を入れて「PPAP」ボタンを押すと、単語の間にハイフンを入れて合体させてください
    // 目標出力　Pen-PineApple-Apple-Pen 
    
    // const result = (
    //     document.getElementById("ppap").onclick = () =>
    //     console.log(
    //     document.getElementById("pen").value === "pen" &&
    //     document.getElementById("pineapple").value === "pineapple" &&
    //     document.getElementById("apple").value === "apple" 
    //     && "PPAP" || " ちがうにょん" 
    // );

    // const pen = document.getElementById("pen");
    // const pineapple = document.getElementById("pineapple");
    // const apple = document.getElementById("apple");
    // const result = pen.pineapple.apple;
    const ppap = document.getElementById("ppap");
    const pen = document.getElementById("pen");
    const pineapple = document.getElementById("pineapple"); 
    const apple = document.getElementById("apple"); 
    
    // console.log(pen);
    
    ppap.onclick = () =>{
        // console.log(pen . pineapple. apple);
        console.log(`${pen.value}-${pineapple.value}-${apple.value}-${pen.value}`)
    };