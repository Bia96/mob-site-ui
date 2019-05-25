function randombg(){
    var random= Math.floor(Math.random() * 6) + 0;
    var bigSize = ["url('./images/bg-01.jpg')",
                   "url('./images/bg-02.jpg')",];
    document.getElementById("random").style.backgroundImage=bigSize[random];
  }

  // Random landing pic function //