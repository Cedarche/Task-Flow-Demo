export type User = {
    id: string;
    name: string;
    email: string;
    paidUser: boolean;
    plan: object;
    subscriptionDetails: object;
    paymentDetails: object;
    additionalPaymentDetails: Array<object>;
    onboarded: boolean;
    status: string;
    team: TeamMember[];
}

export type TeamMember = {
    name: string;
    userID: string;
    email: string;
    task: string;
    subTask: string;
    completedTasks?: string[];
    imageUrl: string;
    role: string;
    title: string;
  };


export type Project = {
    projectID: string;
    team: TeamMember[];
    projectSettings: object;
    tasks: Task[]
}

export type Task = {
  taskID: string;
  stage: string;
  status: string;
  createdAt?: string;
  startDate: string;
  completionDate: string | null;
  percentComplete: number;
  taskName: string;
  taskDescription: string;
  assignedUsers: string[];
  subTasks: SubTask[];
  childTasks?: string[] | any;
  isVisible: boolean;
};

export type SubTask = {
  subTaskID: string;
  startDate: string;
  completionDate: string | null;
  started: boolean;
  completed: boolean;
  subTaskName: string;
  subTaskDescription: string;
  assignedUsers: string[];
};

