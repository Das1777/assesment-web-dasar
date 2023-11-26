document.addEventListener('DOMContentLoaded', function () {
    const cartItemsList = document.getElementById('cartItems');
    const cards = document.querySelectorAll('.isi');

    function addToCart(itemName, itemPrice) {
        const li = document.createElement('li');
        li.textContent = `${itemName} - ${itemPrice}`;
        cartItemsList.appendChild(li);
    }

    cards.forEach(card => {
        const button = card.querySelector('.add-to-cart');
        button.addEventListener('click', function(event) {
            event.stopPropagation(); // Menghentikan event dari propogasi ke atas

            const itemName = card.querySelector('p').textContent;
            const itemPrice = card.querySelector('h1').textContent;
            addToCart(itemName, itemPrice);

            this.textContent = 'Ditambahkan!';
            this.disabled = true; // Optional: Disable button after adding to cart
        });
    });
});
