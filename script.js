const container = document.querySelector(".container");
const sidebar = document.querySelector(".sidebar");
const dimension = document.querySelector("#change");
const width = 500;
var color = true;
var rainbow = false;
var d = 32;


function createGrid(num){
    for(var i = 0; i<num*num; i++){
        var box = document.createElement("div");
        box.style.width = (width/num -2)+ 'px';
        box.style.height = (width/num -2)+ 'px';
        box.style.border = '1px solid black';
        box.style.backgroundColor = 'white';
        container.appendChild(box);
    }
}
createGrid(32);

sidebar.addEventListener('click', function(e){
    let target = e.target;
    switch(target.id){
        case 'color':
            color = true;
            rainbow = false;
            console.log('color was clicked'+color+rainbow);
            console.log(target);
            break;
        case 'rainbow':
            color = false;
            rainbow = true;
            console.log('rainbow was clicked'+color+rainbow);
            break;
        case 'reset':
            container.replaceChildren();
            console.log(d);
            createGrid(d);
            break;
    }
});

container.addEventListener('mouseover', function(e){
    let target = e.target;
    if(color == true){
        target.style.backgroundColor = '#aaa';
    }else if(rainbow == true){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);


        target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
});

dimension.addEventListener('keydown', function(e){
    const dim = dimension.value;
    if(e.key === 'Enter'){
        d = dim;
        container.replaceChildren();
        createGrid(dim);
    }
});

