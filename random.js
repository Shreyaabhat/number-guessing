
        
        var user=0;
        document.getElementById("add").onclick = function(){
       user= document.getElementById("inp").value;
      var answer = Math.floor(Math.random() * 100)+1;
      console.log(answer);
      if(user == answer){
        alert("you won the game!!")
      }
      else{
        alert("you lost");
      }
    
        }
