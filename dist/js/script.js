  // Random landing pic function //

function randombg(){
    var random= Math.floor(Math.random() * 6) + 0;
    var bigSize = ["url('./images/bg-01.png')",
                   "url('./images/bg-02.png')",];
    document.getElementById("random").style.backgroundImage=bigSize[random];
  }

