function selectWorkTime(e,t,i,a){for(var n in e){day=e[n];var s=i,d=day.start.second_of_day,c=markDisableTimes(n,0,d,t),s=day.end.second_of_day,d=3600*a;markDisableTimes(n,s,d,t,c)}}function markDisableTimes(e,t,i,a,n){void 0==n&&(n=0);var s=$(".fc-slats").find(".fc-widget-content").height();return height=getDivHeight(i-t,s,a),$busy=$("<div>").addClass("busy-time").height(height).css("margin-top",getDivHeight(t,s,a)-n),$(".fc-day.fc-widget-content.fc-"+e).append($busy),height}function getDivHeight(e,t,i){return(BORDER_SPACE+t)*(e/3600)*(60/i)}function getVicationDays(e){var t=0,i=[];return $.each(e,function(e,a){0==a.start.second_of_day&&0==a.end.second_of_day&&i.push(t),t++}),i}var BORDER_SPACE=11;