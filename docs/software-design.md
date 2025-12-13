# Software Design and Engineering Enhancement

**Artifact:** Travlr Getaways – customer-facing Travel page and Express route/controller  
**Original course:** CS-465 Full Stack Development with MEAN  
**Capstone branch:** `capstone-module-3`  
[View the original code on GitHub](https://github.com/Sfoley1020/CS-465/tree/capstone-main)
[View the enhanced code on GitHub](https://github.com/Sfoley1020/CS-465/tree/capstone-module-3)

The artifact I selected for my software design and engineering enhancement is part of my Travlr Getaways full-stack web application, originally created in CS-465. This application includes an Angular-based admin dashboard, a customer-facing Express site, and a MongoDB database.

The specific portion of the artifact enhanced for this milestone is the Travel page on the customer-facing site (`localhost:3000/travel`), along with its supporting Express route and controller logic. This page originally displayed only static HTML that did not reflect the live trip data stored in MongoDB. At the same time, the admin site (`localhost:4200`) already consumed dynamic, real-time data from the REST API.

This enhancement focuses solely on the Travel tab because it is the part of the customer site designed to display trip information and is directly tied to the same trip data used by the admin dashboard.

I selected this artifact because it demonstrates my strongest skills in full-stack software engineering, including routing, API integration, component-based UI design, and backend architecture. It highlights my ability to work across the MEAN stack and transform a partially static prototype into a unified, dynamic, data-driven application.

Key software engineering principles demonstrated include:

- Separation of concerns through well-organized Angular components and Express controllers  
- Centralized data access in the Angular service for maintainability  
- REST API integration across two different front ends  
- MVC architecture with Express routes, controllers, and Handlebars views  
- Security-aware development, including JWT usage on the admin side  

The enhancement improved the artifact by replacing the static Travel page with a dynamic Handlebars view that retrieves live trip data from the REST API. This ensures data consistency across the entire system and removes outdated static pages.

Importantly, only the Travel page was intended to be dynamic, as this is the only customer-facing page that displays trip information. Other pages in the template remain static, which aligns with the original CS-465 design requirements.

After connecting the Travel page to the REST API, I did basic testing to verify that everything worked correctly. I checked the API endpoints directly in the browser to make sure they were returning the expected JSON data and then confirmed that each trip field (such as name, destination, and price) appeared correctly in the Handlebars template. I also tested simple edge cases, such as an empty trip list or missing fields, to see how the page behaved. This gave me confidence that the new controller logic could handle unexpected data safely and that I had not broken the customer site while changing how the data was loaded.

This enhancement directly supports the CS program outcome: “Demonstrate an ability to use well-founded and innovative techniques, skills, and tools in computing practices to implement computer solutions that add value and accomplish industry-specific goals.”

By unifying the admin and customer systems around a single API, I strengthened the architecture and improved maintainability. I also met my planned Milestone One outcome of enhancing software design and engineering through meaningful refactoring and the removal of redundant static content.

Through this enhancement, I learned how to refactor a legacy static route into a dynamic, API-driven page without disrupting the rest of the customer site. One challenge was discovering that a static `travel.html` file inside the public directory was overriding my dynamic Express route. Renaming or removing the static file allowed Express to correctly render the dynamic Handlebars template.

Another challenge involved ensuring the Express controller used the same data format expected by the Angular admin site. This required reviewing and aligning the API response structure so that both front ends consumed consistent data.

After completing this software design enhancement, the next planned steps for this same artifact in my capstone were to focus on the backend algorithms and the database layer. In later milestones, I built on this foundation by centralizing input validation and error handling in the trips controller and by tightening the Mongoose schema and database configuration. Seeing how the front-end design, controller logic, and data model all connect helped me think about the application as one system instead of separate pieces. Explaining how these related changes fit together in my code review video and written documentation connects this work to the program outcomes around communication and collaboration, because I had to present my decisions in a way that future teammates or a manager could easily follow.

Overall, this enhancement strengthened my understanding of full-stack architecture, template rendering, and REST API integration. The result is a more scalable and maintainable system where the Travel page presents accurate, live data that matches the admin interface.

This milestone significantly improves the design and functionality of the Travlr Getaways application. By enhancing the Travel page on the customer-facing site to consume live API data, I unified data flow across the application, reduced redundancy, and modernized the system’s architecture. This enhanced artifact will serve as a strong representation of my software engineering capabilities in my final ePortfolio.


[← Back to Portfolio Home](index.html)
