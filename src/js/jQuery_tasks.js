import "../css/jQuery_tasks.scss";
import $ from "jquery";
//###########################################################################
$("#Ex1 #button1").click(()=>{$("#Ex1 textarea").css("border","2px solid red")});
$("#Ex1 #button1").click(()=>{$("#Ex1 p").css("border","2px solid red")});
//###########################################################################
$("#Ex2 #button2").click(()=>{$("#Ex2 textarea").css("background", "red").add("#Ex2 p").css("background", "red").add("#Ex2 span").css("background-color","red")})
//###########################################################################
$("#Ex3 #button3").click(()=>{$("#Ex3").append("<p>Some text</p>")});
//###########################################################################
$("#Ex4 div.left, div.right ").find("div, div > p").addClass("border");
$("#Ex4 div.before-addback").find("p").addClass("background");
$("#Ex4 div.after-addback").find("p").addBack().addClass("background");
//###########################################################################
$("#Ex5 #button5").click(()=>{$("#Ex5").find("p").last().addClass("w3r_font_color ")});
//###########################################################################
$("#Ex6 #button6").click(()=>{$("#Ex6").find("p").last().addClass("w3r_font_color w3r_background ")});
//###########################################################################
$("#Ex7 #button7").click(()=>{$("#Ex7").find("p").addClass("w3r_bg_red")});
//###########################################################################
$("#Ex8 #button8").click(()=>{$("#Ex8").find("p").after("<b> Some Html</b>")})
//###########################################################################
$("#Ex9 #button9").click(()=>{$("#Ex9 p").after($(document.createTextNode("DOM elem")));});
//###########################################################################
$("#Ex10 #button10").click(()=>{$("#Ex10 p").after($("span"))});
//###########################################################################
$("#Ex17 #button17").click(()=>{let count = $("*").length; $("#Ex17").append("<p>"+count+"</p>")});
//###########################################################################
$("#Ex18 #button18").click(()=>{$("#Ex18").append("<p>"+$("#Ex18 #iddiv *").length+"</p>")});
//###########################################################################\
$("#Ex19 #button19").click(()=>{$("#Ex19").find("#pid").animate({width: "70%", opacity: 0.4, marginLeft: "0.6in", fontSize: "3em", borderWidth: "10px"}, 1500)});
//###########################################################################
$("#Ex20 #right").click(()=>{$("#Ex20").find(".block").animate({"left":"+=50"},500)});
$("#Ex20 #left").click(()=>{$("#Ex20").find(".block").animate({"left":"-=50"},500)});
//###########################################################################
$("#Ex21 p #run").click(()=>{$("#Ex21").find(".block:first, .block:gt(0)").animate({left : 100},500)});
//###########################################################################
function anim(){$("#Ex22 #div1, #div2").slideToggle(500, anim);}
anim();
$("#Ex22 #button22").click(()=>{$("#Ex22 div:animated").toggleClass("colored")});
//###########################################################################
$("#Ex23 #button23").click(()=>{$("#Ex23 p").append(document.createTextNode(" Some Text"))})
//###########################################################################
$("#Ex24 #button24").click(()=>{$( "#Ex24 p" ).append( $( "#Ex24 strong" ))});
//###########################################################################
$("#Ex25 #button25").click(()=>{$("#Ex25 p").append(document.createTextNode(" Some text"))});
//###########################################################################
$("#Ex26 #button26").click(()=>{$("#Ex26 #myid").append($("#Ex26 span"))});
//###########################################################################
$("#Ex27 input").change(()=>{console.log(".attr(' checked')"); console.log(".prop(' checked'): "+$("#Ex27 input").prop("checked")); console.log(".prop(' :checked'): "+$("#Ex27 input").is("checked"));});
//###########################################################################
$("#Ex28 #button28").click(()=>{$("#Ex28 #id1").text($("#Ex28 p").find("em").attr("title"))});
//###########################################################################
$("#Ex29 #button29").click(()=>{$("#Ex29 p").find("a[hreflang='de']").css("border","2px solid red")});
//###########################################################################
$("#Ex30 #button30").click(()=>{$("#Ex30").find("div[name*='tutorial']").css("background-color","yellow")});
//###########################################################################
$("#Ex31 #button31").click(()=>{$("#Ex31").find("div[name~='tutorial']").css("background-color","yellow")});
//###########################################################################
$("#Ex32 #button32").click(()=>{$("#Ex32").find("div[name$='tutorial']").css("background-color","yellow")});
//###########################################################################
$("#Ex33 #button33").click(()=>{$("input[value='Red']").next().text("Red")});
//###########################################################################
$("#Ex34 #button34").click(()=>{$("input[name!='color']").next().append("<b>: not a color</b>")});
//###########################################################################
$("#Ex35 #button35").click(()=>{$("input[name^='P']").val("Some text")});
//###########################################################################
$("#Ex36 #button36").click(()=>{$("#Ex36 p").before("<i>Some text</i>")});
//###########################################################################
$("#Ex37 #button37").click(()=>{$("#Ex37 p").before($("#Ex37 b"))});
//###########################################################################
$("#Ex38 #button38").click(()=>{$("#Ex38").find("p").before($("#Ex38 b"))});
//###########################################################################
$("#Ex39 p").bind("dblclick", ()=>{$("#Ex39 #result").text("Double click")});
$("#Ex39 p").bind("click", ()=>{$("#Ex39 #result").text(event.pageX+", "+event.pageY)});
//###########################################################################
$("#Ex40 #target").blur(()=>{console.log("Focus removed from field1")});
//###########################################################################
$("#Ex41 #button41").click(()=>{$("#Ex41 p").text($("#Ex41 :button").addClass("marked").length)});
//###########################################################################