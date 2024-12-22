export const navLinks = [
  {
    label: "Doctors",
    href: "/doctors",
  },
  {
    label: "Locations",
    href: "/locations",
  },
  {
    label: "Services",
    href: "/services",
    sublinks: [
      { label: "Allergies", href: "/services/allergies" },
      { label: "Diabetes", href: "/services/diabetes" },
      { label: "X-Ray", href: "/services/x-ray" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    sublinks: [
      { label: "Schedule Appointment", href: "/resources/appointments" },
      { label: "Newsletters", href: "/resources/newsletters" },
    ],
  },
];
