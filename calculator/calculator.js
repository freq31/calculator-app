var display=document.getElementById("display-content");
var num=0,num1,ans=0,d=0,p;
var operator;
var isdecimal=false;
function number(element){
    if(isdecimal==true){
        d=d*10+parseInt(element.innerHTML);
        p=Math.floor(Math.log10(d))+1;
        num=num+d/Math.pow(10,p);
    }
    else{
        num=num*10+parseInt(element.innerHTML);

    }

    
    display.innerHTML=num.toString();
};
function del(element){
    var temp=num/10;
    temp=Math.floor(temp);
    display.innerHTML=temp.toString();
    num=temp;
};
function clr(element){
 
    display.innerHTML='';
    num=0;
    isdecimal=false;
    d=0;
};
function dec(){
    display.innerHTML=display.innerHTML+'.';
    isdecimal=true;

}
function operation(element){
     operator=element.innerHTML;
     num1=num;
     display.innerHTML='';
     num=0;
     d=0;
     isdecimal=false;
     
}
function calc(){
    
    if(operator=='+'){
        ans=num1+num;
        display.innerHTML=ans.toString();

    }
    else if(operator=='-'){
        ans=num1-num;
        display.innerHTML=ans.toString();

    }
    else if(operator=='x'){
        ans=num1*num;
        display.innerHTML=ans.toString();

    }
    else if(operator=='/'){
        if(num==0){
            display.innerHTML="error:can't divide by zero";
        }
        else{
            ans=num1/num;
            display.innerHTML=ans.toString();

        }
        

    }
    else if(operator=='%'){
        ans=num1/100;
        ans=ans*num;
        display.innerHTML=ans.toString();

    }
    num=ans;


}

