document.getElementById("buyBtn").addEventListener("click", function() {
    document.getElementById("buyForm").classList.remove("hidden");
    document.getElementById("orderList").classList.add("hidden");
});

document.getElementById("orderListBtn").addEventListener("click", function() {
    document.getElementById("orderList").classList.remove("hidden");
    document.getElementById("buyForm").classList.add("hidden");
});

document.getElementById("purchaseForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Obtener los valores del formulario
    const articleName = document.getElementById("articleName").value;
    const quantity = document.getElementById("quantity").value;
    const description = document.getElementById("description").value;
    const companyName = document.getElementById("companyName").value;
    const contactName = document.getElementById("contactName").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    // Crear una nueva fila en la tabla de pedidos
    const table = document.getElementById("ordersTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    newRow.insertCell(0).innerText = articleName;
    newRow.insertCell(1).innerText = quantity;
    newRow.insertCell(2).innerText = description;
    newRow.insertCell(3).innerText = companyName;
    newRow.insertCell(4).innerText = contactName;
    newRow.insertCell(5).innerText = phone;
    newRow.insertCell(6).innerText = email;

    // Limpiar el formulario
    document.getElementById("purchaseForm").reset();
});
