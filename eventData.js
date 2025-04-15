const events = [
  {
    id: 1,
    name: "Job Fair - North Campus",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "March 29, 2025",
    location: "LNX9101",
    points: 350,
    category: "Academic",
    image: "images/job-fair.jpg",
  },
  {
    id: 2,
    name: "Ignite Concert",
    description:
      "Join us for an evening of amazing music and performances by talented Humber students.",
    date: "April 15, 2025",
    location: "Student Center",
    points: 250,
    category: "Cultural",
    image: "images/ignite-concert.jpg",
  },
  {
    id: 3,
    name: "Wellness Workshop",
    description:
      "Learn about mental health, stress management, and wellness techniques.",
    date: "April 2, 2025",
    location: "B201",
    points: 200,
    category: "Academic",
    image: "images/wellness-workshop.jpg",
  },
];

// Make functions available globally
window.getAllEvents = function () {
  return events;
};

window.getEventsByCategory = function (categories) {
  return events.filter((event) => categories.includes(event.category));
};

window.getEventById = function (id) {
  return events.find((event) => event.id === id);
};

window.getMyEvents = function () {
  // In a real app, this would fetch from a backend/localStorage
  // For demo, returning first event as registered
  return [events[0]];
};

window.registerForEvent = function (eventId) {
  // In a real app, this would update a backend/localStorage
  console.log(`Registered for event ${eventId}`);
  return true;
};

window.cancelEventRegistration = function (eventId, reason) {
  // In a real app, this would update a backend/localStorage
  console.log(`Cancelled registration for event ${eventId}. Reason: ${reason}`);
  return true;
};
