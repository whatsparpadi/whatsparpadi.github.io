// Data - 3 Example Blog Posts
const BLOG_POSTS = [
    {
        id: 1,
        title: "How to Build Your Own Business Website Without Hiring a Developer",
        category: "Tech",
        shortDesc: "A step-by-step guide for business owners to create their own static website using AI tools like Antigravity, GitHub, and Google Forms — without coding knowledge or hiring freelancers.",
        image: "assets/tech_website_building.png",
        content: `
## How to Create a Business Website Yourself (No Freelancers Needed)

In this guide, I'm going to show you how to build a professional website for your business completely from scratch. You don't need to know how to code, you don't need to hire a freelancer, and you don't need to pay for expensive monthly website builders.

We will use AI tools to do the heavy lifting for us.

### 1. The Plan: Example "Twinkles"

Before we touch any tools, let's decide what we are building. For this guide, we will build a site for a fictional business:

*   **Business Name:** Twinkles
*   **Location:** Kochi (near Pachalam)
*   **What they sell:** Products sold in kilos and packets
*   **Goal:** To get shop enquiries and bulk order enquiries

The purpose of the website is for:
*   Other businesses who needs to enquire
*   Selling our products at their stores
*   Customers who are enquiring about buying kilos of our products for an event

So the website needs:
1.  **Products Section**: Listed with MRP for quantity.
2.  **Location Section**: Showing where our store is located.
3.  **Contact Form**: For enquiries.

This is the planning of website, that is, structure or whatever it is called.

### 2. Getting Started with Tools

Next step is to install **Antigravity** on Windows/Mac/Linux whichever you are using. Signup using Google.

> **Pro Tip:** If you have a Jio 5G connection as of 2026, you will get **Google Pro**, so it will be useful while using Antigravity which again is a product of Google.

### 3. The Prompting Strategy (Using ChatGPT)

Assuming you're a business man or a business owner with no prior experience in coding, or don't even know full form of HTML, so you would probably have no idea what to prompt to Antigravity.

So, I suggest using **ChatGPT** to create the prompt for Antigravity to make the website for you. Sounds intimidating but its pretty easy:

1.  Go to ChatGPT.
2.  Prompt it to make a website with contents you want on it. For me, use the "Twinkles" data above.
3.  Ask ChatGPT: *"With this data, make a prompt so I can ask Antigravity to create the site."*

### 4. Vibecoding with Antigravity

1.  Copy paste the prompt from ChatGPT to **Antigravity**.
2.  Accept all pop ups.
3.  You will have a plan. Just type \`continue\` or \`go ahead\` or \`plan approved\` to give a green light.
4.  Antigravity will make all the files for you.
5.  Make sure your code is built on **simple HTML/CSS/JS** for starters.
6.  You can open the \`index.html\` file or double click it to see the code that Antigravity has written for you.

### 5. Hosting on GitHub

Now the next step is to find a place on a server for this code to live. We will use **GitHub** for this.

1.  Signup for GitHub.
2.  Create a **new repo**.
3.  Install **Git Bash**.
4.  Do the steps to push your code to the repo.

### 6. Going Live with a Domain

Next step is to buy a domain.

1.  Just go to **GoDaddy**, search for your company name and buy it (cheapest would be somewhere around 90 rs).
2.  Once you buy it, go to "My Products" -> "Domain Section".
3.  Come back to your GitHub tab, and go to **Settings > Pages** and make it go live.
4.  Once that is done, we need to link it with the GoDaddy site.
5.  **In GitHub:** In the root of your repo, create a \`CNAME\` file.
6.  **In GoDaddy:**
    *   Go to DNS records inside domain settings.
    *   Add a CNAME with your \`username.github.io\`.
    *   (If you need an IP, copy it from GitHub Pages settings and add it to DNS records).

*Note: If you're using Vercel the steps will differ, but somewhat similar.*

### 7. Finishing Touches: Location & Contact Form

Now your website will be live!

**For Location:**
1.  Go to Google Maps and find your address.
2.  Ask Antigravity to "update the location as [your address]".

**For Contact Form:**
1.  Sign up on **Google Forms** and create a new form.
2.  Add input fields: Name, Email, and Message (use Short Answer and Paragraph inputs).
3.  Publish the form.
4.  Get the link and open it in a new tab.
5.  **The Hacker Part:** Go to **Inspect Mode** (Right Click -> Inspect).
6.  Try to find the form element from the DOM using \`Ctrl+F\`.
7.  Copy the element details.
8.  Ask Antigravity to "connect the contact form to Google Form with the DOM I have copied".

And that's it! You have a business website running.
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

    if (savedTheme === 'dark') {
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
                <img src="${post.image}" alt="${post.title}" class="card-image ${sizeClass}" loading="lazy">
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
