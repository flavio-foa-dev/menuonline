fetch('data.json')
  .then(response => {
    if (!response.ok) {
      const menu = document.getElementById("menu");
      menu.innerHTML = "<h2>Não foi possível carregar os dados</h2>";
      throw new Error("Erro ao carregar data.json");
    }
    return response.json();
  })
  .then(bebidas => {
    console.log(bebidas);
    const menu = document.getElementById("menu");

    bebidas.forEach(bebida => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h2>${bebida.nome}</h2>
        <img src="${bebida.imagem}" alt="${bebida.nome}" />
        <p>${bebida.descricao}</p>
      `;

      menu.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Erro:", error);
    const menu = document.getElementById("menu");
    menu.innerHTML = "<h2>Ocorreu um erro ao carregar os dados.</h2>";
  });
