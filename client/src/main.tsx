import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add custom CSS for font family and other base styles
const style = document.createElement('style');
style.textContent = `
  body {
    font-family: 'Open Sans', sans-serif;
    color: #333333;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Merriweather', serif;
  }
  .font-heading {
    font-family: 'Merriweather', serif;
  }
  .font-body {
    font-family: 'Open Sans', sans-serif;
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
