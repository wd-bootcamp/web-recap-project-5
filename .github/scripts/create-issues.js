import { readdirSync, readFileSync } from "fs";
import path from "path";

export default async function createIssues({ github, context, core }) {
  const templatesDir = path.join(process.cwd(), ".github", "templates");

  const files = readdirSync(templatesDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const content = readFileSync(path.join(templatesDir, file), "utf-8");
      const { title, body } = getTitleAndBody(content);

      return {
        path: file,
        title,
        body,
      };
    })
    .filter((file) => {
      if (file.title) return true;

      core.warning(`No h1 title found in ${file.path}`);
      return false;
    });

  for (const { title, body } of files) {
    try {
      await github.rest.issues.create({
        ...context.repo,
        title,
        body,
      });

      core.notice(`Issue created: ${title}`);
    } catch (error) {
      core.error(`Error creating issue ${title}`);
    }
  }
}

function getTitleAndBody(content) {
  const titleMatch = content.trim().match(/# (.*)/)[1];

  if (!titleMatch) {
    return { title: null, body: content };
  }

  const title = titleMatch.trim();
  const body = content.replace(/# .*/, "").trim();

  return { title, body };
}
