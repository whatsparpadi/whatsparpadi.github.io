// Reading Time Logic
document.addEventListener("DOMContentLoaded", () => {
    const postBody = document.querySelector('.post-body');
    const readingTimeElement = document.querySelector('.reading-time');

    if (postBody && readingTimeElement) {
        const text = postBody.innerText;
        const wpm = 200;
        const words = text.trim().split(/\s+/).length;
        const time = Math.ceil(words / wpm);
        readingTimeElement.innerText = `${time} min read`;
    }
});
