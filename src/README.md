# 🎓 EduSkill Hub - Marketplace Freelance Pelajar

> Platform marketplace jasa freelance khusus untuk pelajar dan mahasiswa Indonesia

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/react-19.0.0-blue.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.0-blue.svg)
![Tailwind](https://img.shields.io/badge/tailwindcss-4.0-blue.svg)

## 📋 Deskripsi Proyek

EduSkill Hub adalah prototype website marketplace yang menghubungkan pelajar dan mahasiswa yang ingin menawarkan jasa seperti desain grafis, writing, tutoring, dan coding dengan klien yang membutuhkan layanan tersebut dengan harga terjangkau.

### 🎯 Tujuan Platform
- Membantu pelajar mendapatkan pengalaman kerja awal
- Memberikan kesempatan penghasilan tambahan bagi mahasiswa
- Menghubungkan talenta muda dengan klien potensial
- Membangun portfolio dan skill untuk karier masa depan

## 🎨 Design System

### Warna Utama
- **Soft Blue**: `#4F8CC9` - Warna primary untuk trust & professionalism
- **Soft Purple**: `#A68FE3` - Warna secondary untuk creativity & youth
- **White**: `#FFFFFF` - Background bersih
- **Light Gray**: `#F7F8FA` - Background section alternatif
- **Dark Gray**: `#2C3E50` - Text primary

### Typography
- **Heading**: Poppins (Bold, Semibold)
- **Body**: Inter (Regular, Medium)

### Komponen Design
- **Border Radius**: 16px untuk cards, buttons rounded-full
- **Shadow**: 0px 4px 12px rgba(0, 0, 0, 0.08)
- **Spacing**: Consistent 4px grid system

## 🚀 Fitur Utama

### 1. Landing Page (Beranda)
- ✨ Hero section dengan gradien soft blue
- 📊 4 Kategori jasa populer
- 💬 Testimoni slider dari pengguna
- 🎯 CTA banner dengan call-to-action jelas

### 2. Jelajahi Jasa
- 🔍 Search bar dengan filter
- 🎚️ Filter by kategori, harga, dan rating
- 📦 Grid card freelancer (3 kolom)
- 📄 Pagination

### 3. Detail Freelancer
- 👤 Profil lengkap dengan rating & statistik
- 📝 Deskripsi jasa detail
- 🖼️ Portofolio slider (5 gambar)
- ⭐ Ulasan pengguna
- 💰 Pricing card sticky

### 4. Autentikasi
- 📋 Form Pendaftaran (Freelancer/Klien)
- 🔐 Form Login dengan validasi
- ✅ Success notification dengan animasi
- 🔄 Tab switching Register/Login
- 🌐 Social login (Google, Facebook)

### 5. Dashboard Freelancer
- 📊 4 Kartu statistik
- 📋 Daftar jasa dengan manage
- 📬 Pesanan terbaru
- ⚡ Quick actions buttons
- 🔔 Notifikasi real-time

## 🎭 Animasi & Interaksi

### Animasi Implemented
1. **Fade In/Out** - Modal & page transitions (300ms)
2. **Slide In** - Sidebar & navigation (500ms)
3. **Scale Animation** - Button hover (1.05x) & tap (0.95x)
4. **Stagger Animation** - Grid items (delay 0.1s per item)
5. **Pulse Effect** - Notification badge (2s loop)
6. **Rotate Animation** - Loading spinner (infinite)
7. **Floating Animation** - CTA buttons (2s ease-in-out)
8. **Spring Animation** - Success check icon
9. **Lift Effect** - Card hover dengan shadow
10. **Smooth Scroll** - Navigation behavior

### User Interactions
- ✅ Form validation (HTML5 + visual feedback)
- ⏳ Loading states pada button submit
- 🎯 Active states pada navigation
- 🖱️ Hover effects pada cards & buttons
- 📱 Touch-friendly tap targets
- ♿ Keyboard accessible

## 📂 Struktur Folder

```
/
├── components/           # Reusable components
│   ├── ui/              # Shadcn UI components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Footer
│   └── ...
├── pages/               # Page components
│   ├── Home.tsx         # Landing page
│   ├── JelajahiJasa.tsx # Marketplace view
│   ├── DetailFreelancer.tsx # Freelancer detail
│   ├── Auth.tsx         # Login/Register
│   ├── Dashboard.tsx    # Dashboard freelancer
│   └── Demo.tsx         # Animation showcase
├── data/                # Mock data
│   └── mockData.ts      # Freelancers, testimonials, etc.
├── utils/               # Utilities
│   └── routes.tsx       # React Router config
├── styles/              # Global styles
│   └── globals.css      # Tailwind + custom CSS
├── App.tsx              # Main app component
└── INTERAKSI.md         # Documentation interaksi
```

## 🛠️ Tech Stack

- **Framework**: React 19 with TypeScript
- **Routing**: React Router v7 (Data Mode)
- **Styling**: Tailwind CSS v4.0
- **UI Components**: Shadcn/ui
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Images**: Unsplash API
- **Build Tool**: Vite

## 🎬 Demo Interaksi

Untuk melihat showcase semua animasi dan interaksi, kunjungi:
```
/demo
```

## 📱 Responsive Design

- ✅ Mobile First approach
- ✅ Breakpoints: 640px, 768px, 1024px, 1280px
- ✅ Flexible grid system
- ✅ Touch-optimized buttons
- ✅ Readable typography across devices

## 🔄 User Flow

```
LANDING → [Daftar] → REGISTER FORM → SUCCESS MODAL → LOGIN FORM → DASHBOARD
                                                              ↓
                                                         [Explore]
                                                              ↓
                                         JELAJAHI JASA → DETAIL FREELANCER
```

## ✨ Highlights

### Form Pendaftaran
1. User pilih tipe akun (Freelancer/Klien)
2. Isi form dengan validasi real-time
3. Submit → Loading spinner (1s)
4. Success modal dengan green check icon
5. Auto switch ke Login tab (2s delay)

### Login Flow
1. Isi email & password
2. Submit → Loading state
3. Redirect ke Dashboard dengan smooth transition
4. Welcome toast notification (3s)
5. Dashboard muncul dengan sidebar slide-in animation

### Navigation
- Logo → Always back to home
- Header menu → Active state highlighting
- "Keluar" button → Logout & back to home
- Smooth scroll behavior enabled

## 🎯 Future Enhancements

- [ ] Real API integration dengan backend
- [ ] Payment gateway integration
- [ ] Real-time chat messaging
- [ ] Advanced search & filters
- [ ] User reviews & ratings system
- [ ] Notification system
- [ ] Email verification
- [ ] Multi-language support
- [ ] Dark mode theme

## 📄 License

This is a prototype project for demonstration purposes.

## 👨‍💻 Developer Notes

### Key Libraries Used:
```json
{
  "react-router": "^7.0.0",
  "motion": "^11.0.0",
  "lucide-react": "latest",
  "@radix-ui/react-*": "latest"
}
```

### Important Files:
- `/pages/Auth.tsx` - Login & Register logic
- `/components/Header.tsx` - Navigation with active states
- `/utils/routes.tsx` - All routes configuration
- `/data/mockData.ts` - Sample data for prototype

---

**Made with ❤️ for Indonesian Students**

*Empowering the next generation of freelancers* 🚀
