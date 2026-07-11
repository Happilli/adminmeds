const profile = {
  id: 1,

  full_name: "Ram Sharma",

  role: "Hospital Administrator",

  email: "admin@cityhospital.com",

  phone: "+977 9800000000",

  hospital_name: "City Hospital",

  joined_date: "2025-01-15",

  avatar: null,

  hospital: {
    hospital_name: "City Hospital",
    registration_number: "REG-2025-001",
    hospital_email: "info@cityhospital.com",
    hospital_phone: "+977-1-4567890",
    website: "https://cityhospital.com",
    address: "Kathmandu, Nepal",
  },

  security: {
    password_last_changed: "2026-06-25",
  },

  actions: [
    {
      id: 1,
      title: "Edit Profile",
      key: "edit_profile",
    },
    {
      id: 2,
      title: "Hospital Information",
      key: "hospital_information",
    },
    {
      id: 3,
      title: "Change Password",
      key: "change_password",
    },
    {
      id: 4,
      title: "Logout",
      key: "logout",
    },
  ],
};

export default profile;