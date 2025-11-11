document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Master List of Waste Items (NOW WITH E-WASTE) ---
    const allWasteItems = [{
            name: 'Apple Core',
            type: 'wet',
            image: 'https://png.pngtree.com/thumb_back/fh260/background/20220716/pngtree-red-apple-core-on-a-white-background-delicious-crunchy-natural-photo-image_8698300.jpg'
        },
        {
            name: 'Plastic Bottle',
            type: 'dry',
            image: 'https://png.pngtree.com/png-clipart/20240418/original/pngtree-compressed-plastic-bottle-png-image_14879043.png'
        },
        {
            name: 'Newspaper',
            type: 'dry',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGq5JiWlYU7vjuSfKZl-jJW9rLl_fFL-RXfA&s'
        },
        {
            name: 'Banana Peel',
            type: 'wet',
            image: 'https://icon2.cleanpng.com/20190715/hrc/kisspng-banana-peel-stock-photography-royalty-free-social-gorilla-home-1713879348760.webp'
        },
        {
            name: 'Tin Can',
            type: 'dry',
            image: 'https://atlas-content-cdn.pixelsquid.com/stock-images/tin-can-G9G6wQF-600.jpg'
        },
        {
            name: 'Food Scraps',
            type: 'wet',
            image: 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L3N0YXJ0dXBpbWFnZXNfcGhvdG9ncmFwaHlfb2ZfZm9vZF9jYXJyaWRnZV93YXN0ZV9waWxlX2lzb2xhdGVkX19iMDZjNjBiMy04NzZmLTQ0ZDItOGFjYy1hNTllNzJiMzM0YzMucG5n.png'
        },
        {
            name: 'Glass Bottle',
            type: 'dry',
            image: 'https://atlas-content-cdn.pixelsquid.com/stock-images/old-glass-bottle-corkscrew-mdnO39D-600.jpg'
        },
        {
            name: 'Cardboard',
            type: 'dry',
            image: 'https://png.pngtree.com/png-clipart/20220606/ourmid/pngtree-cardboard-box-png-image_4918390.png'
        },
        {
            name: 'Egg Shells',
            type: 'wet',
            image: 'https://static.vecteezy.com/system/resources/previews/045/858/339/non_2x/cracked-eggshells-close-ups-premium-quality-stock-photography-free-png.png'
        },
        {
            name: 'Milk Carton',
            type: 'dry',
            image: 'https://atlas-content-cdn.pixelsquid.com/stock-images/milk-carton-large-blue-EKnX8G1-600.jpg'
        },
        {
            name: 'Vegetable Peels',
            type: 'wet',
            image: 'https://media.istockphoto.com/id/1461675463/photo/pile-of-organic-waste-for-composting-on-white-background-top-view.jpg?s=612x612&w=0&k=20&c=mplPChvK95q8xzL7hiYDEn3nyvQ-zp1vAlHq5klW6mU='
        },
        {
            name: 'Soda Can',
            type: 'dry',
            image: 'https://png.pngtree.com/png-vector/20220208/ourmid/pngtree-orange-soda-can-png-image_4379533.png'
        },
        {
            name: 'Paper Towel',
            type: 'wet',
            image: 'https://www.pngall.com/wp-content/uploads/8/Paper-Towel-Roll-PNG-Image.png'
        },
        {
            name: 'Cereal Box',
            type: 'dry',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx_US8Geuspcp6RJFiE-GKwDVysR7YJpaxdQ&s'
        },
        {
            name: 'Tea Bag',
            type: 'wet',
            image: 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL2ZydGVhYmFnX3RlYV9iYWdfZHJpbmstaW1hZ2UtMDEtam9iMTQxMS5wbmc.png'
        },
        {
            name: 'Aluminum Foil',
            type: 'dry',
            image: 'https://www.pngplay.com/wp-content/uploads/6/Aluminium-Foil-Paper-Background-PNG-Image.png'
        },
        {
            name: 'Coffee Grounds',
            type: 'wet',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhmIyo7HVkinCPOxVHwjEO8So53ssjkUeww&s'
        },
        {
            name: 'Plastic Bag',
            type: 'dry',
            image: 'https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm01MTYtZTUtMDAzLnBuZw.png'
        },

        // --- NEW E-WASTE ITEMS ---
        {
            name: 'Old Phone',
            type: 'e-waste',
            image: 'https://www.vhv.rs/dpng/d/21-210765_cellphone-png-transparent-png.png'
        },
        {
            name: 'Batteries',
            type: 'e-waste',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3HGxJf0-87v2Cfy8JTWZ5iNPlBq2D7a3UbA&s'
        },
        {
            name: 'Laptop',
            type: 'e-waste',
            image: 'https://png.pngtree.com/png-vector/20250522/ourmid/pngtree-modern-laptop-computer-with-screen-open-technology-digital-device-png-image_16345445.png'
        },
        {
            name: 'Light Bulb',
            type: 'e-waste',
            image: 'https://e7.pngegg.com/pngimages/922/441/png-clipart-creative-bulb-lightbulb-energy-saving-lamps-thumbnail.png'
        },
        {
            name: 'Keyboard',
            type: 'e-waste',
            image: 'https://e7.pngegg.com/pngimages/32/40/png-clipart-computer-keyboard-rosewill-rk-9000v2-gaming-keypad-electrical-switches-cherry-cherry-computer-keyboard-usa-thumbnail.png'
        },
        {
            name: 'Mouse',
            type: 'e-waste',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ADDQxoQKKqGYvQS6VOw43mUulQmQ2BE2HGeSSjW4FgoW3HnHpJ6wroGUnBta0R6457Q&usqp=CAU'
        },
        {
            name: 'Printer',
            type: 'e-waste',
            image: 'https://png.pngtree.com/png-vector/20240904/ourlarge/pngtree-printer-isolated-on-transparent-background-png-image_13748291.png'
        }
    ];

    // --- 2. State Variables ---
    let score = 0;
    let attempts = 0;
    let availableItems = [];
    let currentlyDraggedItem = null;

    // --- 3. DOM Element References ---
    const bins = document.querySelectorAll('.bin');
    const itemsContainer = document.getElementById('items-container');
    const scoreDisplay = document.getElementById('score');
    const attemptsDisplay = document.getElementById('attempts');
    const feedbackDisplay = document.getElementById('feedback-message');
    const resetButton = document.getElementById('reset-btn');

    // --- 4. Game Initialization ---
    function initGame() {
        score = 0;
        attempts = 0;
        updateScoreboard();
        itemsContainer.innerHTML = '';
        availableItems = [...allWasteItems];

        for (let i = 0; i < 5; i++) {
            displayNewItem();
        }
    }

    // --- 5. Core Game Functions ---
    function updateScoreboard() {
        scoreDisplay.textContent = score;
        attemptsDisplay.textContent = attempts;
    }

    function showFeedback(message, isCorrect) {
        feedbackDisplay.textContent = message;
        feedbackDisplay.className = isCorrect ? 'correct' : 'wrong';

        setTimeout(() => {
            feedbackDisplay.textContent = '';
            feedbackDisplay.className = '';
        }, 1500);
    }

    // Creates and displays a new random item
    function displayNewItem() {
        if (availableItems.length === 0) {
            availableItems = [...allWasteItems];
        }

        const randomIndex = Math.floor(Math.random() * availableItems.length);
        const item = availableItems.splice(randomIndex, 1)[0];

        // Create the item element (the white box)
        const itemElement = document.createElement('div');
        itemElement.classList.add('waste-item');
        itemElement.draggable = true;

        // Create the image
        const itemImage = document.createElement('img');
        itemImage.src = item.image;
        itemImage.alt = item.name;
        itemImage.draggable = false;

        // Create the text label
        const itemLabel = document.createElement('span');
        itemLabel.textContent = item.name;

        // Add image and label inside the item element
        itemElement.appendChild(itemImage);
        itemElement.appendChild(itemLabel);

        // Store data on the item element (the div)
        itemElement.dataset.type = item.type;
        itemElement.dataset.name = item.name;

        // Add drag event listeners
        itemElement.addEventListener('dragstart', handleDragStart);
        itemElement.addEventListener('dragend', handleDragEnd);

        itemsContainer.appendChild(itemElement);
    }

    // --- 6. Drag and Drop Event Handlers ---
    function handleDragStart(e) {
        currentlyDraggedItem = e.target;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', currentlyDraggedItem.dataset.name);

        setTimeout(() => {
            currentlyDraggedItem.classList.add('dragging');
        }, 0);
    }

    function handleDragEnd() {
        if (currentlyDraggedItem) {
            currentlyDraggedItem.classList.remove('dragging');
        }
        currentlyDraggedItem = null;
    }

    function handleDragOver(e) {
        e.preventDefault();
        e.currentTarget.classList.add('drag-over');
    }

    function handleDragLeave(e) {
        e.currentTarget.classList.remove('drag-over');
    }

    function handleDrop(e) {
        e.preventDefault();
        e.currentTarget.classList.remove('drag-over');

        if (!currentlyDraggedItem) return;

        const itemType = currentlyDraggedItem.dataset.type;
        const binType = e.currentTarget.dataset.type;

        attempts++;

        if (itemType === binType) {
            score++;
            showFeedback('Correct!', true);
            currentlyDraggedItem.remove();
            displayNewItem(); // Add a new item
        } else {
            showFeedback('Wrong! Try again.', false);
        }

        updateScoreboard();
    }

    // --- 7. Attach Event Listeners ---
    // This loop automatically finds the new e-waste bin!
    bins.forEach(bin => {
        bin.addEventListener('dragover', handleDragOver);
        bin.addEventListener('dragleave', handleDragLeave);
        bin.addEventListener('drop', handleDrop);
    });

    resetButton.addEventListener('click', initGame);

    // --- 8. Start the Game! ---
    initGame();

});