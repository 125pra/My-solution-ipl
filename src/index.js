var fs=require('fs')
var functions = require('./ipl')
var csvToJson=require('./csvtojson')
var matchesData = csvToJson('./data/matches.csv')
var deliveryData = csvToJson('./data/deliveries.csv')
var getNoOfMatchesPlayed = functions.getNoOfMatchesPlayed
var getNoOfMatchesWonPerTeamPerYear = functions.getNoOfMatchesWonPerTeamPerYear
var getExtraRunsPerTeamForYear = functions.getExtraRunsPerTeamForYear
var getEconomicalBowlersForYear = functions.getEconomicalBowlersForYear

let jsonData={};
 
// var mn16;
// var mn15;
// for(var i in matchesData){
//     if(matchesData[i].season==="2016"){
//        mn16= matchesData[i].id;
//         break
//     }
// }
// for(var j in matchesData){
//     if(matchesData[j].season==="2015"){
//       var  mn15= matchesData[j].id;
//         break
//     }
// }
// //var mn_15=parseInt(mn15);
// //var mn_16=parseINt(mn16);

// var mn_15=518;
//   var mn_16=577;
jsonData["MatchesPlayed"]=getNoOfMatchesPlayed(matchesData);
jsonData["MatchesWonPerTeamPerYear"]=getNoOfMatchesWonPerTeamPerYear(matchesData);
jsonData["ExtraRunsPerTeam"]=getExtraRunsPerTeamForYear(deliveryData,matchesData);
jsonData["EconomicalBowler"]=getEconomicalBowlersForYear(deliveryData,matchesData);

fs.writeFile('./public/data.json',
JSON.stringify(jsonData, null, 4),
err => {
    if (err) {
        console.log(err);
    }
}
);