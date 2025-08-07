# KidsPlay LMS - Server

A Node.js/Express.js backend server for the KidsPlay Learning Management System (LMS). This server provides API endpoints and handles the core functionality for the educational platform.

## 🚀 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB (via Mongoose)
- **Cache**: Redis (via ioredis)
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Development**: Nodemon, tsx

## 📦 Installation

1. Clone the repository and navigate to the server directory:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the server directory with the following variables:
   ```env
   PORT=3000
   # Add your MongoDB connection string, JWT secret, Redis URL, etc.
   ```

## 🏃‍♂️ Running the Application

### Development Mode

```bash
npm run dev
```

This starts the server with nodemon for automatic restarts on file changes.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
server/
├── src/
│   ├── app.ts          # Express app configuration
│   ├── server.ts       # Server entry point
│   ├── config/
│   │   └── index.ts    # Environment configuration
│   └── app/            # Application modules (controllers, models, etc.)
├── dist/               # Compiled JavaScript files
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── nodemon.json        # Nodemon configuration
└── README.md           # This file
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reloading
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start production server

## 🛠️ Dependencies

### Production Dependencies

- **express** - Web framework
- **mongoose** - MongoDB object modeling
- **ioredis** - Redis client
- **jsonwebtoken** - JWT implementation
- **bcryptjs** - Password hashing
- **cors** - Cross-origin resource sharing
- **cookie-parser** - Cookie parsing middleware
- **dotenv** - Environment variables

### Development Dependencies

- **typescript** - TypeScript language
- **nodemon** - Development server with auto-restart
- **tsx** - TypeScript execution
- **@types/** - TypeScript type definitions

## 🔗 API Endpoints

The server provides a health check endpoint:

- `GET /` - Returns server health status

Additional API endpoints will be documented as the application grows.

## 🌱 Development

This project uses TypeScript for type safety and better development experience. The development setup includes:

- Hot reloading with nodemon
- TypeScript compilation
- Environment variable loading
- CORS configuration for frontend integration

## 📄 License

This project is part of the KidsPlay LMS educational platform.

---

For questions or support, please refer to the main project documentation.
