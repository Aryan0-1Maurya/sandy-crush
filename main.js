/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/

alert('  🇨​🇦​🇳​🇩​🇾​ 🇨​🇷​🇺​🇸​🇭​\n\n😮😮😮...I\'m happy to develope such a great game😀😀 \n\nDesign Your Own Level and enjoy it - DIY Levels\n\nDon\'t Forget to Upvote and Comment if you Enjoy it ,Guys 🍬🍬🍬\nHappy Candy!!🤗🤗🤗🤗🤗')
alert('😍😍😍😍\n\nVery Thankful for 400 🅻🅸🅺🅴🆂 and 6k+ views\n\n🤩🤩🤩🤩\nDesire Likes don\'t stop here\n\n 👉 Tap on gift box to get Info about How to Play!!')

function id(str){
        return document.getElementById(str);
    }
function clas(str){
        return document.getElementsByClassName(str);
    }

var isloadComp=0;
var loadCount=0;
function isLoad(){
        loadCount++;
        if(loadCount=>5){
        isloadComp=1;
        
        }
        if(isloadComp){
       id('loading').style.display='none';
         
         }
    }

function quotes(q){
    //id('quotes').style.top='240px';
    id('quotes').style.opacity='1';
    
    id('quotes').style.display='flex';
    id('quoteBox').innerHTML=q;
    setTimeout(movequotes,50);
}

function movequotes(){
    id('quotes').style.transition='all 0.5s ease-out';
    id('quotes').style.top='110px';
    id('quotes').style.opacity='0';
    setTimeout(function(){
          id('quotes').style.top='190px'; id('quotes').style.display='none';
    },500);
    
}


/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/


function spaceEmpty3(r,c,rT){
        //console.log(r,rT);
        
        correctPut=[];
        if(r<0){
            putCandyOnTop();
            //r++;
        }
        if(r>-1){
    
    for(let c1=c;c1<rT;c1=c++)
       for(let x1=r;x1>-1&&x1<lengthTable-1;x1--){
        
  if(table.rows[x1].cells[c1].innerHTML==entities&&x1==0){
      putCandyOnTop();
  }
else if(table.rows[x1].cells[c1].innerHTML==9){
    candyFromObstacle(x1,c1);
    break;
   
}
  else {
    let candy12=table.rows[x1].cells[c1].innerHTML;
    table.rows[x1].cells[c1].innerHTML=entities;
   table.rows[x1+1].cells[c1].innerHTML=candy12;
  // console.log(c)
  }
 if(x1==0) if(table.rows[x1].cells[c1].innerHTML==entities){
      putCandyOnTop();
    
  }
 
}
            }
 
 setTimeout(autoDetectRow,200);
 setTimeout(isPepsiReach,100);
            
        }

   var candyMatch0=0;
   let matchFinish=0;
   let isInc=0;
   let isInc1=0;
   var callQ=false;
function autoDetectRow(){
        let isMatch0=0;
        let isMatch1=0;
        let isMatch2=0;
        let isMatch3=0;
        let isMatch4=0;
      //  var callQ=false;
       swipe='';
       isInc1=matchFinish;
            for(let c=0;c<lengthTable;c++){
                for(let r=0;r<lengthTable;r++){
                /*if(table.rows[c].cells[r].innerHTML==entities){
                spaceEmpty3(r-1,c,c+1); 
                console.log(r-1,c,c+1+'ji');  
                }
                  */ if(table.rows[c].cells[r].innerHTML==0){
                 isMatch0++;    
                 if(isMatch0==3){
                 isMatch0=0;
        touchCandy=0;
        candyMatch(c,r);
        matchFinish++;
        }
    }
    else
    isMatch0=0;
                    
if(table.rows[c].cells[r].innerHTML==1){
                 isMatch1++;  
                if(isMatch1==3){
                isMatch1=0;
        touchCandy=1;
        candyMatch(c,r);
        matchFinish++;
        }
    }   
                    
    else
    isMatch1=0;    
 if(table.rows[c].cells[r].innerHTML==2){
                 isMatch2++;   
                  if(isMatch2==3){
                  isMatch2=0;
        touchCandy=2;
        candyMatch(c,r);
        matchFinish++;
        }
    }
    else
    isMatch2=0;
    if(table.rows[c].cells[r].innerHTML==3){
                 isMatch3++;   
                  if(isMatch3==3){
                  isMatch3=0;
        touchCandy=3;
        candyMatch(c,r);
        matchFinish++;
        }
    }
    else
    isMatch3=0;
    
if(table.rows[c].cells[r].innerHTML==4){
                 isMatch4++;   
                  if(isMatch4==3){
                  isMatch4=0;
        touchCandy=4;
        candyMatch(c,r);
        matchFinish++;
        }
    }
    else
    isMatch4=0;    
    
               }
            }
            
        
    if(isInc1==matchFinish){
    callQ=true;
   
    }
    else
    callQ =false;
         
    setTimeout(autoDetect,100);
      

}

/* A.i. auto detect match */  
        
        function autoDetect(){
        let isMatch0=0;
        let isMatch1=0;
        let isMatch2=0;
        let isMatch3=0;
        let isMatch4=0;
        
        let candyFinishMa=0;
        swipe='';
        isInc=matchFinish;
            for(let r=0;r<lengthTable;r++){
                for(let c=0;c<lengthTable;c++){
   /*if(table.rows[c].cells[r].innerHTML==entities){
                spaceEmpty3(c-1,r,r+1);
                  
                }*/
                  if(table.rows[c].cells[r].innerHTML==0){
                 isMatch0++;    
                 if(isMatch0==3){
        touchCandy=0;
        isMatch0=0;
        //console.log(touchCandy,c,r);
        candyMatch(c,r);
        matchFinish++;
        }
    
    }
    else
    isMatch0=0;
                    
if(table.rows[c].cells[r].innerHTML==1){
                 isMatch1++;  
                if(isMatch1==3){
        touchCandy=1;
        isMatch1=0;
       // console.log(touchCandy,c,r);
        candyMatch(c,r);
         matchFinish++;
        }
        
    }   
                    
    else
    isMatch1=0;    
 if(table.rows[c].cells[r].innerHTML==2){
                 isMatch2++;   
                  if(isMatch2==3){
        touchCandy=2;
        isMatch2=0;
        //console.log(touchCandy,c,r);
        candyMatch(c,r);
        matchFinish++;
        }
        
    }
    else
    isMatch2=0;
    if(table.rows[c].cells[r].innerHTML==3){
                 isMatch3++;   
                  if(isMatch3==3){
        touchCandy=3;
        isMatch3=0;
       // console.log(touchCandy,c,r);
        candyMatch(c,r);
        matchFinish++;
        }
    
    }
    else
    isMatch3=0;
    
if(table.rows[c].cells[r].innerHTML==4){
                 isMatch4++;   
                  if(isMatch4==3){
        touchCandy=4;
        isMatch4=0;
        //console.log(touchCandy,c,r);
        candyMatch(c,r);
        matchFinish++;
        }
        
    }
    else
    isMatch4=0;    
    
               }
            }
            
            if(isInc==matchFinish && callQ){
        setTimeout(callquote,50);
       // callQ =false;
      
       }
        }
       
     function callquote(){
         if(matchFinish==1){

                quotes('Sweets');
            }
        else if(matchFinish==2||matchFinish==3)
        quotes('Tasty');
        else if(matchFinish>3)
        quotes('Delicious');
     }
       
       
       
  /* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/     
       
       
       let randCandy;
   function candyFromObstacle(r,c){
      randCandy=Math.floor(Math.random()*5);
      if(table.rows[r+1].cells[c].innerHTML==entities) table.rows[r+1].cells[c].innerHTML=randCandy;
      putImages();
   }
    
        
        let __CandyCrush=[0,0,0,0,0];
        
        let touch_Candy=-1;
        let targetCrush=15;
        
        let moves=0;
        let targetmoves=2;
        
        let bottleDrop;
        let isBottleLevel=false;
        
        let points=0;
        let pointsLevel=true;
        let pointsTarget=400;
        
        let levelNo=2;
        
             function isCandyCrushLevelOn(candy){
             
                 if(touch_Candy==candy){
        __CandyCrush[candy]+=1;
    id('targetCrush').innerHTML=targetCrush-__CandyCrush[candy];
                 }
                 
                 if(__CandyCrush[candy]>=targetCrush){
       levOk++;
       
       __CandyCrush[candy]=0;
    touch_Candy=-1;
    
                 }
    setTimeout(isLevCom,510);
             }    
        
        
        function bottle_Level(){
         //  if(touch_Candy!=-1)
          id('bottle').innerHTML=bottleDrop;
           
           if(isBottleLevel){
       id('bottleLev').style.backgroundImage='url("https://i.postimg.cc/90shdLCJ/1596255138019.png")';      
                    id('bottleLev').style.backgroundPosition='center';
       id('bottleLev').style.backgroundSize='26px 40px';
       id('bottleLev').style.display='block';
       if(touch_Candy!=-1)
 id('bottleLev').style.left='63px';
 
       //id('bottle').innerHTML=bottleDrop;
    }
  
        }
        
        function imageShow(){
       if(touch_Candy!=-1){ id('targetCrush').innerHTML=targetCrush;
       id('candyImage').style.display='block';}
    
            
        id('moves').innerHTML='Moves '+Math.abs(targetmoves-moves);
            if(touch_Candy==0){
    id('candyImage').style.backgroundImage='url("https://i.postimg.cc/yx2F3Bs5/special-candy-crush-combos.png")';                   
   id('candyImage').style.backgroundPosition='-1% -1%';
    id('candyImage').style.backgroundSize='300px 240px';  
                    }
else if(touch_Candy==1){
     id('candyImage').style.backgroundImage='url("https://i.postimg.cc/yx2F3Bs5/special-candy-crush-combos.png")';                      id('candyImage').style.backgroundPosition='19% 0%';
     id('candyImage').style.backgroundSize='300px 240px';  
                    }
else if(touch_Candy==2){
             id('candyImage').style.backgroundImage='url("https://i.postimg.cc/yx2F3Bs5/special-candy-crush-combos.png")';
                           id('candyImage').style.backgroundPosition='61% 0%';
                 id('candyImage').style.backgroundSize='300px 240px';            
                    }
else if(touch_Candy==3){
             id('candyImage').style.backgroundImage='url("https://i.postimg.cc/yx2F3Bs5/special-candy-crush-combos.png")';   
                        id('candyImage').style.backgroundPosition='82% 0%';
            id('candyImage').style.backgroundSize='300px 240px';              
                    }
else if(touch_Candy==4){
             id('candyImage').style.backgroundImage='url("https://i.postimg.cc/V6pBPFyq/Pics-Art-07-31-03-15-20.png")';      
                    id('candyImage').style.backgroundPosition='center';
       id('candyImage').style.backgroundSize='43px 43px';                 
                    }
else if(touch_Candy==-1){
  id('candyImage').style.display='none';
 id('bottleLev').style.left='0px';

}

    if(pointsLevel){
        id('progressBarBorder').style.display='block';
id('pTarget').style.display='block';  
 id('pTarget').innerHTML='Target: '+pointsTarget;
    }
    else{
id('pTarget').style.display='none';   
      id('progressBarBorder').style.display='none';
        id('progressBar').style.display='none';
       id('progressBar').style.width='0px';
    }
        }
        
        
function increLevelBar(points){

id('progressBar').style.transition='all 0.5s linear';

 id('progressBar').style.display='block';
   id('progressBar').style.width=(points/pointsTarget)*100+'px';
   
   if(points>=pointsTarget){
       pointsLevel=false; 
       levOk++;
      setTimeout(isLevCom,510);
    }
    
}

function setTableHeight(){
    if(lengthTable>=8)
        table.style.height='320px';
    else{
        table.style.height='300px';
    }
    
}

function selectLevel(pointsLevel){
    if(pointsLevel){
        touch_Candy=-1;
        isBottleLevel=false;
    }
    else{
        pointsLevel=false;
        
    }
}
           let levOk=0;;
           let levThing;
           let movesLev;
           levelNo=1;
           let randCandy__;
           let tC;
           let pointsRand;
           let corLevel=[];
           let isCreateTable=0;
function setLevel(){
    levOk=0;
   diyLevl=false; id('nextLevel').style.display='flex';
id('diyButton').style.display='none';
id('levelText').innerHTML='Lv. '+levelNo;
    if(levelNo==1){
        pointsLevel=true;
        
        if(levelComTrue){
        
    
        
        if(isCreateTable)
        delTable();
        lengthTable=6;
        length=lengthTable;
      createTable();
      first=1;
      isCreateTable=1;
      }
      points=0;
      putObsTrue=false;
        levThing=1;
        moves=0;
        movesLev=10;
        pointsTarget=180;
        targetmoves=movesLev;
        selectLevel(pointsLevel);
        imageShow();
        bottleDisplay();
    }
    else if(levelNo==2){
    matchFinish =0;
       pointsLevel=false;
       levThing=1;
       
       if(levelComTrue){
       
       delTable();
       lengthTable=6;
       length=lengthTable;
      createTable();
      first=1;
      randCandy__=Math.floor(Math.random()*5); 
      } 
       let randMove=[18,20];
      touch_Candy=randCandy__; movesLev=randMove[Math.floor(Math.random()*randMove.length)];
        targetmoves=movesLev;
        moves=0;
        targetCrush=20;
        imageShow();
        putObsTrue=false;
        bottleDisplay()
    }
    else if(levelNo==3){
    matchFinish =0;
        pointsLevel=false;
       levThing=2;
       if(levelComTrue){
       delTable();
       lengthTable=6;
       length=lengthTable;
      createTable();
      first=1;
     randCandy__=Math.floor(Math.random()*5);
      } 
      touch_Candy=randCandy__;
        let randMove=[20,22]; movesLev=randMove[Math.floor(Math.random()*randMove.length)];
        targetmoves=movesLev;
        targetCrush=15;
        moves=0;
        isBottleLevel=true;
        pepsiPutRand=false;
        putObsTrue=false;
        imageShow();
        bottleDisplay();
    }
   else if(levelNo==4){
       pointsLevel=false;
       levThing=1; 
       matchFinish =0;
       touch_Candy=-1;
       if(levelComTrue){
        delTable();
       lengthTable=7;
       length=lengthTable;
      createTable();
      first=1;
      }
      let randMove=[20,25,30]; movesLev=randMove[Math.floor(Math.random()*randMove.length)];
       moves=0;
       targetmoves=movesLev;
       max=3;
       min=2;
       cellInc=1;
       rowDec=1;
       if(levelComTrue)
       putObsTrue=true;
       else
       putObsTrue=false;
        isBottleLevel=true;
        imageShow();
        bottleDisplay();
        
   }
   else if(levelNo==5){
       pointsLevel=false;
       matchFinish =0;
       levThing=1; 
       if(levelComTrue){
      delTable();
      lengthTable=7;
      length=lengthTable;
      createTable();
      setTableHeight();
      first=1;
      randCandy__=Math.floor(Math.random()*5);   }
      touch_Candy=randCandy__;
        let randMove=[25,30,32];
        movesLev=randMove[Math.floor(Math.random()*randMove.length)];
        targetmoves=movesLev;
       moves=0;
       targetCrush=25;
       max=3;
       min=2;
       cellInc=1;
       rowDec=0;
       if(levelComTrue)
       putObsTrue=true;
       else
       putObsTrue=false;
        isBottleLevel=false;
     
        imageShow();
        bottleDisplay();
   }
   else{
 
   matchFinish =0;
       
      if(levelComTrue){
    delTable();
    while(1){
var   randLevel=Math.floor(Math.random()*4);
   corLevel.push(randLevel);
   if(corLevel.length==2){
       if(corLevel[0]==corLevel[1]){
           corLevel.shift();
           continue;
       }
       else{
       corLevel.shift();
       break;
       }
   }
   }
   if(levelNo<10)
      lengthTable=7;
    else
      lengthTable=8;
      length=lengthTable;
      createTable();
      setTableHeight();
      first=1;
      }
      
      if(randLevel==0){
       pointsLevel=false;
       levThing=1;
       touch_Candy=-1;
       let randMove=[25,30,35];
        movesLev=randMove[Math.floor(Math.random()*randMove.length)];
       targetmoves=movesLev;
       moves=0;
       pepsiPutRand=true;
       isBottleLevel=true;
        imageShow();
        bottleDisplay();
       }
       else if(randLevel==1){
           candy_BottlePut();
       }
       else if(randLevel==2){
           makePointsLevel();
        
       }
       else if(randLevel==3){
           candyCrushLevel();
       }
       if(levelNo<10)
       max=lengthTable-3;
       else
       max=lengthTable-Math.floor(Math.random()*(4-2)+2);
       
       min=Math.floor(Math.random()*(3-1)+1);
       cellInc=Math.floor(Math.random()*2);
       rowDec=Math.floor(Math.random()*2);
       if(levelComTrue)
       putObsTrue=true;
       else
       putObsTrue=false;
       
   }
    putEntities();
    putImages();
    setTimeout(putCandyOnTop,100);
    
    candyEnd=setInterval(putCandy,100);
    callObstacles();
}



function candy_BottlePut(){
    pointsLevel=false;
       levThing=2;
       if(levelComTrue){
     /*  delTable();
       lengthTable=6;
      createTable();
      first=1;*/
      randCandy__=Math.floor(Math.random()*5); 
       let cdyRand=[30,35];
       
        tC=cdyRand[Math.floor(Math.random()*cdyRand.length)];
      } 
      touch_Candy=randCandy__;
       let randMove=[25,30,25];
       movesLev=randMove[Math.floor(Math.random()*randMove.length)];
        targetmoves=movesLev;
        moves=0;
       targetCrush=tC;
        isBottleLevel=true;
        pepsiPutRand=false;
        imageShow();
}

function makePointsLevel(){
    pointsLevel=true;
    points=0;
    let poi;
    let randMove;
    if(levelComTrue){
    if(levelNo<10)
    poi=[400,300,600,400];
    else
    poi=[900,1000,800];
    pointsRand=poi[Math.floor(Math.random()*poi.length)];
    }
    pointsTarget=pointsRand;

       
        levThing=1;
        if(levelNo<10)
         randMove=[15,20,20];
        else
         randMove=[30,25,35,35]; movesLev=randMove[Math.floor(Math.random()*randMove.length)];
        targetmoves=movesLev;
        moves=0;
        touch_Candy=-1;
        isBottleLevel=false;
        bottleDisplay();
        imageShow();
}

function candyCrushLevel(){
    pointsLevel=false;
       levThing=1;
       if(levelComTrue){
      /* delTable();
       lengthTable=6;
      createTable();
      first=1;*/
      randCandy__=Math.floor(Math.random()*5); 
      
      let cdyRand=[40,35,45,50];
        tC=cdyRand[Math.floor(Math.random()*cdyRand.length)];
      } 
      touch_Candy=randCandy__;
       let randMove=[30,35];
       movesLev=randMove[Math.floor(Math.random()*randMove.length)];
        targetmoves=movesLev;
        moves=0;
        targetCrush=tC;
        imageShow();
}
function bottleDisplay(){
       if(!isBottleLevel){
    id('bottleLev').style.left='63px';
    id('bottleLev').style.display='none';
    bottleDrop=0;
    pepsiCount=0;
}
}

let putObsTrue=false;
function callObstacles(){
    if(putObsTrue){
        obstacles();
    }
}

function delTable(){
//console.log(lengthTable+'Play');
for(let i=0;i<lengthTable;i++)
       table.deleteRow(0);
}
function createTable(){
    for(let i=0;i<lengthTable;i++)
        appendTd();
}
var reservedLevels=false;
function isLevCom(){
    
  
   if(levOk==levThing ){
   if(!diyLevl){
   reservedLevels=false;
  
   }
       levelComTrue=true; id('levelCompletedBox').style.display='flex';
        id('islevCom').innerHTML='Level Completed';
    id('islevCom').style.color='black';
    id('nextLevel').innerHTML='Next Level';
    id('nextLevel').style.backgroundColor='red';
    id('nextLevel').style.color='white';
    id('gameStatus').style.backgroundColor='aqua';
    }
}
var levelComTrue=true;
function nextLev(){
    if(!levelComTrue){
    r=0;
    row1=0;
    putEntities();
    putImages();
    moves=0;
    __CandyCrush[touch_Candy]=0;
    first=0;
    
  id('progressBar').style.transition='none' ;
   id('progressBar').style.display='none'; id('progressBar').style.width='0px';
    points=0;
    
    pepsiCount=0; id('levelCompletedBox').style.display='none';
    if(!reservedLevels){
    
        setTimeout(setLevel,200);
        
        }
        reservedLevels=false;
        //delTable();
    }
    else{
    levelNo++;
    r=0;
    row1=0;
    id('levelCompletedBox').style.display='none';
    id('levelText').innerHTML='Lv. '+levelNo;
    putEntities();
    putImages();
    
    if(!reservedLevels)
    setTimeout(setLevel,200);
    reservedLevels=false;
    }
}


function movesEnd(){
   levelComTrue=false; id('levelCompletedBox').style.display='flex';
   id('gameStatus').style.backgroundColor='red';
    id('islevCom').innerHTML='Level Failed';
    
    id('nextLevel').innerHTML='Retry';
    id('nextLevel').style.backgroundColor='rgba(0,255,0,0.7)';

}



function len6(){
    lengthTable=6;
    document.getElementsByClassName('len6')[0].style.background='linear-gradient(red,white)';
    document.getElementsByClassName('len6')[1].style.background='linear-gradient(white,grey)';
    document.getElementsByClassName('len6')[2].style.background='linear-gradient(white,grey)';
}

function len7(){
    lengthTable=7;
    document.getElementsByClassName('len6')[1].style.background='linear-gradient(red,white)';
    document.getElementsByClassName('len6')[0].style.background='linear-gradient(white,grey)';
    document.getElementsByClassName('len6')[2].style.background='linear-gradient(white,grey)';
}

function len8(){
    lengthTable=8;
    document.getElementsByClassName('len6')[2].style.background='linear-gradient(red,white)';
document.getElementsByClassName('len6')[0].style.background='linear-gradient(white,grey)';
document.getElementsByClassName('len6')[1].style.background='linear-gradient(white,grey)';
}

function checkObs(){
    putObsTrue=id('checkObs').checked;
   if(putObsTrue) id('diffiObs').style.visibility='visible';
   else
id('diffiObs').style.visibility='hidden';
}
function easy(){
       max=2
       min=1
       cellInc=2;
       rowDec=0;
       document.getElementsByClassName('dif')[0].style.background='linear-gradient(red,white)';
    document.getElementsByClassName('dif')[1].style.background='linear-gradient(white,grey)';
    document.getElementsByClassName('dif')[2].style.background='linear-gradient(white,grey)';
}
function med(){
       max=lengthTable-2;
       min=2;
       cellInc=2;
       rowDec=1;
       document.getElementsByClassName('dif')[1].style.background='linear-gradient(red,white)';
    document.getElementsByClassName('dif')[0].style.background='linear-gradient(white,grey)';
    document.getElementsByClassName('dif')[2].style.background='linear-gradient(white,grey)';
}
function hard(){
       max=lengthTable-1;
       min=3;
       cellInc=1;
       rowDec=0;
      document.getElementsByClassName('dif')[2].style.background='linear-gradient(red,white)';
    document.getElementsByClassName('dif')[1].style.background='linear-gradient(white,grey)';
    document.getElementsByClassName('dif')[0].style.background='linear-gradient(white,grey)'; 
}
function pointsLv(){
    pointsLevel=true;
    points=0;
    levThing=1;
    putCand=false;
        touch_Candy=-1;
        isBottleLevel=false;
    poi=[400,300,600,400,700,900,800];
    pointsRand=poi[Math.floor(Math.random()*poi.length)];
    
    pointsTarget=pointsRand; document.getElementsByClassName('levOp')[0].style.background='linear-gradient(red,white)';
    document.getElementsByClassName('levOp')[1].style.background='linear-gradient(white,grey)';
    document.getElementsByClassName('levOp')[2].style.background='linear-gradient(white,grey)'; 
    document.getElementsByClassName('levOp')[3].style.background='linear-gradient(white,grey)'; 
}
let putCand=false;
function candyLv(){
    randCandy__=Math.floor(Math.random()*5); 
      

      touch_Candy=randCandy;
      putCand=true;
      isBottleLevel=false;
      pointsLevel =false;
      levThing=1;
    targetCrush=30; document.getElementsByClassName('levOp')[1].style.background='linear-gradient(red,white)';
     document.getElementsByClassName('levOp')[3].style.background='linear-gradient(white,grey)';
    document.getElementsByClassName('levOp')[0].style.background='linear-gradient(white,grey)'; 
    document.getElementsByClassName('levOp')[2].style.background='linear-gradient(white,grey)'; 
}
function canLv(){
    touch_Candy=-1;
    isBottleLevel=true;
    pointsLevel=false;
   pepsiPutRand=true;
   levThing=1;
   putCand=false; document.getElementsByClassName('levOp')[2].style.background='linear-gradient(red,white)';
     document.getElementsByClassName('levOp')[1].style.background='linear-gradient(white,grey)';
    document.getElementsByClassName('levOp')[0].style.background='linear-gradient(white,grey)'; 
    document.getElementsByClassName('levOp')[3].style.background='linear-gradient(white,grey)'; 
}
function can_CandyLv(){
    randCandy__=Math.floor(Math.random()*5); 
      
targetCrush=20;
levThing=2;
    touch_Candy=randCandy;
    putCand=true;
      isBottleLevel=true;
      pointsLevel =false;
     pepsiPutRand=false; document.getElementsByClassName('levOp')[3].style.background='linear-gradient(red,white)';
     document.getElementsByClassName('levOp')[1].style.background='linear-gradient(white,grey)';
    document.getElementsByClassName('levOp')[0].style.background='linear-gradient(white,grey)'; 
    document.getElementsByClassName('levOp')[2].style.background='linear-gradient(white,grey)'; 
}

function moveSelect(){
   
}
function incM(){
    let num=parseInt(id('moveNum').value);
    num+=1;
    id('moveNum').value=num;
}
function decM(){
    let num=parseInt(id('moveNum').value);
    num-=1;
    id('moveNum').value=num;
}
var length=6;
var diyLevl=false;
function startDIY(){
    diyLevl=true;
    points=0;
    if(putCand){
    //console.log(touch_Candy)
      touch_Candy=randCandy__;
      
      }
      
    if(isCreateTable)
    delTable2();
    isCreateTable=1;
    createTable();
    setTableHeight();
    length=lengthTable;
    putEntities();
    putImages();
    callObstacles();
    setTimeout(putCandyOnTop,100);
    candyEnd=setInterval(putCandy,100);
    levOk=0;
    moves=0;
   targetmoves=id('moveNum').value;
    id('moves').innerHTML='Moves: '+Math.abs(targetmoves-moves); 
    imageShow();
    bottleDisplay(); id('levelDiy11').style.display='none';
    id('nextLevel').style.display='none';
    id('diyButton').style.display='flex';
    id('levelText').innerHTML='DIY Lv.'
}

function goDiy(){
   r=0;
    row1=0;
    id('levelDiy11').style.display='flex';
    id('levelCompletedBox').style.display='none';
}
function goMenu(){
r=0;
row1=0;
id('pTarget').style.display='none';
id('progressBarBorder').style.display='none';
    id('ui').style.display='flex';
    id('levelDiy11').style.display='none';
    id('levelCompletedBox').style.display='none';


    if(!reservedLevels){
    reservedLevels=true;
    nextLev();
    }
}

function delTable2(){
//console.log(length)
for(let i=0;i<length;i++)
       table.deleteRow(0);
}

/* Ui */

function goDiy2(){
    id('ui').style.display='none';
    id('levelDiy11').style.display='flex';
}

function play(){
    id('ui').style.display='none';
    id('levelDiy11').style.display='none';
    levelComTrue=true;
    setLevel();
}
function back(){
    id('ui').style.display='flex';
    id('levelDiy11').style.display='none';
}


function cancel(){
    id('qMsg').style.display='none';
}

function confirm(){
    reservedLevels=true;
    goMenu();
    id('qMsg').style.display='none';
   
}


function quit(){
    id('qMsg').style.display='flex';
}

var isGiftOn=1;
function openGift(){
if(isGiftOn){
    id('gift').style.display='flex';
    id('giftBox').style.backgroundImage='none';
    id('giftBox').style.width='30px';
    id('giftBox').style.height='30px';
    id('giftBox').style.backgroundColor='red';
    id('giftBox').style.borderRadius='100%';
    id('giftBox').innerHTML='×';
    }
else{
id('gift').style.display='none';
id('giftBox').style.backgroundImage='url("https://i.postimg.cc/hG8LdpLc/1596775419395.png")';
id('giftBox').style.width='50px';
    id('giftBox').style.height='50px';
    id('giftBox').style.backgroundColor='transparent';
   id('giftBox').innerHTML='';
   id('giftBox').style.border='0px'; id('giftBox').style.borderRadius='0%';
}

isGiftOn=1-isGiftOn;
}


var how=1;
function howto(){
   if(how){ id('gift').style.justifyContent='flex-start';
    id('dSolved').style.display='block';}
    else{
        id('gift').style.justifyContent='center';
    id('dSolved').style.display='none';
    }
    how=1-how;
}





/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/