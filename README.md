# Web Shop with React (Prop Drilling Approach)

This project is a web-based shop application built using React. It allows users to browse products, add them to a shopping cart, and manage item quantities. The app is designed with a modern, clean interface using Tailwind CSS for styling and follows React's best practices for state management and component structure.:

🚀 Features
* Product Listing: Browse a variety of products displayed in a responsive grid layout.
* Shopping Cart: Add items to the shopping cart, increase/decrease quantities, and remove items if needed.
* Dynamic Cart Updates: The total number of items in the cart dynamically updates as you add or modify items.
* Modal Integration: The cart is displayed in a modal that opens when the "Cart" button is clicked.
* Prop Drilling for State Management: The project uses prop drilling to manage state across components, ensuring proper data flow without the need for complex state management libraries.
* Fully Functional and Styled: The app is designed with a polished, professional look, leveraging Tailwind CSS for smooth transitions, hover effects, and responsive design.

🛠️  Technologies Used
* React: For building the user interface and managing component-based state.
* Tailwind CSS: For styling and making the UI clean, responsive, and elegant.
* JavaScript: For handling business logic and state updates.
* HTML5: For structuring the content of the app.

📁 Project Structure
- App Component: Manages the global state (shopping cart) and serves as the root of the application.
- Header Component: Displays the app’s title and the cart button, along with the total number of items in the cart.
- Shop Component: Renders a list of products that users can add to their cart.
- Product Component: Each individual product card displays product details and the "Add to Cart" button.
- CartModal Component: A modal that shows the shopping cart’s contents with buttons to update item quantities.
- Cart Component: Displays all items in the cart, including their quantity, and allows users to increase or decrease the quantity.

🚧 Future Improvements
* Global State Management: Implementing a context API or Redux to handle state across components more efficiently.
* Additional Features: Add functionality for a product checkout process and user authentication.
* Improved UI: Add animations for modal transitions and more advanced product filters.
