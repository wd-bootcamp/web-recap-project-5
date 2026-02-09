# Setup GitHub Repository Template and Issues

## Getting Started with the GitHub Repository Template

This template is designed to help you quickly start a new project with predefined issues and a GitHub project board.

> 💡 **Recommendation**: Read this entire guide carefully before executing the steps to ensure a smooth setup process.

### Step 1: Use the Template

Click on the "Use this template" button on the GitHub template repository page to create your new repository.

### Step 2: Create Issues

Now you need to create the Issues in your new Github Repository to track your tasks across the project:

1. Go to the [tasks folder](./tasks). You find the list of tasks for this project.
2. For each task do the following:
   - Copy the content of the markdown file.
   - Go to the `Issues` section of your Github Repo and create a new Issue.
   - Paste the copied content into the main text field and use the name of the markdown file as the Issue title.
   - Save the new Isssue.

### Step 3: Create a GitHub Project Board

1. **Go to your repository** on GitHub.
2. **Click on "Projects"**: Find the "Projects" tab and click on it.
3. **Create a new project**: Click "New project", choose the "Board" template and name your project.
4. **Ensure that the visibility of your board is set to 'public'.**

### Step 4: Bulk Add Issues to the Project Board

1. **Add issues**: Click on "Add item" in the "ToDo" column.
2. **Select issues**: Click on the "+" and "Add item from repository".
3. **Select repository**: Select your project.
4. **Add to project**: Select all items and click "Add selected items".

### Step 5: Deploy to Vercel

1. **Go to Vercel**: Visit [Vercel](https://vercel.com/) and sign up or log in.
2. **Import your project**: Click on "New Project" and select your GitHub repository.

### Step 6: Add Team Members

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

### Step 7: Start working and have fun. 🌈

Start the development server:

```bash
npm run dev
```
