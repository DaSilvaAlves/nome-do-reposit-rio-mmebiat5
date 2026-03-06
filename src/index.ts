interface Task {
  id: number;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  done: boolean;
  columnId: number;
}

interface Column {
  id: number;
  title: string;
 tasks: Task[];
}