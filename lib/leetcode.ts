import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

export interface LeetCodeProblem {
  id: number;
  number: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  date: string;
  tags: string[];
  timeComplexity: string;
  spaceComplexity: string;
  content: {
    problem: string;
    approach: string;
    solution: string;
    insights: string;
    learnings: string;
  };
}

const leetcodeDirectory = path.join(process.cwd(), 'content', 'leetcode');

export async function getLeetCodeProblems(): Promise<LeetCodeProblem[]> {
  const fileNames = fs.readdirSync(leetcodeDirectory);
  const problems: LeetCodeProblem[] = [];

  for (const fileName of fileNames) {
    if (fileName.endsWith('.md')) {
      const fullPath = path.join(leetcodeDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      const processedContent = await remark()
        .use(gfm)
        .use(html)
        .process(content);
      
      const contentHtml = processedContent.toString();

      const sections = parseMarkdownSections(contentHtml);

      problems.push({
        id: data.id,
        number: data.number,
        title: data.title,
        difficulty: data.difficulty,
        date: data.date,
        tags: data.tags,
        timeComplexity: data.timeComplexity,
        spaceComplexity: data.spaceComplexity,
        content: {
          problem: sections.problem || '',
          approach: sections.approach || '',
          solution: sections.solution || '',
          insights: sections.insights || '',
          learnings: sections.learnings || '',
        },
      });
    }
  }

  return problems.sort((a, b) => a.id - b.id);
}

function parseMarkdownSections(html: string): {
  problem: string;
  approach: string;
  solution: string;
  insights: string;
  learnings: string;
} {
  const sections = {
    problem: '',
    approach: '',
    solution: '',
    insights: '',
    learnings: '',
  };

  const parts = html.split(/<h2[^>]*>/);
  
  for (let i = 1; i < parts.length; i++) {
    const part = parts[i];
    const nextH2Index = part.indexOf('<h2');
    const content = nextH2Index !== -1 ? part.substring(0, nextH2Index) : part;
    
    if (part.startsWith('Problem')) {
      sections.problem = content.replace('Problem</h2>', '').trim();
    } else if (part.startsWith('My Approach')) {
      sections.approach = content.replace('My Approach</h2>', '').trim();
    } else if (part.startsWith('Solution')) {
      sections.solution = content.replace('Solution</h2>', '').trim();
    } else if (part.startsWith('Key Insights')) {
      sections.insights = content.replace('Key Insights</h2>', '').trim();
    } else if (part.startsWith('What I Learned')) {
      sections.learnings = content.replace('What I Learned</h2>', '').trim();
    }
  }

  return sections;
}

export async function getLeetCodeProblem(id: number): Promise<LeetCodeProblem | null> {
  const problems = await getLeetCodeProblems();
  return problems.find(problem => problem.id === id) || null;
}
