import { Link } from "react-router";
import { GraduationCap, Star, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="relative">
                <GraduationCap className="w-8 h-8 text-[#4F8CC9]" />
                <Star className="w-4 h-4 text-[#A68FE3] absolute -top-1 -right-1" fill="#A68FE3" />
              </div>
              <span className="text-xl" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                EduSkill Hub
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Platform marketplace jasa freelance khusus untuk pelajar dan mahasiswa Indonesia. 
              Mulai kariermu, kembangkan skill, dan raih penghasilan tambahan.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h6 className="text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Menu Navigasi
            </h6>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#A68FE3] transition-colors text-sm">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/jelajahi-jasa" className="text-gray-300 hover:text-[#A68FE3] transition-colors text-sm">
                  Jelajahi Jasa
                </Link>
              </li>
              <li>
                <Link to="/jelajahi-jasa" className="text-gray-300 hover:text-[#A68FE3] transition-colors text-sm">
                  Daftar Freelancer
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#A68FE3] transition-colors text-sm">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/auth" className="text-gray-300 hover:text-[#A68FE3] transition-colors text-sm">
                  Masuk / Daftar
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h6 className="text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Ikuti Kami
            </h6>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#A68FE3] transition-colors flex items-center justify-center"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#A68FE3] transition-colors flex items-center justify-center"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#A68FE3] transition-colors flex items-center justify-center"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#A68FE3] transition-colors flex items-center justify-center"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2025 EduSkill Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
