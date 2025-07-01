export default function Footer() {
  return (
    <footer className="border-t py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Next.js Boilerplate. All rights reserved.</p>
      </div>
    </footer>
  );
}