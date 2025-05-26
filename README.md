# LinkBridge - Secure File Sharing Platform

LinkBridge is a modern web application that allows users to securely share files with others through temporary links. Built with React.js and Node.js, it provides a simple and efficient way to transfer files without requiring user registration.

## Features

- 🚀 Simple and intuitive user interface
- 🔒 Secure file sharing
- ⚡ Instant link generation
- 📱 Responsive design for all devices
- 🔄 Real-time upload progress
- 📋 One-click link copying
- 🌐 Cross-browser compatibility

## Tech Stack

### Frontend
- React.js
- React Router for navigation
- React Icons for UI elements
- CSS3 for styling
- Axios for API requests

### Backend
- Node.js
- Express.js
- MongoDB for database
- Multer for file handling
- CORS for cross-origin requests

## Prerequisites

Before running the application, make sure you have installed:
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Jayant9917/LinkBridge.git
cd LinkBridge
```

2. Install server dependencies:
```bash
cd server
npm install
```

3. Install client dependencies:
```bash
cd ../client
npm install
```

4. Create a `.env` file in the server directory with the following variables:
```
PORT=8000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
```

## Running the Application

1. Start the server:
```bash
cd server
npm start
```

2. Start the client:
```bash
cd client
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:8000

## Project Structure

```
LinkBridge/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   └── src/               # React source files
│       ├── components/    # React components
│       ├── App.js         # Main App component
│       └── index.js       # Entry point
│
├── server/                # Backend Node.js application
│   ├── controller/        # Route controllers
│   ├── database/          # Database configuration
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── uploads/          # Uploaded files
│   └── app.js            # Server entry point
│
└── README.md             # Project documentation
```

## API Endpoints

- `POST /upload` - Upload a file
- `GET /download/:filename` - Download a file
- `GET /files` - List all files

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Jayant Rana - ranajaynt527@gmail.com
contact  - 7819016236

Project Link: [https://github.com/Jayant9917/LinkBridge](https://github.com/Jayant9917/LinkBridge)

