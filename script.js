document.querySelector("input").focus();

const btn=document.querySelector('button');

const roadtag= document.getElementById('road');

const inputtag1 = document.getElementById("input1");
const inputtag2 = document.getElementById("input2");

/* const divtag = document.getElementById("checkpos");
 
var LEFT = divtag.getBoundingClientRect().left;
console.log("divtag LEFT rectbounding : "+LEFT+" style.left : "+divtag.style.left);
 */



/* var str=''; */
var pos1 ="";
var pos2 ="";



btn.addEventListener("click" , ()=>{

    if (inputtag1.value==''||inputtag2.value=='') {
            alert("PLEASE INSERT THE SPEEDS");
    }
    else{

        roadtag.classList.toggle("active");

        var car1 = document.getElementById("car1");
        var newspeed=100/inputtag1.value+"s";
        car1.style.transition = newspeed;  
    
        var car2 = document.getElementById("car2");
        var newspeed2=100/inputtag2.value+"s";
        car2.style.transition = newspeed2;  
    
        console.log("TOPLAM YOL SÜRE-I :" + newspeed);
        console.log("TOPLAM YOL SÜRE-II :"+ newspeed2);

        var i =0;
        
        var starter1= setInterval(getPOS,1);

            onetime=true;    
            function getPOS() {
                pos1 = Math.floor(car1.getBoundingClientRect().left) ;
                pos2 = Math.floor(car2.getBoundingClientRect().right) ;


                if (pos1<pos2) {

                     if(onetime){

                        getThePOS_andCreateNEWones();
                        onetime=false;
                    }
            
                }   

            }

        setTimeout(()=>clearInterval(starter1),10000);


    }


});


function getThePOS_andCreateNEWones() {

    navtagleft_coord = document.querySelector("nav").getBoundingClientRect().left;
    console.log("gerçek çarpışma noktası ==  pos1: "+pos1+" pos2 :"+pos2);
    console.log("navtagleft_coord :"+navtagleft_coord);


    let str2_car2left=(pos2-navtagleft_coord-50)+"px";
    let str1_car1left=(pos2-navtagleft_coord)+"px";
    

    

    

    car1.remove();
    car2.remove();

    

    var newcar2 = document.createElement("div"); 
    newcar2.style.width="50px";
    newcar2.style.height="50px";
    newcar2.style.backgroundColor="red";
    newcar2.style.border="1px solid";
    newcar2.textContent="CAR2";
    newcar2.style.paddingTop="15px";
    newcar2.style.color= "cyan";
    newcar2.style.position="absolute";
    newcar2.style.left=str2_car2left;

    var newcar1 = document.createElement("div"); 
    newcar1.style=`width: 50px; height: 50px; color: white; left: 0px  ; border:black ; background-color: red; text-align: center; padding-top: 15px; position: absolute;`;//${pos1}px
    newcar1.innerText="CAR1";
    newcar1.style.left=str1_car1left;

    roadtag.appendChild(newcar1);
    roadtag.appendChild(newcar2);

    console.log("CAR1 sol yanı : "+ newcar1.style.left);
    console.log("CAR2 sağ yanı : "+ newcar2.style.left);

        /*      alert("ÇARPIŞMA OLDU MK ... :((("); */

    document.querySelector("h1").innerHTML="!!! CRASH HAPPENED !!!";
    document.querySelector("h1").classList.add("aftercrash");

    document.body.style.backgroundColor = "brown";

}


