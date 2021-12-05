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

                      if(homeNames[index2] === null) {
                        $("<div id='date'>" + " date: " + dates[index2].replace("00:00:00","") + " " + "</div>").appendTo("#displaySchedule");
                      $("<div>" + " start time: " + startTime[index2] + " " + "</div>").appendTo("#displaySchedule");
                      $("<div>" + " end time: " + endTime[index2] + " " + "</div>").appendTo("#displaySchedule");
                      $("<div>" + " No home team provided. Please refer to area. " + "</div>").appendTo("#displaySchedule");
                      $("<div>" + " area: " + area[index2] + " " + "</div>").appendTo("#displaySchedule");
                      
                      $("<br>").appendTo("#displaySchedule");
                      } else if(visitorNames[index2] === null) {

                      
                      $("<div id='date'>" + " date: " + dates[index2].replace("00:00:00","") + " " + "</div>").appendTo("#displaySchedule");
                      $("<div>" + " start time: " + startTime[index2] + " " + "</div>").appendTo("#displaySchedule");
                      $("<div>" + " end time: " + endTime[index2] + " " + "</div>").appendTo("#displaySchedule");
                      $("<div>" + " Practice or no visitor team provided " + "</div>").appendTo("#displaySchedule");
                      $("<div>" + " home team: " + homeNames[index2] + " " + "</div>").appendTo("#displaySchedule");
                      $("<div>" + " area: " + area[index2] + " " + "</div>").appendTo("#displaySchedule");
                      
                      $("<br>").appendTo("#displaySchedule");
                      } else {
                        $("<div id='date'>" + " date: " + dates[index2].replace("00:00:00","") + " " + "</div>").appendTo("#displaySchedule");
                      $("<div>" + " start time: " + startTime[index2] + " " + "</div>").appendTo("#displaySchedule");
                      $("<div>" + " end time: " + endTime[index2] + " " + "</div>").appendTo("#displaySchedule");
                      $("<div>" + " visitor team: " + "<b><u>" + visitorNames[index2] + "</b></u>"  + "</div>").appendTo("#displaySchedule");
                      $("<div>" + " home team: " + "<b><u>" + homeNames[index2] + "</b></u>" + "</div>").appendTo("#displaySchedule");
                      $("<div>" + " area: " + area[index2] + " " + "</div>").appendTo("#displaySchedule");
                      
                      $("<br>").appendTo("#displaySchedule");
                      }
                    });
                  }
                  
                });
                
              });
        });
        
      });

