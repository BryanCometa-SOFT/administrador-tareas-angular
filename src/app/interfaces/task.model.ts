export interface Task {
    id?: string;
    title: string;
    description: string;
    status: 'reject' | 'complete' | 'pending'; // 🔹 Se usa `status` en lugar de `completed`
  }
  