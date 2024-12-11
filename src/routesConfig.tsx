import { RouteParams } from "./types/global";

import HomePage from "./pages/Home";
import SearchAllPage from "./pages/SearchAll";
import AllLocationsPage from "./pages/Locations";
import AllDoctorsPage from "./pages/Doctors";
import AllServicesPage from "./pages/Services";
import SingleLocationPage from "./pages/Location";
import SingleDoctorPage from "./pages/Doctor";
import SingleServicePage from "./pages/Service";


export const routesConfig = [
  { path: "/", label: "Home", component: HomePage },
  { path: "/search", label: "Search", component: SearchAllPage },
  { path: "/locations", label: "Locations", component: AllLocationsPage },
  { path: "/doctors", label: "Doctors", component: AllDoctorsPage },
  { path: "/services", label: "Services", component: AllServicesPage },
  {
    path: "/locations/:id",
    label: (params: RouteParams) => params.id, 
    component: SingleLocationPage,
  },
  {
    path: "/doctors/:id",
    label: (params: RouteParams) => params.id, 
    component: SingleDoctorPage,
  },
  {
    path: "/services/:id",
    label: (params: RouteParams) => params.id, 
    component: SingleServicePage,
  },
];
