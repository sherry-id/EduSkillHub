import { Link, useLocation } from "react-router";
import { GraduationCap, Star } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';
  
  if (isDashboard) return null;

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100" style={{ height: '80px' }}>
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative">
            <GraduationCap className="w-8 h-8 text-[#4F8CC9]" />
            <Star className="w-4 h-4 text-[#A68FE3] absolute -top-1 -right-1" fill="#A68FE3" />
          </div>
          <span className="text-xl" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#4F8CC9' }}>
            EduSkill Hub
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`transition-colors ${location.pathname === '/' ? 'text-[#4F8CC9]' : 'text-gray-600 hover:text-[#4F8CC9]'}`}
          >
            Beranda
          </Link>
          <Link 
            to="/jelajahi-jasa" 
            className={`transition-colors ${location.pathname === '/jelajahi-jasa' ? 'text-[#4F8CC9]' : 'text-gray-600 hover:text-[#4F8CC9]'}`}
          >
            Jelajahi Jasa
          </Link>
          <Link 
            to="/jelajahi-jasa" 
            className="text-gray-600 hover:text-[#4F8CC9] transition-colors"
          >
            Daftar Freelancer
          </Link>
          <Link 
            to="/" 
            className="text-gray-600 hover:text-[#4F8CC9] transition-colors"
          >
            Tentang Kami
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/auth">
            <Button 
              variant="outline" 
              className="rounded-full border-[#4F8CC9] text-[#4F8CC9] hover:bg-[#4F8CC9] hover:text-white"
            >
              Masuk
            </Button>
          </Link>
          <Link to="/auth">
            <Button 
              className="rounded-full text-white"
              style={{ background: 'linear-gradient(135deg, #4F8CC9 0%, #A68FE3 100%)' }}
            >
              Daftar
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
