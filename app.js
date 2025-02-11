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
            const targetId = this.getAttribute('href');
    
            // Check if the link is an internal link (starts with #)
            if (targetId.startsWith('#')) {
                e.preventDefault(); // Prevent default behavior for internal links
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            } else {
                // Allow default behavior for external links
                window.location.href = targetId; // Navigate to the external page
            }
        });
    });
});
// API Key for News API
const API_KEY = "c390639d30024063842e69ce0371c2a6"; // Replace with your actual API key
const newsUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c390639d30024063842e69ce0371c2a6`;

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

    if (articles.length === 0) {
        newsContainer.innerHTML = "<p>No news articles available.</p>";
        return;
    }

    articles.forEach(article => {
        const card = document.createElement("div");
        card.classList.add("news-card");
        
        card.innerHTML = `
            <img src="${article.urlToImage}" alt="${article.title}" />
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank" class="btn">Read more</a>
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

    if (projects.length === 0) {
        projectsContainer.innerHTML = "<p>No projects available.</p>";
        return;
    }

    projects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");
        
        card.innerHTML = `
            <h2>${project.name}</h2>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank" class="btn">View Project</a>
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

// Add event listener to review form submit button
document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var reviewText = document.getElementById('review-text').value;
    var rating = document.getElementById('rating').value;
    
    // Create a new review object
    var review = {
        name: name,
        reviewText: reviewText,
        rating: rating
    };
    
    // Add the review to the review list
    addReview(review);
    
    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('review-text').value = '';
    document.getElementById('rating').value = '';
});

// Function to add a review to the review list
function addReview(review) {
    var reviewList = document.querySelector('.review-list');
    var reviewHTML = `
        <li>
            <h3>${review .name}</h3>
            <p>${review.reviewText}</p>
            <p>Rating: ${review.rating} stars</p>
        </li>
    `;
    reviewList.innerHTML += reviewHTML;
}