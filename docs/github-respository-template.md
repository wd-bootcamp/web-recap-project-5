# Setup GitHub Repository Template and Issues

## Getting Started with the GitHub Repository Template

This template is designed to help you quickly start a new project with predefined issues and a GitHub project board.

> 💡 **Recommendation**: Read this entire guide carefully before executing the steps to ensure a smooth setup process.

### Step 1: Use the Template

Only **one person per group** creates the repository:

1. Click on the "Use this template" button on the GitHub template repository page to create your new repository.
2. Open the **"Issues"** tab of your new repository. After a short moment, 10 issues (the user stories) appear there: 8 core stories and 2 bonus stories.

> 💡 Do not run the action twice: if the issues are already there, you are done with this step. Only if the "Issues" tab is still empty after a few minutes, open the **"Actions"** tab, select the workflow **create-issues** and click "Run workflow".

### Step 2: Create a GitHub Project Board

1. **Go to your repository** on GitHub.
2. **Click on "Projects"**: Find the "Projects" tab and click on it.
3. **Create a new project**: Click "New project", choose the "Board" template and name your project.
4. **Import Items from Repository:** Make sure this option is checked.
5. **Create Project**
6. **Ensure that the visibility of your board is set to 'public':** More Options (3 Dot Button) -> Settings -> Danger Zone -> Visibility

### Step 3: Deploy to Vercel

1. **Go to Vercel**: Visit [Vercel](https://vercel.com/) and sign up or log in.
2. **Import your project**: Click on "New Project" and select your GitHub repository. Vercel detects the Vite project automatically.

### Step 4: Add Team Members

To ensure smooth collaboration, you need to add your team members as collaborators to both the GitHub repository and project board. Follow the steps below:

#### 1. Add Team Members to the GitHub Repository

1. Navigate to your repository on GitHub.
2. Click the **"Settings"** tab at the top of the repository page.
3. In the sidebar, click **"Collaborators and Teams"** under the **Access** section.
4. Click the **"Add Collaborator"** button.
5. Enter the GitHub username or email of each team member.
6. Select the appropriate permission level (**Write** access is recommended for collaboration).
7. Click **"Add"** to invite your team members.

#### 2. Add Team Members to the Project Board

1. Navigate to the **Project Board** linked to your repository.
2. Click the **"Menu"** button in the upper-right corner to open the board settings if not already visible.
3. Click **"Settings"** and then **"Manage Access"**.
4. Click **"Add Collaborators"** and search for your team members by their GitHub username.
5. Assign them the necessary access level to collaborate on the board.

#### 3. Confirm Invitations

- Your team members will receive an email or GitHub notification to accept the invitation.
- Ensure all members accept their invitations before starting the project to avoid access issues.

### Step 5: Start working and have fun. 🌈

Every team member clones the repository to their local machine and installs the dependencies (Node.js 22.22 or newer is required):

```bash
npm i
```

Start the development server:

```bash
npm run dev
```
