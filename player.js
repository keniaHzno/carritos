class Player {
    constructor(){
      this.index=null;
      this.distancia=0;
      this.nombre=null;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
      })  }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });  }
  
    update(name){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.nombre , distancia:this.distancia
      }); } 

      static infoJugadores(){
        var jugadoresInfo=database.ref('players');
        jugadoresInfo.on("value",(data)=>{datosJugadores=data.val();})
      }
    }