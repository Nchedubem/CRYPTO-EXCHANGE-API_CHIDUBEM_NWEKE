const cryptoElement = document.createElement('div');
cryptoElement.innerHTML = `${rank}. ${name} (${symbol}): $${priceUsd}`;

const cryptoDataElement = document.createElement('div');
cryptoDataElement.id = 'cryptoData';
document.body.appendChild(cryptoDataElement);

const { id, rank, name, symbol, priceUsd } = asset;

const cryptoElements = _.map(assets, (asset) => {
  const { id, rank, name, symbol, priceUsd } = asset;
  return `<p>${rank}. ${name} (${symbol}): $${priceUsd}</p>`;
});

_.each(cryptoElements, (element) => {
  document.body.appendChild(element);
});


try {
  fetch('https://api.coincap.io/v2/assets')
    .then(response => response.json())
    .then(data => {
      const assets = data.data.slice(0, 5);

      const cryptoDataElement = document.getElementById('cryptoData');
      assets.forEach((asset) => {
        const { id, rank, name, symbol, priceUsd } = asset;

        const cryptoElement = document.createElement('div');
        cryptoElement.innerHTML = `${rank}. ${name} (${symbol}): $${priceUsd}`;

        cryptoDataElement.appendChild(cryptoElement);
      });
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('An error occurred while retrieving crypto data. Please try again later.');
    });
} catch (error) {
  console.error('Error:', error);
  alert('An error occurred while retrieving crypto data. Please try again later.');
}