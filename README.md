# Google Books Search Engine

## Description

The Google Books Search Engine is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to search for books via the Google Books API and save their favorite selections to a personal account. The app leverages GraphQL with Apollo Server to enable efficient data queries and mutations and includes user authentication using JSON Web Tokens (JWT) to protect user data and restrict access to saved books.

This project demonstrates modern web development practices, including the integration of GraphQL, secure token-based authentication, and the use of React hooks for state management.

## Table of Contents

- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Contributions](#how-to-contribute)
- [Tests](#tests)

## Usage

The application allows users to search for and save books. Below are the steps to use the app:

1. **Visit the Application**:
   - Navigate to the deployed application using the provided link.
2. **Search for Books**:
   - Enter a search term (e.g., "JavaScript") in the search bar to fetch results from the Google Books API.
   - View the book details, including the title, author, description, and a link to Google Books.
3. **Login or Signup**:
   - Click the "Login/Signup" button to create an account or log in using an existing account.
4. **Save Books**:
   - Once logged in, click the "Save" button under any book to add it to your personal collection.
5. **View Saved Books**:
   - Navigate to the "Saved Books" page to view all books saved to your account.
   - Remove books from your collection by clicking the "Remove" button.
6. **Logout**:
   - Click the "Logout" button to end your session. This removes the JWT from local storage.

## Credits

- **Developer**: Vuong Luu
- **GitHub Repository**: https://github.com/vluu11/Bibliopedia/blob/main/client/src/pages/SearchBooks.tsx
- **Deployment**: https://bibliopedia.onrender.com

## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Badges

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Features

- **GraphQL Integration**: Uses Apollo Server to replace RESTful API endpoints, enabling efficient queries and mutations.
- **Google Books API Integration**: Allows users to search for books and retrieve detailed book data.
- **User Authentication**: Secure login using JWT for user authentication and authorization.
- **Saved Books Management**: Logged-in users can save books to their profile and remove them later.
- **Responsive Design**: Fully responsive user interface, optimized for desktop and mobile devices.

## How to Contribute

Contributions are welcome! Follow the steps below to contribute to the project:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Open a pull request, detailing your changes and their purpose.

Suggestions for new features, UI/UX improvements, or bug fixes are highly encouraged.

## Tests

No automated tests are currently provided. However, the following features can be manually tested:
1. User authentication:
   - Test logging in with valid and invalid credentials.
   - Verify that unauthorized users cannot save or view books.
2. Book search functionality:
   - Search for books using various keywords and validate the results.
3. Saved books management:
   - Save books to your account and ensure they appear on the "Saved Books" page.
   - Remove books from your collection and verify that they are deleted.
4. Session handling:
   - Log out and verify that protected routes are inaccessible without re-authenticating. 

For questions or feedback, feel free to open an issue in the repository.
