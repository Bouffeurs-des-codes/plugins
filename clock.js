module.exports = {
  init: function() {
    const clock = document.createElement('div')
    clock.id = 'clock'
    document.getElementById('app-content').appendChild(clock)
    
    setInterval(() => {
      clock.textContent = new Date().toLocaleTimeString()
    }, 1000)
  }
}
