import { auth } from '@clerk/nextjs/server';

export default function DashboardLayout({ children }) {
  const { userId } = auth();
  if (!userId) {
    return null; // Clerk handles redirect
  }

  return (
    <div>
      {children}
    </div>
  );
}