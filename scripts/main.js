// html5--canvas
var canvashtml5 = document.getElementById("html5").getContext("2d");
// var canvascss3=document.getElementById("css3").getContext("2d");
// var canvasjs=document.getElementById("js").getContext("2d");
// var canvasjq=document.getElementById("jq").getContext("2d");
// var canvasbs=document.getElementById("bs").getContext("2d");
// var canvasps=document.getElementById("ps").getContext("2d");
var canwidth=160;
var radius=70;
var canhtml5=function(){
	var deg = 0;
    var html5T = function(deg){
        var r = deg*Math.PI/180;   //canvas绘制圆形进度
        canvashtml5.clearRect(0,0,canwidth,canwidth); //清除锯齿
        canvashtml5.beginPath(); //路径开始
        canvashtml5.strokeStyle = "#F1652A"; //边框颜色
        canvashtml5.lineWidth = 10; //线宽
        // canvashtml5.fillText("90%",80,80);
        canvashtml5.arc(canwidth/2,canwidth/2,radius,0,r,false); //canvas绘制弧形
        canvashtml5.stroke();
    };
    //使用定时器让html5 canvas绘制圆形进度动起来
    var time = setInterval(function(){
    	// var con=document.getElementsByTagName("section")[2];
    	// if (con.style.display=="block") {
    		deg+=4;
	        html5T(deg);
	        if(deg>324){
	            clearInterval(time);
	        }
	    // }
    },20);
}

// var cancss3=function(){
// 	var deg = 0;
//     var css3T = function(deg){
//         var r = deg*Math.PI/180;
//        	canvascss3.clearRect(0,0,canwidth,canwidth);
//         canvascss3.beginPath();
//         canvascss3.strokeStyle = "#409AD8";
//         canvascss3.lineWidth = 10;
//        	canvascss3.arc(canwidth/2,canwidth/2,radius,0-1/2*Math.PI,r-1/2*Math.PI,false); //
//         canvascss3.stroke();
//     };
//     var time = setInterval(function(){
//     	// var con=document.getElementsByTagName("section")[2];
//     	// if (con.style.display=="block") {
//     		deg+=4;
// 	        css3T(deg);
// 	        if(deg>324){
// 	            clearInterval(time);
// 	        }
// 	    // }
//     },20);
// }
// var canvasTotal=function(){

// }
// var canjs=function(){
// 	var deg = 0;
//     var jsT = function(deg){
//         var r = deg*Math.PI/180;
//         canvasjs.clearRect(0,0,canwidth,canwidth);
//         canvasjs.beginPath();
//         canvasjs.strokeStyle = "#ECB12C";
//         canvasjs.lineWidth = 10;
//         canvasjs.arc(canwidth/2,canwidth/2,radius,0-1/2*Math.PI,r-1/2*Math.PI,false); //
//         canvasjs.stroke();
//     };
//     var time = setInterval(function(){
//     	// var con=document.getElementsByTagName("section")[2];
//     	// if (con.style.display=="block") {
//     		deg+=4;
// 	        jsT(deg);
// 	        if(deg>252){
// 	            clearInterval(time);
// 	        }
// 	    // }
//     },20);
// }

// var canjq=function(){
// 	var deg = 0;
//     var jqT = function(deg){
//         var r = deg*Math.PI/180;
//         canvasjq.clearRect(0,0,canwidth,canwidth);
//         canvasjq.beginPath();
//         canvasjq.strokeStyle = "#75B143";
//         canvasjq.lineWidth = 10;
//         canvasjq.arc(canwidth/2,canwidth/2,radius,0-1/2*Math.PI,r-1/2*Math.PI,false); //
//         canvasjq.stroke();
//     };
//     var time = setInterval(function(){
//     	// var con=document.getElementsByTagName("section")[2];
//     	// if (con.style.display=="block") {
//     		deg+=4;
// 	        jqT(deg);
// 	        if(deg>288){
// 	            clearInterval(time);
// 	        }
// 	    // }
//     },20);
// }


// var ps=function(){
// 	var deg = 0;
//     var psT = function(deg){
//         var r = deg*Math.PI/180;
//         canvasps.clearRect(0,0,canwidth,canwidth);
//         canvasps.beginPath();
//         canvasps.strokeStyle = "#031A3A";
//         canvasps.lineWidth = 10;
//         canvasps.arc(canwidth/2,canwidth/2,radius,0-1/2*Math.PI,r-1/2*Math.PI,false); //
//         canvasps.stroke();
//     };
//     var time = setInterval(function(){
//     	var con=document.getElementsByTagName("section")[2];
//     	if (con.style.display=="block") {
//     		deg+=4;
// 	        psT(deg);
// 	        if(deg>288){
// 	            clearInterval(time);
// 	        }
// 	    }
//     },20);
// }


canhtml5();
// cancss3();
// canjs();
// canjq();
// ps();