"use client"
import { useState } from 'react';

const dayView = () => (
  <div className="p-4">
    {/* Day view content here (replace with actual day view component) */}
    <div className="bg-white rounded-lg shadow-md p-6">
      <p>Day View Content</p>
    </div>
  </div>
);

const weekView = () => (
  <div className="p-4">
    {/* Week view content here (replace with actual week view component) */}
    <div className="bg-white rounded-lg shadow-md p-6">
      <p>Week View Content</p>
    </div>
  </div>
);

const monthView = () => (
  <div className="p-4">
    {/* Month view content here (replace with actual month view component) */}
    <div className="bg-white rounded-lg shadow-md p-6">
      <p>Month View Content</p>
    </div>
  </div>
);

export default function Calendar() {
  const [view, setView] = useState<'day' | 'week' | 'month'>('day');

  return (
    <div>
      <div className="flex justify-center mb-4">
        <button onClick={() => setView('day')} className={`px-4 py-2 rounded-md ${view === 'day' ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-gray-800'}`}>Day</button>
        <button onClick={() => setView('week')} className={`px-4 py-2 rounded-md ml-2 ${view === 'week' ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-gray-800'}`}>Week</button>
        <button onClick={() => setView('month')} className={`px-4 py-2 rounded-md ml-2 ${view === 'month' ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-gray-800'}`}>Month</button>
      </div>
      {view === 'day' && dayView()}
      {view === 'week' && weekView()}
      {view === 'month' && monthView()}
    </div>
  );
}
