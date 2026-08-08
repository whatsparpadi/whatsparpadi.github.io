/**
 * Crypto Alerts & TradingView Live Tracking Configuration
 * 
 * Easily add new coins to this configuration list to fetch live TradingView tracking charts
 * in a Twitter/social-feed style layout inside crypto-alerts/index.html.
 */

window.CRYPTO_CONFIG = {
    // List of tracked crypto coins displayed top-to-bottom in the Crypto Alerts feed
    coins: [
        {
            id: "bluaiusdt-p",
            name: "BLUAIUSDT.P",
            title: "BLUAIUSDT.P Perpetual Futures",
            exchange: "BINANCE",
            symbol: "BINANCE:BLUAIUSDT.P",
            author: "Pranav",
            date: "8 Aug 2026",
            tradeType: "SHORT IDEA",
            path: "bluaiusdt-p.html",
            chartImage: "../assets/images/bluai_1d_chart.png",
            ntfyTopic: "parpadi_bluai_alerts",
            description: "Short idea on BLUAI / USDT Binance Perpetual Futures. RSI bearish divergence happening in lower timeframe.",
            tags: ["BLUAI", "Binance", "RSI Divergence", "Short Idea", "Crypto Alerts", "TradingView"]
        }
    ],

    /**
     * Sends a real-time mobile push notification via ntfy.sh
     */
    sendNtfyAlert: function (topic, title, message) {
        const targetTopic = topic || 'parpadi_bluai_alerts';
        const alertTitle = title || 'BLUAIUSDT.P Short Alert';
        const alertMsg = message || 'Short idea on BLUAI / USDT Binance Perpetual Futures. RSI bearish divergence happening in lower timeframe.';

        return fetch(`https://ntfy.sh/${targetTopic}`, {
            method: 'POST',
            headers: {
                'Title': alertTitle,
                'Tags': 'warning,chart_with_downwards_trend'
            },
            body: alertMsg
        }).then(function (res) { return res.json(); });
    },

    // Default TradingView Widget Settings
    defaultWidgetSettings: {
        autosize: true,
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        allow_symbol_change: true,
        hide_side_toolbar: false,
        save_image: true
    },

    /**
     * Renders all coin posts in Twitter-like feed style into the container
     * @param {string} feedContainerId - ID of feed container element
     */
    renderFeed: function (feedContainerId) {
        const feedContainer = document.getElementById(feedContainerId);
        if (!feedContainer) return;

        feedContainer.replaceChildren();

        const self = this;
        const isDarkMode = document.body.classList.contains('dark-mode');
        const theme = isDarkMode ? 'dark' : 'light';

        self.coins.forEach(function (coin) {
            const postCard = document.createElement('article');
            postCard.className = 'crypto-feed-post';
            postCard.id = `post-${coin.id}`;

            const chartContainerId = `tv_chart_${coin.id}`;

            postCard.innerHTML = `
                <div class="feed-header">
                    <div class="author-avatar">🪙</div>
                    <div class="header-meta">
                        <div class="coin-title-row">
                            <h2 class="coin-name"><a href="${coin.path || '#'}" style="color: inherit; text-decoration: none;">${coin.title}</a></h2>
                            <span class="exchange-badge">${coin.exchange}:${coin.name}</span>
                            ${coin.tradeType ? `<span class="trade-type-badge">${coin.tradeType}</span>` : ''}
                        </div>
                        <p class="post-subtext">By ${coin.author} • ${coin.date} • <span class="pulse-status">● Live (1D Timeframe)</span></p>
                    </div>
                </div>

                <div class="feed-description">
                    <p>${coin.description}</p>
                    ${coin.chartImage ? `
                    <div style="margin: 15px 0;">
                        <a href="${coin.path || '#'}">
                            <img src="${coin.chartImage}" alt="${coin.title} 1D Candle Chart Analysis" style="width: 100%; border-radius: 12px; border: 1px solid var(--border-color); display: block;">
                        </a>
                    </div>` : ''}
                    <div class="feed-actions-row" style="margin-top: 15px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                        <div class="feed-tags">
                            ${coin.tags.map(tag => `<span class="feed-tag">#${tag}</span>`).join(' ')}
                        </div>
                        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                            <button onclick="window.CRYPTO_CONFIG.sendNtfyAlert('${coin.ntfyTopic || 'parpadi_bluai_alerts'}', '${coin.title}', '${coin.description}').then(() => alert('✓ Mobile Alert Sent via ntfy.sh! Subscribed topic: ${coin.ntfyTopic || 'parpadi_bluai_alerts'}'))" class="read-full-post-btn" style="background: rgba(59,130,246,0.15); color: #3b82f6; border: 1px solid rgba(59,130,246,0.3); cursor: pointer;">🔔 Trigger Alert</button>
                            <a href="${coin.path || '#'}" class="read-full-post-btn">Read Full Analysis &rarr;</a>
                        </div>
                    </div>
                </div>
            `;

            feedContainer.appendChild(postCard);
        });
    },

    /**
     * Helper to load a TradingView widget instance into a container
     */
    loadWidget: function (containerId, symbol, customTheme) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.replaceChildren();

        const isDarkMode = document.body.classList.contains('dark-mode');
        const theme = customTheme || (isDarkMode ? 'dark' : 'light');

        const widgetConfig = {
            "autosize": true,
            "symbol": symbol || "BINANCE:BLUAIUSDT.P",
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": theme,
            "style": "1",
            "locale": "en",
            "allow_symbol_change": true,
            "calendar": false,
            "support_host": "https://www.tradingview.com"
        };

        const widgetWrapper = document.createElement('div');
        widgetWrapper.className = 'tradingview-widget-container';
        widgetWrapper.style.height = '100%';
        widgetWrapper.style.width = '100%';

        const widgetTarget = document.createElement('div');
        widgetTarget.className = 'tradingview-widget-container__widget';
        widgetTarget.style.height = '100%';
        widgetTarget.style.width = '100%';

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
        script.async = true;
        script.textContent = JSON.stringify(widgetConfig);

        widgetWrapper.appendChild(widgetTarget);
        widgetWrapper.appendChild(script);
        container.appendChild(widgetWrapper);
    },

    /**
     * Syncs theme for all feed widgets when Dark/Light mode is toggled
     */
    initThemeSync: function (feedContainerId) {
        const self = this;
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', function () {
                setTimeout(function () {
                    self.renderFeed(feedContainerId);
                }, 50);
            });
        }
    }
};
