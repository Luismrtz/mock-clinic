import { ReactComponent as Doctor } from "../assets/svg/Doctor.svg";
import { ReactComponent as Folder } from "../assets/svg/Folder.svg";
import { ReactComponent as Map } from "../assets/svg/Map.svg";
import { ReactComponent as Clock } from "../assets/svg/Clock.svg";
import { ReactComponent as CardIcon } from "../assets/svg/CardIcon.svg";
import { ReactComponent as Calendar } from "../assets/svg/Calendar.svg";

export const missionCards = [
  {
    Icon: Folder,
    title:'Records',
    to: '/'
  },
  {
    Icon: Doctor,
    title:'Doctors',
        to: '/doctors'
  },
  {
    Icon: Map,
    title:'Locations',
        to: '/locations'
  },
  {
    Icon: Clock,
    title:'Reminders',
        to: '/'
  },
  {
    Icon: CardIcon,
    title:'Payments',
        to: '/'
  },
  {
    Icon: Calendar,
    title:'Appointments',
        to: '/'
  }
];
