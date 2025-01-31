import Image from 'next/image'

export default function SignIn() {
  return (
    <main className="flex min-h-screen">
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
        <h1 className="text-4xl font-bold mb-8">Sign in</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" placeholder="email.email@mail.com" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input type="password" id="password" name="password" placeholder="********" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400" />
          </div>
          <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">Sign in</button>
        </form>
        <p className="text-center mt-4 text-gray-600">or</p>
        <div className="flex justify-center mt-4 space-x-4">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">Google</button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">Facebook</button>
        </div>
        <p className="text-center mt-4 text-gray-600">Don't have an account? <a href="/sign-up" className="text-yellow-400 hover:underline">Sign up</a></p>
      </div>
    </main>
  )
}
