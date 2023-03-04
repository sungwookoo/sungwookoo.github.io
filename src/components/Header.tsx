import Link from 'next/link';
import { Search, ShoppingBag } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-black/90 backdrop-blur-md fixed w-full z-50">
      <nav className="container flex items-center justify-between h-16">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-white text-2xl font-bold">
            SW
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/projects" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link 
              href="/about" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <button className="text-gray-300 hover:text-white transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button className="text-gray-300 hover:text-white transition-colors">
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </header>
  );
} 