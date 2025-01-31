import { Plus } from 'lucide-react';

async function getStickyWallData() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/sticky/`, {
    method: 'GET'
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch sticky wall data');
  }

  return res.json();
}

export default async function StickyWall() {
  const data = await getStickyWallData();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sticky Wall</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.notes.map((note: any) => (
          <div key={note.id} className={`bg-${note.color} rounded-lg shadow-md p-6`}>
            <h2 className="text-lg font-medium mb-2">{note.title}</h2>
            {Array.isArray(note.content) ? (
              <ul className="list-disc list-inside">
                {note.content.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{note.content}</p>
            )}
          </div>
        ))}
        <div className="bg-gray-200 rounded-lg shadow-md p-6 flex items-center justify-center">
          <button className="text-gray-500 hover:text-gray-700">
            <Plus className="h-12 w-12" />
          </button>
        </div>
      </div>
    </div>
  );
}
