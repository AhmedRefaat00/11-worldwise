# Worldwise

## Description

Worldwise is a React application designed to provide information about cities and countries. It includes features such as user authentication, protected routes, and a variety of pages including a homepage, product page, pricing page, login page, and more. The application uses `react-router-dom` for routing and context providers for state management.

## Features

- User authentication
- Protected routes
- Dynamic routing
- Context API for state management
- Integration with `json-server` for mock backend
- Responsive design

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/worldwise.git
   cd worldwise
   ```

2. **Install the dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```

4. **Start the mock backend server:**
   ```sh
   npm run server
   ```


### Main Dependencies

- `react`
- `react-dom`
- `react-router-dom`
- `json-server`
- `leaflet`
- `react-leaflet`
- `react-datepicker`

### Development Dependencies

- `@types/react`
- `@types/react-dom`
- `@vitejs/plugin-react`
- `eslint`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `vite`

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the development server using Vite.
- `npm run build`: Builds the app for production.
- `npm run lint`: Lints the project files.
- `npm run preview`: Previews the production build.
- `npm run server`: Starts the mock backend server using `json-server`.

## Context Providers

### AuthProvider

This context provides authentication state and actions to the application.

### CitiesProvider

This context provides state and actions related to cities data.

## ProtectedRoute Component

This component ensures that only authenticated users can access certain routes. If a user is not authenticated, they are redirected to the login page.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

1. **Fork the repository**
2. **Create your feature branch (`git checkout -b feature/your-feature`)**
3. **Commit your changes (`git commit -m 'Add some feature'`)**
4. **Push to the branch (`git push origin feature/your-feature`)**
5. **Open a pull request**

## Acknowledgements

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)
- [Babel](https://babeljs.io/)
- [Leaflet](https://leafletjs.com/)
- [json-server](https://github.com/typicode/json-server)

