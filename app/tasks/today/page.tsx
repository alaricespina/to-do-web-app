import { ChevronRight, Calendar, Plus } from 'lucide-react';

async function getTodayTasks() {
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/tasks?dueDate=${formattedDate}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch tasks');
  }

  return res.json();
}

export default async function Today() {
  const { tasks } = await getTodayTasks();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Today's Tasks</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
            <Plus className="h-5 w-5 inline mr-2" />
            Add New Task
          </button>
        </div>
        <ul className="space-y-2">
          {tasks.map((task: any) => (
            <li key={task.id} className="flex items-center">
              <input type="checkbox" className="mr-2" checked={task.completed} />
              <span>{task.title}</span>
              <span className="flex items-center ml-auto">
                {task.dueDate && (
                  <>
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(task.dueDate).toLocaleDateString()}
                  </>
                )}
                {task.list && (
                  <span className={`ml-2 bg-${task.list === 'Personal' ? 'red' : task.list === 'Work' ? 'blue' : 'yellow'}-200 
                    text-${task.list === 'Personal' ? 'red' : task.list === 'Work' ? 'blue' : 'yellow'}-700 
                    text-xs font-medium mr-2 px-2.5 py-0.5 rounded 
                    dark:bg-${task.list === 'Personal' ? 'red' : task.list === 'Work' ? 'blue' : 'yellow'}-900 
                    dark:text-${task.list === 'Personal' ? 'red' : task.list === 'Work' ? 'blue' : 'yellow'}-300`}>
                    {task.list}
                  </span>
                )}
                <ChevronRight className="h-5 w-5 ml-2" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
