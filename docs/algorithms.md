# Algorithms and Data Structures Enhancement

**Artifact:** Travlr Getaways – server-side trip management and validation for trip data
**Original course:** CS-465 Full Stack Development with MEAN  
**Capstone branch:** `capstone-module-4`  
[View the original code on GitHub](https://github.com/Sfoley1020/CS-465/tree/capstone-main)

[View the enhanced code on GitHub](https://github.com/Sfoley1020/CS-465/tree/capstone-module-4)

The artifact I selected for Enhancement Two: Algorithms and Data Handling is the server-side trip management portion of my Travlr Getaways full-stack application, originally created in CS-465. This artifact includes the API logic responsible for adding, validating, and updating trip data stored in MongoDB. The original implementation performed minimal data checking and relied on repeated inline validation throughout the controller functions. This made the logic harder to maintain and increased the risk of inconsistent or incorrect data entering the system.

For Milestone Three, I enhanced this artifact by implementing a centralized validation algorithm, creating a shared error-handling module, and improving the data-flow structure inside the trip controller functions (tripsAddTrip and tripsUpdateTrip). These improvements directly support the goals of the Algorithms and Data Handling category by strengthening how the application processes, validates, and protects incoming data.

I chose this artifact for my ePortfolio because it demonstrates my ability to apply algorithmic reasoning to improve the reliability and structure of a real application. The enhancements required me to design reusable logic, identify inefficiencies, fix structural weaknesses in the data-handling flow, and implement a much more consistent approach to validating incoming input.

This artifact highlights several important skills:

•	Designing and implementing a modular validation algorithm
•	Applying decision logic to enforce consistent business rules
•	Creating a shared error-handling structure for predictable API behavior
•	Strengthening data integrity across all API operations
•	Reducing redundancy and improving maintainability
•	Ensuring validated data is displayed correctly in the Angular UI

To begin the enhancement, I created a new file, validators.js, which includes the reusable function validateTripInput(data). This algorithm:

•	Validates trip codes
•	Ensures all required fields are present
•	Confirms that numerical values (such as length and perPerson) are positive
•	Checks formatting for dates, descriptions, and image names
•	Aggregates all validation issues into a single array

This change replaces multiple scattered checks with one centralized and structured set of rules. When designing this validator, I considered other options such as relying only on Mongoose schema validation or adding separate Express middleware for each route. I chose a centralized validation function because it keeps all the business rules in one place, makes it easier to update them as requirements change, and allows the same logic to be reused across multiple endpoints. For the size and scope of this project, that tradeoff made more sense than spreading validation logic across several layers, and it gave me clearer control over exactly how each rule is applied.

Next, I created errorHandler.js to standardize both validation and runtime errors. This ensures that all validation errors follow the same format, API responses appear professional and predictable, and controllers remain focused on business logic instead of error formatting. Having a single, predictable error structure also helps with debugging and security because logs are easier to read, and the API no longer exposes raw stack traces or low-level database errors to the client.

I then updated the tripsAddTrip and tripsUpdateTrip controller functions to follow a consistent algorithmic pattern:

1.	Run the centralized validation
2.	Return any issues through the error handler
3.	Stop processing if the input is invalid
4.	Only save data if all conditions are met

These updates improved both the reliability and readability of the system.
After implementing the enhancements, I thoroughly tested my work using Postman. I verified:

•	Successful POST and PUT operations
•	Proper handling of missing-field errors
•	Correct rejection of invalid or negative numerical values
•	Behavior when incorrect data structures were submitted
•	Enforced JWT authentication for protected routes

These tests confirmed that both the validation algorithm and error-handling logic behaved as expected.  Because these routes are behind JWT-based authentication, the validator also serves as an additional defense layer against malformed or potentially malicious inputs. It prevents bad data from reaching the database and supports the program outcome focused on developing a security mindset. While testing the enhanced data flow, I also corrected a formatting issue in trip-card.html so that validated data (such as trip length and price) appeared consistently with the rest of the application. This was necessary because the validator guarantees clean input, and the UI should accurately reflect that structure.

This enhancement fully satisfies the Module One outcome I targeted:
“Design and evaluate computing solutions using algorithmic principles and computer science practices.”

By implementing a reusable algorithm for validation and reorganizing the controller logic to follow consistent rules, I demonstrated my ability to solve problems algorithmically and produce clean, maintainable backend architecture.

One challenge I faced was ensuring that refactoring the backend did not break existing functionality. I had to test several combinations of valid and invalid inputs to make sure the algorithm behaved correctly. Another challenge was identifying why a newly added trip card displayed incorrectly in Angular. This required debugging both the data and the UI formatting, which helped me better understand the relationship between backend validation and frontend rendering.

Overall, this enhancement strengthened my understanding of how algorithm design, validation logic, and structured data handling all work together to produce cleaner and more reliable software. It also reinforced my ability to think critically about system behavior and to design solutions that scale as business rules change. Working with centralized validation, standardized error handling, and authenticated routes gave me practical experience with patterns I will need in professional backend development, especially in environments where reliability, security, and clear communication with teammates are all important.


[← Back to Portfolio Home](index.html)
