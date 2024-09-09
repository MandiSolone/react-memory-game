# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

React Number Memory Game
Overview
The React Number Memory Game challenges players to test their short-term memory by determining if they have seen a number before. A random number is displayed on the screen, and the player must decide if they have encountered that number previously. The game tracks correct and incorrect answers and ends when a player makes a mistake or reaches a predefined score.


Features
Random Number Generator: Displays a random number on the screen at set intervals.
User Input: The player must click a button to indicate if they have seen the number before.
Scoring System: Tracks the number of correct and incorrect answers, displaying the final score when the game ends.
React.js: For building the dynamic user interface.
CSS/Styled Components: For layout and styling.
JavaScript: Core logic for the game, handling the number generation and user responses.

How to Play
Clone the repository:
git clone https://github.com/MandiSolone/react-number-memory-game.git
Navigate into the project directory:
cd react-number-memory-game
Install the necessary dependencies:
npm install
Start the application:
npm start
Open the game in your browser at http://localhost:3000/.

Gameplay Instructions
When a number appears on the screen, click "Seen Before" if you believe you've seen it during this game session, or "Not Seen" if it’s a new number.
If you answer correctly, the game continues with a new number.
The game ends when you give an incorrect answer, and your score is displayed.

Project Structure:
react-number-memory-game/
│
├── public/             # Static assets like images and public files
├── src/
│   ├── components/     # React components for the game
│   ├── App.js          # Main App component
│   ├── index.js        # Entry point for the React app
│   └── styles.css      # Styling for the game
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
<<<<<<< HEAD
=======

>>>>>>> bcea748 (updated README.md)
