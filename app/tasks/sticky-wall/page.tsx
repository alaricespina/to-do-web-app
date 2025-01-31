export default function StickyWall() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sticky Wall</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-yellow-100 rounded-lg shadow-md p-6">
          <h2 className="text-lg font-medium mb-2">Social Media</h2>
          <ul className="list-disc list-inside">
            <li>Plan social content</li>
            <li>Build content calendar</li>
            <li>Plan promotion and distribution</li>
          </ul>
        </div>
        <div className="bg-teal-100 rounded-lg shadow-md p-6">
          <h2 className="text-lg font-medium mb-2">Content Strategy</h2>
          <p>Would need time to get insights (goals, personals, budget, audits), but after, it would be good to focus on assembling my team (start with SEO specialist, then perhaps an email marketer?). Also need to brainstorm on tooling.</p>
        </div>
        <div className="bg-pink-100 rounded-lg shadow-md p-6">
          <h2 className="text-lg font-medium mb-2">Email A/B Tests</h2>
          <ul className="list-disc list-inside">
            <li>Subject lines</li>
            <li>Sender</li>
            <li>CTA</li>
            <li>Sending times</li>
          </ul>
        </div>
        <div className="bg-orange-100 rounded-lg shadow-md p-6">
          <h2 className="text-lg font-medium mb-2">Banner Ads</h2>
          <p>Notes from the workshop:</p>
          <ul className="list-disc list-inside">
            <li>Sizing matters</li>
            <li>Choose distinctive imagery</li>
            <li>The landing page must match the display ad</li>
          </ul>
        </div>
        <div className="bg-gray-200 rounded-lg shadow-md p-6 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.707l-3 3a1 1 0 001.414 1.414l3-3a1 1 0 00-1.414-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}
