import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex">
      <div className="w-1/2 bg-black flex items-center justify-center">
        <div className="relative w-64 h-64">
          <div className="absolute top-0 left-0 w-24 h-24 bg-yellow-400 rounded-lg shadow-lg transform -rotate-12"></div>
          <div className="absolute top-16 left-16 w-16 h-16 bg-white rounded-full shadow-lg"></div>
          <div className="absolute top-24 left-24 w-12 h-12 bg-red-500 rounded-lg shadow-lg transform rotate-6"></div>
          <div className="absolute bottom-0 right-0 w-28 h-20 bg-yellow-500 rounded-lg shadow-lg transform rotate-12"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="white" />
              <path d="M12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10Z" fill="white" />
            </svg>
          </div>
          <div className="absolute top-8 left-8 text-white font-bold">Organic Mind</div>
        </div>
      </div>
      <div className="w-1/2 p-16">
        <h1 className="text-4xl font-bold mb-4">Productive Mind</h1>
        <p className="text-lg mb-8">With only the features you need, Organic Mind is customized for individuals seeking a stress-free way to stay focused on their goals, projects, and tasks.</p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">Get Started</button>
        <p className="mt-4 text-gray-600">Already have an account? Sign in</p>
      </div>
    </main>
  )
}
