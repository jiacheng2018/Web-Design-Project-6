var oimg=document.getElementById('img11');
    oimg.onclick=function(){
        var that=this;
        shaking(that,'left');
        cartoon();//activate the snowing scene
    };
    function shaking(obj,attr){
    	var pos=parseInt(getStyle(obj,attr));
    	var arr=[];
    	var num=0;
    	for(var i=20;i>0;i-=2){
    		arr.push(i,-i);
    	}
    	arr.push(0);
    	clearInterval(obj.shaking);
    	obj.shaking=setInterval(function(){
    		obj.style[attr]=pos+arr[num]+'px';
    		num++;
    		if(num===arr.length){
    			clearInterval(obj.shaking);
    		}
    	},50)
    }
    function getStyle(obj,attr){
        if(obj.currentStyle){
            return obj.currentStyle[attr];
        }else{
            return window.getComputedStyle(obj,false)[attr];
        }
    }