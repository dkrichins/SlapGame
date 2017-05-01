function SlapGameController(){

    var slapGameService = new SlapGameService()    
    
    function drawCelebrity (){
        arrCelebrities = slapGameService.getCelebrities()
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
                            <button id="punchButton${celebrity.celebrityId}" type="button" class="btn btn-lg" onclick="app.controllers.slapGameController.onCombat(${celebrity.celebrityId}, 'punch')">Punch</button>
                            <button id="kickButton${celebrity.celebrityId}" type="button" class="btn btn-lg" onclick="app.controllers.slapGameController.onCombat(${celebrity.celebrityId}, 'kick')">Kick</button>
                            <button id="elbowButton${celebrity.celebrityId}" type="button" class="btn btn-lg" onclick="app.controllers.slapGameController.onCombat(${celebrity.celebrityId}, 'elbow')">Elbow</button>
                            <button id="kneeButton${celebrity.celebrityId}" type="button" class="btn btn-lg" onclick="app.controllers.slapGameController.onCombat(${celebrity.celebrityId}, 'knee')">Knee</button>
                            <button id="resetButton${celebrity.celebrityId}" type="button" class="btn btn-lg" onclick="app.controllers.slapGameController.onResetOpponent(${celebrity.celebrityId})">reset</button>	
                            <button id="shieldButton${celebrity.celebrityId}" type="button" class="btn btn-lg" onclick="app.controllers.slapGameController.onGiveItem(${celebrity.celebrityId}, 'shield')">Shield</button>
                            <button id="swordButton${celebrity.celebrityId}" type="button" class="btn btn-lg" onclick="app.controllers.slapGameController.onGiveItem(${celebrity.celebrityId}, 'sword')">Sword</button>
                            <button id="superPowerButton${celebrity.celebrityId}" type="button" class="btn btn-lg" onclick="app.controllers.slapGameController.onGiveItem(${celebrity.celebrityId}, 'superPower')">Super Power</button>								
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

    this.onCombat = function onCombat(celebrityId, attackType){
        slapGameService.processCombat(celebrityId, attackType)
        updateCelebrityStatus(celebrityId)
    }

    this.onResetOpponent = function onReset(celebrityId){
        slapGameService.processResetOpponent(celebrityId)
        updateCelebrityStatus(celebrityId)

    }

    this.onGiveItem = function onGiveItem(celebrityId, itemType){
        slapGameService.processGiveItem (celebrityId, itemType)          

    }

    function updateCelebrityStatus (celebrityId){
    var targetCelebrity = slapGameService.getCelebrityById(celebrityId)

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


drawCelebrity()

}