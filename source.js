$(document).ready(function(){
        $.getJSON( "arenaNewSchedule.json", function(data) {
          let items = [];


            $("select").on('click', function(){
                
                $("#displaySchedule").text("");
                
                let arenaSelected = $(this).val();
                
                $(data).each(function(index) {
                  
                  if(data[index]["arenaCode"] === arenaSelected) {
                    
                    let dates = [], homeNames = [], visitorNames= [], 
                    arenaCode= [], area = [], startTime = [], endTime = [], type = [];

                    dates.push(data[index]["date"]);
                    homeNames.push(data[index]["homeName"]);
                    visitorNames.push(data[index]["visitorName"]);
                    arenaCode.push(data[index]["arenaCode"]);
                    area.push(data[index]["area"]);
                    startTime.push(data[index]["startTime"]);
                    endTime.push(data[index]["endTime"]);
                    type.push(data[index]["type"]);

                    
                    //build functions to take the copy/paste out of this code
                    
                    
                    $(homeNames).each(function(index2){
                        let pageBuilder = (home,visitor) => {
                            $("<div id='date' class='main'>" + " date: " + dates[index2].replace("00:00:00","") + " " + "</div>").appendTo("#displaySchedule");
                            $("<div class='main'>" + " start time: " + startTime[index2] + " " + "</div>").appendTo("#displaySchedule");
                            $("<div class='main'>" + " end time: " + endTime[index2] + " " + "</div>").appendTo("#displaySchedule");
                            $("<div class='main'>" + "Visitor team: " + "<b><u>" + visitor + "</b></u>" + "</div>").appendTo("#displaySchedule");
                            $("<div class='main'>" + "Home team: " +"<b><u>" + home + "</b></u>" + "</div>").appendTo("#displaySchedule");
                            $("<div class='main'>" + " area: " + area[index2] + " " + "</div>").appendTo("#displaySchedule");
                            $("<br>").appendTo("#displaySchedule");
                        
                    }
                      if(homeNames[index2] === null) {
                          pageBuilder(home="No home team provided. Refer to area.", visitor="");
                      } else if(visitorNames[index2] === null) {
                          pageBuilder(homeNames[index2], visitor="Practice or no visitor team provided ");
                      } else {
                          pageBuilder(homeNames[index2], visitorNames[index2]);
                      }
                    });
                  }
                  
                });
                
              });
        });
        
      });



