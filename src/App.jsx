import List from "./components/List";

const projects = [
  {
    id: 1,
    name: "Password Generator",
    url: "https://emk2473.github.io/portfolio/"
  },
  {
    id: 2,
    name: "JavaScript Quiz",
    url: "https://emk2473.github.io/javascript-quiz/"
  },
  {
    id: 3,
    name: "Daily Planner",
    url: "https://emk2473.github.io/daily-planner/"
  },
  {
    id: 4,
    name: "5-Day Weather Forecast",
    url: "https://emk2473.github.io/weather-forecast/"
  },
  {
    id: 5,
    name: "Inventory Management System",
    url: "https://inv-man-system-b9da5a82b52b.herokuapp.com/login"
  },
  {
    id: 6,
    name: "Express Note Taker",
    url: "https://exp-note-taker-app-7afdb91c4244.herokuapp.com/"
  },
  {
    id: 7,
    name: "Just Another Note Taker",
    url: "https://j-a-t-e-867088540b22.herokuapp.com/"
  },
  {
    id: 8,
    name: "Callope's Commonplace",
    url: "https://emk2473.github.io/calliope-commonplace/"
  }
];

function App() {
  return <List projects={projects} />;
}

export default App;
