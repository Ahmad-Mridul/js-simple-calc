let result = document.getElementById("inputText");
console.log(result);
const calculate = (number)=> {
    result.value += number;
}
const Result=()=> {
    try{
        result.value = eval(result.value);
    }catch(err){
        alert("Error");
        result.value ='';
    }
}
function clr(){
    result.value ='';
}
function del(){
    result.value =result.value.slice(0,-1);
}