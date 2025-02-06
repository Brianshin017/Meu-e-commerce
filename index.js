document.addEventListener('DOMContentLoaded', () => {
    const productListEl = document.getElementById('product-list');
    const registerForm = document.getElementById('registerForm');
    const cartCountEl = document.getElementById('cart-count');
    const cartItemsEl = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkoutBtn');
  
    // Produtos iniciais (exemplo)
    let products = [
      { id: 1, name: "Produto Exemplo 1", price: 49.99, image: "https://via.placeholder.com/300x200" },
      { id: 2, name: "Produto Exemplo 2", price: 29.99, image: "https://via.placeholder.com/300x200" },
    ];
    
    // Carrinho de compras
    let cart = [];
  
    // Renderiza a lista de produtos
    function renderProducts() {
      productListEl.innerHTML = '';
      products.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-sm-6 col-md-4';
        col.innerHTML = `
          <div class="card h-100">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">R$${product.price.toFixed(2)}</p>
              <button class="btn btn-primary mt-auto" onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
            </div>
          </div>
        `;
        productListEl.appendChild(col);
      });
    }
  
    // Adiciona produto ao carrinho
    window.addToCart = function(productId) {
      const product = products.find(p => p.id === productId);
      if(product) {
        const cartItem = cart.find(item => item.id === productId);
        if(cartItem) {
          cartItem.quantity += 1;
        } else {
          cart.push({ ...product, quantity: 1 });
        }
        updateCart();
      }
    };
  
    // Atualiza o carrinho e exibe o total de itens
    function updateCart() {
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      cartCountEl.textContent = totalItems;
      renderCartItems();
    }
  
    // Renderiza os itens do carrinho
    function renderCartItems() {
      cartItemsEl.innerHTML = '';
      let total = 0;
      cart.forEach(item => {
        total += item.price * item.quantity;
        const itemEl = document.createElement('div');
        itemEl.className = 'd-flex justify-content-between align-items-center mb-2';
        itemEl.innerHTML = `
          <div>${item.name} (x${item.quantity})</div>
          <div>R$${(item.price * item.quantity).toFixed(2)}</div>
          <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">Remover</button>
        `;
        cartItemsEl.appendChild(itemEl);
      });
      cartTotalEl.textContent = total.toFixed(2);
    }
  
    // Remove um item do carrinho
    window.removeFromCart = function(productId) {
      cart = cart.filter(item => item.id !== productId);
      updateCart();
    };
  
    // Evento do formulário de cadastro de produto
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('productName').value;
      const price = parseFloat(document.getElementById('productPrice').value);
      const image = document.getElementById('productImage').value;
      const newProduct = {
        id: products.length + 1,
        name,
        price,
        image
      };
      products.push(newProduct);
      renderProducts();
      registerForm.reset();
      // Fecha o modal de cadastro (Bootstrap 5)
      const registerModal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
      registerModal.hide();
    });
  
    // Simulação de checkout (integração com sistema de pagamento)
    checkoutBtn.addEventListener('click', function() {
      alert('Integração com sistema de pagamento em desenvolvimento!');
    });
  
    renderProducts();
  });

  import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles.css"; // Se precisar de estilos globais

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
