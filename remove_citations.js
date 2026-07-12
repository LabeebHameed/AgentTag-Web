const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'content', 'blog');
const files = fs.readdirSync(dir);

files.forEach(file => {
    if (file.endsWith('.mdx')) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        // Replace citations like [1], [1][2], [1][2][3]
        // Replace citations like [cite:23], [cite:16][cite:18]
        content = content.replace(/(\[cite:\d+\])+/g, '');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Cleaned ${file}`);
    }
});
