export default function BlogPost({ params }) {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Blog Post: {params.slug}</h1>
      <p>Content for the blog post with slug: {params.slug}</p>
    </div>
  );
}