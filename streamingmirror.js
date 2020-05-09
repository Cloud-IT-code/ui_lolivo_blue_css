//<![CDATA[
// Tabs Mirror
$(document).ready(function(){$("#content").find("[id^='tab']").hide(),$("#--tabs li:first").attr("id","current"),$("#content #tab1").fadeIn(),$("#--tabs a").click(function(t){t.preventDefault(),"current"!=$(this).closest("li").attr("id")&&($("#content").find("[id^='tab']").hide(),$("#--tabs li").attr("id",""),$(this).parent().attr("id","current"),$("#"+$(this).attr("name")).fadeIn())})});
// Light Button
$(document).ready(function(){$("#lightsoff").css("height", $(document).height()).hide();$(".lightSwitcher").click(function(){$("#lightsoff").toggle();if ($("#lightsoff").is(":hidden"))$(this).html("Turn off the Lights").removeClass("turnedOff");else $(this).html("Turn on the Lights").addClass("turnedOff");});});
//]]>
