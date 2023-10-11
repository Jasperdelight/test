let num = 21

function house(num){
  let x = Math.ceil(Math.sqrt(num))
  while(true){
    let y = Math.ceil(num / x) 
    let total = x*y
    if (total - num <= 2) {
      return [x,y]
    } 
    x--
  }

}