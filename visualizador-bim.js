import { projects } from "./projects.js";

// get the current project ID from URL parameter

const currentUrl = window.location.href; 
const url = new URL(currentUrl);
const currentProjectID = url.searchParams.get("id");

// get the current project
const currentProject = projects.find(project => project.id === currentProjectID );

// add the project URL to the iframe
const iframe = document.getElementById('model-iframe');
iframe.src = currentProject.url;

