let  Gameboard = {Board: [[1 , 2 , 3 ] , 
                     [4 , 5 , 6 ] , 
                     [7 , 8 , 9 ]]
}
let choix = 0;

let choixP = "" ;
let round = 0;
let scoorx = 0;
let scooro = 0;



let x = function(i){
   let para = document.createElement('p')
   para.setAttribute("class", "paragraph")
   const node = document.createTextNode("X");
   para.appendChild(node)  
   para.style.boxSizing = "border-box"
   para.style.fontFamily =  'new_one' ;
   para.style.fontSize = "xx-large";
   para.style.color = "white"
   let elemnt = document.getElementById(`${i}`)
    elemnt.appendChild(para)   
} 

let o = function(i){
   let para = document.createElement('p')
   para.setAttribute("class", "paragraph")
    const node = document.createTextNode("O");
   para.appendChild(node)  
   para.style.boxSizing = "border-box"
   para.style.fontFamily =  'new_one' ;
   para.style.fontSize = "xx-large";
   para.style.color = "white"
   let elemnt = document.getElementById(`${i}`)
   elemnt.appendChild(para)   
} 

let  Freset = function(){ 
   let conter = 1;
   let para = document.querySelectorAll(".paragraph")
   para.forEach(e => {
      e.remove();
   });

   let logo1 = document.querySelectorAll(".logo")
   logo1.forEach(e => {
      e.remove();
   });


   for(let i = 0 ;i<3 ; i++){
      for(let j=0 ; j<3 ; j++){
         Gameboard.Board[i][j] = conter
         conter++
      }}
   
     
                   

}

let  faddX1 = function(){
   let parx = document.createElement('h3')
   parx.setAttribute("class","logo")
      let nodx = document.createTextNode('X') 
      parx.appendChild(nodx)
      addX.appendChild(parx)

}

let faddO1 = function(){ 
   let paro = document.createElement('h3')
   paro.setAttribute("class","logo")
      let nodo = document.createTextNode('O') 
      paro.appendChild(nodo)
      addO.appendChild(paro)

}

let  faddX2 = function(){
   let parx = document.createElement('h3')
   parx.setAttribute("class","logo")
      let nodx = document.createTextNode('X') 
      parx.appendChild(nodx)
      addO.appendChild(parx)

}

let faddO2 = function(){ 
   let paro = document.createElement('h3')
   paro.setAttribute("class","logo")
      let nodo = document.createTextNode('O') 
      paro.appendChild(nodo)
      addX.appendChild(paro)

}

let frestwin = function(){ 
   let conter = 1;
      let para = document.querySelectorAll(".paragraph")
      para.forEach(e => {
         e.remove();
      });
      for(let i = 0 ;i<3 ; i++){
         for(let j=0 ; j<3 ; j++){
            Gameboard.Board[i][j] = conter
            conter++
         }}
      
        
      if(choixP === "X"){
         choix = 0;
      }else { choix = 1;}
      round++

}
let scoor = function(){
   console.log( choix % 2)
   if(choix % 2 === 0){
      scooro++
                 
   }else {scoorx++}
}
let affScour = function(){ 
   if(choixP == "X"){ 
      p1.textContent=scoorx
      p2.textContent=scooro
   }else{
      p2.textContent=scoorx
      p1.textContent=scooro
   }

}
              

                     

const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
 const bord = document.querySelector(".div_Bord")
 const dialoge = document.querySelector('#dialoge')
 const newGame = document.getElementById('NewGame')
 const reset = document.getElementById("Reset")
 const xbtn = document.getElementById("x")
 const obtn = document.getElementById("o")
 const addX = document.querySelector(".div_x")
 const addO = document.querySelector(".div_o")
 const affichRound = document.querySelector(".Hround")
 affichRound.textContent=round;
 

 

 newGame.addEventListener("click",function(){ 
    round = 1 ;
    affichRound.textContent=round;
    scooro = 0;
    scoorx = 0;
    choix = 0;
    p2.textContent= 0
    p1.textContent= 0

   
   dialoge.showModal()
   xbtn.addEventListener("click", function(e){
         e.preventDefault();
         Freset();
         choix = 0;
         choixP = "X"
         faddO1()
         faddX1()
         
         dialoge.close()
   })
   obtn.addEventListener("click", function(e){
      e.preventDefault();
      Freset();
      choix = 1;
      choixP = "O"
      faddO2()
      faddX2()
      
      
      dialoge.close()
   })

   reset.addEventListener("click",function(){
      let conter = 1;
      let para = document.querySelectorAll(".paragraph")
      para.forEach(e => {
         e.remove();
      });
      for(let i = 0 ;i<3 ; i++){
         for(let j=0 ; j<3 ; j++){
            Gameboard.Board[i][j] = conter
            conter++
         }}
      
        
      if(choixP === "X"){
         choix = 0;
      }else { choix = 1;}   
      
   }) 

  

bord.addEventListener("mousedown" , function(e){
   terget = e.target
   index = terget.id 
   
   for(let i = 0 ;i<3 ; i++){
      for(let j=0 ; j<3 ; j++){
         if ( Gameboard.Board[i][j] == index){
            if(choix % 2 === 0){
               x(index)
               Gameboard.Board[i][j] = "x"
               console.log(Gameboard.Board)           
             }else{ o(index)
               Gameboard.Board[i][j] = "o"
            }
            choix++ 
           

         }
      }
   }
   
   console.log(choix)
   
});

bord.addEventListener("mouseup" , function(){
   
   if(Gameboard.Board[0][1] == Gameboard.Board[1][1]  ){
      if(Gameboard.Board[0][1] == Gameboard.Board[2][1]){
         scoor()
         affScour()
         frestwin();
         alert("we have winner")
         affichRound.textContent=round;
      }
     
   }
   if(Gameboard.Board[1][0] == Gameboard.Board[1][1]  ){
      if (Gameboard.Board[1][0] == Gameboard.Board[1][2]){
      scoor()
      affScour()
      frestwin();
         alert("we have winner")
         affichRound.textContent=round;
   }}

   if(Gameboard.Board[0][0] == Gameboard.Board[0][1]  ){
      if (Gameboard.Board[0][0] == Gameboard.Board[0][2]){
      scoor()
      affScour()
      frestwin();
      alert("we have winner")
      affichRound.textContent=round;
   }
   } if(Gameboard.Board[2][0] == Gameboard.Board[2][1]  ){
      if (Gameboard.Board[2][0] == Gameboard.Board[2][2]){
      scoor()
      affScour()
      frestwin();
      alert("we have winner")
      affichRound.textContent=round;
   }
   } if(Gameboard.Board[0][0] == Gameboard.Board[1][0]  ){
      if (Gameboard.Board[0][0] == Gameboard.Board[2][0]){
      scoor()
      affScour()
      frestwin();
      alert("we have winner")
      affichRound.textContent=round;
   }
   } if(Gameboard.Board[0][2] == Gameboard.Board[1][2]  ){
      if (Gameboard.Board[0][2] == Gameboard.Board[2][2]){
      scoor()
      affScour()
      frestwin();
      alert("we have winner")
      affichRound.textContent=round;
   }

   } if(Gameboard.Board[0][0] == Gameboard.Board[1][1]  ){
      if (Gameboard.Board[0][0] == Gameboard.Board[2][2]){
      scoor()
      affScour()
      frestwin();
      alert("we have winner")
      affichRound.textContent=round;
   }
   } if(Gameboard.Board[0][2] == Gameboard.Board[1][1]  ){
      if (Gameboard.Board[0][2] == Gameboard.Board[2][0]){
      scoor()
      affScour()
      frestwin();
      alert("we have winner")
      affichRound.textContent=round;
   }
   } if(Gameboard.Board[1][0] == Gameboard.Board[1][1]  ){
      if (Gameboard.Board[1][0] == Gameboard.Board[1][2]){
  
      scoor()
      affScour()
      frestwin();
         alert("we have winner")
         affichRound.textContent=round;
   }
   }
      




  
   
})
 






 

 });
