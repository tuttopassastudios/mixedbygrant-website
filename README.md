# MixedByGrant Website

## Deployment to GitHub Pages

### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon → **New repository**
3. Name it `mixedbygrant-website` (or any name)
4. Keep it **Public** (required for free GitHub Pages)
5. Click **Create repository**

### Step 2: Upload Files
1. Click **uploading an existing file**
2. Drag and drop all files from this folder (`index.html`, `styles.css`, `CNAME`)
3. Click **Commit changes**

### Step 3: Enable GitHub Pages
1. Go to **Settings** → **Pages**
2. Under "Source", select **Deploy from a branch**
3. Select **main** branch and **/ (root)** folder
4. Click **Save**

### Step 4: Configure Your Domain (mixedbygrant.com)
Go to your domain registrar and add these DNS records:

**Option A: Apex domain (mixedbygrant.com)**
Add these A records pointing to GitHub's servers:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**Option B: Also add www subdomain (recommended)**
Add a CNAME record:
```
www → yourusername.github.io
```

DNS changes can take up to 48 hours to propagate.

### Step 5: Set Up Contact Form (Formspree)
1. Go to [formspree.io](https://formspree.io) and sign up (free)
2. Create a new form
3. Copy your form endpoint (looks like `https://formspree.io/f/xabcdefg`)
4. Edit `index.html` and replace `YOUR_FORM_ID` with your actual form ID

---

## Local Preview
Open `index.html` directly in your browser to preview the site.
