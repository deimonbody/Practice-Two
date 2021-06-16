
export default function runRover(commandsList) {
    let x = 0,
        y = 0,
        direct = "up";                                        //direction Of Our Machine

    if(!commandsList.length) return {x:0,y:0};                 //If arr is empty

  commandsList.sort((a,b)=>a.order - b.order);                //Sort arr by Ascending
  let commands = commandsList.map((x)=>x.command);             //Create arr or comands
  
  //sort our Arr of comands (delete unnecessary comands)
  commands = commands.filter((x)=>{if(x == "turn right" || x == "turn left" || x.slice(0,2) == "go"){return x}});
  
  if(!commands.length)  return {x:0,y:0} 
  //change direct if it`s first in our arr
  
  if(commands[0].slice(0,2) != "go"){
    if(commands[0] == "turn left") direct = "left"
    else direct = "right";
    commands.shift()
  }

  //
  commands.map((cur)=> {
    if(cur.slice(0,2) == "go"){                         //change x,y by direct
      let num = Number(cur.slice(2,cur.length))         //number of steps 

      if(direct == "right")          x+=num
      if(direct == "left")           x+=-num
      if(direct == "up")             y+=num
      if(direct == "down")           y+=-num
    }else{   
                                                        //change direct
      if(cur == "turn right"){
          if(direct == "right")         direct = "down"
          else if(direct == "left")     direct = "up"
          else if(direct == "down")     direct = "left"
          else if(direct == "up")       direct = "right"
          
      }else if(cur == "turn left"){
            if(direct == "right")       direct = "up"
            else if(direct == "left")   direct = "down"
            else if(direct == "up")     direct = "left"
            else if(direct == "down")   direct = "right"
      }
    }
  })
  return {x:x,y:y}
}
