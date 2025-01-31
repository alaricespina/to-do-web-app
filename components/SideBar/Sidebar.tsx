import Link from "next/link";
import { 
    ChevronsRight, 
    CheckSquare, 
    Calendar, 
    StickyNote, 
    Plus, 
    Settings, 
    LogOut 
} from 'lucide-react';

export default function Sidebar () {
    return (
        <div className="bg-gray-100 w-full h-full p-4 rounded-3xl">
            <h2 className="text-xl font-bold mb-4">Menu</h2>
            <div className="mb-4">
            <input type="text" placeholder="Search" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 dark:border-gray-600 dark:focus:ring-yellow-500 dark:focus:border-yellow-500" />
            </div>
            <h3 className="text-lg font-medium mb-2">Tasks</h3>
            <ul className="space-y-1">
            <li>
                <Link href="/tasks/upcoming" className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                    <ChevronsRight className="h-5 w-5 mr-2" />
                    Upcoming <span className="ml-auto">12</span>
                </Link>
            </li>
            <li>
                <Link href="/tasks/today" className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                    <CheckSquare className="h-5 w-5 mr-2" />
                    Today <span className="ml-auto">5</span>
                </Link>
            </li>
            <li>
                <Link href="/tasks/calendar" className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                    <Calendar className="h-5 w-5 mr-2" />
                    Calendar
                </Link>
            </li>
            <li>
                <Link href="/tasks/sticky-wall" className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                    <StickyNote className="h-5 w-5 mr-2" />
                    Sticky Wall
                </Link>
            </li>
            </ul>
            <h3 className="text-lg font-medium mb-2 mt-4">Lists</h3>
            <ul className="space-y-1">
            <li>
                <Link href="/tasks/personal" className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                    <span className="w-4 h-4 bg-red-500 rounded mr-2"></span>
                    Personal <span className="ml-auto">3</span>
                </Link>
            </li>
            <li>
                <Link href="/tasks/work" className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                    <span className="w-4 h-4 bg-cyan-500 rounded mr-2"></span>
                    Work <span className="ml-auto">6</span>
                </Link>
            </li>
            <li>
                <Link href="/tasks/list1" className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                    <span className="w-4 h-4 bg-yellow-500 rounded mr-2"></span>
                    List 1 <span className="ml-auto">3</span>
                </Link>
            </li>
            <li>
                <button className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                    <Plus className="h-5 w-5 mr-2" />
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
                <Link href="/tasks/settings" className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                    <Settings className="h-5 w-5 mr-2" />
                    Settings
                </Link>
            </li>
            <li>
                <Link href="/tasks/sign-out" className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                    <LogOut className="h-5 w-5 mr-2" />
                    Sign out
                </Link>
            </li>
            </ul>
        </div>
    )
}