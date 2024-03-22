window.onload = function () {
    var c_i = 0;
    var ti_ = window.setInterval(a_C, 5000);
    console.log("触发了0");
    var bu_li = document.getElementById("but_").getElementsByTagName("li");
    var pi_di = document.getElementById("b_p").getElementsByTagName("div");


    for (var i = 0; i < bu_li.length; i++) {

        bu_li[i].onmouseover = function () {
            if (ti_) {
                clearInterval(ti_);
            }
        

        for (var j = 0; j < pi_di.length; j++) {
            if (bu_li[j] == this) {
                c_i = j;
                bu_li[j].className = "current";
                pi_di[j].className = "current";
            }
            else {
                pi_di[j].className = "pic";
                bu_li[j].className = "bu_";
            }
        }
    
    }
        bu_li[i].onmouseout=function(){
            ti_=setInterval(a_C,5000);
        }

    }

    function a_C(){
        ++c_i;
        if(c_i==bu_li.length){
            c_i=0;
        }

        for(var i=0;i<bu_li.length;i++){
            if (i == c_i) {
                bu_li[i].className = "current";
                pi_di[i].className = "current";
            }
            else {
                pi_di[i].className = "pic";
                bu_li[i].className = "bu_";
            }
        }
    }

}