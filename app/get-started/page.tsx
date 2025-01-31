export default function Home() {
  return (
    <div className="flex min-h-screen">
        <div className="w-1/2 bg-black flex-row  min-h-screen">
          <div className="text-white text-4xl font-bold">Organic Mind</div>
          <div className="flex grow h-full">
            <svg className="w-40 h-40 fill-white rounded-full">
              <circle cx="4" cy="4" r="40" />
            </svg>
            <svg className="w-12 h-12 fill-white rounded-full">
              <circle cx="6" cy="6" r="60" />
            </svg>
            <svg className="w-6 h-6 fill-white rounded-full">
              <circle cx="3" cy="3" r="30" />
            </svg>
            <svg className="w-10 h-10 fill-white rounded-full">
              <circle cx="5" cy="5" r="50" />
            </svg>
          </div>
        </div>
      <div className="w-1/2 p-16 text-center">
        <h1 className="text-6xl font-bold mb-4">Productive Mind</h1>
        <p className="text-lg mb-8">With only the features you need, Organic Mind is customized for individuals seeking a stress-free way to stay focused on their goals, projects, and tasks.</p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">Get Started</button>
        <p className="mt-4 text-gray-600">Already have an account? Sign in</p>
      </div>
    </div>
  )
}
