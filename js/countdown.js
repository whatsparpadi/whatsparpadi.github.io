/* ================================================================
   countdown.js
   Logic for the premium cinematic movie countdown timer.
   Used by: /upcoming-releases/countdown/*.html

   HOW TO USE ON A NEW MOVIE PAGE
   ──────────────────────────────
   Include this script AFTER defining the three config variables
   in a <script> block at the top of your HTML body:

     window.COUNTDOWN_CONFIG = {
       releaseDate : "2026-07-26T00:00:00",   // ISO date (local time)
       movieTitle  : "Movie Name",            // display title
       movieTagline: "The wait is almost over." // optional
     };

   The script reads window.COUNTDOWN_CONFIG automatically.
   ================================================================ */

(function () {
  'use strict';

  /* ── Read config (set by the page before this script loads) ── */
  var cfg = window.COUNTDOWN_CONFIG || {};

  /* ============================================================
     ⚙️  DYNAMIC CONFIGURATION
     Override window.COUNTDOWN_CONFIG in your page's <script> block.
     ============================================================ */
  /* ── Configuration check ─────────────────────────────── */
  var hero = document.getElementById('countdown-hero');
  if (!hero) return;

  var releaseDate  = cfg.releaseDate  || "2026-07-26T00:00:00";
  var movieTitle   = cfg.movieTitle   || "Sample Movie Title";
  var movieTagline = cfg.movieTagline || "The wait is almost over.";

  /* ── Populate static text nodes ──────────────────────────── */
  var breadcrumbTitle = document.getElementById('breadcrumb-title');
  var articleTitle    = document.getElementById('article-title');
  var inlineTitle     = document.getElementById('inline-title');

  if (breadcrumbTitle) breadcrumbTitle.textContent = movieTitle;
  // if (articleTitle)    articleTitle.textContent    = movieTitle + ' \u2013 Release Countdown & Updates';
  if (inlineTitle)     inlineTitle.textContent     = movieTitle;

  // document.title = movieTitle + ' \u2013 Release Date Countdown | What\u2019s Parpadi?';

  /* ── Build the hero HTML ─────────────────────────────────── */
  hero.innerHTML = [
    '<p class="countdown-eyebrow">Upcoming Release</p>',
    '<h2 class="countdown-movie-title">' + movieTitle + '</h2>',
    '<p class="countdown-label">Releasing in</p>',

    /* Timer row */
    '<div class="countdown-timer" id="timer" role="timer" aria-live="polite" aria-label="Countdown to release">',
      '<div class="countdown-unit">',
        '<span class="countdown-number" id="cd-days">000</span>',
        '<span class="countdown-unit-label">Days</span>',
      '</div>',
      '<span class="countdown-sep" aria-hidden="true">:</span>',
      '<div class="countdown-unit">',
        '<span class="countdown-number" id="cd-hours">00</span>',
        '<span class="countdown-unit-label">Hours</span>',
      '</div>',
      '<span class="countdown-sep" aria-hidden="true">:</span>',
      '<div class="countdown-unit">',
        '<span class="countdown-number" id="cd-minutes">00</span>',
        '<span class="countdown-unit-label">Minutes</span>',
      '</div>',
      '<span class="countdown-sep" aria-hidden="true">:</span>',
      '<div class="countdown-unit">',
        '<span class="countdown-number" id="cd-seconds">00</span>',
        '<span class="countdown-unit-label">Seconds</span>',
      '</div>',
    '</div>',

    /* Released state (hidden until diff ≤ 0) */
    '<div class="countdown-released" id="released-state">',
      '<span class="released-text">RELEASED</span>',
      '<span class="released-sub">Available now</span>',
    '</div>',

    '<div class="countdown-divider"></div>',
    '<p class="countdown-tagline">' + movieTagline + '</p>',
    '<span class="countdown-date-badge" id="release-badge">Loading\u2026</span>'
  ].join('');

  /* ── Parse release date once ─────────────────────────────── */
  var target = new Date(releaseDate).getTime();

  /* Zero-pad helper */
  function pad(n, width) {
    return String(n).padStart(width, '0');
  }

  /* Human-readable release date */
  function formatBadge(date) {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    }).format(date);
  }

  /* Populate release badge */
  var badgeEl = document.getElementById('release-badge');
  if (badgeEl) badgeEl.textContent = 'Release: ' + formatBadge(new Date(releaseDate));

  /* Cache DOM refs */
  var daysEl     = document.getElementById('cd-days');
  var hoursEl    = document.getElementById('cd-hours');
  var minsEl     = document.getElementById('cd-minutes');
  var secsEl     = document.getElementById('cd-seconds');
  var timerEl    = document.getElementById('timer');
  var releasedEl = document.getElementById('released-state');

  /* ── Tick — runs every second ────────────────────────────── */
  function tick() {
    var now  = Date.now();
    var diff = target - now;   /* milliseconds remaining */

    if (diff <= 0) {
      clearInterval(interval);
      if (timerEl)    timerEl.style.display    = 'none';
      if (releasedEl) releasedEl.style.display = 'flex';
      return;
    }

    /* Total days — NEVER converted to months/years */
    var totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours     = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes   = Math.floor((diff % (1000 * 60 * 60))      / (1000 * 60));
    var seconds   = Math.floor((diff % (1000 * 60))           / 1000);

    if (daysEl)  daysEl.textContent  = pad(totalDays, totalDays >= 1000 ? 4 : 3);
    if (hoursEl) hoursEl.textContent = pad(hours,   2);
    if (minsEl)  minsEl.textContent  = pad(minutes, 2);
    if (secsEl)  secsEl.textContent  = pad(seconds, 2);
  }

  tick();
  var interval = setInterval(tick, 1000);

})();
