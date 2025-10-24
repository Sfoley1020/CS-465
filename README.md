# CS-465
CS-465 Full Sttack Development with MEAN
## GitHub Repository
https://github.com/Sfoley1020/CS-465

## Architecture

This project includes both a server-rendered Express site and a client-side Angular Single Page Application (SPA).

- The **customer-facing site** uses **Express, Handlebars, and JavaScript** to render dynamic pages from the backend.
- The **admin site** is built using **Angular**, which renders content directly in the browser using reusable components and services.

The backend uses a **NoSQL MongoDB** database because it stores data as flexible JSON-like documents. 
This allows for scalability and easier modification without needing to redesign a fixed table schema like in SQL databases.

## Functionality

**JSON vs JavaScript:** JSON (JavaScript Object Notation) is a data format, not code. 
It provides the connection between the frontend and backend by transmitting data from the MongoDB database through the Express API to Angular services and components.

**Refactoring and Reusability:**  
Throughout the project, I refactored the code to improve clarity and performance, including:
- Moving repetitive HTML sections into Handlebars partials (header and footer).
- Building Angular components such as `trip-card`, `trip-listing`, `add-trip`, and `edit-trip`.
- Centralizing API calls in a single service (`trip-data.service`).

These reusable components made updates easier and kept the user interface consistent across the application.

## Testing

API endpoints were tested using **Postman**:
- **GET** – Retrieve all trips or a single trip  
- **POST** – Add a new trip  
- **PUT** – Update existing trip information  

Once security was implemented, I confirmed that the endpoints required a valid JWT token for access.  
In Angular, I tested form submissions and verified database updates in **MongoDB Compass** to ensure data flowed correctly between the frontend and backend.

## Reflection

This course helped me develop full-stack development skills using the **MEAN stack (MongoDB, Express, Angular, Node.js)**.  
I learned how to:
- Build and connect a frontend and backend through RESTful APIs.
- Secure routes using JWT authentication.
- Manage a project through GitHub with commits, branches, and merges.
- Test and debug using tools like Postman and MongoDB Compass.

Working through each module improved my understanding of how the different parts of a web application communicate. 
I now feel more confident about taking on professional projects that involve both backend logic and frontend user experience.
