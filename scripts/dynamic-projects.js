async function fetchGitHubProjects() {
    const response = await fetch('https://api.github.com/users/alwrence9/repos');
    // const response = await fetch('api/repos.json');
    return await response.json();
}

function createProjects(repos) {
    const workBoxes = document.querySelector('#project__boxes');
    workBoxes.innerHTML = ''; // Clear existing content

    repos.forEach(repo => {
        const projectBox = document.createElement('div');
        projectBox.classList.add('info__box');

        /**
         *           <div class="info__box">
         *             <div class="info__text">
         *               <h3>Project 1</h3>
         *               <p>Loading...</p>
         *             </div>
         *             <div class="info__links">
         *               <a href="#" class="link__text">View Project</a>
         *             </div>
         *           </div>
         */

        const info_text = document.createElement("div");
        info_text.classList.add("info__text");

        const name = document.createElement("h3");
        name.innerText = repo.name;
        info_text.appendChild(name);

        const description = document.createElement('p');
        description.innerText = repo.description;
        info_text.appendChild(description);

        const infoLinks = document.createElement("div");
        info_text.appendChild(infoLinks);

        const projectLink =  document.createElement("a");
        projectLink.classList.add("link__text");
        projectLink.textContent = "Visit project";
        projectLink.href = repo.html_url;
        projectLink.target = "_blank";
        infoLinks.appendChild(projectLink);

        projectBox.appendChild(info_text);

        workBoxes.appendChild(projectBox);
    });
}

export function displayProjects() {
    fetchGitHubProjects().then(createProjects);
}