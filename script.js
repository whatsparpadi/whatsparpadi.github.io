// Data - 3 Example Blog Posts
const BLOG_POSTS = [
    {
        id: 1,
        title: "How to Build Your Own Business Website Without Hiring a Developer",
        category: "Tech",
        shortDesc: "A step-by-step guide for business owners to create their own static website using AI tools like Antigravity, GitHub, and Google Forms — without coding knowledge or hiring freelancers.",
        image: "assets/tech_website_building.png",
        content: `
## How to Build Your Own Business Website Without Hiring a Developer

In this guide, I'm going to show you how to build a professional website for your business completely from scratch. You don't need to know how to code, you don't need to hire a freelancer, and you don't need to pay for expensive monthly website builders.

We will use AI tools to do the heavy lifting for us.

### 1. Plan Your Website

Before we touch any tools, let's decide what we are building. For this guide, we will build a site for a fictional business:

*   **Business Name:** Twinkles
*   **Location:** Kochi (near Pachalam)
*   **What they sell:** Products sold in kilos and packets
*   **Goal:** To get shop enquiries and bulk order enquiries

### 2. Structure Your Website

A good business website should be simple. We need three main sections:

1.  **Products Section:** To show what we sell and the prices.
2.  **Location Section:** So people can find the shop.
3.  **Contact Form:** So customers can message us for bulk orders.

### 3. Install and Sign Up to Antigravity

Antigravity is the AI tool that will write the code for us.

1.  Download Antigravity for your computer (Windows, Mac, or Linux).
2.  Sign in using your **Google Account**.
3.  **Pro Tip (2026):** If you are in India, use Jio 5G for the best connection speed when downloading the models properly.

### 4. Get the Prompt from ChatGPT

You might not know exactly what to tell the AI. That's okay! We can use ChatGPT to write the instructions for us.

Open ChatGPT and type this:

> "I have a business called Twinkles in Kochi selling products in kilos. I want a static website with a product list, a Google Map location, and a contact form. Please write a detailed prompt that I can give to an AI coding assistant to build this website."

Copy the output ChatGPT gives you.

### 5. Generate the Website with Antigravity

Open Antigravity and paste the prompt you got from ChatGPT. Ask it to generate:

*   \`index.html\` (The structure)
*   \`style.css\` (The design)
*   \`script.js\` (The logic)

**Important:** Tell Antigravity to use **only HTML, CSS, and JS**.

### 6. Host it for Free on GitHub

Now we need to put your website on the internet.

1.  Create a free account on **GitHub.com**.
2.  Create a **New Repository** and name it something like \`twinkles-website\`.
3.  Upload your \`index.html\`, \`style.css\`, and \`script.js\` files.
4.  Go to **Settings > Pages**.
5.  Select the \`main\` branch and click **Save**.

Your website is now live!

### 7. Buy a Domain (The Component That Costs Money)

GitHub gives you a long address (like \`yourname.github.io\`). You probably want \`twinkles.com\`.

1.  Go to a site like **GoDaddy** or **Namecheap** and buy your domain.
2.  In the domain settings, look for **DNS Management**.
3.  Add a **CNAME Record** that points to your GitHub address.

### 8. Add Your Location

To add the map:

1.  Go to **Google Maps** and find your shop in Pachalam.
2.  Click **Share > Embed a Map**.
3.  Copy the HTML code (it starts with \`<iframe\`).
4.  Paste this code into your \`index.html\` where you want the map to appear.

### 9. Add a Contact Form (The Smart Way)

Backend code is hard. Let's cheat using Google Forms.

1.  Create a **Google Form** with questions like Name, Phone, and Order Details.
2.  Click **Send > Link**.
3.  You can simply link to this form, or use a little JavaScript to send data to it directly (DOM manipulation).
4.  This way, all enquiries come straight to your Google Sheets!

### 10. Conclusion

Congratulations! You now have a static website for Twinkles.

**Why is this better?**
*   **It's Fast:** Static sites load instantly.
*   **It's Secure:** There's no database to hack.
*   **It's Cheap:** You only pay for the domain name.
        `,
        date: "2026-01-29"
    }
];

// DOM Elements
const gridView = document.getElementById('grid-view');
const postView = document.getElementById('post-view');
const adminView = document.getElementById('admin-view');
const blogGrid = document.getElementById('blog-grid');
const postTitle = document.getElementById('post-title');
const postImage = document.getElementById('post-image');
const postContent = document.getElementById('post-content');
const categoryBtns = document.querySelectorAll('.filter-btn');
const themeToggle = document.getElementById('theme-toggle');

// Theme Logic
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '🌙';
    } else {
        document.body.classList.remove('dark-mode');
        themeToggle.textContent = '☀️';
    }
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '🌙' : '☀️';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});


// Initialize
function init() {
    initTheme();

    // Sort logs by date (newest first)
    BLOG_POSTS.sort((a, b) => new Date(b.date) - new Date(a.date));

    renderGrid('All');
}

// Render Grid Cards with Filter
function renderGrid(filterCategory) {
    blogGrid.innerHTML = '';

    // Filter posts
    const filteredPosts = filterCategory === 'All'
        ? BLOG_POSTS
        : BLOG_POSTS.filter(post => post.category === filterCategory);

    filteredPosts.forEach(post => {
        // Calculate Reading Time & Content Length
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = post.content;
        const textContent = tempDiv.textContent || tempDiv.innerText || "";
        const wordCount = textContent.trim().split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200);

        // Determine Card Size based on Word Count
        let sizeClass = 'medium'; // Default
        if (wordCount < 200) {
            sizeClass = 'small';
        } else if (wordCount > 500) {
            sizeClass = 'large';
        }

        const card = document.createElement('div');
        card.className = `blog-card`;
        card.onclick = () => showPost(post.id);

        card.innerHTML = `
            <div class="card-image-wrapper">
                <img src="${post.image}" alt="${post.title}" class="card-image ${sizeClass}">
                <div class="card-overlay">
                    <h2 class="card-title">${post.title}</h2>
                    <p class="card-desc">
                        ${post.category} • ${readingTime} min read
                    </p>
                    <p class="card-desc" style="margin-top: 4px; font-size: 0.85rem; opacity: 0.8;">
                       ${post.shortDesc}
                    </p>
                </div>
            </div>
        `;
        blogGrid.appendChild(card);
    });
}

// Handle Filter Click
function filterPosts(category) {
    // Update active button
    categoryBtns.forEach(btn => {
        if (btn.textContent === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    renderGrid(category);
}

// Show Specific Post
function showPost(id) {
    const post = BLOG_POSTS.find(p => p.id === id);
    if (!post) return;

    // Populate Post View
    postTitle.textContent = post.title;

    // Add or update date display
    let dateEl = document.getElementById('post-date');
    if (!dateEl) {
        dateEl = document.createElement('p');
        dateEl.id = 'post-date';
        dateEl.className = 'post-date';
        postTitle.parentNode.insertBefore(dateEl, postTitle.nextSibling);
    }

    const dateObj = new Date(post.date);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };

    // content word count for reading time
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = post.content;
    const textContent = tempDiv.textContent || tempDiv.innerText || "";
    const readingTime = Math.ceil(textContent.trim().split(/\s+/).length / 200);

    dateEl.textContent = `Published on: ${dateObj.toLocaleDateString('en-GB', options)} • ${readingTime} min read`;

    postImage.src = post.image;

    // Render logic based on category
    if (post.category === 'Tech') {
        postContent.innerHTML = `<div class="markdown-content">${parseMarkdown(post.content)}</div>`;
    } else {
        postContent.innerHTML = post.content;
    }

    // Switch Views
    gridView.classList.add('hidden');
    adminView.classList.add('hidden');
    postView.classList.remove('hidden');

    // Update Meta Tags for Social Sharing
    updateMetaTags(post.title, post.shortDesc, post.image, `https://www.whatsparpadi.in/#post-${post.id}`);

    // Scroll to top
    window.scrollTo(0, 0);
}

// Show Admin Page
function showAdmin() {
    gridView.classList.add('hidden');
    postView.classList.add('hidden');
    adminView.classList.remove('hidden');
    window.scrollTo(0, 0);
}

// Return to Home
function goHome() {
    postView.classList.add('hidden');
    adminView.classList.add('hidden');
    gridView.classList.remove('hidden');

    // Reset Meta Tags to Default
    updateMetaTags(
        "What's Parpadi?",
        "suggestions for real-life decisions",
        "https://www.whatsparpadi.in/assets/preview.jpg",
        "https://www.whatsparpadi.in/"
    );

    window.scrollTo(0, 0);
}

// Helper to update Meta Tags
function updateMetaTags(title, desc, image, url) {
    document.title = title;

    // Open Graph
    document.querySelector('meta[property="og:title"]').setAttribute('content', title);
    document.querySelector('meta[property="og:description"]').setAttribute('content', desc);
    document.querySelector('meta[property="og:image"]').setAttribute('content', image);
    document.querySelector('meta[property="og:url"]').setAttribute('content', url);

    // Twitter
    document.querySelector('meta[name="twitter:title"]').setAttribute('content', title);
    document.querySelector('meta[name="twitter:description"]').setAttribute('content', desc);
    document.querySelector('meta[name="twitter:image"]').setAttribute('content', image);
}

// Simple Markdown Parser (Regex Based)
function parseMarkdown(markdown) {
    let html = markdown
        // Headers
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')

        // Blockquotes
        .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')

        // Bold
        .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')

        // Code Block
        .replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
            return `
                <div class="code-block-wrapper">
                    <button class="copy-btn" onclick="copyCode(this)">Copy</button>
                    <pre><code class="language-${lang || 'text'}">${code.trim()}</code></pre>
                </div>
            `;
        })

        // Inline Code
        .replace(/`([^`]+)`/gim, '<code>$1</code>')

        // Lists (Unordered)
        .replace(/^\d+\. (.*$)/gim, '<ol><li>$1</li></ol>') // naive list regex, works for single lines
        .replace(/^\- (.*$)/gim, '<ul><li>$1</li></ul>')   // naive list regex

        // Paragraphs (naive: double newline = new paragraph, but clean up duplicate tags)
        .replace(/\n\n/g, '</p><p>');

    // Wrap in initial P tags if not starting with tag
    // This is a simplified parser; for production, use a library :)
    return html;
}

// Copy Code Functionality
function copyCode(btn) {
    const codeBlock = btn.nextElementSibling.querySelector('code');
    const text = codeBlock.innerText;

    navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Contact Form Logic
const contactForm = document.getElementById('contact-form');
const popupOverlay = document.getElementById('popup-overlay');
const popupTitle = document.getElementById('popup-title');
const popupMessage = document.getElementById('popup-message');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // Basic Validation
        if (!name || !email || !message) {
            showPopup('Error', 'All fields are required.');
            return;
        }

        // Email Domain Validation
        const allowedDomains = ['gmail.com', 'yahoo.com', 'protonmail.com'];
        const emailDomain = email.split('@')[1]; // Get domain part

        if (!allowedDomains.includes(emailDomain)) {
            showPopup('Validation Error', 'Only @gmail.com, @yahoo.com, and @protonmail.com addresses are supported.');
            return;
        }

        // Google Form Submission
        const GOOGLE_FORM_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfmyPbrNP2Mtl0V7b2MiT3sZktneKb_WLIL3eHr6DuoLrib5g/formResponse';

        const formData = new FormData();
        formData.append('entry.624475988', name);    // Name ID
        formData.append('entry.1912588981', email);  // Email ID
        formData.append('entry.1870233339', message); // Message ID

        // Add proper submitting UX
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        fetch(GOOGLE_FORM_URL, {
            method: 'POST',
            mode: 'no-cors', // Important for Google Forms
            body: formData
        })
            .then(() => {
                // Success
                showPopup('Message Submitted!', 'Thanks for reaching out. I will get back to you soon.');
                contactForm.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
                showPopup('Error', 'Something went wrong. Please try again later.');
            })
            .finally(() => {
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            });
    });
}

// Popup Functions
function showPopup(title, message) {
    if (popupTitle) popupTitle.textContent = title;
    if (popupMessage) popupMessage.textContent = message;
    if (popupOverlay) popupOverlay.classList.remove('hidden');
}

function closePopup() {
    if (popupOverlay) popupOverlay.classList.add('hidden');
}

// Make globally available for onclick="closePopup()"
window.closePopup = closePopup;

// Scroll to Top Logic
const scrollTopBtn = document.getElementById('scroll-top-btn');

window.addEventListener('scroll', () => {
    // Show only if in post view (not hidden) AND scrolled > 200px
    if (!postView.classList.contains('hidden') && window.scrollY > 200) {
        scrollTopBtn.classList.remove('hidden');
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
        setTimeout(() => {
            if (!scrollTopBtn.classList.contains('visible')) {
                scrollTopBtn.classList.add('hidden');
            }
        }, 300); // Wait for transition
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Run
init();
