let n=3;
let m=3;
const create=()=>{let box=document.getElementsByClassName("box")[0];



let row1=document.createElement("div");
row1.className="rows";
let row1_innercode="";
for(let i=0;i<m;i++){
    row1_innercode=row1_innercode+` <div class="Tw wall w0${i}0"></div>`;
}
row1.innerHTML=row1_innercode;
box.appendChild(row1);

for(let i=0;i<n-1;i++){
    let code=`<div class="Lw wall w${i}03"></div>
    <div class="boxes b${i}0"></div>`;
    for(let j=0;j<m-1;j++){
        code=code+` <div class="Lw wall w${i}${j}1 w${i}${j+1}3"></div>
        <div class="boxes b${i}${j+1}"></div>`;
    }
    code=code+` <div class="Rw wall w${i}${m-1}1"></div>`;
    box.innerHTML=box.innerHTML+ `<div class="rows">${code}</div>`;
    code="";
    for(let j=0;j<m;j++){
        code=code+` <div class="Bw wall w${i}${j}2 w${i+1}${j}0"></div>`;
    }
    box.innerHTML=box.innerHTML+ `<div class="rows">${code}</div>`;
    
}
let code=`<div class="Lw wall w${n-1}03"></div>
<div class="boxes b${n-1}0"></div>`;
for(let i=0;i<m-1;i++){
    code=code+` <div class="Lw wall w${n-1}${i}1 w${n-1}${i+1}3"></div>
    <div class="boxes b${n-1}${i+1}"></div>`;
}
code=code+` <div class="Rw wall w${n-1}${m-1}1"></div>`;
box.innerHTML=box.innerHTML+ `<div class="rows">${code}</div>`;
code="";
    for(let j=0;j<m;j++){
        code=code+`  <div class="Bw wall w${n-1}${j}2"></div>`;
    }
    box.innerHTML=box.innerHTML+ `<div class="rows">${code}</div>`;
}