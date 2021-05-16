'use strict';


function Flower(name, img, season) {
    this.name = name;
    this.img = img;
    this.season = season;
    Flower.all.push(this);

}
Flower.all = [];

const save = document.getElementById('save');
const table = document.getElementById('table');
save.addEventListener('click', render)
function render(event) {
    event.preventDefault();
    let name = document.getElementById('flname').value;
    let img = document.getElementById('fimage').value;
    let season = document.getElementById('season').value;
    new Flower(name, img, season);
    localStorage.setItem('flower', JSON.stringify(Flower.all));
    tableRender();

}
function tableRender() {
    let data = JSON.parse(localStorage.getItem('flower'));
    if (data) {
        for (let i = 0; i < data.length; i++){
            const tRow=document.createElement('tr');
            table.appendChild(tRow);
            const td1=document.createElement('td');
            tRow.appendChild(td1);
            const button= document.createElement('button');
            td1.appendChild(button);
            button.textContent='X';
            button.setAttribute('id',data[i].name);
           // button.addEventListener('click',removeR);
            const td2=document.createElement('td');
            tRow.appendChild(td2);
            const image= document.createElement('img');
            td2.appendChild(image);
            image.src=`./img/${data[i].img}.jpeg`;
            const td3=document.createElement('td');
            tRow.appendChild(td3);
            td3.textContent=data[i].name;
            const td4=document.createElement('td');
            tRow.appendChild(td4);
            td4.textContent=data[i].season;
            
        }
    }


}
tableRender();