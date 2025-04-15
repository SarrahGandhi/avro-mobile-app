const userData = {
  "thesarrahgandhi@gmail.com": {
    name: "Sarrah Gandhi",
    role: "Student",
    image: "images/sarrah.jpg",
    lives: 5,
    points: 4500,
    notifications: [
      {
        title: "Attended the Ignite Concert",
        description: "10 points have been added to your account.",
        isRead: false,
      },
      {
        title: "New Event Available",
        description: "Check out the upcoming Wellness Workshop!",
        isRead: false,
      },
    ],
    expiryDate: "2024-06-01",
  },
  "john.doe@gmail.com": {
    name: "John Doe",
    role: "Faculty",
    image: "images/john.jpg",
    lives: 3,
    points: 3200,
    notifications: [
      {
        title: "Faculty Meeting Reminder",
        description: "Don't forget about tomorrow's meeting at 10 AM.",
        isRead: false,
      },
    ],
    expiryDate: "2024-05-15",
  },
  "emma.wilson@gmail.com": {
    name: "Emma Wilson",
    role: "Student",
    image: "images/emma.jpeg",
    lives: 4,
    points: 5200,
    notifications: [
      {
        title: "Achievement Unlocked",
        description: "You've earned the 'Early Bird' badge!",
        isRead: false,
      },
      {
        title: "Points Update",
        description: "15 points added for attending the workshop.",
        isRead: false,
      },
    ],
    expiryDate: "2024-07-01",
  },
  "michael.chen@gmail.com": {
    name: "Michael Chen",
    role: "Graduate Student",
    image: "images/michael.jpg",
    lives: 5,
    points: 6100,
    notifications: [
      {
        title: "Research Grant Opportunity",
        description: "New grant applications are now open.",
        isRead: false,
      },
    ],
    expiryDate: "2024-08-15",
  },
  "lisa.kumar@gmail.com": {
    name: "Lisa Kumar",
    role: "Student",
    image: "images/lisa.jpg",
    lives: 4,
    points: 3800,
    notifications: [
      {
        title: "Event Registration Success",
        description: "You're registered for the Campus Festival!",
        isRead: false,
      },
      {
        title: "Points Milestone",
        description: "Congratulations! You've reached 3800 points!",
        isRead: false,
      },
    ],
    expiryDate: "2024-06-30",
  },
  "john.doe@example.com": {
    name: "John Doe",
    email: "john.doe@example.com",
    points: 2500,
    lives: 3,
    profileImage: "assets/profile-1.jpg",
    notifications: [
      {
        id: 1,
        message: "You earned 100 points!",
        read: false,
        timestamp: "2024-03-20T10:30:00",
      },
      {
        id: 2,
        message: "New challenge available",
        read: true,
        timestamp: "2024-03-19T15:45:00",
      },
    ],
    events: [
      {
        id: 1,
        title: "Team Challenge",
        date: "2024-03-25T14:00:00",
        description: "Join the team challenge to earn bonus points",
      },
    ],
  },
  "jane.smith@example.com": {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    points: 3200,
    lives: 4,
    profileImage: "assets/profile-2.jpg",
    notifications: [
      {
        id: 1,
        message: "You completed a challenge!",
        read: false,
        timestamp: "2024-03-20T09:15:00",
      },
    ],
    events: [],
  },
  "test@example.com": {
    password: "password123",
    name: "John Doe",
    profilePicture: "assets/profile-picture.jpg",
    notifications: [
      {
        id: 1,
        message: "New message from Sarah",
        read: false,
        timestamp: "2024-03-20T10:30:00",
      },
      {
        id: 2,
        message: "Team meeting reminder",
        read: true,
        timestamp: "2024-03-20T09:15:00",
      },
      {
        id: 3,
        message: "Project deadline updated",
        read: false,
        timestamp: "2024-03-19T16:45:00",
      },
    ],
    events: [
      {
        id: 1,
        title: "Team Meeting",
        date: "2024-03-21T14:00:00",
        location: "Conference Room A",
      },
      {
        id: 2,
        title: "Project Review",
        date: "2024-03-22T10:00:00",
        location: "Virtual",
      },
    ],
  },
};
