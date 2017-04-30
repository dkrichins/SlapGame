function SlapGameService(){
    //Private Properties, variables and Methods
    var celebritiesArray = [] 

    function Celebrity(celebrityId, celebrityName, punch, kick, knee, elbow, imgUrl){
    
    this.celebrityId = celebrityId;
    this.celebrityName = celebrityName;
    this.imgUrl = imgUrl;
    this.health = 100;
    this.hits = 0;
    
    this.attack = {
        punch: punch,
        kick: kick,
        knee: knee, 
        elbow: elbow
        }
    
    celebritiesArray.push(this)

    }

    var kanyeWest = new Celebrity(1,'Kanye West', 1, 5, 10, 15, "images/KanyeWest.jpg")
    var justinBieber = new Celebrity(2,'Justin Bieber', 2, 8, 12, 20, "images/JustinBieber2.jpg")
    var nicolasCage = new Celebrity(3,'Nicolas Cage', 1, 7, 13, 18, "images/NicolasCage2.jpg")
    var tomCruise = new Celebrity(4,'Tom Cruise', 0, 3, 7, 10, "images/TomCruise.jpg")
        
 //Public Properties, variables and Methods   


    this.processResetOpponent = function resetOpponent(celebrityId){

    var targetCelebrity = this.getCelebrityById(celebrityId)

    targetCelebrity.health = 100;
    targetCelebrity.hits = 0;
   

    }

    this.getCelebrityById = function getCelebrityById(celebrityId){

        for (var i = 0; i < celebritiesArray.length; i++) 
        {
            var celebrity = celebritiesArray[i];
            
            if(celebrity.celebrityId==celebrityId)
            {
                return celebrity            
            }
        }
    }
   

    this.processcombat = function processCombat(celebrityId, attackMove){
        
        var targetCelebrity = this.getCelebrityById(celebrityId)
        
        if(attackMove == 'punch')
        {
            // preventNegativeDamage(celebrityId, attackMove)
            
            if (targetCelebrity.health <= targetCelebrity.attack[attackMove])
            {
                if(targetCelebrity.health != 0)
                {
                    targetCelebrity.hits++ 
                } 
                targetCelebrity.health = 0                    
            }
            else
            {
                targetCelebrity.health -= targetCelebrity.attack[attackMove]
                targetCelebrity.hits++                          
            }      
        }
        else if(attackMove == 'kick')
        {
           
           if(targetCelebrity.health <= targetCelebrity.attack[attackMove])
            {
                if(targetCelebrity.health != 0)
                {
                    targetCelebrity.hits++ 
                } 
                targetCelebrity.health = 0                       
            }
            else
            {
                targetCelebrity.health -= targetCelebrity.attack[attackMove]
                targetCelebrity.hits++                          
            }      
        }
        else if (attackMove == 'elbow')
        {
            
            if (targetCelebrity.health <= targetCelebrity.attack[attackMove])
            {
                if(targetCelebrity.health != 0)
                {
                    targetCelebrity.hits++ 
                } 
                targetCelebrity.health = 0    
                                      
            }
            else
            {
                targetCelebrity.health -= targetCelebrity.attack[attackMove]
                targetCelebrity.hits++                          
            }      
        }
        else
        {
            if (targetCelebrity.health <= targetCelebrity.attack[attackMove])
            {
                
                 if(targetCelebrity.health != 0)
                {
                    targetCelebrity.hits++ 
                } 
                targetCelebrity.health = 0    
                                      
            }
            else
            {
                targetCelebrity.health -= targetCelebrity.attack[attackMove]
                targetCelebrity.hits++                          
            }      
        }
    }
    
     this.getCelebrities = function getCelebrities(){
    return celebritiesArray.slice(0, celebritiesArray.length)
    
    }
}


/*
   this.getCelebrityById = function(celebrityId){
        return getCelebrityById(celebrityId)
    }

    this.preventNegativeDamage = function(celebrityId, attackMove){

        return preventNegativeDamage(celebrityId, attackMove)
    }
    this.resetOpponent = function (celebrityId){

        return resetOpponent(celebrityId)
    } */