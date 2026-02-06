const container = document.querySelector(".container");
const sidebar = document.querySelector(".sidebar");
const width = 500;
var color = true;
var rainbow = false;


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

sidebar.addEventListener('click', function(e){
    let target = e.target;
    switch(target.id){
        case 'color':
            color = true;
            rainbow = false;
            console.log('color was clicked');
        case 'rainbow':
            color = false;
            rainbow = true;
        case 'reset':
            container.replaceChildren();
            createGrid(32);
            color = true;
            rainbow = false;
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



createGrid(32);