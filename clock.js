// plugins/clock.js
export function init() {
  // Création de l'élément
  const clock = document.createElement('div')
  clock.id = 'clock'
  clock.style.cssText = `
    font-size: 24px;
    padding: 20px;
    background: #333;
    color: white;
    border-radius: 4px;
    position: fixed;
    bottom: 20px;
    right: 20px;
  `

  // Ajout au DOM
  const appContent = document.getElementById('app-content') || document.body
  appContent.appendChild(clock)

  // Mise à jour de l'heure
  function updateTime() {
    clock.textContent = new Date().toLocaleTimeString()
  }
  
  updateTime() // Initialisation immédiate
  setInterval(updateTime, 1000) // Mise à jour chaque seconde
}
