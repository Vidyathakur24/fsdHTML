/*console.log("Hello world");
const a=12;
if(a>10){
    let b=20;
    a=40;
    console.log("a inside:"+a);
}
console.log("a outside:"+b);

function fun(a,b){
    console.log("Hiee");
   // console.log(a);
   return a+b;
}
const result=fun(23,12);
console.log(result);
*/
/*
function cCompiler(){
return "c compiler";
}
function javaCompiler(){
return "java compiler";
}
function selectLang(clbk){//call back
return "hi,you have selected"+clbk();
}
console.log(selectLang(cCompiler));
console.log(selectLang(javaCompiler));
*/
/*
function selectLang(language) {
  console.log("hi,inside select language");
  console.log(language);

  if (language == 'c') {
    function cCompiler() {
      return "c compiler";
    }
    data = cCompiler();
  }
  if (language =='java') {
    function javaCompiler() {
      return "java compiler";
    }
    data = javaCompiler();
  }
  return data;
}
// console.log(selectLang("c"));
*/
const button=document.getElementById("btn");
console.dir(button);
function selectLang(language) {
    console.log("hi,inside select language");
    console.log(language);
  
    if (language == 'c') {
      function cCompiler() {
        return "c compiler";
      }
      data = cCompiler();
    }
    if (language =='java') {
      function javaCompiler() {
        return "java compiler";
      }
      data = javaCompiler();
    }
    return data;
  }

