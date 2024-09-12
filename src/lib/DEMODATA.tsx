export type StatusKey = "Completed" | "Error" | "Started";

export const statuses: Record<StatusKey, string> = {
  Started: "text-blue-400 bg-green-400/10",
  Completed: "text-green-400 bg-green-400/10",
  Error: "text-rose-400 bg-rose-400/10",
};

export const stats = [
  { name: "Team", value: "405" },
  { name: "Completed Tasks", value: "32" },
  { name: "Remaining Tasks", value: "18" },
  { name: "Progress", value: "56.25%" },
];

export const activityItems = [
  {
    user: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    message: "Implementing Auth Flow",
    task: "0035",
    subTask: "01",
    status: "Started",
    duration: "Just Now",
    date: "45 minutes ago",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "George Banderas",
      imageUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D",
    },
    message: "Started to refactor register screen",
    task: "0034",
    subTask: "01",
    status: "Started",
    duration: "Just Now",
    date: "45 minutes ago",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "George Banderas",
      imageUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D",
    },
    message: "Finished Splash Screen",
    task: "0032",
    subTask: "23",
    status: "Completed",
    duration: " 1 Hr 30 Min",
    date: "45 minutes ago",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "Luke Everet",
      imageUrl:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhlYWRzaG90fGVufDB8fDB8fHww",
    },
    message: "Started to update Login Screen",
    task: "0033",
    subTask: "02",
    status: "Started",
    duration: "3 Hrs 25 Min",
    date: "45 minutes ago",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "Lily Reynolds",
      imageUrl:
        "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    message: "Started working on Login Screen with Luke",
    task: "0033",
    subTask: "01",
    status: "Started",
    duration: "4 Hrs",
    date: "45 minutes ago",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    message: "Assisted with backend Auth functions",
    task: "0032",
    subTask: "23",
    status: "Completed",
    duration: "3 Days 2 Hrs",
    date: "45 minutes ago",
    dateTime: "2023-01-23T11:00",
  },

  {
    user: {
      name: "Luke Everet",
      imageUrl:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhlYWRzaG90fGVufDB8fDB8fHww",
    },
    message: "Integrated Splash Screen animation",
    task: "0029",
    subTask: "04",
    status: "Completed",
    duration: "6Hrs 15 Min",
    date: "45 minutes ago",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "Lily Reynolds",
      imageUrl:
        "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    message: "Finished updating Auth Flow diagram",
    task: "0017",
    subTask: "01",
    status: "Completed",
    duration: "1 Day 6 Hrs",
    date: "45 minutes ago",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "Georgia Smith",
      imageUrl:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWRzaG90JTIwYXZhdGFyfGVufDB8fDB8fHww",
    },
    message: "Having issues with Auth functions",
    task: "0027",
    subTask: "06",
    status: "Error",
    duration: "Ongoing",
    date: "45 minutes ago",
    dateTime: "2023-01-23T11:00",
  },
];

export const teamList = [
  {
    name: "Tom Carruthers",
    userID: "145123484512",
    role: "Owner",
    title: "Front-end Developer",
    email: "t.carruthers@snappark.co",
    task: "0034",
    subTask: "01",
    imageUrl:
      "/Headshot.jpg",
  },
  {
    name: "Michael Foster",
    userID: "456489451239",
    email: "m.foster@snappark.co",
    role: "Admin",
    title: "Senior Manager",
    task: "0032",
    subTask: "23",
    completedTasks: [""],
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "George Banderas",
    userID: "039408328981",
    email: "g.banderas@snappark.co",
    title: "Software Engineer",

    role: "Member",
    task: "0032",
    subTask: "23",
    imageUrl:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Luke Everet",
    userID: "231232133435",
    role: "Member",
    title: "Software Engineer",
    email: "l.everet@snappark.co",
    task: "0032",
    subTask: "23",
    imageUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhlYWRzaG90fGVufDB8fDB8fHww",
  },
  {
    name: "Lily Reynolds",
    userID: "849327232321",
    role: "Member",
    title: "Software Engineer",
    email: "l.reynolds@snappark.co",
    task: "0032",
    subTask: "23",
    imageUrl:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Georgia Smith",
    userID: "849327897328",
    role: "Member",
    title: "UI/UX Developer",
    email: "g.smith@snappark.co",
    task: "0032",
    subTask: "23",
    imageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWRzaG90JTIwYXZhdGFyfGVufDB8fDB8fHww",
  },
  {
    name: "Ben Ken",
    userID: "789456123185",
    role: "Member",
    title: "Project Manager",
    email: "b.ken@snappark.co",
    task: "0010",
    subTask: "02",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lucy Rogers",
    userID: "8493278200023",
    role: "Member",
    title: "Software Engineer",
    email: "l.rogers@snappark.co",
    task: "0030",
    subTask: "03",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Madeline Kennedy",
    userID: "74178451217123",
    role: "Member",
    title: "UI/UX Developer",
    email: "m.kennedy@snappark.co",
    task: "0025",
    subTask: "11",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Ellie Barrett",
    userID: "7845127878112",
    role: "Member",
    title: "Back-end Developer",
    email: "e.barrett@snappark.co",
    task: "0039",
    subTask: "08",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },

];

export const taskList = [
  {
    taskID: "0033",
    stage: "4",
    status: "started",
    startDate: "7/09/2024 - 5:56 pm",
    completionDate: null,
    started: true,
    completed: false,
    percentComplete: 66,
    taskName: "Update login screen",
    taskDescription:
      "The login screen needs to be refactored to properly accept authentication types and to conform to new style guidelines.",
    assignedUsers: ["231232133435", "849327232321"],
    subTasks: [
      {
        subTaskID: "01",
        startDate: "7/09/2024 - 5:56 pm",
        started: true,
        completionDate: null,
        completed: false,
        subTaskName: "Refactor login button",
        subTaskDescription: "",
        assignedUsers: ["231232133435", "849327232321"],
      },
    ],
  },
  {
    taskID: "0034",
    stage: "4",
    status: "started",
    started: true,
    startDate: "8/09/2024 - 9:00 am", // now()
    completed: false,
    completionDate: null,
    percentComplete: 16,
    taskName: "Refactor register screen",
    taskDescription:
      "The register screen needs to be updated to match the new design specifications and to improve user experience.",
    assignedUsers: ["039408328981"],
    subTasks: [
      {
        subTaskID: "01",
        startDate: "8/09/2024 - 9:00 am",
        started: true,
        completionDate: null,
        completed: false,
        assignedUsers: ["039408328981"],
        subTaskName: "Update form validation",
        subTaskDescription:
          "Ensure form validation aligns with new guidelines.",
      },
      {
        subTaskID: "02",
        startDate: "8/09/2024 - 9:30 am",
        started: true,
        completionDate: null,
        completed: false,
        assignedUsers: ["039408328981"],
        subTaskName: "Improve UI elements",
        subTaskDescription:
          "Enhance the design and layout of input fields and buttons.",
      },
    ],
  },
  {
    taskID: "0035",
    stage: "4",
    status: "started",
    started: true,
    startDate: "8/09/2024 - 11:00 am",
    completionDate: null,
    completed: false,
    percentComplete: 5,
    taskName: "Update authentication flow",
    taskDescription:
      "Revise the authentication flow functions to ensure compatibility with new security standards and to optimize performance.",
    assignedUsers: ["456489451239"],
    subTasks: [
      {
        subTaskID: "01",
        startDate: "8/09/2024 - 11:00 am",
        started: true,
        completionDate: null,
        completed: false,
        assignedUsers: ["456489451239"],
        subTaskName: "Refactor login function",
        subTaskDescription:
          "Update login function to handle new authentication methods.",
      },
      {
        subTaskID: "02",
        startDate: "8/09/2024 - 11:30 am",
        started: true,
        completionDate: null,
        completed: false,
        assignedUsers: ["456489451239"],
        subTaskName: "Enhance security checks",
        subTaskDescription:
          "Add additional security checks to ensure data protection.",
      },
    ],
  },
  {
    taskID: "0036",
    stage: "4",
    status: "started",
    started: true,
    startDate: "9/09/2024 - 2:00 pm",
    completionDate: null,
    completed: false,
    percentComplete: 5,
    taskName: "Implement user profile settings",
    taskDescription:
      "Create a user profile settings page that allows users to update their personal information and preferences.",
    assignedUsers: ["567890123456", "678901234567"],
    subTasks: [
      {
        subTaskID: "01",
        startDate: "9/09/2024 - 2:00 pm",
        started: true,
        completionDate: null,
        completed: false,
        assignedUsers: ["567890123456", "678901234567"],
        subTaskName: "Design profile settings page",
        subTaskDescription:
          "Create mockups and design the layout for the profile settings page.",
      },
      {
        subTaskID: "02",
        started: true,
        startDate: "9/09/2024 - 2:30 pm",
        completionDate: null,
        completed: false,
        assignedUsers: ["567890123456", "678901234567"],
        subTaskName: "Implement update functionality",
        subTaskDescription:
          "Develop the functionality to update user profile information.",
      },
      {
        subTaskID: "03",
        started: true,
        startDate: "9/09/2024 - 2:00 pm",
        completionDate: null,
        completed: false,
        assignedUsers: ["567890123456", "678901234567"],
        subTaskName: "Test user profile settings",
        subTaskDescription:
          "Conduct thorough testing to ensure all features work correctly.",
      },
    ],
  },
  {
    taskID: "0030",
    stage: "3",
    started: true,
    status: "complete",
    startDate: "9/09/2024 - 2:00 pm",
    completionDate: null,
    completed: false,
    percentComplete: 5,
    taskName: "Stage 3",
    taskDescription:
      "Create a user profile settings page that allows users to update their personal information and preferences.",
    assignedUsers: ["231232133435", "849327232321"],
    subTasks: [
      {
        subTaskID: "01",
        startDate: "9/09/2024 - 2:00 pm",
        started: true,
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Design profile settings page",
        subTaskDescription:
          "Create mockups and design the layout for the profile settings page.",
      },
      {
        subTaskID: "02",
        started: true,
        startDate: "9/09/2024 - 2:30 pm",
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Implement update functionality",
        subTaskDescription:
          "Develop the functionality to update user profile information.",
      },
      {
        subTaskID: "03",
        started: true,
        startDate: "9/09/2024 - 2:00 pm",
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Test user profile settings",
        subTaskDescription:
          "Conduct thorough testing to ensure all features work correctly.",
      },
    ],
  },
  {
    taskID: "0031",
    stage: "3",
    status: "issues",
    started: true,
    startDate: "9/09/2024 - 2:00 pm",
    completionDate: null,
    completed: false,
    percentComplete: 5,
    taskName: "Stage 3 - 2",
    taskDescription:
      "Create a user profile settings page that allows users to update their personal information and preferences.",
    assignedUsers: ["231232133435", "849327232321"],
    subTasks: [
      {
        subTaskID: "01",
        startDate: "9/09/2024 - 2:00 pm",
        started: true,
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Design profile settings page",
        subTaskDescription:
          "Create mockups and design the layout for the profile settings page.",
      },
      {
        subTaskID: "02",
        started: true,
        startDate: "9/09/2024 - 2:30 pm",
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Implement update functionality",
        subTaskDescription:
          "Develop the functionality to update user profile information.",
      },
      {
        subTaskID: "03",
        started: true,
        startDate: "9/09/2024 - 2:00 pm",
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Test user profile settings",
        subTaskDescription:
          "Conduct thorough testing to ensure all features work correctly.",
      },
    ],
  },
  {
    taskID: "0029",
    stage: "2",
    started: true,
    status: "complete",
    startDate: "9/09/2024 - 2:00 pm",
    completionDate: null,
    completed: false,
    percentComplete: 5,
    taskName: "Stage 2",
    taskDescription:
      "Create a user profile settings page that allows users to update their personal information and preferences.",
    assignedUsers: ["231232133435", "849327232321"],
    subTasks: [
      {
        subTaskID: "01",
        startDate: "9/09/2024 - 2:00 pm",
        started: true,
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Design profile settings page",
        subTaskDescription:
          "Create mockups and design the layout for the profile settings page.",
      },
      {
        subTaskID: "02",
        started: true,
        startDate: "9/09/2024 - 2:30 pm",
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Implement update functionality",
        subTaskDescription:
          "Develop the functionality to update user profile information.",
      },
      {
        subTaskID: "03",
        started: true,
        startDate: "9/09/2024 - 2:00 pm",
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Test user profile settings",
        subTaskDescription:
          "Conduct thorough testing to ensure all features work correctly.",
      },
    ],
  },
  {
    taskID: "0017",
    stage: "1",
    started: true,
    status: "complete",
    startDate: "9/09/2024 - 2:00 pm",
    completionDate: null,
    completed: false,
    percentComplete: 5,
    taskName: "Stage 1",
    taskDescription:
      "Create a user profile settings page that allows users to update their personal information and preferences.",
    assignedUsers: ["231232133435", "849327232321"],
    subTasks: [
      {
        subTaskID: "01",
        startDate: "9/09/2024 - 2:00 pm",
        started: true,
        completionDate: null,
        completed: true,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Design profile settings page",
        subTaskDescription:
          "Create mockups and design the layout for the profile settings page.",
      },
      {
        subTaskID: "02",
        started: true,
        startDate: "9/09/2024 - 2:30 pm",
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Implement update functionality",
        subTaskDescription:
          "Develop the functionality to update user profile information.",
      },
      {
        subTaskID: "03",
        started: false,
        startDate: "9/09/2024 - 2:00 pm",
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Test user profile settings",
        subTaskDescription:
          "Conduct thorough testing to ensure all features work correctly.",
      },
    ],
  },
  {
    taskID: "0010",
    stage: "1",
    started: true,
    status: "complete",
    startDate: "9/09/2024 - 2:00 pm",
    completionDate: null,
    completed: false,
    percentComplete: 5,
    taskName: "Fix Homescreen",
    taskDescription:
      "Create a user profile settings page that allows users to update their personal information and preferences.",
    assignedUsers: ["231232133435", "849327232321"],
    subTasks: [
      {
        subTaskID: "01",
        startDate: "9/09/2024 - 2:00 pm",
        started: true,
        completionDate: null,
        completed: true,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Design profile settings page",
        subTaskDescription:
          "Create mockups and design the layout for the profile settings page.",
      },
      {
        subTaskID: "02",
        started: true,
        startDate: "9/09/2024 - 2:30 pm",
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Implement update functionality",
        subTaskDescription:
          "Develop the functionality to update user profile information.",
      },
      {
        subTaskID: "03",
        started: false,
        startDate: "9/09/2024 - 2:00 pm",
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Test user profile settings",
        subTaskDescription:
          "Conduct thorough testing to ensure all features work correctly.",
      },
    ],
  },
  {
    taskID: "0041",
    stage: "4",
    status: "notStarted",
    startDate: "7/09/2024 - 5:56 pm",
    completionDate: null,
    started: true,
    completed: false,
    percentComplete: 66,
    taskName: "Update login screen",
    taskDescription:
      "The login screen needs to be refactored to properly accept authentication types and to conform to new style guidelines.",
    assignedUsers: ["231232133435", "849327232321"],
    subTasks: [
      {
        subTaskID: "01",
        startDate: "7/09/2024 - 5:56 pm",
        started: true,
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Refactor login button",
        subTaskDescription: "",
      },
    ],
  },
  {
    taskID: "0042",
    stage: "4",
    status: "notStarted",
    startDate: "7/09/2024 - 5:56 pm",
    completionDate: null,
    started: true,
    completed: false,
    percentComplete: 66,
    taskName: "Update login screen",
    taskDescription:
      "The login screen needs to be refactored to properly accept authentication types and to conform to new style guidelines.",
    assignedUsers: ["231232133435", "849327232321"],
    subTasks: [
      {
        subTaskID: "01",
        startDate: "7/09/2024 - 5:56 pm",
        started: true,
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Refactor login button",
        subTaskDescription: "",
      },
    ],
  },
  {
    taskID: "0040",
    stage: "4",
    status: "notStarted",
    startDate: "7/09/2024 - 5:56 pm",
    completionDate: null,
    started: true,
    completed: false,
    percentComplete: 66,
    taskName: "Update login screen",
    taskDescription:
      "The login screen needs to be refactored to properly accept authentication types and to conform to new style guidelines.",
    assignedUsers: ["231232133435", "849327232321"],
    subTasks: [
      {
        subTaskID: "01",
        startDate: "7/09/2024 - 5:56 pm",
        started: true,
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Refactor login button",
        subTaskDescription: "",
      },
    ],
  },
];

interface User {
  uid: string;
  createdAt: Date;
  lastUpdated: Date;
  projects: Project[];
}

interface Project {
  projectID: string;
  createdAt: Date;
  lastUpdated: Date;
  team: TeamMember[];
  activity: ActivityItem[];
  tasks: Task[];
  stats: Stats[];
}

interface TeamMember {
  name: string;
  userID: string;
  task: string;
  subTask: string;
  completedTasks?: string[];
  imageUrl: string;
}

interface Stats {
  name: string;
  value: string;
}

interface ActivityItem {
  user: {
    name: string;
    imageUrl: string;
  };
  message: string;
  task: string;
  subTask: string;
  status: string;
  duration: string;
  date: string;
  dateTime: string;
}

interface Task {
  taskID: string;
  status: string;
  stage: string;
  startDate: string;
  completionDate?: string | null;
  started: boolean;
  completed: boolean;
  percentComplete: number;
  taskName: string;
  taskDescription: string;
  assignedUsers: string[];
  subTasks: SubTask[];
}

interface SubTask {
  subTaskID: string;
  startDate: string;
  started: boolean;
  completionDate?: string | null;
  completed: boolean;
  subTaskName: string;
  subTaskDescription?: string;
}
