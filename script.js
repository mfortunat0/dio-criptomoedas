const key = "";

fetch(
  `https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=${key}`
)
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `Erro ao executar a requisicao, status ${response.status}`
      );
    }
    return response.json();
  })
  .then((api) => {
    let texto = "";

    for (let c = 0; c < 10; c++) {
      texto += `
    <div class="media">
    <img src="coin.jpg" alt="" class="align-self-center mr-3" width="100" height="60">
    <div class="media-body">
      <h5 class="mt-2">
      ${api.data[c].name}
      </h5>
      <p>${api.data[c].symbol}</p>
      <p>${api.data[c].first_historical_data}</p>
    </div>
  </div>
    `;
    }

    document.getElementById("coins").innerHTML = texto
  })
  .catch((error) => {
    console.error(error.message);
  });
