import { projects } from "./projects.js";


// get all cards
const projectsContainer = document.getElementById("projects-container");
const projectCards = Array.from(projectsContainer.children);
console.log(projectCards);


const baseURL = './visualizador-bim.html';

//get project and card
const templateProjectCard = projectCards[0];

for(let project of projects) {

    //create a new card
    const newCard = templateProjectCard.cloneNode(true);
    
    // add project name to card
    const cardTitle = newCard.querySelector('h2')
    cardTitle.textContent = project.name;

    //add project url to card
    const button = newCard.querySelector('a');
    button.href  = baseURL + `?id=${project.id}`;

    projectsContainer.appendChild(newCard)

}

templateProjectCard.remove();










