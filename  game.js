/* ======================================
   Text Adventure Engine — F1 Setup
   Base Game Logic
   ====================================== */

// Game state object
const gameState = {
  currentScene: "start"
};

// Simple scene data (hardcoded for F1 setup)
// Later we’ll move this into a JSON file
const scenes = {
  start: {
    text: "You find yourself in a dark room. There is a door to the north.",
    choices: [
      { text: "Open the door", nextScene: "hallway" }
    ]
  },
  hallway: {
    text: "You step into a narrow hallway. It's eerily quiet.",
    choices: [
      { text: "Go back to the room", nextScene: "start" }
    ]
  }
};

// Render current scene
function renderScene() {
  const scene = scenes[gameState.currentScene];

  // Scene text
  const sceneText = document.getElementById("scene-text");
  sceneText.textContent = scene.text;

  // Clear old choices
  const choicesContainer = document.getElementById("choices");
  choicesContainer.innerHTML = "";

  // Add buttons for choices
  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.addEventListener("click", () => {
      gameState.currentScene = choice.nextScene;
      renderScene();
    });
    choicesContainer.appendChild(btn);
  });
}

// Start the game when the page loads
window.addEventListener("DOMContentLoaded", () => {
  renderScene();
});