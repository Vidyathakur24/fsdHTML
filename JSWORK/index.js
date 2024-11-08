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
/*
const button=document.getElementById("btn");
const output=document.getElementById("output");
const select=document.getElementById("select")
//console.dir(button);//for directory checking
//console.dir(output);
//console.dir(select);
console.log(select.value);
function selectLang(language) {
    console.log("hi,inside select language");
    output.innerHTML="<h2>Welcome to home page</h2>"
    //console.log(language);
    let data;
  
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
 // button.addEventListener("click",selectLang);
 button.addEventListener("click",()=>{
  const comp =selectLang('java');
  output.innerHTML=`<h2 style=color:red>${comp}</h2>`
  console.log(comp);
  console.log(select.value);
   });
   */


   //promise-three cases-resolve,reject and pending
   /*const myPromise=new Promise(
    (resolve,reject)=>{
      let a=12;
      if(a>10){
       // resolve("data resolved");
       resolve({name:"rahul",branch:"it"});
      }
      else{
        reject("data is rejected");
      }
    });
    myPromise.then(msg=>console.log(msg.name)).catch(error=>console.log(error))
    .finally(()=>console.log("finally executed"));
*/
const data=fetch("https://dummyjson.com/recipes");
data.then(
  (res)=>{
    console.log(res);
    res.json().then(
      (response)=>{
        console.log(response.recipes[0].name);

        const str=response.recipes[0];
        output.innerHTML=str.id+" :"+str.name+"-"+str.instructions;
       // output.innerHTML=response.recipes[0].name;
       
      })
  }
);
