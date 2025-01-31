import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tasks",
};

export default function TasksLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <aside className="bg-gray-100 w-64 p-4 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <div className="mb-4">
          <input type="text" placeholder="Search" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 dark:border-gray-600 dark:focus:ring-yellow-500 dark:focus:border-yellow-500" />
        </div>
        <h3 className="text-lg font-medium mb-2">Tasks</h3>
        <ul className="space-y-1">
          <li>
            <Link href="/tasks/upcoming" legacyBehavior>
              <a className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                Upcoming <span className="ml-auto">12</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/tasks/today" legacyBehavior>
              <a className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                Today <span className="ml-auto">5</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/tasks/calendar" legacyBehavior>
              <a className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                Calendar
              </a>
            </Link>
          </li>
          <li>
            <Link href="/tasks/sticky-wall" legacyBehavior>
              <a className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                Sticky Wall
              </a>
            </Link>
          </li>
        </ul>
        <h3 className="text-lg font-medium mb-2 mt-4">Lists</h3>
        <ul className="space-y-1">
          <li>
            <Link href="/tasks/personal" legacyBehavior>
              <a className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
                Personal <span className="ml-auto">3</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/tasks/work" legacyBehavior>
              <a className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                <span className="w-4 h-4 bg-cyan-500 rounded-full mr-2"></span>
                Work <span className="ml-auto">6</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/tasks/list1" legacyBehavior>
              <a className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
                List 1 <span className="ml-auto">3</span>
              </a>
            </Link>
          </li>
          <li>
            <button className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.707l-3 3a1 1 0 001.414 1.414l3-3a1 1 0 00-1.414-1.414z" clipRule="evenodd" />
              </svg>
              Add New List
            </button>
          </li>
        </ul>
        <h3 className="text-lg font-medium mb-2 mt-4">Tags</h3>
        <div className="flex space-x-2 mb-4">
          <button className="bg-pink-200 text-pink-700 px-3 py-1 rounded">Tag 1</button>
          <button className="bg-pink-200 text-pink-700 px-3 py-1 rounded">Tag 2</button>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-3 py-1 rounded">Add Tag</button>
        </div>
        <ul className="space-y-1">
          <li>
            <Link href="/tasks/settings" legacyBehavior>
              <a className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                Settings
              </a>
            </Link>
          </li>
          <li>
            <Link href="/tasks/sign-out" legacyBehavior>
              <a className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                Sign out
              </a>
            </Link>
          </li>
        </ul>
      </aside>
      <main className="flex-grow p-4">{children}</main>
    </div>
  );
}
