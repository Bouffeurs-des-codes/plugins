// plugins/currency.js
export function init() {
  const converter = document.createElement('div')
  converter.innerHTML = `
    <div style="border:1px solid #eee;padding:15px;width:220px">
      <h3 style="margin-top:0">Convertisseur</h3>
      <input type="number" id="currency-amount" value="1" style="width:100%">
      <select id="currency-from" style="width:100%;margin:5px 0">
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
      </select>
      <div style="text-align:center">→</div>
      <select id="currency-to" style="width:100%;margin:5px 0">
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
      <button id="currency-convert" style="width:100%">Convertir</button>
      <div id="currency-result" style="font-size:20px;text-align:center;margin-top:10px">-</div>
    </div>
  `
  
  document.getElementById('app-content').appendChild(converter)
  
  document.getElementById('currency-convert').addEventListener('click', () => {
    // Taux fictifs (remplacer par une API réelle en production)
    const rates = { EUR: 1.18, USD: 0.85 }
    const amount = parseFloat(document.getElementById('currency-amount').value)
    const from = document.getElementById('currency-from').value
    const to = document.getElementById('currency-to').value
    
    const result = amount * rates[from] / rates[to]
    document.getElementById('currency-result').textContent = result.toFixed(2) + ' ' + to
  })
}
