fetch('https://api.coincap.io/v2/assets')
  .then(response => response.json())
  .then(data => {
    const assets = data.data.slice(0, 5);

    const cryptoElements = assets.map((asset) => {
      const rank = asset.rank;
      const name = asset.name;
      const symbol = asset.symbol;
      const priceUsd = asset.price_usd;

      const cryptoElement = document.createElement('div');
      cryptoElement.innerHTML = `${rank}. ${name} (${symbol}): $${priceUsd}`;

      return cryptoElement;
    });

    const cryptoDataElement = document.getElementById('cryptoData');
    cryptoElements.forEach((element) => {
      cryptoDataElement.appendChild(element);
    });
  })
  .catch((error) => {
    console.error(error);
    alert('An error occurred while retrieving crypto data. Please try again later.');
  });