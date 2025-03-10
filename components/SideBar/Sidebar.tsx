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
        <div className="bg-gray-100 h-full p-3 rounded-3xl">
            <h2 className="text-lg sm:text-xl font-bold mb-2">Menu</h2>
            <div className="mb-2">
            <input type="text" placeholder="Search" className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 dark:border-gray-600 dark:focus:ring-yellow-500 dark:focus:border-yellow-500" />
            </div>
            <h3 className="text-base sm:text-lg font-medium mb-1">Tasks</h3>
            <ul className="space-y-0.5">
            <li>
                <Link href="/tasks/upcoming" className="flex items-center p-1.5 sm:p-2 hover:bg-yellow-50 rounded-md">
                    <ChevronsRight className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2" />
                    Upcoming <span className="ml-auto">12</span>
                </Link>
            </li>
            <li>
                <Link href="/tasks/today" className="flex items-center p-1.5 sm:p-2 hover:bg-yellow-50 rounded-md">
                    <CheckSquare className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2" />
                    Today <span className="ml-auto">5</span>
                </Link>
            </li>
            <li>
                <Link href="/tasks/calendar" className="flex items-center p-1.5 sm:p-2 hover:bg-yellow-50 rounded-md">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2" />
                    Calendar
                </Link>
            </li>
            <li>
                <Link href="/tasks/sticky-wall" className="flex items-center p-1.5 sm:p-2 hover:bg-yellow-50 rounded-md">
                    <StickyNote className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2" />
                    Sticky Wall
                </Link>
            </li>
            </ul>
            <h3 className="text-base sm:text-lg font-medium mb-1 mt-2">Lists</h3>
            <ul className="space-y-0.5">
            <li>
                <Link href="/tasks/personal" className="flex items-center p-1.5 sm:p-2 hover:bg-yellow-50 rounded-md">
                    <span className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded mr-1.5 sm:mr-2"></span>
                    Personal <span className="ml-auto">3</span>
                </Link>
            </li>
            <li>
                <Link href="/tasks/work" className="flex items-center p-1.5 sm:p-2 hover:bg-yellow-50 rounded-md">
                    <span className="w-3 h-3 sm:w-4 sm:h-4 bg-cyan-500 rounded mr-1.5 sm:mr-2"></span>
                    Work <span className="ml-auto">6</span>
                </Link>
            </li>
            <li>
                <Link href="/tasks/list1" className="flex items-center p-1.5 sm:p-2 hover:bg-yellow-50 rounded-md">
                    <span className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-500 rounded mr-1.5 sm:mr-2"></span>
                    List 1 <span className="ml-auto">3</span>
                </Link>
            </li>
            <li>
                <button className="flex items-center p-1.5 sm:p-2 hover:bg-yellow-50 w-full rounded-md">
                    <Plus className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2" />
                    Add New List
                </button>
            </li>
            </ul>
            <h3 className="text-base sm:text-lg font-medium mb-1 mt-2">Tags</h3>
            <div className="flex flex-wrap gap-1 mb-2">
            <button className="bg-pink-200 text-pink-700 px-2 py-0.5 text-sm rounded">Tag 1</button>
            <button className="bg-pink-200 text-pink-700 px-2 py-0.5 text-sm rounded">Tag 2</button>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium px-2 py-0.5 text-sm rounded">Add Tag</button>
            </div>
            <ul className="space-y-0.5">
            <li>
                <Link href="/tasks/settings" className="flex items-center p-1.5 sm:p-2 hover:bg-yellow-50 rounded-md">
                    <Settings className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2" />
                    Settings
                </Link>
            </li>
            <li>
                <Link href="/tasks/sign-out" className="flex items-center p-1.5 sm:p-2 hover:bg-yellow-50 rounded-md">
                    <LogOut className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2" />
                    Sign out
                </Link>
            </li>
            </ul>
        </div>
    )
}