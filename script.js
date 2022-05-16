let startgame = document.querySelector('.startgame');
let ques1 = document.querySelector('.ques1');
let main = document.querySelector('.main');
let b11c = document.querySelector('.b11c');
let b11n = document.querySelector('.b11n');
let ip11 = document.querySelector('#ip11');
let ip12 = document.querySelector('#ip12');
let ip13 = document.querySelector('#ip13');
let ip14 = document.querySelector('#ip14');
let ip21 = document.querySelector('#ip21');
let ip22 = document.querySelector('#ip22');
let ip23 = document.querySelector('#ip23');
let ip31 = document.querySelector('#ip31');
let ip32 = document.querySelector('#ip32');
let ip33 = document.querySelector('#ip33');
let ip34 = document.querySelector('#ip34');
let ip24 = document.querySelector('#ip24');
let ip41 = document.querySelector('#ip41');
let ip42 = document.querySelector('#ip42');
let ip43 = document.querySelector('#ip43');
let ip51 = document.querySelector('#ip51');
let ip52 = document.querySelector('#ip52');
let ip53 = document.querySelector('#ip53');
let ip54 = document.querySelector('#ip54');
let ip44 = document.querySelector('#ip44');
let ip61 = document.querySelector('#ip61');
let ip62 = document.querySelector('#ip62');
let ip63 = document.querySelector('#ip63');
let ip64 = document.querySelector('#ip64');
let ip71 = document.querySelector('#ip71');
let ip72 = document.querySelector('#ip72');
let ip73 = document.querySelector('#ip73');
let ip74 = document.querySelector('#ip74');
let ip81 = document.querySelector('#ip81');
let ip82 = document.querySelector('#ip82');
let ip83 = document.querySelector('#ip83');
let ip84 = document.querySelector('#ip84');
let ip91 = document.querySelector('#ip91');
let ip92 = document.querySelector('#ip92');
let ip93 = document.querySelector('#ip93');
let ip94 = document.querySelector('#ip94');
let ip101 = document.querySelector('#ip101');
let ip102 = document.querySelector('#ip102');
let ip103 = document.querySelector('#ip103');
let ip104 = document.querySelector('#ip104');
let wrong = document.querySelector('.wrong');
let right = document.querySelector('.right');
let ques2 = document.querySelector('.ques2');
let b21c = document.querySelector('.b21c');
let b21n = document.querySelector('.b21n');
let ques3 = document.querySelector('.ques3');
let b31c = document.querySelector('.b31c');
let b31n = document.querySelector('.b31n');
let ques4 = document.querySelector('.ques4');
let b41c = document.querySelector('.b41c');
let b41n = document.querySelector('.b41n');
let ques5 = document.querySelector('.ques5');
let b51c = document.querySelector('.b51c');
let b51n = document.querySelector('.b51n');
let ques6 = document.querySelector('.ques6');
let b61c = document.querySelector('.b61c');
let b61n = document.querySelector('.b61n');
let ques7 = document.querySelector('.ques7');
let b71c = document.querySelector('.b71c');
let b71n = document.querySelector('.b71n');
let b81n = document.querySelector('.b81n');
let b81c = document.querySelector('.b81c');
let ques8 = document.querySelector('.ques8');
let ques9 = document.querySelector('.ques9');
let b91n = document.querySelector('.b91n');
let b91c = document.querySelector('.b91c');
let ques10 = document.querySelector('.ques10');
let b101n = document.querySelector('.b101n');
let b101c = document.querySelector('.b101c');
let scor = document.querySelector('.scor');
let result = document.querySelector('.result');
let reportcard = document.querySelector('.reportcard');
let score_card = document.querySelector('.score_card')
let score = 0;

startgame.addEventListener('click',q1_fun);
function q1_fun(){
    ques1.classList.remove('hide');
    main.classList.add('hide');
    

}


b11c.addEventListener('click',check_one);



function check_one(){
    if (ip11.checked == true){
        wrong.classList.remove('hide');
        b11n.addEventListener('click',clear_one);

    }
    else if (ip12.checked == true){
        wrong.classList.remove('hide');
        b11n.addEventListener('click',clear_one);
    }
    else if (ip13.checked == true){
        wrong.classList.remove('hide');
        b11n.addEventListener('click',clear_one);
    }
    else if(ip14.checked == true){
        right.classList.remove('hide');
        b11n.addEventListener('click',clear_one);
        score = score +1;
    }
}


function clear_one(){
    wrong.classList.add('hide');
    right.classList.add('hide');
    ques1.classList.add('hide');
    ques2.classList.remove('hide');
    b21c.addEventListener('click',check_two)


}

function check_two(){
    if (ip21.checked == true){
        wrong.classList.remove('hide');
        b21n.addEventListener('click',clear_two);

    }
    else if (ip22.checked == true){
        right.classList.remove('hide');
        b21n.addEventListener('click',clear_two);
        score = score +1;
    }
    else if (ip23.checked == true){
        wrong.classList.remove('hide');
        b21n.addEventListener('click',clear_two);
    }
    else if(ip24.checked == true){
        wrong.classList.remove('hide');
        b21n.addEventListener('click',clear_two);
    }
    
}

function clear_two(){
    wrong.classList.add('hide');
    right.classList.add('hide');
    ques2.classList.add('hide');
    ques3.classList.remove('hide');
    b31c.addEventListener('click',check_three)

}

function check_three(){
    if (ip31.checked == true){
        wrong.classList.remove('hide');
        b31n.addEventListener('click',clear_three);

    }
    else if (ip32.checked == true){
        wrong.classList.remove('hide');
        b31n.addEventListener('click',clear_three);
    }
    else if (ip33.checked == true){
        right.classList.remove('hide');
        b31n.addEventListener('click',clear_three);
        score = score +1;
    }
    else if (ip34.checked  == true){
        wrong.classList.remove('hide');
        b31n.addEventListener('click',clear_three);
    }
    
}

function clear_three(){
    wrong.classList.add('hide');
    right.classList.add('hide');
    ques3.classList.add('hide');
    ques4.classList.remove('hide');
    b41c.addEventListener('click',check_four);

}

function check_four(){
    if (ip41.checked == true){
        wrong.classList.remove('hide');
        b41n.addEventListener('click',clear_four);

    }
    else if (ip42.checked == true){
        wrong.classList.remove('hide');
        b41n.addEventListener('click',clear_four);
    }
    else if (ip43.checked == true){
        right.classList.remove('hide');
        b41n.addEventListener('click',clear_four);
        score = score +1;
    }
    else if (ip44.checked  == true){
        wrong.classList.remove('hide');
        b41n.addEventListener('click',clear_four);
    }
   
}
function clear_four(){
    wrong.classList.add('hide');
    right.classList.add('hide');
    ques4.classList.add('hide');
    ques5.classList.remove('hide');
    b51c.addEventListener('click',check_five);
}

function check_five(){
    if (ip51.checked == true){
        wrong.classList.remove('hide');
        b51n.addEventListener('click',clear_five);

    }
    else if (ip52.checked == true){
        right.classList.remove('hide');
        b51n.addEventListener('click',clear_five);
        score = score +1;
    }
    else if (ip53.checked == true){
        wrong.classList.remove('hide');
        b51n.addEventListener('click',clear_five);
    }
    else if(ip54.checked  == true){
        wrong.classList.remove('hide');
        b51n.addEventListener('click',clear_five);
    }
   
}

function clear_five(){
    wrong.classList.add('hide');
    right.classList.add('hide');
    ques5.classList.add('hide');
    ques6.classList.remove('hide');
    b61c.addEventListener('click',check_six);
}
function check_six(){
    if (ip61.checked == true){
        wrong.classList.remove('hide');
        b61n.addEventListener('click',clear_six);

    }
    else if (ip62.checked == true){
        right.classList.remove('hide');
        b61n.addEventListener('click',clear_six);
        score = score +1;
    }
    else if (ip63.checked == true){
        wrong.classList.remove('hide');
        b61n.addEventListener('click',clear_six);
    }
    else if(ip64.checked  == true){
        wrong.classList.remove('hide');
        b61n.addEventListener('click',clear_six);
    }
    
}

function clear_six(){
    wrong.classList.add('hide');
    right.classList.add('hide');
    ques6.classList.add('hide');
    ques7.classList.remove('hide');
    b71c.addEventListener('click',check_seven);
}
function check_seven(){
    if (ip71.checked == true){
        wrong.classList.remove('hide');
        b71n.addEventListener('click',clear_seven);

    }
    else if (ip72.checked == true){
        wrong.classList.remove('hide');
        b71n.addEventListener('click',clear_seven);
    }
    else if (ip73.checked == true){
        wrong.classList.remove('hide');
        b71n.addEventListener('click',clear_seven);
    }
    else if(ip74.checked  == true){
        right.classList.remove('hide');
        b71n.addEventListener('click',clear_seven);
        score = score +1;
    }
   
}

function clear_seven(){
    wrong.classList.add('hide');
    right.classList.add('hide');
    ques7.classList.add('hide');
    ques8.classList.remove('hide');
    b81c.addEventListener('click',check_eight);
}

function check_eight(){
    if (ip81.checked == true){
        wrong.classList.remove('hide');
        b81n.addEventListener('click',clear_eight);

    }
    else if (ip82.checked == true){
        wrong.classList.remove('hide');
        b81n.addEventListener('click',clear_eight);
    }
    else if (ip83.checked == true){
        right.classList.remove('hide');
        b81n.addEventListener('click',clear_eight);
        score = score +1;
    }
    else if (ip84.checked == true){
        wrong.classList.remove('hide');
        b81n.addEventListener('click',clear_eight);
    }
   
}
function clear_eight(){
    wrong.classList.add('hide');
    right.classList.add('hide');
    ques8.classList.add('hide');
    ques9.classList.remove('hide');
    b91c.addEventListener('click',check_nine);
}

function check_nine(){
    if (ip91.checked == true){
        wrong.classList.remove('hide');
        b91n.addEventListener('click',clear_nine);

    }
    else if (ip92.checked == true){
        right.classList.remove('hide');
        b91n.addEventListener('click',clear_nine);
        score = score +1;
    }
    else if (ip93.checked == true){
        wrong.classList.remove('hide');
        b91n.addEventListener('click',clear_nine);
    }
    else if(ip94.checked == true){
        wrong.classList.remove('hide');
        b91n.addEventListener('click',clear_nine);
    }
   
}

function clear_nine(){
    wrong.classList.add('hide');
    right.classList.add('hide');
    ques9.classList.add('hide');
    ques10.classList.remove('hide');
    b101c.addEventListener('click',check_ten);
}

function check_ten(){
        if (ip101.checked == true){
        right.classList.remove('hide');
        b101n.addEventListener("click",end_fun);
        score = score +1;

    }
    else if (ip102.checked == true){
        wrong.classList.remove('hide');
        b101n.addEventListener("click",end_fun);
        
    }
    else if (ip103.checked == true){
        wrong.classList.remove('hide');
        b101n.addEventListener("click",end_fun);
    }
    else if (ip104.checked == true){
        wrong.classList.remove('hide');
        b101n.addEventListener("click",end_fun);
    }
}

console.log(score);

function end_fun(){
    b101n.addEventListener('click',thank_fun);
}

function thank_fun(){
    ques10.classList.add('hide');
    wrong.classList.add('hide');
    right.classList.add('hide');
    scor.classList.remove('hide');
    score_card.addEventListener('click',show_result);

}

function show_result(){
    reportcard.classList.remove('hide')
    scor.classList.add('hide');
    result.textContent = "Your Score is " + score + " out of 10"
    console.log(score);
}