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

    // --- Category Filter Implementation ---
    const categorySelect = document.getElementById('category-filter');

    if (categorySelect && blogIndex.length > 0) {
        // Extract unique categories
        const categories = [...new Set(blogIndex.map(post => post.category).filter(Boolean))].sort();

        // Populate dropdown
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categorySelect.appendChild(option);
        });

        // Handle category change
        categorySelect.addEventListener('change', () => {
            performSearch();
        });
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
                performSearch();
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

    const performSearch = () => {
        const query = searchInput.value.trim();
        const selectedCategory = categorySelect ? categorySelect.value : 'all';

        resultsContainer.innerHTML = '';
        selectedIndex = -1; // Reset selection on new search

        const hasQuery = query.length > 0;
        const hasCategory = selectedCategory !== 'all';

        // If no query and no category, hide results
        if (!hasQuery && !hasCategory) {
            resultsContainer.classList.add('hidden');
            return;
        }

        let results = [];

        // 1. Text Search (Fuse.js)
        if (hasQuery && fuse) {
            results = fuse.search(query).map(r => r.item);
        } else if (!hasQuery && hasCategory) {
            // If only category matches, use all blogs as base
            results = blogIndex;
        } else if (hasQuery && !fuse) {
            // If there's a query but Fuse isn't available, show no results
            results = [];
        } else {
            // This case should ideally not be reached if hasQuery || hasCategory is true
            // but as a fallback, if no query and no category, results should be empty
            results = [];
        }


        // 2. Category Filter
        if (hasCategory) {
            results = results.filter(post => post.category === selectedCategory);
        }

        if (results.length > 0) {
            results.forEach((item) => {
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
    };

    searchInput.addEventListener('input', performSearch);

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
        if (!searchInput.contains(e.target) && !resultsContainer.contains(e.target) && !tagCloudContainer.contains(e.target) && (!categorySelect || !categorySelect.contains(e.target))) {
            resultsContainer.classList.add('hidden');
        }
    });

    // Check for query parameter (e.g., from tag or category clicks)
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    const categoryParam = urlParams.get('category');

    // Handle Category Param
    if (categoryParam && categorySelect) {
        // Wait for options to be populated (synchronous here but good practice)
        const optionExists = Array.from(categorySelect.options).some(o => o.value === categoryParam);
        if (optionExists) {
            categorySelect.value = categoryParam;
        }
    }

    // Handle Search Param
    if (searchParam) {
        searchInput.value = searchParam;
    }

    // Trigger initial search if either param exists
    if (searchParam || categoryParam) {
        // Wait for fuse to initialize then search
        const checkFuse = setInterval(() => {
            if (fuse || (blogIndex && blogIndex.length > 0)) { // Ensure data is ready
                clearInterval(checkFuse);
                performSearch();
            }
        }, 100);
    }
});
