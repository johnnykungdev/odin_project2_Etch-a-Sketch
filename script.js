const container = document.getElementById('container');
const grid = document.createElement('div');

container.style.cssText = "height: 100%; margin: 5%; border: 1px solid black;";

var body_height = document.body.style.height;

const btn1 = document.getElementById('size 1');
const btn2 = document.getElementById('size 2');
const btn3 = document.getElementById('size 3');
const clear = document.getElementById('clear');


btn1.addEventListener('click',function(){
    var old_grid = document.querySelector('.new');
    
    if (old_grid) {
        old_grid.remove();
    }

    var grid = document.createElement('div');

    for (let i = 0; i < 16*16; i++) {
        var box = document.createElement('div');
        box.classList.add('box');
        box.style.cssText = "border: 0.5px solid black;";
        grid.appendChild(box);

        box.addEventListener('mouseover', function(e){
            e.target.classList.add('change');
            if(e.target.className = "box change"){
                e.target.style.background = "black";
            }
        })
    }

    grid.classList.add('new');
    grid.style.cssText ="width: 80%; height: 100%; margin: auto; display: grid; grid-template-columns : repeat(16, 1fr); grid-template-rows : repeat(16,1fr);";    

    container.appendChild(grid);
})

btn2.addEventListener('click', function(){
    var old_grid = document.querySelector('.new');
    
    if (old_grid) {
        old_grid.remove();
    }

    var grid = document.createElement('div');

    for (let i = 0; i < 25*25; i++) {
        var box = document.createElement('div');
        box.classList.add('box');
        box.style.cssText = "border: 0.5px solid black;";
        grid.appendChild(box);

        box.addEventListener('mouseover', function(e){
            e.target.classList.add('change');
            if(e.target.className = "box change"){
                e.target.style.background = "black";
            }
        })
    }

    grid.classList.add('new');
    grid.style.cssText ="width: 80%; height: 100%; margin: auto; display: grid; grid-template-columns : repeat(25, 1fr); grid-template-rows : repeat(25,1fr);";    

    container.appendChild(grid);
})

btn3.addEventListener('click', function (){
    var old_grid = document.querySelector('.new');
    
    if (old_grid) {
        old_grid.remove();
    }

    var grid = document.createElement('div');

    for (let i = 0; i < 36*36; i++) {
        var box = document.createElement('div');
        box.classList.add('box');
        box.style.cssText = "border: 0.5px solid black;";
        grid.appendChild(box);

        box.addEventListener('mouseover', function(e){
            e.target.classList.add('change');
            if(e.target.className = "box change"){
                e.target.style.background = "black";
            }
        })
    }

    grid.classList.add('new');
    grid.style.cssText ="width: 80%; height: 100%; margin: auto; display: grid; grid-template-columns : repeat(36, 1fr); grid-template-rows : repeat(36,1fr);";    

    container.appendChild(grid);
})

clear.addEventListener('click', function(){
    var box_num = document.querySelectorAll('.box');
    
    for (let i = 0; i < box_num.length; i++){
        if (box_num[i].className == "box change") {
            box_num[i].classList.remove('change');
            box_num[i].style.background = "white";
        }
    }
})




