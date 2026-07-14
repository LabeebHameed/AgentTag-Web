import { ImageResponse } from 'next/og';
import { getPostBySlug } from '@/lib/mdx';
import fs from 'fs';
import path from 'path';

export const alt = 'AgentTag Blog Post';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{
            background: '#09090b',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontSize: '48px',
            fontFamily: 'sans-serif',
          }}
        >
          AgentTag
        </div>
      ),
      { ...size }
    );
  }

  // Load custom template background image
  let backgroundImage = '';
  try {
    const templatePath = path.join(process.cwd(), 'public/og-template.png');
    if (fs.existsSync(templatePath)) {
      const buffer = fs.readFileSync(templatePath);
      const base64 = buffer.toString('base64');
      backgroundImage = `url(data:image/png;base64,${base64})`;
    }
  } catch (error) {
    console.error('Failed to load public/og-template.png background:', error);
  }

  return new ImageResponse(
    (
      <div
        style={{
          backgroundImage: backgroundImage || 'linear-gradient(to bottom right, #09090b, #180828)',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          /* Positioning text content exactly within the left box frame markers: 
             Left side marker is at x ~75px. 
             Top side marker is at y ~200px.
             Right side marker is at x ~540px (leaving width ~465px).
             Bottom marker is at y ~520px (leaving height ~320px). */
          paddingLeft: '80px',
          paddingTop: '210px',
          paddingRight: '680px', 
          boxSizing: 'border-box',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          {/* Category Pill/Text */}
          <div
            style={{
              color: '#a78bfa',
              fontSize: '15px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '12px',
            }}
          >
            {post.metadata.category}
          </div>
          
          {/* Title - fits up to 3 lines beautifully inside the box */}
          <div
            style={{
              color: '#ffffff',
              fontSize: '38px',
              fontWeight: '800',
              lineHeight: '1.25',
              letterSpacing: '-0.02em',
              marginBottom: '24px',
            }}
          >
            {post.metadata.title}
          </div>
          
          {/* Metadata Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              color: '#71717a',
              fontSize: '15px',
              fontWeight: '500',
            }}
          >
            <span style={{ color: '#e4e4e7', fontWeight: '600' }}>{post.metadata.author}</span>
            <span style={{ margin: '0 8px', color: '#3f3f46' }}>•</span>
            <span>{post.metadata.date}</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
