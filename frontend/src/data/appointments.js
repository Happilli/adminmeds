const appointments = [
  {
    id: 1,
    appointmentNumber: "APT-1001",
    time: "09:00 AM",
    date: "2025-05-16",

    patient: {
      name: "Ramesh Gurung",
      age: 45,
      gender: "Male",
      phone: "9811111111",
    },

    doctor: {
      name: "Dr. S. Sharma",
      department: "Cardiology",
    },

    reason: "Chest Pain",
    status: "Confirmed",
  },

  {
    id: 2,
    appointmentNumber: "APT-1002",
    time: "09:30 AM",
    date: "2025-05-16",

    patient: {
      name: "Hari Tamang",
      age: 50,
      gender: "Male",
      phone: "9811111112",
    },

    doctor: {
      name: "Dr. S. Sharma",
      department: "Cardiology",
    },

    reason: "Regular Checkup",
    status: "Completed",
  },

  {
    id: 3,
    appointmentNumber: "APT-1003",
    time: "10:00 AM",
    date: "2025-05-16",

    patient: {
      name: "Sita Magar",
      age: 38,
      gender: "Female",
      phone: "9811111113",
    },

    doctor: {
      name: "Dr. R. Karki",
      department: "Neurology",
    },

    reason: "Headache",
    status: "Pending",
  },

  {
    id: 4,
    appointmentNumber: "APT-1004",
    time: "11:00 AM",
    date: "2025-05-16",

    patient: {
      name: "Gita Thapa",
      age: 29,
      gender: "Female",
      phone: "9811111114",
    },

    doctor: {
      name: "Dr. B. Aryal",
      department: "Orthopedics",
    },

    reason: "Back Pain",
    status: "Confirmed",
  },

  {
    id: 5,
    appointmentNumber: "APT-1005",
    time: "11:30 AM",
    date: "2025-05-16",

    patient: {
      name: "Bikash Rai",
      age: 61,
      gender: "Male",
      phone: "9811111115",
    },

    doctor: {
      name: "Dr. P. Shrestha",
      department: "General Medicine",
    },

    reason: "Diabetes Follow-up",
    status: "Cancelled",
  },

  {
    id: 6,
    appointmentNumber: "APT-1006",
    time: "12:00 PM",
    date: "2025-05-16",

    patient: {
      name: "Anita KC",
      age: 33,
      gender: "Female",
      phone: "9811111116",
    },

    doctor: {
      name: "Dr. R. Karki",
      department: "Neurology",
    },

    reason: "Migraine",
    status: "Completed",
  },

  {
    id: 7,
    appointmentNumber: "APT-1007",
    time: "01:00 PM",
    date: "2025-05-16",

    patient: {
      name: "Suman Lama",
      age: 47,
      gender: "Male",
      phone: "9811111117",
    },

    doctor: {
      name: "Dr. B. Aryal",
      department: "Orthopedics",
    },

    reason: "Knee Pain",
    status: "Pending",
  },

  {
    id: 8,
    appointmentNumber: "APT-1008",
    time: "01:30 PM",
    date: "2025-05-16",

    patient: {
      name: "Nirmala Joshi",
      age: 55,
      gender: "Female",
      phone: "9811111118",
    },

    doctor: {
      name: "Dr. P. Shrestha",
      department: "General Medicine",
    },

    reason: "Blood Pressure",
    status: "Confirmed",
  },
];

export default appointments;