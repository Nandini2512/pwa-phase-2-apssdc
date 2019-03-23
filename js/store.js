function addData(){
  var request;
  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
  var email=document.querySelector("#email").value;
  var role=document.querySelector("#role").value;
  var phno=document.querySelector("#phno").value;
  var clg1=document.querySelector("#clg1").value;
  var degree=document.querySelector("#degree").value;
  var branch=document.querySelector("#branch").value;
  var percentage=document.querySelector("#percentage").value;
  var clg2=document.querySelector("#clg2").value;
  var degree2=document.querySelector("#degree2").value;
  var branch1=document.querySelector("#branch1").value;
  var marks1=document.querySelector("#marks1").value;
  var school=document.querySelector("#school").value;
  var degree3=document.querySelector("#degree3").value;
  var marks=document.querySelector("#marks").value;
  var skills=document.querySelector("#skills").value;
var idb= window.indexedDB || window.mozIndexedDB ||window.msIndexedDB ||window.webkitIndexedDB;
if(!idb in window){
  alert("browser is not supported");
}
var open=idb.open("storeData",1);
console.log("IndexedDB is created");
open.onupgradeneeded=function(event){
  request=event.target.result;
  var storeDB=request.createObjectStore("Formdata",{keyPath:"id",autoIncrement:true});

}
open.onerror=function(error)
{
  console.log("object store is not created",+error);

}
open.onsuccess=function(event){
  request=event.target.result;
  var transaction=request.transaction("Formdata","readwrite");
  var storeDB=transaction.objectStore("Formdata");
  storeDB.put({
    career:career,
    name:name,
    email:email,
    role:role,
    phno:phno,
    education:[
      {
    clg:clg1,
    degree:degree,
    branch:branch,
    percentage:percentage},
    {clg:clg2,
    degree:degree2,
    branch:branch1,
    percentage:marks1},
    {clg:school,
    degree:degree3,
    percentage:  marks}],
    skills:skills
  });
  window.open("index.html");
}
}
