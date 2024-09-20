import { NextRequest, NextResponse } from "next/server";
import { getTaskByID } from "@/lib/tasks";

export async function GET(
  request: NextRequest,
  { params }: { params: { taskID: string } }
) {
  const { taskID } = params;

  try {
    const task = getTaskByID(taskID); // Assuming this returns task data or null

    if (!task) {
      return NextResponse.json(
        { error: 'Task not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(task, { status: 200 });
  } catch (error) {
    console.error('Error fetching task:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve task' },
      { status: 500 }
    );
  }
}
