class Game {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })  }
  
    update(state){
      database.ref('/').update({
        gameState: state
      }); }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var numJugadores=await database.ref('playerCount').once("value");
        if(numJugadores.exists()){
          playerCount=numJugadores.val();
          player.getCount();
        }
        form = new Form();
        form.display();
      }
      carro1= createSprite(100,200);
      carro2= createSprite(300,200);
      carro3= createSprite(500,200);
      carro4= createSprite(700,200);
      carros=[carro1,carro2,carro3,carro4];
      } 
    play(){
      form.hide();
      text("inicio de juego",200,40);
      Player.infoJugadores();
      if(datosJugadores!==undefined){
        //var pos=50;
        var indice=0;
        var x=0;
        var y=0;

        for(var color in datosJugadores){
          indice=indice+1;
          x=x+200;
          y=displayHeight-datosJugadores[color].distancia;
          carros[indice-1].x=x;
          carros[indice-1].y=y;

         /* if(color==="player"+player.index){
            fill("purple");
          }else{
            fill("green");

          }*/
         // pos+=20;
         // text(datosJugadores[color].nombre+": "+datosJugadores[color].distancia,60,pos);
         if(indice===player.indice){
           carros[indice-1].shapeColor="red";
           camera.position.x=displayWidth/2;
           camera.position.y=carros[indice-1].y;
         }
        }

      }
      if(keyDown("up")&& player.index!==null){
        player.distancia+=10;
        player.update();
      }
      drawSprites()
      
    }
    
    
    }
  