// plugins/calculator.js
export function init() {
  const calc = document.createElement('div')
  calc.innerHTML = `
    <div style="border:1px solid #ccc;padding:20px;width:200px">
      <input type="number" id="calc-num1" value="0" style="width:100%">
      <input type="number" id="calc-num2" value="0" style="width:100%">
      <button id="calc-btn" style="width:100%">=</button>
      <div id="calc-result" style="font-size:24px;text-align:center">0</div>
    </div>
  `
  
  document.getElementById('app-content').appendChild(calc)
  
  document.getElementById('calc-btn').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('calc-num1').value)
    const num2 = parseFloat(document.getElementById('calc-num2').value)
    document.getElementById('calc-result').textContent = num1 + num2
  })
}
