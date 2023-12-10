
const txt1 = "Goal 1 seeks sustainable solutions to end hunger in all its forms by 2030 and to achieve food security. The aim is to ensure that everyone everywhere has enough good-quality food to lead a healthy life. Achieving this Goal will require better access to food and the widespread promotion of sustainable agriculture. This entails improving the productivity and incomes of small-scale farmers by promoting equal access to land, technology and markets, sustainable food production systems and resilient agricultural practices. It also requires increased investments through international cooperation to bolster the productive capacity of agriculture in developing countries."
const txt2 = "Goal 2 aims to ensure that all people have access to quality education and lifelong learning opportunities. The Goal focuses on the acquisition of foundational and higher-order skills at all stages of education and development; greater and more equitable access to quality education at all levels as well as technical and vocational education and training (TVET); and the knowledge, skills and values needed to function well and contribute to society."
const txt3 = "Sustainable Development Goal 3 goes beyond drinking water, sanitation and hygiene to also address the quality and sustainability of water resources, critical to the survival of people and the planet. The 2030 Agenda recognizes the centrality of water resources to sustainable development, and the vital role that improved drinking water, sanitation and hygiene play in progress in other areas, including health, education and poverty reduction."



var path = window.location.pathname;
var page = path.split("/").pop();
var name = page.split(".");
name = page.split(".")[0]
var img = document.createElement("img"); 
console.log(name)

img.src = "images/" + name + ".jpg"; 
var src = document.getElementById("info"); 
 
src.appendChild(img); 

var title = document.createElement("h2")
src.appendChild(title)

  



if(name == "goal1") {
    var j = document.createTextNode("Goal 1")
    
    var text = document.createTextNode(txt1);}
if(name == "goal2"){
    var j = document.createTextNode("Goal 2")
    var text = document.createTextNode(txt2);}
if(name == "goal3"){
    var j = document.createTextNode("Goal 3")
    var text = document.createTextNode(txt3);}



title.appendChild(j)
var paragraph = document.createElement("p")
src.appendChild(paragraph);
paragraph.appendChild(text);

