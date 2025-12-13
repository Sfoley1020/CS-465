# Databases Enhancement

**Artifact:** Travlr Getaways – backend database layer (Trip model, User model, and validation logic)
**Original course:** CS-465 Full Stack Development with MEAN  
**Capstone branch:** `capstone-module-5`  
[View the original code on GitHub](https://github.com/Sfoley1020/CS-465/tree/capstone-main)

[View the enhanced code on GitHub](https://github.com/Sfoley1020/CS-465/tree/capstone-module-5)

The artifact I selected for my database enhancement is the Travlr Getaways full-stack travel management application, originally created in CS-465. It uses a MEAN architecture that includes MongoDB, Express.js, Angular, and Node.js. Within this project, the database component manages all trip data, user records, and authentication details. For Milestone Four, I enhanced the backend database layer, focusing on the Trip model, user model, and API validation logic. These enhancements were completed in November 2025 as part of my CS-499 Capstone.

I selected this artifact because it is the strongest evidence of my abilities working with databases, backend development, API integrity, and secure data handling. This artifact showcases my skills in:

-	Designing and modifying Mongoose database schemas
-	Implementing robust validation rules at the database layer
-	Creating secure CRUD operations that protect data integrity
-	Using JSON Web Tokens (JWT) for authenticated interactions
-	Enforcing role-based access control (admin-only database operations)
-	Centralizing validation logic using shared algorithms
-	Debugging and resolving schema mismatches and missing fields

The enhancements significantly improved the quality of the backend database layer. The system now prevents malformed or incomplete data from being written to MongoDB. In addition, only authenticated admin users can modify or delete database records, which adds a critical security layer that the original version did not include. These improvements demonstrate my ability to design and refine real-world backend systems that align with industry standards.

To verify that these enhancements worked as intended, I tested the updated validation rules and role-based access control using tools like Postman and the Angular admin interface. I submitted both valid and invalid trip data to confirm that the database rejected incomplete records, such as missing length or perPerson values, and returned clear error messages. I also tested the login and JWT flow to ensure that only users with a valid admin token could create, update, or delete trips, while non-admin or unauthenticated users received proper 401 or 403 responses. These tests helped confirm that the new schema rules, centralized validation, and authorization checks worked together to protect the database from bad data and unauthorized changes.

This artifact belongs in my ePortfolio because it highlights not only my technical proficiency, but also my ability to analyze an existing codebase, identify problems, and implement solutions that increase both reliability and security.

In the module two, I planned to align this enhancement with the following outcome: “Demonstrate an ability to use well-founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry-specific goals (software engineering/design/database).”

I fully met this outcome. My enhancements also contributed to two additional program outcomes:

-	**Develop a security mindset:**
I integrated role-based authorization and JWT authentication, preventing unauthorized access and strengthening backend security.
-	**Design and evaluate computing solutions using algorithmic principles:**
By creating a shared validation algorithm in validators.js, I improved both consistency and maintainability across multiple API endpoints.

No changes to my outcome-coverage plan are needed.

Enhancing the database layer taught me how critical backend validation is for any application that writes to persistent storage. Prior to these enhancements, the system allowed inconsistent trip data such as blank length fields to enter MongoDB. Through this milestone, I learned how to properly design Mongoose schemas with detailed validation rules and how to enforce additional constraints using centralized validation logic.

I also learned how backend security interacts with database systems. Implementing the admin-only JWT guard required updating the User model, modifying the login system, and creating middleware that verifies tokens and checks the admin field in the database document. This gave me practical experience with access control and secure API design.

A key challenge was resolving mismatches between the old Angular form data and the updated backend validation rules. For example, some forms were still sending empty strings for fields that are now required in the schema, which triggered validation errors until I updated the form bindings and default values. I also ran into errors when the front end did not include new fields added to the Trip model, which caused Mongoose to reject the request. I had to trace errors through the controllers, services, and schema to ensure that the updated validation logic did not break existing functionality. This debugging process strengthened my ability to understand large, interconnected systems and to use specific error messages as clues to where the data and schema were out of sync.

Overall, this enhancement significantly improved my skills in backend development, secure data handling, database schema design, and professional debugging practices. It fits strongly within the Databases category and meaningfully elevates the Travlr Getaways application.

[← Back to Portfolio Home](index.html)
