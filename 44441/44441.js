$(document).ready(function(){
    async function saveNewPlayer() {
        //Create your Parse Object
        const soccerPlayers = new Parse.Object("SoccerPlayers");

        //Define its attributes
        soccerPlayers.set("playerName", "A. Wed");
        soccerPlayers.set("yearOfBirth", 1997);
        soccerPlayers.set("emailContact", "a.wed@email.io");
        soccerPlayers.set("attributes", ["fast","good conditioning"])
        try{
            //Save the Object
            let result = await soccerPlayers.save()
            alert('New object created with objectId: ' + result.id);
        }catch(error){
            alert('Failed to create new object, with error code: ' + error.message);
        }
    } 
});






//end doc ready

