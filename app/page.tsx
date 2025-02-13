import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Our App</h1>
        <p className="text-lg text-muted-foreground">Get started by signing in</p>
        <Link 
          href="/auth" 
          className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Go to Sign In
        </Link>
      </div>
    </div>
  );
}