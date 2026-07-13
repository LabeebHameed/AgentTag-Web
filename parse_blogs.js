const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'agenttag-blog-pack.md');
const outDir = path.join(process.cwd(), 'content/blog');

if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

const content = fs.readFileSync(filePath, 'utf8');

// Split by '## ' which indicates a new blog post
const sections = content.split(/^## \d+\) /m).filter(s => s.trim().length > 0);

sections.forEach((section, index) => {
    // section starts with the Title, then newline, then Meta...
    const lines = section.trim().split('\n');
    const titleLine = lines[0].trim();
    
    let metaTitle = titleLine;
    let metaDesc = '';
    let slug = '';
    
    let bodyStartIndex = 1;
    
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith('**Meta title:**')) {
            metaTitle = line.replace('**Meta title:**', '').trim();
        } else if (line.startsWith('**Meta description:**')) {
            metaDesc = line.replace('**Meta description:**', '').trim();
        } else if (line.startsWith('**Slug:**')) {
            slug = line.replace('**Slug:**', '').replace('/blog/', '').replace(/`/g, '').trim();
        } else if (line === '' && slug !== '') {
            // Found the empty line after slug, body starts next
            bodyStartIndex = i + 1;
            break;
        }
    }
    
    // Some lines have a CTA at the bottom or `***` separator
    let bodyLines = lines.slice(bodyStartIndex);
    if (bodyLines.length > 0 && bodyLines[bodyLines.length - 1].trim() === '***') {
        bodyLines.pop();
    }
    if (bodyLines.length > 0 && bodyLines[bodyLines.length - 1] === '') {
        bodyLines.pop();
    }
    
    const bodyContent = bodyLines.join('\n').trim();
    
    if (!slug) return; // Skip if no slug found (e.g. intro text if any)
    
    // We already manually created the first one, let's overwrite it just in case, but use today's date
    const mdxContent = `---
title: "${metaTitle.replace(/"/g, '\\"')}"
date: "July 12 2026"
description: "${metaDesc.replace(/"/g, '\\"')}"
category: "Governance"
author: "AgentTag Team"
---

${bodyContent}
`;

    const outPath = path.join(outDir, `${slug}.mdx`);
    fs.writeFileSync(outPath, mdxContent);
    console.log(`Generated: ${slug}.mdx`);
});

console.log('All blogs generated.');
