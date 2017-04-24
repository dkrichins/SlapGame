// var playerHealth = 100;
// var playerHits = 0;

// function damage(strikeWith) {
// var damageTotal = document.getElementById('damageResult')
// var hitsTotal = document.getElementById('numberOfHits')
    
//         if(strikeWith == 'punch')
//         {
//             playerHealth--
//             playerHits++
//             damageTotal.innerHTML = playerHealth
//             hitsTotal.innerHTML = playerHits
//         }
//         else if (strikeWith == 'kick')
//         {
//             if(playerHealth <= 5)
//             {
//             playerHealth = 0
//             damageTotal.innerHTML = playerHealth
//             hitsTotal.innerHTML = playerHits
//             }
//             else
//             {
//             playerHealth -= 5
//             playerHits++
//             damageTotal.innerHTML = playerHealth
//             hitsTotal.innerHTML = playerHits
//             }            
//         }
//         else
//         {
//             if(playerHealth <= 10)
//             {
//             playerHealth = 0            
//             damageTotal.innerHTML = playerHealth
//             hitsTotal.innerHTML = playerHits
//             }
//             else
//             {
//             playerHealth -= 10
//             playerHits++
//             damageTotal.innerHTML = playerHealth
//             hitsTotal.innerHTML = playerHits
//             }
//         }
//     }

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
}

var kanyeWest = new Celebrity(1,'Kanye West', 1, 5, 10, 15, "images/KanyeWest.jpg")
var justinBieber = new Celebrity(2,'Justin Bieber', 2, 8, 12, 20, "images/JustinBieber2.jpg")
var nicolasCage = new Celebrity(3,'Nicolas Cage', 1, 7, 13, 18, "images/NicolasCage2.jpg")
var tomCruise = new Celebrity(4,'Tom Cruise', 0, 3, 7, 10, "images/TomCruise.jpg")

var celebritiesArray = [kanyeWest, justinBieber, nicolasCage, tomCruise]

drawCelebrity(celebritiesArray)

function drawCelebrity (arrCelebrities){
    var template=""
    for(var i = 0; i < arrCelebrities.length; i++)
    {
       var celebrity = arrCelebrities[i]
       template+=    
        `
        <div class="col-xs-12">
            <div class="well">
                <div class="content-container">	
                    <div class="content-header">
                    <h1 id="celebrityHeader${celebrity.celebrityId}">${celebrity.celebrityName}</h1>							
                    </div>
                    <div class="content-body">
                        <img id="celebrityPic${celebrity.celebrityId}" src="${celebrity.imgUrl}" alt="Celebrity Pic">
                        <button id="punchButton${celebrity.celebrityId}" type="button" class="btn btn-lg" onclick="combat(${celebrity.celebrityId}, 'punch')">punch</button>
                        <button id="kickButton${celebrity.celebrityId}" type="button" class="btn btn-lg" onclick="combat(${celebrity.celebrityId}, 'kick')">kick</button>
                        <button id="elbowButton${celebrity.celebrityId}" type="button" class="btn btn-lg" onclick="combat(${celebrity.celebrityId}, 'elbow')">elbow</button>
                        <button id="kneeButton${celebrity.celebrityId}" type="button" class="btn btn-lg" onclick="combat(${celebrity.celebrityId}, 'knee')">knee</button>
                        <button id="resetButton${celebrity.celebrityId}" type="button" class="btn btn-lg" onclick="resetOpponent(${celebrity.celebrityId})">reset</button>									
                        <h1 id="damageResult${celebrity.celebrityId}">Health Level ${celebrity.health}</h1>
                        <h2 id="numberOfHits${celebrity.celebrityId}">Number of Hits ${celebrity.hits}</h2>
                    </div>
                </div>
            </div>
        </div>   
        `
    }
    document.getElementById("celebrityList").innerHTML = template
}


function combat(celebrityId, attackMove){
    
    var targetCelebrity = getCelebrityById(celebrityId)
     
    if(attackMove == 'punch')
    {
        preventNegativeDamage(celebrityId, attackMove)
    }
    else if(attackMove == 'kick')
    {
        preventNegativeDamage(celebrityId, attackMove)
    }
    else if (attackMove == 'elbow')
    {
        preventNegativeDamage(celebrityId, attackMove)
    }
    else
    {
        preventNegativeDamage(celebrityId, attackMove)
    }
}


function getCelebrityById(celebrityId){

    for (var i = 0; i < celebritiesArray.length; i++) 
    {
        var celebrity = celebritiesArray[i];
        
        if(celebrity.celebrityId==celebrityId)
        {
            return celebrity            
        }
    }
}


function updateCelebrityStatus (celebrityId){
    var targetCelebrity = getCelebrityById(celebrityId)

    var updatePic = document.getElementById('celebrityPic'+ celebrityId)
    var updateDamageTotal = document.getElementById('damageResult'+ celebrityId)
    var updateHitsTotal = document.getElementById('numberOfHits' + celebrityId)

    // if(targetCelebrity.health <= 50)
    // {
    //    UpdatePic.src=targetCelebrity.imgUrl
    // }
    // if(targetCelebrity.health <=10)
    // {
    //    UpdatePic.src=targetCelebrity.imgUrl      
    // }
    
    updateDamageTotal.innerHTML = "Health Level" + " " + targetCelebrity.health
    updateHitsTotal.innerHTML = "Number of Hits" + " " + targetCelebrity.hits
}

function preventNegativeDamage(celebrityId, attackMove){

    var targetCelebrity = getCelebrityById(celebrityId)

    if (targetCelebrity.health == 0)
    {
        updateCelebrityStatus (celebrityId) 
    }
    else if(targetCelebrity.health <= targetCelebrity.attack[attackMove])
    {
        targetCelebrity.health = 0; 
        targetCelebrity.hits++
        updateCelebrityStatus (celebrityId)            
    }
    else
    {
        targetCelebrity.health -= targetCelebrity.attack[attackMove]
        targetCelebrity.hits++
    
        updateCelebrityStatus (celebrityId)            
    }      

}

function resetOpponent(celebrityId){

var targetCelebrity = getCelebrityById(celebrityId)

targetCelebrity.health = 50;
targetCelebrity.hits = 0;

updateCelebrityStatus(celebrityId)

}


