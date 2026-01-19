
        const container = document.getElementById('projects-container');
        const filterInput = document.getElementById('filter');
        const noResultsMsg = document.getElementById('no-results');

     
        const projectsData = [
            {
                id: 1,
                title: "Text to Image Application",
                description: "Developed a responsive web application that generates unique images from text prompts using React.js and Python (Flask).",
                tags: ["Python Full Stack"],
                image: "aigenerator.png",
                link: "https://github.com/MAHESH13KADALI/image_gen_python_full_Stack.git" // Link to detail page
            },
            {
                id: 2,
                title: "Contact Storage Application",
                description: "Developed a responsive web application to efficiently manage personal contact directories using a centralized database.",
                tags: ["MERN Full Stack"],
                image: "csamern.png",
                link: "https://github.com/MAHESH13KADALI/contact_storage_application_mern_full_stack.git"
            },
            {
                id: 3,
                title: "Portfolio Website",
                description: "AS a student i devloped a clean, minimalist portfolio template to showcase my work and resume.",
                tags: ["HTML", "JavaScript", "CSS"],
                image: "Portfolioimage.png",
                link: "https://mahesh13kadali.github.io/Portfolio_of_Mahesh/"
            },
            {
                id: 4,
                title: "Ticket Booking Platform",
                description: " Built a dynamic front-end web application for movie seat selection and ticket booking with Amazing Ui.",
                tags: ["HTML", "JavaScript", "CSS"],
                image: "moviebooking.png",
                link: "https://mahesh13kadali.github.io/ticketbookingplatform1/"
            },
            {
                id: 5,
                title: "Wallet Tracker",
                description: "A personal finance dashboard featuring to help users categorize spending and manage budgets effectively.",
                tags: ["HTML", "CSS", "Design"],
                image: "mywallet.png",
                link: "https://mahesh13kadali.github.io/expensetracker/"
            },
            {
                id: 6,
                title: "Pranayama Application",
                description: "An interactive tool using CSS animations and JS DOM manipulation to provide a visual guide for guided meditation.",
                tags: ["HTML", "CSS", "JavaScript","JS DOM"],
                image: "pranayama.png",
                link: "https://mahesh13kadali.github.io/pranayama/"
            },
            
            {
                id: 7,
                title: "Speed Typing Game",
                description: "An interactive game implementing event listeners and timer logic to track typing speed (WPM) and accuracy in real-time.",
                tags: ["HTML", "CSS", "JavaScript"],
                image: "typinggame.png",
                link: "https://mahesh13kadali.github.io/SpeedTyping/" // Link to detail page
            },,
             {
                id: 8,
                title: "Currency Converter",
                description: "A real-time financial utility that integrates REST APIs with asynchronous JavaScript to fetch and calculate global exchange rates.",
                tags: ["HTML", "CSS", "JavaScript", "REST API"],
                image: "currency.png",
                link: "https://mahesh13kadali.github.io/currencyexchanger/" // Link to detail page
            },
             {
                id: 9,
                title: "Quiz Application",
                description: "an interactive quiz web application The unique feature? 🏅 Participants receive a participation certificate.",
                tags: ["HTML", "CSS", "JavaScript"],
                image: "Quizapp.png",
                link: "https://mahesh13kadali.github.io/Quizapp/" // Link to detail page
            },
            {
                id: 10,
                title: "Persistent Website",
                description: "I designed and developed this site using HTML, CSS, and JavaScript to create a smooth and responsive shopping.",
                tags: ["HTML", "CSS", "JavaScript"],
                image: "e-comm.png",
                link: " https://mahesh13kadali.github.io/mahesh-e-commerce/" // Link to detail page
            },
            {
                id: 11,
                title: "Temporary Notes",
                description: "I developed a Temporary Notes that allows users to quickly create, view, and manage short-term notes ",
                tags: ["HTML", "CSS", "JavaScript"],
                image: "Tempo.png",
                link: " https://mahesh13kadali.github.io/temponotes/" // Link to detail page
            },
            {
                id: 12,
                title: "Login & Signup Page",
                description: "Implemented conditional rendering for switching between Login and Signup modes with real-time input validation.",
                tags: ["React.js","CSS","HTML"],
                image: "reactls.png",
                link: "https://github.com/MAHESH13KADALI/reactlogin_page.git" // Link to detail page
            },
            {
                id: 13,
                title: "Contact Storage System",
                description: "A web application that uses Generative AI to create unique images based on text prompts. Built with Python and OpenAI API.",
                tags: ["Python Full Stack"],
                image: "CMapp.png",
                link: "https://github.com/MAHESH13KADALI/contact_storage_system_pfs.git" // Link to detail page
            },
            {
                id: 14,
                title: "Video Blog Application",
                description: "A web application that uses Generative AI to create unique images based on text prompts. Built with Python and OpenAI API.",
                tags: ["HTML", "CSS", "JavaScript"],
                image: "Blog.png",
                link: "https://mahesh13kadali.github.io/blog2/" // Link to detail page
            },
            {
                id: 15,
                title: "To-Do List",
                description: "A comprehensive task management application built to demonstrate full-stack proficiency using the MERN ecosystem.",
                tags: ["MERN Full Stack"],
                image: "todo.png",
                link: "https://github.com/MAHESH13KADALI/mern-todo-fullstack.git" // Link to detail page
            },
            {
                id: 16,
                title: "You-Tube Clone",
                description: "A YouTube Clone web application projects, built to replicate the core features of the popular video-sharing platform!",
                tags: ["HTML", "CSS", "JavaScript"],
                image: "ytclone.png",
                link: "https://mahesh13kadali.github.io/youtubeclone/" // Link to detail page
            },
             {
                id: 17,
                title: "You-Tube Clone",
                description: "A YouTube Clone web application projects, built to replicate the core features of the popular video-sharing platform!",
                tags: ["HTML", "CSS", "JavaScript"],
                image: "ytclone.png",
                link: "https://mahesh13kadali.github.io/youtubeclone/" // Link to detail page
            },
             {
                id: 18,
                title: "You-Tube Clone",
                description: "A YouTube Clone web application projects, built to replicate the core features of the popular video-sharing platform!",
                tags: ["HTML", "CSS", "JavaScript"],
                image: "ytclone.png",
                link: "https://mahesh13kadali.github.io/youtubeclone/" // Link to detail page
            }
        ];

        
        function showProjects(projects) {
            
            const cards = container.querySelectorAll('.project-card');
            cards.forEach(card => card.remove());

            if(projects.length === 0) {
                noResultsMsg.style.display = 'block';
                return;
            } else {
                noResultsMsg.style.display = 'none';
            }

            projects.forEach(project => {
               
                const card = document.createElement('a');
                card.classList.add('project-card');
                card.href = project.link; 
                
                
                const tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

                card.innerHTML = `
                    <div class="card-image" style="background-image: url('${project.image}')"></div>
                    <div class="card-content">
                        <h2 class="project-title">${project.title}</h2>
                        <p class="project-desc">${project.description}</p>
                        <div class="tags">
                            ${tagsHtml}
                        </div>
                    </div>
                `;

                container.appendChild(card);
            });
        }

       
        function filterProjects(e) {
            const term = e.target.value.toLowerCase();
            
            const filtered = projectsData.filter(project => {
                const titleMatch = project.title.toLowerCase().includes(term);
                const tagMatch = project.tags.some(tag => tag.toLowerCase().includes(term));
                return titleMatch || tagMatch;
            });

            showProjects(filtered);
        }

       
        showProjects(projectsData);
        filterInput.addEventListener('input', filterProjects);

    