// plugins/player.js
export function init() {
  const player = document.createElement('div')
  player.innerHTML = `
    <div style="background:#f0f0f0;padding:15px;border-radius:8px;width:200px">
      <h3 style="margin-top:0">Lecteur Audio</h3>
      <button id="player-play" style="width:100%">▶️ Jouer</button>
      <input type="range" id="player-volume" min="0" max="1" step="0.1" value="0.5" style="width:100%">
    </div>
  `
  
  document.getElementById('app-content').appendChild(player)
  
  const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3')
  
  document.getElementById('player-play').addEventListener('click', () => {
    if (audio.paused) {
      audio.play()
      document.getElementById('player-play').textContent = '⏸️ Pause'
    } else {
      audio.pause()
      document.getElementById('player-play').textContent = '▶️ Jouer'
    }
  })
  
  document.getElementById('player-volume').addEventListener('input', (e) => {
    audio.volume = e.target.value
  })
}
