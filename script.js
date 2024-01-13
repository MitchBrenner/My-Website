// // htmlGenerator.js

// async function fetchProjects() {
//     const response = await fetch('./projects.json');
//     const projects = await response.json();
//     return projects;
//   }

// function generateHTML(projects) {
//     const wrapper = document.createElement('div');
//     wrapper.classList.add('projects-wrapper', 'wrapper');
  
//     const projectsDiv = document.createElement('div');
//     projectsDiv.classList.add('projects-div', 'div');
//     projectsDiv.id = 'project-div';
  
//     const titleDiv = document.createElement('div');
//     titleDiv.classList.add('title');
//     const titleH1 = document.createElement('h1');
//     titleH1.textContent = '// Projects';
//     titleDiv.appendChild(titleH1);
  
//     const buttonsDiv = document.createElement('div');
//     buttonsDiv.classList.add('buttons-div');
//     buttonsDiv.innerHTML = `
//           <button id="all">All</button>
//           <button id="java">Java</button>
//           <button id="javascript">JavaScript</button>
//           <button id="python">Python</button>
//           <button id="data">Data Structures</button>
//       `;
  
//     const gridWrapper = document.createElement('div');
//     gridWrapper.classList.add('grid-wrapper');
  
//     const gridContainer = document.createElement('div');
//     gridContainer.classList.add('grid');
//     gridContainer.id = 'grid';
  
//     gridWrapper.appendChild(gridContainer);
//     projectsDiv.appendChild(titleDiv);
//     projectsDiv.appendChild(buttonsDiv);
//     projectsDiv.appendChild(gridWrapper);
//     wrapper.appendChild(projectsDiv);
  
//     document.body.appendChild(wrapper);
  
//     // Add your logic to populate the grid with projects
//     fetchProjects().then(projects => {
//         projects.forEach(project => {
//           const html = `
//             <div class="grid-item ${project.languages.join(' ')}">
//               <h1>${project.title}</h1>
//               <h2>${project.description}</h2>
//               <div class="bottom-grid">
//                 <h2>${project.languages.join(', ')}</h2>
//                 <a href="${project.link}" target="_blank"><i class="fa-brands fa-github"></i></a>
//               </div>
//             </div>
//           `;
//           gridContainer.innerHTML += html;
//         });
//       });
      
  
//     return gridContainer; // Return the grid container for later use
//   }
  
// const projects_div = document.getElementById('projects');
// projects_div.appendChild(generateHTML());