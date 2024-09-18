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
    imageUrl: "/Headshot.jpg",
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
    taskName: "Implement Authentication Flow",
    taskDescription:
      "Refactor the login and registration flow to handle multiple authentication types, ensuring smooth user experience.",
    assignedUsers: ["231232133435", "849327232321"],
    childTasks: [],
    isVisible: true,
    subTasks: [
      {
        subTaskID: "01",
        startDate: "7/09/2024 - 5:56 pm",
        started: true,
        completionDate: null,
        completed: false,
        subTaskName: "Refactor login button",
        subTaskDescription:
          "Redesign the login button to match the new theme and handle multiple authentication providers.",
        assignedUsers: ["231232133435", "849327232321"],
      },
    ],
  },
  {
    taskID: "0034",
    stage: "4",
    status: "started",
    started: true,
    startDate: "8/09/2024 - 9:00 am",
    completed: false,
    completionDate: null,
    percentComplete: 16,
    taskName: "Integrate Push Notifications",
    taskDescription:
      "Add push notification functionality to keep users informed about important updates.",
    assignedUsers: ["039408328981"],
    childTasks: [],
    isVisible: true,
    subTasks: [
      {
        subTaskID: "01",
        startDate: "8/09/2024 - 9:00 am",
        started: true,
        completionDate: null,
        completed: false,
        assignedUsers: ["039408328981"],
        subTaskName: "Setup notification services",
        subTaskDescription: "Configure Firebase for push notifications.",
      },
      {
        subTaskID: "02",
        startDate: "8/09/2024 - 9:30 am",
        started: true,
        completionDate: null,
        completed: false,
        assignedUsers: ["039408328981"],
        subTaskName: "Handle in-app notifications",
        subTaskDescription:
          "Create in-app notification handlers to display messages within the app.",
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
    taskName: "Optimize Performance",
    taskDescription:
      "Analyze and optimize performance bottlenecks across the application to improve user experience.",
    assignedUsers: ["456489451239"],
    childTasks: [],
    isVisible: true,
    subTasks: [
      {
        subTaskID: "01",
        startDate: "8/09/2024 - 11:00 am",
        started: true,
        completionDate: null,
        completed: false,
        assignedUsers: ["456489451239"],
        subTaskName: "Refactor image loading",
        subTaskDescription:
          "Improve the image loading logic to optimize speed and responsiveness.",
      },
      {
        subTaskID: "02",
        startDate: "8/09/2024 - 11:30 am",
        started: true,
        completionDate: null,
        completed: false,
        assignedUsers: ["456489451239"],
        subTaskName: "Optimize state management",
        subTaskDescription:
          "Ensure efficient state management using Recoil to avoid unnecessary renders.",
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
    taskName: "User Profile Settings",
    taskDescription:
      "Develop the user profile settings page, enabling users to update their information and preferences.",
    assignedUsers: ["039408328981"],
    childTasks: [],
    isVisible: true,
    subTasks: [
      {
        subTaskID: "01",
        startDate: "9/09/2024 - 2:00 pm",
        started: true,
        completionDate: null,
        completed: false,
        assignedUsers: ["567890123456", "678901234567"],
        subTaskName: "Design profile settings page",
        subTaskDescription: "Create mockups for the profile settings screen.",
      },
      {
        subTaskID: "02",
        started: true,
        startDate: "9/09/2024 - 2:30 pm",
        completionDate: null,
        completed: false,
        assignedUsers: ["567890123456", "678901234567"],
        subTaskName: "Implement settings functionality",
        subTaskDescription:
          "Develop the functionality to allow users to update profile information.",
      },
      {
        subTaskID: "03",
        started: true,
        startDate: "9/09/2024 - 2:00 pm",
        completionDate: null,
        completed: false,
        assignedUsers: ["567890123456", "678901234567"],
        subTaskName: "Test profile settings",
        subTaskDescription:
          "Test the profile settings page to ensure smooth operation.",
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
    taskName: "Navigation Setup",
    taskDescription:
      "Set up navigation across the app, ensuring smooth transitions between screens.",
    assignedUsers: ["231232133435", "849327232321"],
    childTasks: ["0033", "0034"],
    isVisible: true,
    subTasks: [
      {
        subTaskID: "01",
        startDate: "9/09/2024 - 2:00 pm",
        started: true,
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Configure React Navigation",
        subTaskDescription: "Set up React Navigation for multi-screen flow.",
      },
      {
        subTaskID: "02",
        started: true,
        startDate: "9/09/2024 - 2:30 pm",
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Handle deep linking",
        subTaskDescription:
          "Implement deep linking to allow navigation to specific app screens via external links.",
      },
      {
        subTaskID: "03",
        started: true,
        startDate: "9/09/2024 - 2:00 pm",
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Test navigation flow",
        subTaskDescription:
          "Ensure all screens are correctly linked and transitions work as expected.",
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
    childTasks: [],
    isVisible: true,
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
    taskID: "0021",
    stage: "2",
    started: true,
    status: "complete",
    startDate: "9/09/2024 - 2:00 pm",
    completionDate: null,
    completed: false,
    percentComplete: 5,
    taskName: "Firebase Authentication Setup",
    taskDescription:
      "Enable Firebase Auth within the application using RN-Firebase.",
    assignedUsers: ["231232133435"],
    childTasks: [],
    isVisible: true,
    subTasks: [
      {
        subTaskID: "01",
        startDate: "9/09/2024 - 2:00 pm",
        started: true,
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Link Application to Firebase",
        subTaskDescription:
          "Link the application to the firebase auth project.",
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
    taskName: "Splash Screen Implementation",
    taskDescription:
      "Design and implement a splash screen to enhance the user experience during app launch.",
    assignedUsers: ["231232133435", "849327232321"],
    childTasks: [],
    isVisible: true,
    subTasks: [
      {
        subTaskID: "01",
        startDate: "9/09/2024 - 2:00 pm",
        started: true,
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Design splash screen",
        subTaskDescription: "Create a visually appealing splash screen layout.",
      },
      {
        subTaskID: "02",
        started: true,
        startDate: "9/09/2024 - 2:30 pm",
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Add animations",
        subTaskDescription:
          "Incorporate animations to make the splash screen engaging.",
      },
      {
        subTaskID: "03",
        started: true,
        startDate: "9/09/2024 - 2:00 pm",
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Test splash screen",
        subTaskDescription:
          "Ensure the splash screen behaves correctly on app startup.",
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
    taskName: "Implement User Authentication",
    taskDescription:
      "Set up user authentication flow, including login, signup, and password recovery screens.",
    assignedUsers: ["231232133435", "849327232321"],
    childTasks: ["0021"],
    isVisible: true,
    subTasks: [
      {
        subTaskID: "01",
        startDate: "9/09/2024 - 2:00 pm",
        started: true,
        completionDate: null,
        completed: true,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Design authentication screens",
        subTaskDescription:
          "Create mockups and design layouts for login, signup, and recovery screens.",
      },
      {
        subTaskID: "02",
        started: true,
        startDate: "9/09/2024 - 2:30 pm",
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Implement authentication logic",
        subTaskDescription:
          "Develop the logic for handling user authentication using Firebase or another service.",
      },
      {
        subTaskID: "03",
        started: false,
        startDate: "9/09/2024 - 2:00 pm",
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Test authentication flow",
        subTaskDescription:
          "Ensure all authentication functionalities work correctly, including error handling.",
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
    taskName: "Fix Main Screen Layout",
    taskDescription:
      "Refactor and fix issues with the layout of the main screen to enhance user experience.",
    assignedUsers: ["231232133435", "849327232321"],
    childTasks: [],
    isVisible: true,
    subTasks: [
      {
        subTaskID: "01",
        startDate: "9/09/2024 - 2:00 pm",
        started: true,
        completionDate: null,
        completed: true,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Design main screen layout",
        subTaskDescription:
          "Create mockups and adjust layouts for the main home screen.",
      },
      {
        subTaskID: "02",
        started: true,
        startDate: "9/09/2024 - 2:30 pm",
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Implement responsive design",
        subTaskDescription:
          "Ensure the main screen layout adapts to different screen sizes and resolutions.",
      },
      {
        subTaskID: "03",
        started: false,
        startDate: "9/09/2024 - 2:00 pm",
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Test screen layout",
        subTaskDescription:
          "Test the screen layout across multiple devices and orientations.",
      },
    ],
  },
  {
    taskID: "0032",
    stage: "3",
    status: "notStarted",
    startDate: "7/09/2024 - 5:56 pm",
    completionDate: null,
    started: true,
    completed: false,
    percentComplete: 66,
    taskName: "Implement Social Login",
    taskDescription:
      "Refactor the login screen to support social logins (Google, Facebook, etc.) and ensure style consistency.",
    assignedUsers: ["231232133435", "849327232321"],
    childTasks: [],
    isVisible: true,
    subTasks: [
      {
        subTaskID: "01",
        startDate: "7/09/2024 - 5:56 pm",
        started: true,
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Integrate Google login",
        subTaskDescription: "Set up Google login functionality with Firebase.",
      },
    ],
  },
  {
    taskID: "0020",
    stage: "2",
    status: "notStarted",
    startDate: "7/09/2024 - 5:56 pm",
    completionDate: null,
    started: true,
    completed: false,
    percentComplete: 66,
    taskName: "Enhance Push Notification System",
    taskDescription:
      "Update push notification logic to handle more complex interactions like in-app and external notifications.",
    assignedUsers: ["231232133435", "849327232321"],
    childTasks: ["0030", "0031"],
    isVisible: true,
    subTasks: [
      {
        subTaskID: "01",
        startDate: "7/09/2024 - 5:56 pm",
        started: true,
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Improve notification handling",
        subTaskDescription:
          "Update handlers to manage multiple notification types.",
      },
    ],
  },
  {
    taskID: "0012",
    stage: "1",
    status: "notStarted",
    startDate: "7/09/2024 - 5:56 pm",
    completionDate: null,
    started: true,
    completed: false,
    percentComplete: 66,
    taskName: "Refactor App Splash Screen",
    taskDescription:
      "The splash screen needs optimization for different screen resolutions and loading performance.",
    assignedUsers: ["231232133435", "849327232321"],
    childTasks: ["0029", "0020"],
    isVisible: true,
    subTasks: [
      {
        subTaskID: "01",
        startDate: "7/09/2024 - 5:56 pm",
        started: true,
        completionDate: null,
        completed: false,
        assignedUsers: ["231232133435", "849327232321"],
        subTaskName: "Optimize splash screen performance",
        subTaskDescription:
          "Refactor code to reduce load time and ensure high-resolution compatibility.",
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
