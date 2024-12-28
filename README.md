# Blog Project

- Live Site: [Blog-project](https://blog-project-drab-one.vercel.app/)

###   
## API Endpoints
### 1. Authentication
#### 1.1 Register User
- ***Description***: Registers a new user with the platform.
- ***Api***:
```bash
https://blog-project-drab-one.vercel.app/api/auth/register
```
- ***Method***: POST
- ***Request Body***:
```json
{
    "name": "HM Masum",
    "email": "masum@gmail.com",
    "password": "securepassword"
}
```

####   
#### 1.2 Login User
- ***Description***:  Authenticates a user with their email and password and generates a JWT token.
- ***Api***:
```bash
https://blog-project-drab-one.vercel.app/api/auth/login
```
- ***Method***: POST
- ***Request Body:***
```json
{
    "email": "masum@gmail.com",
    "password": "securepassword"
}
```

###    
### 2. Blog Management
#### 2.1 Create Blog
- ***Description***: Allows a logged-in user to create a blog by providing a title and content.
- ***Api***:
```bash
https://blog-project-drab-one.vercel.app/api/blogs
```
- ***Method***: POST
- ***Request Header:*** Authorization: Bearer < token >
- ***Request Body***:
```json
{
  "title": "My First Blog",
  "content": "This is the content of my blog."
}
```

####   
#### 2.2 Update Blog
- ***Description***: Allows a logged-in user to update their own blog by its ID.
- ***Api***:
```bash
https://blog-project-drab-one.vercel.app/api/blogs/:id
```
- ***Method***: PATCH
- ***Request Header:*** Authorization: Bearer < token >
- ***Request Body***:
```json
{
  "title": "Updated Blog Title",
  "content": "Updated content."
}
```

####   
#### 2.3 Delete Blog
- ***Description***: Allows a logged-in user to delete their own blog by its ID.
- ***Api***:
```bash
https://blog-project-drab-one.vercel.app/api/blogs/:id
```
- ***Method***: DELETE
- ***Request Header:*** Authorization: Bearer < token >

####   
#### 2.4 Get All Blogs (Public)
- ***Description***: Provides a public API to fetch all blogs with options for searching, sorting, and filtering.
- ***Api***:
```bash
https://blog-project-drab-one.vercel.app/api/blogs?search=technology&sortBy=createdAt&sortOrder=desc&filter=60b8f42f9c2a3c9b7cbd4f18
```
- ***Method***: GET
- ***Query Parameters*** :
*   `search`: Search blogs by title or content (e.g., `search=blogtitle`).
*   `sortBy`: Sort blogs by specific fields such as `createdAt` or `title` (e.g., `sortBy=title`).
*   `sortOrder`: Defines the sorting order. Accepts values `asc` (ascending) or `desc` (descending). (e.g., `sortOrder=desc`).
*   `filter`: Filter blogs by author ID (e.g., `filter=authorId`).


###   
### 3. Admin Actions
#### 3.1 Block User
- ***Description***: Allows an admin to block a user by updating the `isBlocked` property to `true`.
- ***Api***:
```bash
https://blog-project-drab-one.vercel.app/api/admin/users/:userId/block
```
- ***Method***: PATCH
- ***Request Header:*** Authorization: Bearer <admin_token>

####   
#### 3.2 Delete Blog
- ***Description***: Allows an admin to delete any blog by its ID.
- ***Api***:
```bash
https://blog-project-drab-one.vercel.app/api/admin/blogs/:id
```
- ***Method***: DELETE
- ***Request Header:*** Authorization: Bearer <admin_token>
###       



## Error Handling:
*   **Zod Validation Error** (`ZOD_ERROR`)
*   **Not Found Error** (`NOT_FOUND_ERROR`) 
*   **Validation Error** (`VALIDATION_ERROR`)
*   **Authentication Error** (`AUTH_ERROR`)
*   **Authorization Error** (`AUTHORIZATION_ERROR`)
*   **Internal Server Error** (`INTERNAL_SERVER_ERROR`)


## Models:
### Blog Model  
- **Fields**:  
*   `title`: string – The title of the blog post.
*   `content`: string – The main body or content of the blog post.
*   `author`: ObjectId – A reference to the `User` model.
*   `isPublished`: boolean – Checking the blog post is published. Default is true .
*   `createdAt`: Date – The timestamp when the blog post was created.
*   `updatedAt`: Date – The timestamp of the last update to the blog post.


### User Model  
- **Fields**:  
*   `name`: string – The name of the user.
*   `email`: string – The email address of the user.
*   `password`: string – The password for the user, securely stored.
*   `role`: "admin" | "user" – The role of the user Default is "user".
*   `isBlocked`: boolean – Checking the user is blocked or not. Default is false.
*   `createdAt`: Date – The timestamp when the user was created.
*   `updatedAt`: Date – The timestamp of the last update to the user.


## Technology I have used:
- **npm**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **TypeScript**
- **dotenv**
- **cors**
- **bcrypt**
- **jsonwebtoken**
- **nodemon**
- **zod**
- **http-status**
- **cookie-parser**
