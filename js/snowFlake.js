        var width=window.innerWidth;//Gain the screen width
        var height=screen.availHeight;//Gain the screen height
        var canvas=document.querySelector("#canvas");
        var context=canvas.getContext("2d");
        var snowArray=[];// Name an array to store the location
        canvas.width=width;
        canvas.height=height;
 
        cartoon();          //run cartoon function
          class Snowflake{
            constructor(){
                this.init();//Initialize the function 
            }
            init(){
                this.position={   //Snow flake position;
                    x:Math.random()*width,//Generate the X, Y axis
                    y:Math.random()*height,
                }
                this.speed=Math.random()*10;//Adjust the speed,radius,transparency
                this.r=Math.random()*6;
                this.transparency=Math.random();
                this.color={
                    r1:Math.random()*255,//Random color
                    g:Math.random()*255,
                    b:Math.random()*255,
                }
            }
            draw(){//Draw the snow flake
                this.position.y++;//y坐标每次递增1像素;
                this.transparency-=0.01;//透明度每次递减0.01;
                if(this.transparency<=0){//透明度小于0，即雪花消失，重新绘制雪花;
                    this.init();
                }
                context.beginPath();//开始一个新的图形绘制;
                context.fillStyle="rgba("+this.color.r1+","+this.color.g+","+this.color.b+","+this.transparency+")";//根据类模型绘制圆形雪花;
                context.arc(this.position.x,this.position.y,this.r,0,Math.PI*2);//填充雪花的颜色;
                context.fill();
            }   
        }
 
        for(var i=0;i<100;i++){
            var snow=new Snowflake();//Initialize 100 snowflake
            snowArray.push(snow);//Place it into array
        }
        function cartoon(){
            context.clearRect(0,0,width,height);//Clear the screen every time it is called
            for(var j=0;j<snowArray.length;j++){
                snowArray[j].draw();//将实例化好的每个雪花对象在画布上画出来;
            }
            requestAnimationFrame(cartoon);//Call the animation 
        }