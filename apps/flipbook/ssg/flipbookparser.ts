import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

export const getFlipBookParser = () => {
    const path1= path.join(
        process.cwd(),
        '..',
        '..',
        'content',
        '2021',
        'wydzialy',
        'mechaniczny',
        'kierunki',
    );
    const projectsDirectoryFiles = fs.readdirSync(path1);

    const withGrayMatter = projectsDirectoryFiles.map((adf) => {
        const slug = adf.replace('.md', '');
        const realPath = path.join(path1, adf);
        const fileContents = fs.readFileSync(realPath).toString('utf-8');
        const { data: changedToMatter, content } = matter(fileContents);
        const dirty = marked(content);
        const clean = DOMPurify.sanitize(dirty);
        return {
            changedToMatter,
            clean,
            slug,
            };
    });
    return withGrayMatter;
};
