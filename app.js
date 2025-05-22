const books = [
  {
    title: "The Lost Village",
    author: "Your Name",
    price: "UGX 15,000",
    cover: "https://via.placeholder.com/200x300?text=Book+1",
    link: "https://flutterwave.com/pay/thelostvillage"  // Replace with your real Flutterwave link
  },
  {
    title: "Mystery in the Forest",
    author: "Your Name",
    price: "UGX 12,000",
    cover: "https://via.placeholder.com/200x300?text=Book+2",
    link: "https://flutterwave.com/pay/mysteryforest" // Replace with your link
  }
];

const bookList = document.getElementById("book-list");

books.forEach(book => {
  const div = document.createElement("div");
  div.className = "book";
  div.innerHTML = `
    <img src="${book.cover}" alt="${book.title}">
    <h2>${book.title}</h2>
    <p><strong>Author:</strong> ${book.author}</p>
    <p><strong>Price:</strong> ${book.price}</p>
    <a href="${book.link}" class="buy-btn" target="_blank">Buy Now</a>
  `;
  bookList.appendChild(div);
});
