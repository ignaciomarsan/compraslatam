// Función para generar un código único basado en la fecha y la hora
function generateOrderCode() {
    const now = new Date();
    const year = now.getFullYear();
    const month = ('0' + (now.getMonth() + 1)).slice(-2);
    const day = ('0' + now.getDate()).slice(-2);
    const hour = ('0' + now.getHours()).slice(-2);
    const minute = ('0' + now.getMinutes()).slice(-2);
    const second = ('0' + now.getSeconds()).slice(-2);

    return `ORD-${year}${month}${day}-${hour}${minute}${second}`;
}

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

    // Generar el código único de la orden
    const orderCode = generateOrderCode();

    // Crear una nueva fila en la tabla de pedidos
    const table = document.getElementById("ordersTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    newRow.insertCell(0).innerText = orderCode;
    newRow.insertCell(1).innerText = articleName;
    newRow.insertCell(2).innerText = quantity;
    newRow.insertCell(3).innerText = description;
    newRow.insertCell(4).innerText = companyName;
    newRow.insertCell(5).innerText = contactName;
    newRow.insertCell(6).innerText = phone;
    newRow.insertCell(7).innerText = email;

    // Guardar el nuevo pedido en localStorage
    const orderData = {
        orderCode,
        articleName,
        quantity,
        description,
        companyName,
        contactName,
        phone,
        email
    };
    saveOrder(orderData);

    // Limpiar el formulario
    document.getElementById("purchaseForm").reset();
});

// Función para guardar el pedido en localStorage
function saveOrder(order) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
}

// Función para cargar los pedidos guardados desde localStorage
function loadOrders() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const table = document.getElementById("ordersTable").getElementsByTagName('tbody')[0];

    orders.forEach(order => {
        const newRow = table.insertRow();
        newRow.insertCell(0).innerText = order.orderCode;
        newRow.insertCell(1).innerText = order.articleName;
        newRow.insertCell(2).innerText = order.quantity;
        newRow.insertCell(3).innerText = order.description;
        newRow.insertCell(4).innerText = order.companyName;
        newRow.insertCell(5).innerText = order.contactName;
        newRow.insertCell(6).innerText = order.phone;
        newRow.insertCell(7).innerText = order.email;
    });
}

// Cargar los pedidos al iniciar la página
window.onload = function() {
    loadOrders();
};
