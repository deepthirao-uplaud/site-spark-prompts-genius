
# Uplaud - Modern User Authentication Platform

A production-ready React + TypeScript web application for collecting authentic user reviews with Firebase authentication and real-time data storage.

## 🚀 Features

- **Firebase Authentication**: Secure email/password login and registration
- **Firestore Database**: Real-time user profile storage and management
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Modern UI**: Glass-morphism design with shadcn/ui components
- **Form Validation**: Real-time validation with error handling
- **Toast Notifications**: User feedback for all interactions
- **Dashboard**: Personalized user experience with profile data

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: TailwindCSS + shadcn/ui
- **Authentication**: Firebase Auth
- **Database**: Cloud Firestore
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Query + Context API
- **Deployment**: Vercel-ready

## 📋 Prerequisites

- Node.js 18+ 
- Firebase project with Auth and Firestore enabled
- Environment variables configured

## 🔧 Environment Setup

Create a `.env` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/vibhutirohan/site-spark-prompts-genius
   cd site-spark-prompts-genius
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Add your Firebase configuration

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/ui/          # shadcn/ui components
├── contexts/              # React contexts (Firebase Auth)
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities and configurations
├── pages/                 # Page components
│   ├── Home.tsx          # Landing page
│   ├── Login.tsx         # Authentication
│   ├── Register.tsx      # User registration
│   └── Dashboard.tsx     # User dashboard
└── main.tsx              # Application entry point
```

## 🔐 Firebase Configuration

1. Create a Firebase project at https://console.firebase.google.com
2. Enable Authentication with Email/Password provider
3. Enable Cloud Firestore database
4. Copy configuration to your `.env` file

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on every push

### Manual Deployment

```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 📋 User Flow

1. **Landing Page**: Welcome screen with brand introduction
2. **Registration**: New users create accounts with full name, email, WhatsApp number
3. **Login**: Secure authentication with Firebase
4. **Dashboard**: Personalized experience with user data from Firestore

## 🛡 Security Features

- Firebase Authentication with secure token management
- Input validation and sanitization
- Error boundary implementation
- Secure environment variable handling

## 🎨 Design System

- **Colors**: Purple gradient theme with teal accents
- **Typography**: Inter font family
- **Layout**: Glass-morphism cards with backdrop blur
- **Responsive**: Mobile-first responsive design
- **Animations**: Subtle fade and scale transitions

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Demo**: [Your Vercel URL]
- **GitHub**: https://github.com/vibhutirohan/site-spark-prompts-genius
- **Firebase Console**: https://console.firebase.google.com

## 📞 Support

For support, email [your-email] or join our Discord community.

---

Built with ❤️ using React, TypeScript, and Firebase
