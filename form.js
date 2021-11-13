class Form {
    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.saludo = createElement('h2');
     }
     hide(){
      this.input.hide();
      this.button.hide();
      this.saludo.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("Juego de Carreras de Autos");
      title.position(displayWidth/2 -50, 100);
      
      
      
      this.input.position(displayWidth/2 -40, displayHeight/2 -50);
      this.button.position(displayWidth/2 +30, displayHeight/2 );
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
  
        
        player.nombre=this.input.value();
        playerCount+=1;
        player.index=playerCount;
        player.update()
        player.updateCount(playerCount);
        //var greeting = createElement('h3');
        this.saludo.html("Hola " + player.nombre )
        this.saludo.position(displayWidth/2 -50, displayHeight/2)
      });
    }
    
  }
  