# inJeyneer · Practical AI & Engineering Guides

A modern, high-contrast technical brand and AI field-guide site built for **inJeyneer** by **Jey** (`jaystartstobuild`).

Built with pure HTML5, modern CSS3, and vanilla JS — completely static, zero dependencies, zero build step required, and 100% free to host on **GitLab Pages** (or GitHub Pages).

---

## 📸 What's Included

1. **Homepage (`index.html`)**:
   - **Technical Blueprint Aesthetic**: Deep obsidian canvas (`#090d14`), subtle architectural grid, precision borders, Electric Blueprint Cyan (`#38bdf8`), and Terminal Emerald (`#10b981`).
   - **Compact Photo Frame**: Houses your portrait in a compact, balanced terminal frame (`inJeyneer.sys`) with live status indicator without dominating the screen.
   - **Terminal Topic Ticker**: Animated looping pills highlighting core topics (`Prompt Engineering // Technical Resume Calibration // Claude Code // AI Agents`).
   - **Search & Filter Engine**: Live client-side search with an actual SVG magnifying glass icon and category chips.
   - **Featured Playbook Card**: Links to **The 4-Stage Technical Resume Calibration** (`SPEC // 01`).
   - **Upcoming Roadmap Preview**: Highlighting future engineering guides in testing.
   - **Direct Email Dispatch**: Simple, direct contact card featuring `support@jeystack.com` and an active `mailto:` button that triggers the user's default email client.

2. **Featured Guide Page (`guides/four-pass-ai-resume-review/index.html`)**:
   - **The 4-Stage Technical Resume Calibration**:
     - **00. Candidate Fact Bank Template** (systems, scale, metrics, tools).
     - **01. Gap & Claim Auditor (Diagnoser)** with 4-column Markdown matrix.
     - **02. Calibrated 100-Point Recruiter Rubric** (Tech stack, Scale, Impact, Scan signal).
     - **03. Google XYZ Rewriter** with strict anti-hallucination rules and banned AI cliché tags (*spearheaded, leveraged, revolutionized*).
     - **04. Hiring Manager Gap Pressure-Test** (questions, hidden intent, traps, honest response framework).
     - **All-in-One Master Chained Prompt** for Claude Projects or ChatGPT.
     - **Interactive Copy Buttons**: 1-click clipboard copy for each individual prompt block.

3. **About Page (`about/index.html`)**:
   - Engineering story, "Building in public" philosophy, and reproducible systems focus.

4. **GitLab Pages Automation (`.gitlab-ci.yml`)**:
   - Pre-configured GitLab CI pipeline that automatically copies your static assets to the `public/` folder and deploys them to GitLab Pages on push to `main`.

---

## 🚀 How to Deploy on GitLab Pages (100% Free)

### Step 1: Commit Your Files
Your repository is already initialized with all changes committed to `main`.

### Step 2: Create a New Project on GitLab
1. Go to [GitLab.com](https://gitlab.com/) and click **New Project** > **Create blank project**.
2. Name your project (e.g., `injeyneer` or `<your-username>.gitlab.io`).
3. Set visibility to **Public**.
4. Uncheck "Initialize repository with a README".

### Step 3: Push to GitLab
```bash
git remote add origin https://gitlab.com/<your-username>/injeyneer.git
git branch -M main
git push -u origin main
```

GitLab CI will automatically deploy your site to `https://<your-username>.gitlab.io/injeyneer/` in ~30 seconds.

---

## 🌐 Hosting on GitHub Pages (`jaystartstobuild.github.io`)

Because this is a 100% static site with `index.html` at the root and includes both `.nojekyll` and an automated GitHub Actions deployment workflow (`.github/workflows/deploy.yml`), publishing to GitHub Pages is completely automated:

1. Push this repository to GitHub:
   ```bash
   git remote add origin https://github.com/jaystartstobuild/jaystartstobuild.github.io.git
   git branch -M main
   git push -u origin main
   ```
2. On GitHub, navigate to **Settings** > **Pages**.
3. Under **Build and deployment > Source**, select **GitHub Actions** (or select **Deploy from a branch > main / root**).
4. Your site will automatically build and publish to `https://jaystartstobuild.github.io/`!
