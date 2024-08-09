document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const searchInput = document.getElementById('search-input');
    const homeLink = document.getElementById('home-link');
    const categoriesLink = document.getElementById('categories-link');
    const historyLink = document.getElementById('history-link');
    const profileLink = document.getElementById('profile-link');

    const books = [
        { title: 'Harry Potter: Half Blood Prince', author: 'J.K. Rowling', description: 'Join Harry as he embarks on a thrilling adventure in his sixth year at Hogwarts.', cover: 'harry-potter.jpg' },
        { title: 'The Hobbit', author: 'J.R.R. Tolkien', description: 'Bilbo Baggins goes on an unexpected journey in this classic fantasy tale.', cover: 'hobbie.jpeg' },
        { title: 'Book Lovers', author: 'Emily Henry', description: 'Nora Stephens’ life is books—she’s read them all—and she is not that type of heroine. Not the plucky one, not the laidback dream girl, and especially not the sweetheart. In fact, the only people Nora is a heroine for are her clients, for whom she lands enormous deals as a cutthroat literary agent, and her beloved little sister Libby.', cover:'booklovers.jpg' },
    ];

    const renderBooks = (booksToRender) => {
        content.innerHTML = '';
        booksToRender.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.classList.add('book-details');
            bookElement.innerHTML = `
                <div class="book-cover">
                    <img src="harrypotter.png" alt="${book.title}">
                  
                </div>
                <div class="book-info">
                    <h1>${book.title}</h1>
                    <p>${book.author}</p>
                    <p>${book.description}</p>
                    <button>Read Now</button>
                </div>
            `;
            content.appendChild(bookElement);
        });
    };





    
    const searchBooks = (query) => {
        const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
        renderBooks(filteredBooks);
    };

    searchInput.addEventListener('input', (e) => {
        searchBooks(e.target.value);
    });

    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        renderBooks(books);
    });

    categoriesLink.addEventListener('click', (e) => {
        e.preventDefault();
        content.innerHTML = '<h2>Categories</h2><p>Here you can manage book categories.</p>';
    });

    historyLink.addEventListener('click', (e) => {
        e.preventDefault();
        content.innerHTML = '<h2>Borrowing History</h2><p>Here you can view your borrowing history.</p>';
    });

    profileLink.addEventListener('click', (e) => {
        e.preventDefault();
        content.innerHTML = '<h2>Profile</h2><p>Here you can manage your profile.</p>';
    });

    // Initially render all books
    renderBooks(books);
});
