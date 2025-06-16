# Setup Instructions - GitLab + Gitpod for Ranova Technical Test

## Your Repository Details
- GitLab Organization: `data-island/feedback`
- Repository: `technical-test`
- SSH URL: `git@gitlab.com:data-island/feedback/technical-test.git`
- HTTPS URL: `https://gitlab.com/data-island/feedback/technical-test`

## Step 1: Push Code to Your GitLab Repository

In your terminal, navigate to this project folder and run:

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Technical interview test"

# Add GitLab remote using SSH
git remote add origin git@gitlab.com:data-island/feedback/technical-test.git

# Or if you prefer HTTPS:
# git remote add origin https://gitlab.com/data-island/feedback/technical-test.git

# Push to GitLab
git push -u origin main
```

## Step 2: Update README with Correct Gitpod Button

Update the README.md file's Gitpod button to use your repository:

```markdown
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://gitlab.com/data-island/feedback/technical-test)
```

## Step 3: Gitpod Access URLs

Your Gitpod URLs will be:
- **Direct Gitpod Link**: `https://gitpod.io/#https://gitlab.com/data-island/feedback/technical-test`
- **Repository URL**: `https://gitlab.com/data-island/feedback/technical-test`

## Step 4: Repository Settings

1. Go to `https://gitlab.com/data-island/feedback/technical-test`
2. Navigate to Settings → General → Visibility
3. Ensure it's set to **Private** (only share Gitpod links with candidates)

## Step 5: Sharing with Candidates

### For Each Interview:

**Recommended Approach - Direct Gitpod Link:**
1. Share this link with the candidate 5 minutes before the interview:
   ```
   https://gitpod.io/#https://gitlab.com/data-island/feedback/technical-test
   ```
2. Tell them: "Click this link and wait for the environment to fully load. You should see two challenge files open automatically."

**Alternative - Temporary Access:**
1. Go to Settings → Members in your GitLab repo
2. Add candidate's email as "Guest" with expiration date (same day)
3. They can then access the repo and click the Gitpod button

## Interview Day Process

### 5 Minutes Before:
1. Send candidate this message:
   ```
   Hi [Name], here's the link for our coding interview:
   https://gitpod.io/#https://gitlab.com/data-island/feedback/technical-test
   
   Please click the link and wait for the environment to load. 
   You should see two files open: python_challenge.py and react_challenge.tsx
   Let me know when you're ready!
   ```

2. Have open on your screen:
   - INTERVIEWER_GUIDE.md
   - Your evaluation sheet
   - The same Gitpod environment (optional, for reference)

### During the Interview:
- Confirm they see both challenge files
- Share your screen if needed to guide them
- Follow the INTERVIEWER_GUIDE.md structure

### After the Interview:
- If you added them as a member, remove access
- Optionally save their workspace URL for later review

## Quick Test

Before your first interview, test the setup:

1. Open in incognito/private browser window
2. Go to: `https://gitpod.io/#https://gitlab.com/data-island/feedback/technical-test`
3. Verify:
   - Environment loads without login issues
   - Both challenge files open
   - Terminal shows welcome message

## Troubleshooting

**If candidates can't access:**
- The repository might be private and Gitpod can't access it
- Solution: Either make repo public temporarily OR add them as Guest member

**If Gitpod doesn't load:**
- Check if .gitpod.yml is in the root directory
- Ensure the file is committed and pushed

**If files don't auto-open:**
- Check the .gitpod.yml configuration
- Manually tell candidate to open files from challenges folder

## Pro Tips

1. **Pre-warm a Workspace**: 
   - Open the Gitpod link yourself 10 mins before
   - Share the workspace URL directly (skips build time)
   - Example: `https://orange-whale-abc123.ws-eu54.gitpod.io`

2. **Multiple Interviews Same Day**:
   - Create fresh workspaces for each candidate
   - Or use "Share Workspace" feature with read/write access

3. **Keep Notes**:
   - Save each candidate's workspace URL
   - You can revisit their code later

## Security Checklist

- [ ] Repository is private
- [ ] No real company code in challenges
- [ ] No sensitive data in examples
- [ ] Remove candidate access after interview
- [ ] Don't commit interview notes to repo

---

## Your Quick Reference

**Your Gitpod Link to Share:**
```
https://gitpod.io/#https://gitlab.com/data-island/feedback/technical-test
```

**Your Repository:**
```
https://gitlab.com/data-island/feedback/technical-test
```

**SSH for Pushing Updates:**
```
git@gitlab.com:data-island/feedback/technical-test.git
```