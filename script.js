// Data - 3 Example Blog Posts
const BLOG_POSTS = [
    {
        id: 8,
        title: "The Architecture of Tenet: A Full Narrative Breakdown",
        category: "Tech",
        shortDesc: "This is not just a time travel movie. A full breakdown of Tenet's entropy, inversion, and the temporal pincer movement.",
        image: "assets/tenet_visual.png",
        content: `
## 🎬 Tenet
**Directed by Christopher Nolan**

This is not just a time travel movie.
It is a **closed-loop time inversion thriller** built on determinism, entropy, and sacrifice.

This blog will explain everything:

*   What is inversion?
*   What is the Algorithm?
*   Who are the future humans?
*   What is Tenet?
*   Why does Neil die?
*   Who is Priya?
*   What happens after the movie ends?

No fluff. Just clean structure.

---

### 1️⃣ The Core Concept: Entropy & Inversion

Entropy = the direction of time.

*   Normal entropy → time moves forward.
*   Inverted entropy → time moves backward.

In Tenet, scientists discover how to reverse entropy of objects and people using machines called **turnstiles**.

When someone passes through a turnstile:

*   They move backward through time.
*   The world around them still moves forward.

This explains:

*   Bullets flying back into guns.
*   Cars flipping “in reverse.”
*   Fights where one person moves forward and the other backward.

This is called **inversion**, not time travel.

---

### 2️⃣ The Bigger Threat: The Algorithm

The Algorithm is NOT the same as inversion tech.

#### 🔴 Inversion Tech

*   Reverses entropy of individuals.
*   Limited to objects or people inside a machine.
*   Used throughout the movie.

#### 🔵 The Algorithm

*   Built by a scientist in the distant future.
*   Can reverse entropy of the entire planet.
*   Extinction-level device.

If activated:

*   The whole Earth would invert.
*   Forward-moving humans and inverted matter would annihilate.
*   The present timeline collapses.

It’s basically a planet-scale entropy weapon.

---

### 3️⃣ Who Are the Future Humans?

In the future:

*   Climate collapse ruined Earth.
*   Oceans rose.
*   Resources collapsed.
*   Civilization barely survives.

They blame the past (us).

Their logic:
“If we reverse entropy of the planet, maybe we erase the past and survive.”

It’s a gamble.

They send instructions and inverted gold back in time to recruit someone.

That person is Sator.

---

### 4️⃣ Who Is Sator?

Sator:

*   Russian oligarch.
*   Dying of cancer.
*   Nihilistic mindset: “If I can’t live, no one lives.”

Future humans send him:

*   Inverted gold.
*   Instructions.
*   Algorithm pieces hidden in the past.

His job:

*   Assemble the 9 pieces.
*   Bury them.
*   Connect them to a dead-man switch.
*   When he dies → the Algorithm activates.

He chooses to die during a happy memory on his yacht.

He wants the world to end with him.

---

### 5️⃣ What Is Tenet?

Tenet is a secret organization created across time.

It exists to stop the Algorithm from being activated.

Here’s the twist:

The Protagonist founds Tenet in the future.

But Tenet already exists in the present.

Why?

Because he will create it later.

Closed loop.

There is no first beginning.

This is called a **bootstrap paradox**.

Information has no origin.
It exists in a time loop.

---

### 6️⃣ How Did Tenet Know About the Algorithm?

Important question.

The Protagonist learns about the Algorithm during the events of the movie.

He survives.

In his future, he creates Tenet using that knowledge.

He sends Tenet operations backward in time.

So Tenet already knows about the Algorithm
because future-Protagonist already experienced it.

There is no “original discovery.”
It’s a causal loop.

---

### 7️⃣ Who Is Priya?

Priya:

*   Arms dealer.
*   High-level Tenet operative.
*   Works for Tenet, not Sator.

She knows about:

*   The 9 pieces.
*   The future threat.
*   Sator’s role.

Because Tenet’s founder (future Protagonist) ensured that knowledge existed.

At the end:
She tries to kill Kat to eliminate loose ends.

Tenet rule:
“No loose ends.”

The Protagonist kills Priya.

This is the moment he becomes the true architect of Tenet.

---

### 8️⃣ The Red Team & Blue Team Battle

Final battle at Stalsk-12.

They are fighting Sator’s mercenaries.

Red Team:

*   Moving forward in time.

Blue Team:

*   Moving backward in time.

Blue Team:

*   Already experienced the battle.
*   Inverted.
*   Replay it backward to give intelligence.

This is called a **temporal pincer movement**.

They are not fighting each other.
They are fighting Sator’s army from opposite time directions.

---

### 9️⃣ Why Does Neil Die?

Neil is part of Tenet.

At the end:
He inverts.
Goes back.
Unlocks a gate.
Takes a bullet meant for the Protagonist.

The soldier who shoots him:
Just sees an enemy and fires.
He doesn’t understand the larger loop.

Neil dies because he already died.

“What’s happened, happened.”

From Neil’s perspective:
He has known the Protagonist for years.

From the Protagonist’s perspective:
Their friendship just started.

That’s why the ending is emotional.

---

### 🔟 Does the World Get Destroyed?

No.

They stop the Algorithm before detonation.

Sator dies.
But the device is removed.
The planet does not invert.

The present survives.

---

### 1️⃣1️⃣ What Happens After the Movie Ends?

The war isn’t over.

Future humans still exist.

Now the Protagonist understands:

*   The threat is real.
*   Tenet must exist.
*   He is the one who must build it.

So in his future, he:

*   Builds Tenet.
*   Recruits Neil at a younger age.
*   Orchestrates the events of the film.
*   Ensures everything unfolds exactly as it did.

Closed loop complete.

He cannot just “live normally.”

Because Tenet already exists.
Which means he must create it.

---

### 1️⃣2️⃣ Is Tenet Deterministic?

Yes.

There is only one timeline.

No alternate versions.
No branching universes.
No rewriting.

Everything that happens already happened.

Free will exists emotionally.
But structurally, fate is consistent.

---

### Final Understanding

Tenet is not about time travel.

It is about:

*   Entropy
*   Responsibility
*   Sacrifice
*   Determinism
*   Acting even when the outcome is fixed

The Protagonist becomes the architect of his own past.

Neil becomes the emotional core.

Sator becomes the nihilistic mirror.

And the world survives — because it already did.
        `,
        date: "2026-02-09"
    },
    {
        id: 7,
        title: "Automate Weekly Windows Updates with Winget",
        category: "Tech",
        shortDesc: "Forget manual updates. Learn how to create a simple script that automatically upgrades all your Windows apps every week using Winget and Task Scheduler.",
        image: "assets/winget_automation.png",
        content: `
## Automate Your Windows Updates

Running updates manually is a chore. Here is a set-and-forget solution to keep your Windows apps up to date using **Winget** and **Task Scheduler**.

Takes about 5 minutes to set up.

---

### Step 1: Create the PowerShell Script

We need a script that runs the update command silently.

1.  Create a folder \`C:\\scripts\` (or any location you prefer).
2.  Create a new file named \`weekly-update.ps1\`.
3.  Paste the following code inside:

\`\`\`powershell
Start-Process winget -ArgumentList "upgrade --all --silent --accept-package-agreements --accept-source-agreements" -Verb RunAs -Wait
\`\`\`

**What this does:**
*   \`--silent\`: Runs without popping up windows for every app.
*   \`--accept-package-agreements\`: Auto-accepts licenses.
*   \`-Verb RunAs\`: Ensures it runs with Administrator privileges.
*   \`-Wait\`: Waits for the process to finish.

### Step 2: Schedule the Task

Now, let's make Windows run this script automatically.

1.  Press \`Win + R\`, type \`taskschd.msc\`, and hit Enter to open **Task Scheduler**.
2.  Click **Create Task** (on the right pane).

#### General Tab
*   **Name:** Weekly Winget Update
*   **Security Options:** Check **Run with highest privileges** (Crucial!).
*   **Configure for:** Windows 10 or 11.

#### Triggers Tab
*   Click **New**.
*   **Begin the task:** On a schedule.
*   **Settings:** Select **Weekly**.
*   Choose a day and time (e.g., **Sunday at 3:00 AM**).
*   Make sure **Enabled** is checked.

#### Actions Tab
*   Click **New**.
*   **Action:** Start a program.
*   **Program/script:** \`powershell.exe\`
*   **Add arguments:** \`-ExecutionPolicy Bypass -File "C:\\scripts\\weekly-update.ps1"\`
*   **Start in:** \`C:\\scripts\`

#### Conditions Tab (Optional)
*   **Power:** Uncheck "Start the task only if the computer is on AC power" if you want it to run on laptops even when unplugged.

#### Settings Tab
*   Check **Run task as soon as possible after a scheduled start is missed**. This ensures you get updated even if your PC was off at 3 AM.

---

### That's It!

Now, every week at your chosen time, Windows will silently check for updates and install them. You won't have to lift a finger.
        `,
        date: "2026-02-08"
    },
    {
        id: 6,
        title: "Stop Using Monkeytype: 3 Better Alternatives to Improve Typing Speed",
        category: "Tech",
        shortDesc: "Monkeytype might be popular, but is it effective? Here are 3 better alternatives like TypeLit.io and NitroType that offer more value.",
        image: "assets/stop_monkeytype.png",
        content: `
## Why You Should Stop Using Monkeytype

**Monkeytype.com** is incredibly popular, but does it actually help you improve your typing in a meaningful way? The words often don't make sense together, giving no context or value to the user. It's great for a quick dopamine hit, but if you want to make better use of your time, try these alternatives instead.

### 1. TypeLit.io

**TypeLit.io** is a fantastic tool where you type out entire chapters from classic literature books like *Alice in Wonderland*, *1984*, *Pride and Prejudice*, and more.

*   **The Benefit:** You aren't just typing random words; you are training yourself to **read and type** simultaneously.
*   **Dual Value:** You get to read a book while improving your typing speed.
*   **Similar Sites:** [TypersGuild.com](https://typersguild.com), [EnterTrained.app](https://entertrained.app)

### 2. NitroType.com

**NitroType.com** is a competitive typing game that gamifies the experience.

*   **The Gameplay:** You race against 5 other real players towards the finish line by typing a given paragraph.
*   **Progression:** Finishing races earns you in-game currency to buy better-looking cars, nitro, and other upgrades.
*   **Why it works:** It's highly addictive and the competitive nature pushes you to type faster and more accurately under pressure. **I highly suggest this site!**

### 3. TypingClub.com

**TypingClub.com** is essentially the "Duolingo" of typing.

*   **Structure:** It offers structured lessons that act as a serious course to improve your touch typing skills.
*   **Experience:** It is fun, interactive, and perfect for beginners to advanced typists who want to fix their form.

### Conclusion

While Monkeytype is aesthetically pleasing, it often lacks the substance found in these alternatives. Now that you know about **TypeLit**, **NitroType**, and **TypingClub**, you can stop wasting time on random words and start building real skills (or having real fun!).
        `,
        date: "2026-02-07"
    },
    {
        id: 5,
        title: "The Odin Project vs Brototype",
        category: "Tech",
        shortDesc: "A comparison of The Odin Project and Brototype, exploring their similar origins and different paths in tech education.",
        image: "assets/odin_vs_brototype.png",
        content: `
## The Odin Project vs Brototype: A Tale of Two Founders

 **The Odin Project** was founded by **Erik Trautman**, while **Brototype** was founded by **Nikhil Kilivayil**. Their journey both are similar.

**Erik Trautman** initially founded Odin Project for students who don't have the luxury of accessing private education to learn computer science, so he built a curriculum based on resources from web, including youtube, blogs, etc. The Odin Project is hosted at [theodinproject.com](https://www.theodinproject.com) where anyone can signup and start learning, founded in 2013.

Meanwhile, **Nikhil Kilivayil** started with **100K coding challenge** which focuses on C/Java coding teaching the basics and concepts, that average students in engineering colleges, especially in Kerala, struggle to grasp. And he filled that gap. He posted this entire course on youtube in 2019.

### Similar Paths

Next thing, what Erik Trautman built was **Viking Education** in 2014, the first fully online software engineering program where students didn’t have to pay until they got a job.

**Nikhil Kilivayil** also followed the similar path, by creating **Brototype**, a software training institute in the same year of 100K Coding Challenge, where the key selling point at least until 2023 was, students didn't have to pay until they got a job. Until they changed their structure completely.

### Conclusion

Did Nikhil Kilivayil copied Erik Trautman or are these just coincidences?
        `,
        date: "2026-02-07"
    },
    {
        id: 4,
        title: "How to Speed Up Your Old PC or Laptop (Windows 11 & Bloatware Guide)",
        category: "Tech",
        shortDesc: "Is your old PC slowing down? Learn 5 effective ways to speed it up, from debloating Windows 11 with Chris Titus Tech's tool to upgrading hardware.",
        image: "assets/pc_speedup.png",
        content: `
## 5 Ways to Speed Up Your Slow Laptop or PC

Is your old laptop or PC feeling sluggish? Windows 11 bloatware and background processes can severely impact performance. Here are 5 proven ways to make your computer fast again.

### 1. The Ultimate Clean: Chris Titus Tech's Windows Utility

The most effective way to debloat Windows is using the **Chris Titus Tech Windows Utility**. It's a powerful tool that removes pre-installed junk, disables telemetry, and optimizes your system.

**How to use it:**
1.  Right-click on the **Start Menu** and select **Terminal (Admin)** or **PowerShell (Admin)**.
2.  Paste the following command and hit Enter:
    \`iwr -useb https://christitus.com/win | iex\`
3.  Once the tool opens:
    *   Go to the **Tweaks** tab.
    *   Select **Desktop** or **Laptop** (depending on your device).
    *   Click **Run Tweaks**.
    *   **Remove Bloatware:** remove all useless programs running in the background.
    *   **Clear UI Elements:** Simplify the interface for speed.
    *   **Remove Indexing & Search:** Windows Search is resource-heavy. Disable it and use **PowerToys Run** or **Everything** app for instant file searches.
    *   **Uninstall Junk:** Remove **OneDrive** and **Microsoft Edge** if you don't use them.

### 2. Bulk Crap Uninstaller (BCUninstaller)

Some programs leave behind files and registry keys even after uninstalling. **Bulk Crap Uninstaller** is an open-source tool that removes these leftovers.

*   Download and run **BCUninstaller**.
*   It detects all installed apps, including hidden ones.
*   Select the apps you want to remove and let it clean up all the residuals.

### 3. Mem Reduct (RAM Cleaner)

**Mem Reduct** is a lightweight tool to monitor and clean your system memory.

<iframe width="560" height="315" style="max-width: 100%; border-radius: 8px;" src="https://www.youtube.com/embed/ADY5L33CR5g?si=5Cu2czgXpjW0xLK8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

**Setup Guide:**
1.  Install Mem Reduct.
2.  Run it as **Administrator**.
3.  Go to **File > Settings > Memory Cleaning**.
4.  Enable **Auto-memory cleaning** (e.g., when memory usage exceeds 80% or every 30 minutes).
5.  *Note: Auto-cleaning only works if you have admin privileges enabled for the app.*

### 4. Wintoys

**Wintoys** is another excellent app available on the Microsoft Store to optimize Windows.

*   **Boost Performance:** Use it to clear memory quickly.
*   **Storage:** Safely remove **Windows Restore Points** (which can take up huge amounts of space).
*   **Tweaks:** Fine-tune system animations and settings for better responsiveness.

### 5. Disable Unnecessary Services

Many Windows services run in the background without you knowing.

1.  Press \`Win + R\`, type \`services.msc\`, and hit Enter.
2.  Look for services you definitely don't need (e.g., "Connected User Experiences and Telemetry", "Fax", "Retail Demo Service").
3.  Right-click > **Properties** > Change **Startup type** to **Disabled**.
4.  *Warning: Be careful! Only disable services if you know what they do.*

### Additional Tips

*   **Defragment Drives:** If you are still using an HDD (Hard Disk Drive), search for "Defragment and Optimize Drives" in Windows and run it. (Not needed for SSDs).
*   **Upgrade RAM:** If you have 8GB or less, upgrading to 16GB is the single best hardware upgrade you can make for multitasking.
        `,
        date: "2026-02-04"
    },
    {
        id: 3,
        title: "Real Racing 3 Shutting Down: End of an Era & Alternatives",
        category: "Tech",
        shortDesc: "Real Racing 3 is shutting down on March 20, 2026. Here's why, and the top 4 alternatives including Grid Autosport and CarX Street.",
        image: "assets/real_racing_shutdown.png",
        content: `
## Real Racing 3: The End of an Era

Real Racing 3, a mobile game that has been on both Android and iOS devices for the past decade, is finally getting shut down on **March 20, 2026**.

The game has already been taken down from App Stores and Play Stores.

### Why is it shutting down?

The reason for the cause being EA being EA and shutting down everything they touch. Also because of:

*   **Expensive Licensing**: The licensing of all the real cars they use costs a lot.
*   **Re-licensing Costs**: Renewing these licenses is expensive.
*   **Freemium Model**: The game was a freemium version with microtransactions.
*   **Developer Shutdown**: The original developer, **Firemonkeys Studios**, has been shut down.
*   **Bugs**: The game has been controlled by another developer recently, which explains the bugs in the recent past.

So, obviously, the millions of users who have been gaming this game, and including other casual gamers will be looking for alternative games that give the same immersive experience as this one.

## Top 4 Alternatives to Real Racing 3

Here is a list of alternatives that give the same immersive experience.

### 1. Grid Autosport Custom Edition

Number 1 on the list is **Grid Autosport Custom Edition**, which is a sandbox game just like Real Racing 3.
*   It features haptic feedback.
*   It is even more immersive in my opinion, and has higher difficulty.

### 2. CarX Street

Number 2 is **CarX Street**, a fully open-world game.
*   It is just like Need for Speed console games, but more like GTA 5 as you can go out of bounds at times.
*   The game is super fun and fully free.

### 3. Need for Speed No Limits

Number 3 is **Need for Speed No Limits**, another Firemonkeys x EA product.
*   **Fate Unknown**: Probably gonna end up like Real Racing 3.
*   **The Bad**: The game is loaded with microtransactions and ads (you will see an ad every race).
*   **The Good**: The game is good, and you can purchase to make the ads disappear.
*   **The Problem**: Races are too short, and the multiplayer is competitive.

### 4. Grid Legends: Deluxe Edition

Number 4 is **Grid Legends: Deluxe Edition**.
        `,
        date: "2026-01-30"
    },
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
    },
    {
        id: 2,
        title: "Top 3 Gaming Platforms for Free Giveaways",
        category: "Tech",
        shortDesc: "A guide to the best platforms for scoring free games, featuring Epic Games Store, Steam, and Amazon Prime Gaming.",
        image: "assets/gaming_giveaways.png",
        content: `
## Top 3 Platforms for Free Game Giveaways

Who doesn't love free games? Here are the top platforms that distribute free games to users.

### 1. Epic Games Store

Number 1 on this list is the **Epic Games Store**. They are known for giving away games on a weekly basis—every single week!

*   **Why they do it:** Mainly to attract new users to their platform and to create traction for existing game developers who have new projects coming up. It's a great way to promote future games.
*   **What you get:** Usually small indie games or non-AAA titles on regular weeks. However, during holidays, they often drop massive **AAA titles** for free.

### 2. Steam

Number 2 is the giant, **Steam**. Here, the freebies work a bit differently.

*   **How it works:** Game publishers themselves decide when to put their games up for free.
*   **The Goal:** Often, they do this to collect feedback from users or gamers.
*   **The Catch:** Most games on the giveaway list are indie games, but they are great for discovering hidden gems.

### 3. Amazon Prime Gaming

Number 3 is a real gem, especially in India: **Amazon Prime Gaming** (also associated with Amazon Luna).

*   **The Value:** The Amazon Prime subscription is really cheap in India. Most people think it's just for shopping, music, or video, but there is a whole gaming side to it too!
*   **What you get:** They give away games on a monthly basis, often including **1 or 2 AAA titles** every month.
*   **How to claim:** You can claim these free games if you have a Prime membership. Since Amazon doesn't have a huge standalone launcher popularity yet, they often give you codes to redeem on other platforms like **Epic Games Store**, **GOG** (controlled by CD Projekt Red), **Microsoft Xbox**, and **Amazon Games**.

It's a fantastic perk that many subscribers overlook!
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

    // Sort logs by date (newest first), if same date, sort by ID (highest first)
    BLOG_POSTS.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        if (dateB - dateA !== 0) {
            return dateB - dateA;
        }
        return b.id - a.id;
    });

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
        // Date Formatting
        const dateObj = new Date(post.date);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const formattedDate = dateObj.toLocaleDateString('en-GB', options);

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
                        ${formattedDate} • ${post.category} • ${readingTime} min read
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
    let html = markdown;

    // 1. Code Blocks
    html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
        return `
            <div class="code-block-wrapper">
                <button class="copy-btn" onclick="copyCode(this)">Copy</button>
                <pre><code class="language-${lang || 'text'}">${code.trim()}</code></pre>
            </div>
        `;
    });

    // 2. Headers & HR
    html = html
        .replace(/^---$/gim, '<hr>')
        .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // 3. Blockquotes
    html = html.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>');

    // 4. Uniform Lists (Unordered)
    html = html.replace(/((?:^\s*[\-\*]\s+.*$(?:\r?\n)?)+)/gim, (match) => {
        const items = match.trim().split('\n');
        const listItems = items.map(item => `<li>${item.replace(/^\s*[\-\*]\s+/, '')}</li>`).join('');
        return `<ul>${listItems}</ul>`;
    });

    // 5. Uniform Lists (Ordered)
    html = html.replace(/((?:^\d+\.\s+.*$(?:\r?\n)?)+)/gim, (match) => {
        const items = match.trim().split('\n');
        const listItems = items.map(item => `<li>${item.replace(/^\d+\.\s+/, '')}</li>`).join('');
        return `<ol>${listItems}</ol>`;
    });

    // 6. Formatting & Links
    html = html
        .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(?!\s)(.*?)\*/gim, '<em>$1</em>')
        .replace(/`([^`]+)`/gim, '<code>$1</code>')
        .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

    // 7. Paragraphs (Double newline)
    html = html.replace(/\n\n/g, '<p></p>');

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
