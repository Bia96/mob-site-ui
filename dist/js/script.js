  // Random landing pic function //

function randombg(){
    var random= Math.floor((Math.random() * 2) + 1);
    var bigSize = ["url('dist/images/bg-01.png')",
                   "url('dist/images/bg-02.png')",];
    document.getElementById("random").style.backgroundImage=bigSize[random];
    console.log
  }

