fetch('./data.json').then(response => response.json()).then(data => {
    console.log(data, 'From the fetch call')
     chartForMatchesPerSeason(data.MatchesPlayed);
      chartForEconomicalBowlers(data["EconomicalBowler"]);
      formatdataForBarChart(data["MatchesWonPerTeamPerYear"])
      formatdataForColumnChart(data["ExtraRunsPerTeam"])
})

    function formatdataForColumnChart(obj) {
        var arr=[]
        for(var i in obj){
          var temp=[]
          temp.push(i)
          temp.push(obj[i])
          arr.push(temp)
        }
        chartForExtraRunsPerTeam(arr);
           }

  

 function formatdataForBarChart(obj1) {
    var doun=[]
   for(var i in obj1){ 
    var won={
        2008:0,
        2009:0,
        2010:0,
        2011:0,
        2012:0,
        2013:0,
        2014:0,
        2015:0,
        2016:0,
        2017:0
           }
     
     var temp={}
     temp.name=i                         //{name:rcb}
     var arr2=Object.keys(obj1[i])       
     for(var j in arr2){                 
      won[arr2[j]] =obj1[i][arr2[j]]   // if won has same year as our passed objet has 
      temp.data=Object.values(won)     // then temp will be {name: rcb, data: no of won matches }             
     }                                      
   doun.push(temp)                       
  }
  barChartForNoOfWins(doun);
 }

function chartForMatchesPerSeason(matches){
//complete this function to create visualization for no.ofmathches per season.
const years = Object.keys(matches)
Highcharts.chart('no-of-match', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Matches Played per Season'
    },
    subtitle: {
        text: 'Source: ipl.com'
    },
    xAxis: {
        categories: years,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Matches'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Matches Played',
        data: Object.values(matches)

    }]
});
}
function barChartForNoOfWins(doun){
    Highcharts.chart('wins-per-year-team', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Per Year Number of Matches Won by Team'
        },
        xAxis: {
            categories: ['2008', '2009', '2010', '2011','2012','2013','2014','2015','2016','2017']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of Match Won'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series:doun 
    });
    
 }

function chartForExtraRunsPerTeam(teams){
//complete this function to create visualization for extraruns per team for year 2016 . 
Highcharts.chart('extra-run', {
    chart: {
    type: 'column'
},
title: {
    text: 'Extra Runs Per Team For Year 2016'
},
subtitle: {
    text: 'Source: <a href=>ipl.com</a>'
},
xAxis: {
    type: 'category',
    labels: {
        rotation: -45,
        style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
        }
    }
},
yAxis: {
    min: 0,
    title: {
        text: 'Runs'
    }
},
legend: {
    enabled: false
},
tooltip: {
    pointFormat: 'Extra Runs in 2016: <b>{point.y}</b>'
},
series: [{
    name: 'Runs',
    data:teams,
    dataLabels: {
        enabled: true,
        rotation: -90,
        color: '#FFFFFF',
        align: 'right',
        format: '{point.y}', // one decimal
        y: 10, // 10 pixels down from the top
        style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
        }
    }
}]
});
 }

function chartForEconomicalBowlers(matches){
//  complete this function to create visualization for top ten economical bowler for year 2015 .   
const Bowler = Object.keys(matches)
Highcharts.chart('bowler-economy', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Top 10 Economical Bowler of 2015'
    },
    subtitle: {
        text: 'Source: ipl.com'
    },
    xAxis: {
        categories: Bowler,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Economy Rate Of Bowler'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Economy Rate',
        data: Object.values(matches)

    }]
});
}
