document.addEventListener('DOMContentLoaded', function() {
    const meals = [
        { name: "Spaghetti Bolognese", image: "Spaghetti Bolognese1.jpg" },
        { name: "Grilled Chicken", image: "Grilled Chicken.jpg" },
        { name: "Caesar Salad", image: "Caesar Salad.webp" },
        { name: "Pizza Margherita", image: "Pizza Margherita.jpg" },
        { name: "Beef Burger", image: "Beef Burger.avif" }
    ];

    const mealCards = document.getElementById('meal-cards');

    meals.forEach((meal, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        const img = document.createElement('img');
        img.src = meal.image;
        img.alt = meal.name;
        
        const title = document.createElement('h3');
        title.innerText = meal.name;
        
        const desc = document.createElement('p');
        desc.innerText = `Try our delicious ${meal.name}, freshly made every day!`;
        
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(desc);
        mealCards.appendChild(card);

        // Animation for card entry
        setTimeout(() => {
            card.style.opacity = 1; 
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});
