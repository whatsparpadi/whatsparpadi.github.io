document.addEventListener('DOMContentLoaded', () => {
    // Check if data is available
    if (!window.blogIndexData) {
        console.warn('Related Posts: blogIndexData not found.');
        return;
    }

    const blogData = window.blogIndexData;

    // Get current slug from URL
    const cleanPath = window.location.pathname.split('/').pop();
    const currentSlug = cleanPath; // e.g., "tenet.html"

    // Find current post in data
    const currentPost = blogData.find(post => post.slug === currentSlug);

    if (!currentPost) {
        console.warn('Related Posts: Current post not found in index.');
        return;
    }

    // 1. Filter by Same Category (Strict)
    const sameCategoryPosts = blogData.filter(post =>
        post.category === currentPost.category && post.slug !== currentSlug
    );

    // 2. Score by Tag Matches (for sorting within same category)
    const calculateRelevance = (post) => {
        let score = 0;
        if (post.tags && currentPost.tags) {
            const sharedTags = post.tags.filter(tag => currentPost.tags.includes(tag));
            score += sharedTags.length;
        }
        return score;
    };

    // Calculate scores and sort
    const relatedPosts = sameCategoryPosts
        .map(post => ({ ...post, relevance: calculateRelevance(post) }))
        .sort((a, b) => b.relevance - a.relevance)
        .slice(0, 3); // Take top 3

    if (relatedPosts.length === 0) return;

    // Render Related Posts Section
    const relatedContainer = document.createElement('section');
    relatedContainer.className = 'related-posts container';
    relatedContainer.style.marginTop = '60px';
    relatedContainer.style.borderTop = '1px solid var(--border-color)';
    relatedContainer.style.paddingTop = '40px';

    relatedContainer.innerHTML = `
        <h3 style="margin-bottom: 20px; font-size: 1.5rem;">Read Next</h3>
        <div class="related-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1)); gap: 20px;">
            ${relatedPosts.map(post => `
                <a href="${post.slug}" class="related-card" style="text-decoration: none; color: inherit; display: block; border: 1px solid var(--border-color); border-radius: 12px; overflow: hidden; transition: transform 0.2s;">
                    <div style="height: 160px; overflow: hidden;">
                        <img src="../${post.image}" alt="${post.title}" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div style="padding: 15px;">
                        <span style="font-size: 0.8rem; color: var(--heading-color); font-weight: bold; background: var(--code-bg); padding: 4px 8px; border-radius: 4px;">${post.category}</span>
                        <h4 style="margin: 10px 0 5px; font-size: 1.1rem; line-height: 1.4;">${post.title}</h4>
                        <p style="font-size: 0.85rem; opacity: 0.7;">${post.readingTime || '2 min read'}</p>
                    </div>
                </a>
            `).join('')}
        </div>
    `;

    // Inject styles for hover effect dynamically (or use style.css)
    const style = document.createElement('style');
    style.textContent = `
        .related-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-hover); }
        @media (min-width: 768px) { .related-grid { grid-template-columns: repeat(3, 1fr) !important; } }
    `;
    document.head.appendChild(style);

    // Append to main
    const mainElement = document.querySelector('main');
    if (mainElement) {
        mainElement.appendChild(relatedContainer);
    }
});
