// Selecionando elementos
const addItemButton = document.getElementById('addItemButton');
const itemInput = document.getElementById('itemInput');
const shoppingList = document.getElementById('shoppingList');

// Função para adicionar item
addItemButton.addEventListener('click', function() {
    const itemText = itemInput.value.trim();

    if (itemText !== "") {
        const li = document.createElement('li');
        li.textContent = itemText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.addEventListener('click', function() {
            shoppingList.removeChild(li);
        });

        li.appendChild(removeButton);
        shoppingList.appendChild(li);

        itemInput.value = "";  // Limpa o campo de input
    } else {
        alert("Por favor, insira um item.");
    }
});