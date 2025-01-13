document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display news articles
    fetchNews();

    // Fetch and display projects
    fetchProjects();

    // Fetch and display tutorials
    fetchTutorials();

    // Fetch and display forum threads
    fetchForumThreads();

    // Fetch and display job listings
    fetchJobListings();

    // Fetch and display marketplace products
    fetchMarketplaceProducts();

    // Fetch and display events
    fetchEvents();

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});

// API Key for News API
const API_KEY = "your_api_key"; // Replace with your actual API key
const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

// Fetch news articles
async function fetchNews() {
    try {
        const response = await fetch(newsUrl);
        const data = await response.json();
        displayNews(data.articles);
    } catch (error) {
        console.error("Error fetching news articles:", error);
    }
}

// Display news articles
function displayNews(articles) {
    const newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML = ""; // Clear previous content

    articles.forEach(article => {
        const card = document.createElement("div");
        card.classList.add("card");
        
        card.innerHTML = `
            <img src="${article.urlToImage}" alt="${article.title}" />
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;
        
        newsContainer.appendChild(card);
    });
}

// Fetch projects (replace with your actual API endpoint)
async function fetchProjects() {
    console.log("Fetching projects...");
    try {
        const response = await fetch('/api/projects'); // Replace with your actual API endpoint
        const data = await response.json();
        displayProjects(data);
    } catch (error) {
        console.error("Error fetching projects:", error);
    }
}

// Display projects
function displayProjects(projects) {
    const projectsContainer = document.getElementById("projects-container");
    projectsContainer.innerHTML = ""; // Clear previous content

    projects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("card");
        
        card.innerHTML = `
            <h2>${project.name}</h2>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        
        projectsContainer.appendChild(card);
    });
}

// Fetch tutorials
async function fetchTutorials() {
    console.log("Fetching tutorials...");
    // Implement fetching logic here
}

// Fetch forum threads
async function fetchForumThreads() {
    console.log("Fetching forum threads...");
    // Implement fetching logic here
}

// Fetch job listings
async function fetchJobListings() {
    console.log("Fetching job listings...");
    // Implement fetching logic here
}

// Fetch marketplace products
async function fetchMarketplaceProducts() {
    console.log("Fetching marketplace products...");
    // Implement fetching logic here
}

// Fetch events
async function fetchEvents() {
    console.log("Fetching events...");
    // Implement fetching logic here
}

// Example of a modal for displaying more information
function openModal(content) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <p>${content}</p>
        </div>
    `;
    document.body.appendChild(modal);

    // Close modal when clicking the close button
    modal.querySelector('.close-button').addEventListener('click', () => {
        modal.remove();
    });

    // Close modal when clicking outside of the modal content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Example usage: open a modal with some content
document.querySelector('#projects').addEventListener('click', () => {
    openModal('Here are some exciting projects from our community!');
});

// Initialize fetching on page load
window.onload = () => {
    fetchNews();
}