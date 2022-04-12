function catAndMouse(mouse, cat1, cat2) {
                         
    let distancia1 = Math.abs(cat1 - mouse);  
                               
    let distancia2 = Math.abs(cat2 - mouse); 
    
    if (distancia1 > distancia2) {
      return 'cat2';
    } else if (distancia2 > distancia1) {
      return 'cat1'
    } else if (distancia1 === distancia2) {
      return 'os gatos trombam e o rato foge'
    }
    
    }
    
    console.log(catAndMouse(1,0,2))