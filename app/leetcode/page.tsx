import { getLeetCodeProblems } from '@/lib/leetcode';
import LeetCodeClient from  './LeetCodeClient';

export default async function LeetCode() {
  const problems = await getLeetCodeProblems();
  
  return <LeetCodeClient problems={problems} />;
}