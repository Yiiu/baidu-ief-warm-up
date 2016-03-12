(function(){
    var header = document.getElementsByTagName('header')[0];
    var content = document.getElementsByClassName('content')[0];
    var profile = document.getElementById('profile');
    var int_box = document.getElementsByClassName('int-box');
    var turn = false;
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
        if(turn){
            clearInterval(pset);
        }else{
            
            for(var i=0;i<int_box.length;i++){
                var c = i*100;
                var c_i = setInterval(function(){
                    int_box[i].style.opacity = "1";
                },c)
            }
            turn = true;
        }
    },1100)
})()