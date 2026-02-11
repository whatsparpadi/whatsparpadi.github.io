document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results');


    // Use local data from blog-data.js
    const blogIndex = window.blogIndexData || [];

    if (blogIndex.length === 0) {
        console.error('Blog index data not found. Ensure js/blog-data.js is loaded.');
    }

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        resultsContainer.innerHTML = '';

        if (query.length === 0) {
            resultsContainer.classList.add('hidden');
            return;
        }

        const results = blogIndex.filter(post =>
            post.title.toLowerCase().includes(query)
        );

        if (results.length > 0) {
            results.forEach(post => {
                const a = document.createElement('a');
                a.href = `blog/${post.slug}`;
                a.className = 'search-result-item';
                a.textContent = post.title;
                resultsContainer.appendChild(a);
            });
            resultsContainer.classList.remove('hidden');
        } else {
            const div = document.createElement('div');
            div.className = 'no-results';
            div.textContent = 'No matching blog found.';
            resultsContainer.appendChild(div);
            resultsContainer.classList.remove('hidden');
        }
    });

    // Close results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !resultsContainer.contains(e.target)) {
            resultsContainer.classList.add('hidden');
        }
    });
});
