import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    // Get the path to the JSON file
    const jsonDirectory = path.join(process.cwd(), 'data');
    const fileContents = await fs.readFile(jsonDirectory + '/tasks.json', 'utf8');
    const data = JSON.parse(fileContents);

    // Get URL parameters
    const { searchParams } = new URL(request.url);
    const list = searchParams.get('list');
    const dueDate = searchParams.get('dueDate');
    const tag = searchParams.get('tag');

    let filteredTasks = data.tasks;

    // Apply filters if they exist
    if (list) {
      filteredTasks = filteredTasks.filter((task: any) => task.list == list);
    }

    if (dueDate) {
      filteredTasks = filteredTasks.filter((task: any) => task.dueDate == dueDate);
    }

    if (tag) {
      filteredTasks = filteredTasks.filter((task: any) => 
        task.tags && task.tags.includes(tag)
      );
    }

    return NextResponse.json({ tasks: filteredTasks });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load tasks data' },
      { status: 500 }
    );
  }
} 