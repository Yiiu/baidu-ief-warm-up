(function(){
    var header = document.getElementsByTagName('header')[0];
    var content = document.getElementsByClassName('content')[0];
    var profile = document.getElementById('profile');
    var turn = false;
    var iturn = false;
    var sheader = setInterval(function(){        
        if(turn){
            clearInterval(sheader);
        }else{
            header.style.opacity = "1";
            content.className = "content me";
            turn = true;
        }
    },1000)
    var pset = setInterval(function(){
        if(iturn){
            clearInterval(pset);
        }else{
            profile.style.opacity = "1";
            iturn = true;
        }
    },1600)
})()