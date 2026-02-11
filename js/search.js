document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results');
    let fuse;

    // Use local data from blog-data.js
    const blogIndex = window.blogIndexData || [];

    if (blogIndex.length > 0 && typeof Fuse !== 'undefined') {
        const options = {
            includeScore: true,
            threshold: 0.4,
            keys: [
                { name: 'title', weight: 0.7 },
                { name: 'description', weight: 0.5 },
                { name: 'tags', weight: 0.4 },
                { name: 'category', weight: 0.3 }
            ]
        };
        fuse = new Fuse(blogIndex, options);
    } else {
        console.error('Search unavailable: blog-data.js not loaded or Fuse.js missing.');
        resultsContainer.innerHTML = '<div class="no-results">Search unavailable (missing data).</div>';
    }

    // --- Tag Cloud Implementation ---
    const tagCloudContainer = document.getElementById('tag-cloud');

    if (tagCloudContainer && blogIndex.length > 0) {
        // Extract and count tags
        const tagCounts = {};
        blogIndex.forEach(post => {
            if (post.tags && Array.isArray(post.tags)) {
                post.tags.forEach(tag => {
                    // Normalize tag to lowercase for counting
                    const normalizedTag = tag.toLowerCase();
                    tagCounts[normalizedTag] = (tagCounts[normalizedTag] || 0) + 1;
                });
            }
        });

        // Convert to array and sort by count (descending) then name
        const sortedTags = Object.keys(tagCounts).sort((a, b) => {
            const countDiff = tagCounts[b] - tagCounts[a];
            return countDiff !== 0 ? countDiff : a.localeCompare(b);
        });

        // Render top 15 tags
        sortedTags.slice(0, 15).forEach(tag => {
            const tagBtn = document.createElement('button');
            tagBtn.textContent = tag; // Capitalize first letter could be nice but keeping crude for now
            tagBtn.className = 'tag-cloud-item';
            tagBtn.addEventListener('click', () => {
                searchInput.value = tag;
                searchInput.dispatchEvent(new Event('input'));
                searchInput.focus();
            });
            tagCloudContainer.appendChild(tagBtn);
        });
    }

    // --- Keyboard Navigation state ---
    let selectedIndex = -1;

    function updateSelection() {
        const items = resultsContainer.querySelectorAll('.search-result-item');
        items.forEach((item, index) => {
            if (index === selectedIndex) {
                item.classList.add('selected');
                item.scrollIntoView({ block: 'nearest' });
            } else {
                item.classList.remove('selected');
            }
        });
    }

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        resultsContainer.innerHTML = '';
        selectedIndex = -1; // Reset selection on new search

        if (query.length === 0) {
            resultsContainer.classList.add('hidden');
            return;
        }

        if (!fuse) return;

        const results = fuse.search(query);

        if (results.length > 0) {
            results.forEach(({ item }) => {
                const resultItem = document.createElement('a');
                resultItem.href = `blog/${item.slug}`;
                resultItem.className = 'search-result-item';

                // Create rich result card
                resultItem.innerHTML = `
                    <div class="result-title">${item.title}</div>
                    <div class="result-meta">
                        <span class="result-category">${item.category}</span>
                        <span class="result-tags">${item.tags.slice(0, 3).join(', ')}</span>
                    </div>
                    <div class="result-desc">${item.description}</div>
                `;

                resultsContainer.appendChild(resultItem);
            });
            resultsContainer.classList.remove('hidden');
        } else {
            const div = document.createElement('div');
            div.className = 'no-results';
            div.textContent = 'No matching blogs found.';
            resultsContainer.appendChild(div);
            resultsContainer.classList.remove('hidden');
        }
    });

    // Keyboard Navigation Listener
    searchInput.addEventListener('keydown', (e) => {
        const items = resultsContainer.querySelectorAll('.search-result-item');
        if (items.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedIndex = (selectedIndex + 1) % items.length;
            updateSelection();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIndex = (selectedIndex - 1 + items.length) % items.length;
            updateSelection();
        } else if (e.key === 'Enter') {
            if (selectedIndex >= 0 && items[selectedIndex]) {
                e.preventDefault();
                items[selectedIndex].click();
            }
        } else if (e.key === 'Escape') {
            resultsContainer.classList.add('hidden');
            searchInput.blur();
        }
    });

    // Close results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !resultsContainer.contains(e.target) && !tagCloudContainer.contains(e.target)) {
            resultsContainer.classList.add('hidden');
        }
    });

    // Check for query parameter (e.g., from tag clicks)
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    if (searchParam) {
        searchInput.value = searchParam;
        // Wait for fuse to initialize then search
        const checkFuse = setInterval(() => {
            if (fuse) {
                clearInterval(checkFuse);
                searchInput.dispatchEvent(new Event('input'));
            }
        }, 100);
    }
});
