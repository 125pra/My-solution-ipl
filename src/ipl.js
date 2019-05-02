const getNoOfMatchesPlayed = (Matches) => {
  //write your code here
  return Matches.reduce((acc, Match) => {
    if (acc[Match.season]) {
      acc[Match.season]++
    } else {
      acc[Match.season] = 1
    }
    return acc
  }, {})
}

const getNoOfMatchesWonPerTeamPerYear = (Matches) => {
  return Matches.reduce((obj, Match) => {
    if(obj[Match.winner]){
    }
    else{
      obj[Match.winner]={}
    }
    if (obj[Match.winner][Match.season]) {    // if objec   {winner: { }} key has its own key {winner: {season: }} then increasing the value from 1 to 2 and show on 
      obj[Match.winner][Match.season]++
    }
    else {
      obj[Match.winner][Match.season] = 1   // if object {winner:{ }} has not any key with the name of season , then creating key with value of 1{winner:{season:1}}
    }
  
  
    if (obj[""]) {               // if object has wineer key with empty string deleting that object , input has some no result data 
      delete obj[""]
    }
    return obj
  }, {})
}
const getExtraRunsPerTeamForYear = (Matches,matchesData) => {
  var mn16;
for(var i in matchesData){
    if(matchesData[i].season==="2016"){
       mn16= parseInt(matchesData[i].id);
        break
    }
}
  return Matches.reduce((obj, matchs) => {
    if (parseInt(matchs.match_id)>=mn16 ) {
      if (obj[matchs.bowling_team]) {       // if we have object with key name bowling team { bowling_team:} 
        obj[matchs.bowling_team] = parseInt(obj[matchs.bowling_team]) + parseInt(matchs.extra_runs)   // then add the extra run of bowling team and next object bowling team which is same team extra run
      }

      else {

        obj[matchs.bowling_team] = parseInt(matchs.extra_runs)  // if we don't have object with key name of bowling team then create on object with bowling team and extra run as value

      }
    }


    return obj;


  }, {})
}
const getEconomicalBowlersForYear = (data,matchesData) => {
  var mn15;
  for(var j in matchesData){
    if(matchesData[j].season==="2015"){
        mn15=parseInt(matchesData[j].id);
        break
    }
}
var mn16;
for(var i in matchesData){
    if(matchesData[i].season==="2016"){
       mn16= parseInt(matchesData[i].id);
        break
    }
}
  var bl = data.reduce((count, ele) => {
    if (parseInt(ele.match_id) >=mn15 && parseInt(ele.match_id) <mn16) {                 //  Functin Will return total number of ball by bowler 
      if (count[ele.bowler]) {
        count[ele.bowler]++
      }
      else {
        count[ele.bowler] = 1
      }
    }
    return count
  }, {})



  var rn = data.reduce((obj, ele) => {
    if (parseInt(ele.match_id) >=mn15 && parseInt(ele.match_id) <mn16) {                                       // Function Will return total number of run given by bowler 
      if (obj[ele.bowler]) {
        obj[ele.bowler] = parseInt(obj[ele.bowler]) + parseInt(ele.total_runs)
      }
      else {
        obj[ele.bowler] = parseInt(ele.total_runs)
      }
    }
    return obj
  }, {})



  var run = Object.values(rn)                             // total run given by all bowler 
  var ball = Object.values(bl)                            // total ball delverd by all bowler
  var player = Object.keys(bl)                            // name of the bowler              
  var eco = [];
  var sreco = [];
  for (var i = 0; i < run.length; i++) {                       // eco array will contain economy of all bowler
    eco[i] = (run[i] / ball[i]) * 6
  }
  for (var t = 0; t < eco.length; t++) {
    sreco.push(eco[t])                                // sreco array will have sorted economy of all bowler
  }
  sreco.sort(function (a, b) {
    return a - b
  })
  var reobj = {}
  for (var j = 0; j < 10; j++) {
    var ind = eco.indexOf(sreco[j])   //finding the index of sorted economy one by one and creating one objec with bowler name(key) and sorted economy (value)
    reobj[player[ind]] = sreco[j]
  }
  return reobj
}


module.exports.getNoOfMatchesPlayed = getNoOfMatchesPlayed
module.exports.getNoOfMatchesWonPerTeamPerYear = getNoOfMatchesWonPerTeamPerYear
module.exports.getExtraRunsPerTeamForYear = getExtraRunsPerTeamForYear
module.exports.getEconomicalBowlersForYear = getEconomicalBowlersForYear
