fetch('https://api.coincap.io/v2/assets')
  .then(response => response.json())
  .then(data => {
    const assets = data.data.slice(0, 5); // Get the top 5 cryptocurrencies

    const cryptoDataElement = document.getElementById('cryptoData');
    assets.forEach(asset => {
      const { id, rank, name, symbol, priceUsd } = asset;

      const cryptoElement = document.createElement('div');
      cryptoElement.innerHTML = `<p>${rank}. ${name} (${symbol}): $${priceUsd}</p>`;

      cryptoDataElement.appendChild(cryptoElement);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });