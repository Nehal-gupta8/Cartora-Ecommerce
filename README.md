#  E-Commerce Cart System

A modern shopping cart built with React, Context API, and Clerk authentication. Features geolocation-based address auto-fill, persistent cart storage, and responsive design.

![Demo Screenshot](./screenshots/cart-demo.png) *(Replace with your actual screenshot)*

# Features

- **Cart Management**  
  ✅ Add/remove items | ✅ Adjust quantities | ✅ Real-time price calculation  
- **User Authentication**  
  🔒 Protected routes using [Clerk](https://clerk.com)  
- **Geolocation**  
  📍 Auto-fill delivery address via OpenStreetMap API  
- **Persistent Storage**  
  💾 Cart saved to `localStorage` (survives page refresh)  
- **UI/UX**  
  ✨ Toast notifications | 📱 Mobile-responsive | 🎨 Tailwind CSS  

## Tech Stack

**Frontend**  
- React 19 + Vite  
- Tailwind CSS  
- React Icons, Lottie Animations  

**State Management**  
- Context API + LocalStorage  

**APIs & Services**  
- Clerk (Authentication)  
- OpenStreetMap (Geolocation)  
- Axios (HTTP requests)  

## Quick Start

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/ecommerce-cart.git
   cd ecommerce-cart
2. Install dependencies
   bash
   npm install
3. Set up environment variables
   Create a .env file:
   env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
4. Run the development server
   bash
   npm run dev

   LIVE DEMO - https://cartora-ecommerce.vercel.app/
   
