import { ChevronRight, Calendar, Plus } from 'lucide-react';

async function getUpcomingTasks() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/tasks`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch tasks');
  }

  return res.json();
}

function groupTasksByDate(tasks: any[]) {
  const today = new Date();
  const todayStr = today.toISOString().split('T')[0]

  // today.setHours(0, 0, 1, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const nextWeek = new Date(today);
  nextWeek.setDate(nextWeek.getDate() + 7);

  // const todayStr = today.toISOString().split('T')[0];
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  const todayTasks = tasks.filter(task => task.dueDate == todayStr)
  const tomorrowTasks = tasks.filter(task => task.dueDate == tomorrowStr)
  const thisWeekTasks = tasks.filter(task => {
    const taskDate = task.dueDate;
    return taskDate > tomorrowStr && taskDate <= nextWeek.toISOString().split('T')[0];
  })

  console.log(today)
  console.log("Today", todayTasks)
  // console.log("Tomorrow", tomorrowTasks)
  // console.log("This Week", thisWeekTasks)

  return {
    today: todayTasks,
    tomorrow: tomorrowTasks,
    thisWeek: thisWeekTasks
  };
}

function TaskList({ tasks }: { tasks: any[] }) {
  return (
    <ul className="space-y-2">
      {tasks.map((task: any) => (
        <li key={task.id} className="flex items-center">
          <input type="checkbox" className="mr-2" checked={task.completed} />
          <div className="flex-1">
            <span>{task.title}</span>
            {task.description && (
              <p className="text-sm text-gray-500">{task.description}</p>
            )}
            {task.subtasks && task.subtasks.length > 0 && (
              <ul className="ml-6 mt-1 space-y-1">
                {task.subtasks.map((subtask: any) => (
                  <li key={subtask.id} className="flex items-center">
                    <input type="checkbox" className="mr-2" checked={subtask.completed} readOnly/>
                    <span className="text-sm">{subtask.title}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
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
            {task.tags && task.tags.length > 0 && (
              <div className="flex space-x-1">
                {task.tags.map((tag: string) => (
                  <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <ChevronRight className="h-5 w-5 ml-2" />
          </span>
        </li>
      ))}
    </ul>
  );
}

export default async function Upcoming() {
  const { tasks } = await getUpcomingTasks();
  const groupedTasks = groupTasksByDate(tasks);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Upcoming Tasks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-medium mb-4">Today ({groupedTasks.today.length})</h2>
          <div className="mb-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
              <Plus className="h-5 w-5 inline mr-2" />
              Add New Task
            </button>
          </div>
          <TaskList tasks={groupedTasks.today} />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-medium mb-4">Tomorrow ({groupedTasks.tomorrow.length})</h2>
          <div className="mb-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
              <Plus className="h-5 w-5 inline mr-2" />
              Add New Task
            </button>
          </div>
          <TaskList tasks={groupedTasks.tomorrow} />
        </div>
      </div>
      <div className="mt-6 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-medium mb-4">This Week ({groupedTasks.thisWeek.length})</h2>
        <div className="mb-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
            <Plus className="h-5 w-5 inline mr-2" />
            Add New Task
          </button>
        </div>
        <TaskList tasks={groupedTasks.thisWeek} />
      </div>
    </div>
  );
}
