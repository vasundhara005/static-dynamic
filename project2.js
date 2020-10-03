function loadJson(file,callback) {
 var xhr = new XMLHttpRequest();
 xhr.overrideMimeType("application/json");
 xhr.open("GET",file,true);
 xhr.onreadystatechange=function(){
  if(xhr.readyState===4 && xhr.status=="200"){
   callback(xhr.responseText);
  }
 };
 xhr.send(null);
}

loadJson("project2.json",function(text){
 let data = JSON.parse(text);
 console.log(data);
 basic(data.details);
 basic1(data.details1);
})

var child1 = document.querySelector(".child1");

function basic(det){
 var img1 = document.createElement("img");
 img1.src= det.image;
 child1.appendChild(img1);

 var name = document.createElement("h4");
 name.textContent = det.name;
 child1.appendChild(name);

 var number = document.createElement("p");
 number.textContent = det.number;
 child1.appendChild(number);

 child1.appendChild(document.createElement("hr"));


 var resume =document.createElement("button");
 resume.textContent = det.resume;
 resume.setAttribute("class","resume");
 resume.classList.add("class","resume","btn-primary");
 resume.onclick=function moveToPage(){
 	location.href="resume.html"
 }
 child1.appendChild(resume);

}
var child2 = document.querySelector(".child2");

function basic1(det){
 var img1 = document.createElement("img");
 img1.src= det.image;
 child2.appendChild(img1);

 var name = document.createElement("h4");
 name.textContent = det.name;
 child2.appendChild(name);

 var number = document.createElement("p");
 number.textContent = det.number;
 child2.appendChild(number);

 child2.appendChild(document.createElement("hr"));


 var resume =document.createElement("button");
 resume.textContent = det.resume;
 resume.setAttribute("class","resume");
 resume.classList.add("class","resume","btn-primary");
 resume.onclick=function moveToPage(){
 	location.href="index.html"
 }
 child2.appendChild(resume);
}

