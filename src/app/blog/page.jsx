import Link from 'next/link';

// Mock blog data
const posts = [
  { slug: 'post-1', title: 'First Blog Post', excerpt: 'This is the first blog post.' },
  { slug: 'post-2', title: 'Second Blog Post', excerpt: 'This is the second blog post.' },
];

export default function Blog() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <div key={post.slug} className="border p-4 rounded">
            <h2 className="text-2xl font-semibold">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}