

let Mapping=[];
let Box_filler_mapping=[];
let box_condition=[];



let player_count=0;
let Player1;
let Player2;

document.getElementById("reset").addEventListener("click",()=>{
    Array.from(document.getElementsByClassName("wall")).forEach(element=>{
        element.style.backgroundColor="#c0a1ea";
    })
     Mapping=[];
 Box_filler_mapping=[];
 box_condition=[];
    for(let i=0;i<n;i++){
        Mapping.push([]);
        Box_filler_mapping.push([]);
        box_condition.push([]);
        for(let j=0;j<m;j++){
            Mapping[i].push([[0,0,0,0]]);
            Box_filler_mapping[i].push([[]]);
            box_condition[i].push([[0]]);
    
        }
    } let boxes=document.getElementsByClassName("boxes");
    Array.from(boxes).forEach((element)=>{
           element.innerText="";
        element.style.boxShadow="none";
    
})
player_count=0;
document.getElementsByClassName("P1_msg")[0].innerText="Wait for Your Turn";
document.getElementsByClassName("P2_msg")[0].innerText="Your Turn";

})


document.getElementsByClassName("startbtn")[0].addEventListener("click",()=>{
    if(document.getElementById("P1init").value.trim().length!=0&&document.getElementById("P2init").value.trim().length!=0
    &&document.getElementById("row").value.trim().length!=0&&document.getElementById("column").value.trim().length!=0
    ){Player1=document.getElementById("P1init").value.toUpperCase();
    Player2=document.getElementById("P2init").value.toUpperCase();
    document.getElementsByClassName("home")[0].style.display="none";
    document.getElementsByClassName("navbar")[0].style.display="flex";
    document.getElementsByClassName("container")[0].style.display="flex";
    document.getElementById("reset").style.display="flex";
     n=document.getElementById("row").value;
    m=document.getElementById("column").value;
    create();
    Array.from(document.getElementsByClassName("wall")).forEach((element)=>{
        element.addEventListener("click",wall_clicked)
    })
    for(let i=0;i<n;i++){
        Mapping.push([]);
        Box_filler_mapping.push([]);
        box_condition.push([]);
        for(let j=0;j<m;j++){
            Mapping[i].push([[0,0,0,0]]);
            Box_filler_mapping[i].push([[]]);
            box_condition[i].push([[0]]);
    
        }
    }}
    else{
        alert("fill the details");
    }
    
})
const box_shadow_remover=(player)=>{
    let boxes=document.getElementsByClassName("boxes");

    if(player==1){
        Array.from(boxes).forEach((element)=>{
            if(element.style.boxShadow=="rgb(255, 255, 255) 0px 0px 0.2rem, rgb(255, 255, 255) 0px 0px 0.2rem, rgb(74, 255, 15) 0px 0px 2rem, rgb(74, 255, 15) 0px 0px 0.8rem, rgb(74, 255, 15) 0px 0px 2.8rem, rgb(74, 255, 15) 0px 0px 1.3rem inset"){
                element.style.boxShadow="none";
            }
        })
    }
    else if(player==2){
        Array.from(boxes).forEach((element)=>{
         
            if(element.style.boxShadow=="rgb(255, 255, 255) 0px 0px 0.2rem, rgb(255, 255, 255) 0px 0px 0.2rem, rgb(255, 0, 0) 0px 0px 2rem, rgb(255, 0, 0) 0px 0px 0.8rem, rgb(255, 0, 0) 0px 0px 2.8rem, rgb(255, 0, 0) 0px 0px 1.3rem inset"){
                element.style.boxShadow="none";
            }
        })
    }
    else{
        Array.from(boxes).forEach((element)=>{
           
                element.style.boxShadow="none";
            
        })
    }
}
const check_winner=()=>{
    let P1=0;
    let P2=0;
    Box_filler_mapping.forEach(element=>{
        element.forEach(value=>{
            value.forEach(data=>{
                if(data==Player1){
                    P1++
                }
                else if(data==Player2){
                    P2++
                }
                else{
                    throw new Error();
                }
            })
           
        })
       
    })
    if(P1>P2){
        box_shadow_remover(1);
        document.getElementsByClassName("P2_msg")[0].innerText="Better Luck Next Time";
        document.getElementsByClassName("P1_msg")[0].innerText="You Won";
    }
    else if(P1==P2){
        box_shadow_remover(3);
        document.getElementsByClassName("P2_msg")[0].innerText="Match Draw";
        document.getElementsByClassName("P1_msg")[0].innerText="Match Draw";
    }
    else{
        box_shadow_remover(2);
        document.getElementsByClassName("P2_msg")[0].innerText="You Won";
        document.getElementsByClassName("P1_msg")[0].innerText="Better Luck Next Time";
    }
}

const check_completition=()=>{
let completed=true;
console.log("box"+ box_condition);
    box_condition.forEach(element=>{
        element.forEach(value=>{
            value.forEach(data=>{
                if(data==0){
                    completed=false;
                   
                }
            })
            
        })
      
    })
    return completed;
}


const box_filled_checker=(i,ii)=>{
    let filled =true;
    for(let j=0;j<4;j++){
        if(Mapping[i][ii][0][j]==0){
            filled=false;
        }
    }
    if(filled){
        let box=document.getElementsByClassName(`b${i}${ii}`)[0];

      if(player_count%2==0){
          Box_filler_mapping[i][ii][0]=Player1;
          box_condition[i][ii][0]=1;
           box.style.boxShadow="0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #ff0000, 0 0 0.8rem #ff0000, 0 0 2.8rem #ff0000, inset 0 0 1.3rem #ff0000" ;
            box.innerText=Player1;
            box.style.color="red";
    }
      else{Box_filler_mapping[i][ii][0]=Player2;
        box_condition[i][ii][0]=1;
           box.innerText=Player2;
        box.style.color="green";
          box.style.boxShadow=  "0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #4aff0f, 0 0 0.8rem#4aff0f, 0 0 2.8rem #4aff0f, inset 0 0 1.3rem #4aff0f"  ;
    }
    }
}

const wall_clicked=(e)=>{
    let wall_class_list=Array.from(e.target.className);
    const i1i=wall_class_list[9]
    const i1ii=wall_class_list[10]
    const i1iii=wall_class_list[11];
   if(Mapping[i1i][i1ii][0][i1iii]==0){ 
    const class_name=wall_class_list[8]+wall_class_list[9]+wall_class_list[10]+wall_class_list[11];
    if(player_count%2==0){document.getElementsByClassName(`${class_name}`)[0].style.backgroundColor="red";
document.getElementsByClassName("P1_msg")[0].innerText="Wait for Your Turn";
document.getElementsByClassName("P2_msg")[0].innerText="Your Turn";

}
    else{document.getElementsByClassName(`${class_name}`)[0].style.backgroundColor="green";
    document.getElementsByClassName("P2_msg")[0].innerText="Wait for Your Turn";
    document.getElementsByClassName("P1_msg")[0].innerText="Your Turn";}
    
    Mapping[i1i][i1ii][0][i1iii]=1;
    box_filled_checker(i1i,i1ii);
    if(wall_class_list.length>12){
       const i2i=wall_class_list[14];
       const i2ii=wall_class_list[15];
       const i2iii=wall_class_list[16];
       Mapping[i2i][i2ii][0][i2iii]=1;
       box_filled_checker(i2i,i2ii);
    }
    if(check_completition()){
        check_winner();
    }
player_count++;}

}




