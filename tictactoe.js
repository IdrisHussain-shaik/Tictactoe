let btn=document.querySelectorAll(".box");
let turn0=true;
let win=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let count=0;
btn.forEach(box => {
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        } 
        box.disabled=true;
        count=count+1;
        checkWinner();
    })

});
const checkWinner=()=>{
    for(let winner of win){
        let pos1=btn[winner[0]].innerText;
        let pos2=btn[winner[1]].innerText;
        let pos3=btn[winner[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2 && pos2===pos3 && pos3===pos1){
                document.getElementById("win").innerText="Congratulations,The winner is "+pos1;
                disable();
            }
            if(count==9){
                document.getElementById("win").innerText="Game is Draw";
            }
        }
    }
}
function disable(){
    btn.forEach(box=>{
        box.disabled="true";
    })
}
let res=document.querySelector(".reset");
res.addEventListener("click",()=>{
    btn.forEach(box => {
        box.disabled=false;
        box.innerText="";
        document.getElementById("win").innerText="Play the game";
        
    });
})


