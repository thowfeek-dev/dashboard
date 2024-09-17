```markdown
# Dashboard Project

This project is a simple dashboard application built with a TypeScript backend using Express and a Next.js frontend. It includes user registration, login, role management, and basic arithmetic calculations. 

## Features

- **Registration**: Users can sign up with a username, email, and password.
- **Login**: Users can log in to access protected pages.
- **Calculation Page**: Perform basic arithmetic operations (addition, subtraction, multiplication, division).
- **Registered Users Page**: Admin users can view a list of all registered users.
- **Role Assignment Page**: Admin users can assign roles to registered users (admin or member).
- **Role-Based Access**: Only admin users can access the Registered Users and Role Assignment pages.

## Tech Stack

- **Frontend**: Next.js, React, Axios
- **Backend**: TypeScript, Express, MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/thowfeek-dev/dashboard.git
   cd dashboard
   ```

2. **Set up the backend**:

   - **Navigate to the backend directory**:
     ```bash
     cd server
     ```

   - **Install dependencies**:
     ```bash
     npm install
     ```

   - **Set environment variables**: Create a `.env` file in the `server` directory with the following content:
     ```env
     JWT_SECRET=your_jwt_secret
     MONGO_URI=your_mongodb_uri
     ```

   - **Start the server**:
     ```bash
     npx tsc --watch
     node dist/server.js
     ```

3. **Set up the frontend**:

   - **Navigate to the frontend directory**:
     ```bash
     cd ../frontend
     ```

   - **Install dependencies**:
     ```bash
     npm install
     ```

   - **Start the development server**:
     ```bash
     npm run dev
     ```

4. **Open your browser** and go to `http://localhost:3000` to access the dashboard.

## API Endpoints

- **POST /api/register**: Register a new user.
- **POST /api/login**: Log in a user.
- **GET /api/users**: Get the list of registered users (Admin only).
- **POST /api/role/assign-role**: Assign a role to a user (Admin only).

## Role-Based Access

- **Admins**: Can access `/users` and `/assign-role` pages.
- **Members**: Cannot access `/users` and `/assign-role` pages.

## Testing

1. **Registration**: Navigate to `http://localhost:3000/register` and register a new user.
2. **Login**: Navigate to `http://localhost:3000/login` and log in.
3. **Calculation**: Navigate to `http://localhost:3000/calculation` and perform arithmetic calculations.
4. **Admin Pages**:
   - **Assign admin role**: Use the backend API to assign the admin role to a user.
   - **Access protected pages**: Log in with admin credentials and visit `http://localhost:3000/users` and `http://localhost:3000/assign-role`.

## Contributing

1. **Fork the repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature/your-feature
   ```
3. **Make your changes**.
4. **Commit your changes**:
   ```bash
   git commit -m "Add feature"
   ```
5. **Push to the branch**:
   ```bash
   git push origin feature/your-feature
   ```
6. **Open a Pull Request**.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Next.js for the frontend framework.
- Express for the backend framework.
- MongoDB for the database.
- JWT for authentication.

---

For any issues or questions, please open an issue on the [GitHub repository](https://github.com/thowfeek-dev/dashboard).
```