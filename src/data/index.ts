import { ImageProps } from "react-native";
export interface patientList {
  name: string;
  age: number;
  healthIssue: string;
  image: ImageProps["source"];
  schedule: {
    startTime: string;
    endTime: string;
  };
}

const userWoman = require("../../assets/userWoman.png");
const userMen = require("../../assets/userMen.png");

export const patientList = [
  {
    id: "1",
    name: "John Doe",
    age: 25,
    image: userMen,
    healthIssue: "Allergy",
    schedule: {
      startTime: "08:30",
      endTime: "08:55",
    },
    bloodPressure: "120/80",
    sleepTime: "7 hours",
  },
  {
    id: "2",
    name: "Jane Smith",
    age: 29,
    image: userWoman,
    healthIssue: "Stroke",
    schedule: {
      startTime: "09:30",
      endTime: "09:55",
    },
    bloodPressure: "110/70",
    sleepTime: "6.5 hours",
  },
  {
    id: "3",
    name: "Robert Johnson",
    age: 20,
    image: userMen,
    healthIssue: "Diabetes",
    schedule: {
      startTime: "10:30",
      endTime: "10:55",
    },
    bloodPressure: "130/90",
    sleepTime: "8 hours",
  },
  {
    id: "4",
    name: "Emily Davis",
    age: 91,
    image: userWoman,
    healthIssue: "Hypertension ",
    schedule: {
      startTime: "11:30",
      endTime: "11:45",
    },
    bloodPressure: "140/95",
    sleepTime: "6 hours",
  },
  {
    id: "5",
    name: "Daniel Brown",
    age: 54,
    image: userMen,
    healthIssue: "Mental Health",
    schedule: {
      startTime: "13:10",
      endTime: "13:25",
    },
    bloodPressure: "118/82",
    sleepTime: "7.5 hours",
  },
  {
    id: "6",
    name: "Sophia Wilson",
    age: 15,
    image: userWoman,
    healthIssue: "Pediatric Care",
    schedule: {
      startTime: "13:30",
      endTime: "13:45",
    },
    bloodPressure: "125/85",
    sleepTime: "9 hours",
  },
  {
    id: "7",
    name: "Olivia Garcia",
    age: 18,
    image: userWoman,
    healthIssue: "Dermatology",
    schedule: {
      startTime: "13:50",
      endTime: "14:05",
    },
    bloodPressure: "110/75",
    sleepTime: "8.5 hours",
  },
  {
    id: "8",
    name: "Ethan Taylor",
    age: 30,
    image: userWoman,
    healthIssue: "Allergies",
    schedule: {
      startTime: "14:10",
      endTime: "14:25",
    },
    bloodPressure: "135/88",
    sleepTime: "7 hours",
  },
];

export default patientList;
