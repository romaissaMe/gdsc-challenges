const passLength=document.getElementById('length');
const result = document.getElementById('result');
const generator= document.getElementById('btn');
const types={
    lower:LowerLetter,
    upper:UppercaseLetter,
    number:number,
    symole:Symbols
}
generator.addEventListener('click',()=>{
    password=pwGenerator(passLength.value);
    result.innerHTML=password;
})
//function that generate the password
function pwGenerator(length){
    var pw='';
for(let i=0;i<length;i++){
 var type=Math.floor(Math.random()*4); //a random number between 0 and types'length
 var func=Object.keys(types)[type];//take a random function from generator functions in the object types
 pw =pw + types[func]();
}
return pw;
}
//random generator functions
function LowerLetter(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function UppercaseLetter(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function number(){
    return String.fromCharCode(Math.floor(Math.random()*9)+48);

}
function Symbols(){
    const sb="!@:;,.#[]{}\|/?^*()%$`~<>+-_'="
    return sb[Math.floor(Math.random()*sb.length)+0];
}

