export default function Home() {
  // Set the route environment variable for conditional rendering
  process.env.NEXT_PUBLIC_ROUTE = "home";
  return (
    <div>
      <h1>This is the home page</h1>
    </div>
  );
}
