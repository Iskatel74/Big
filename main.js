var a,b;
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
function addition(a,b){
    return a+b;
}  
function subtraction(a,b){
    return a-b;
}
 
function multiplycation(a,b){
    return a*b;
}
function division(a,b){
    return a/b;
}
function RemainderOfTheDivision(a,b){
    return a%b;
}

function more(a,b){
    return a>b;
}
function less(a,b){
    return a<b;
}
function eaqualy(a,b){
    return a==b;
}

window.onload = function() {
    //document.getElementById('row'+i).innerHTML += 'a\r\n b<br>';
    for (i=0; i<5; i++){
        a = BigInt(getRandomInRange(10000000000,1000000000));
        b = BigInt(getRandomInRange(10000000000,1000000000));
        document.getElementById('row'+i).innerHTML += '<p><b>a =</b> '+a+'\r\n</p>';        
        document.getElementById('row'+i).innerHTML += '<p><b>b =</b> '+b+'</p>\r\n<br><br>';
        document.getElementById('row'+i).innerHTML += '<p><b>a + b =</b> '+addition(a,b)+'</p><br>';
        document.getElementById('row'+i).innerHTML += '<p><b>a - b =</b> '+subtraction(a,b)+'</p><br>';
        document.getElementById('row'+i).innerHTML += '<p><b>a * b =</b> '+multiplycation(a,b)+'</p><br>';
        document.getElementById('row'+i).innerHTML += '<p><b>a / b =</b> '+division(a,b)+'</p><br>';
        document.getElementById('row'+i).innerHTML += '<p><b>a % b =</b> '+RemainderOfTheDivision(a,b)+'</p><br>';
        document.getElementById('row'+i).innerHTML += '<p><b>a > b =</b> '+more(a,b)+'</p><br>';
        document.getElementById('row'+i).innerHTML += '<p><b>a < b =</b> '+less(a,b)+'</p><br>';
        document.getElementById('row'+i).innerHTML += '<p><b>a == b =</b> '+eaqualy(a,b)+'</p><br>';

        
    }
}