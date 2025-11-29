import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { 
  User, 
  Briefcase, 
  ShoppingBag, 
  TrendingUp, 
  Bell, 
  Plus,
  DollarSign,
  Star,
  MessageSquare,
  LogOut,
  GraduationCap
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion, AnimatePresence } from "motion/react";

export function Dashboard() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  const stats = [
    {
      icon: ShoppingBag,
      label: "Total Pesanan",
      value: "42",
      color: "#4F8CC9",
      bgColor: "#4F8CC9"
    },
    {
      icon: DollarSign,
      label: "Total Penghasilan",
      value: "Rp 8.5jt",
      color: "#A68FE3",
      bgColor: "#A68FE3"
    },
    {
      icon: Star,
      label: "Rating",
      value: "4.9/5.0",
      color: "#FFC107",
      bgColor: "#FFC107"
    },
    {
      icon: MessageSquare,
      label: "Ulasan",
      value: "127",
      color: "#4CAF50",
      bgColor: "#4CAF50"
    }
  ];

  const myServices = [
    {
      id: 1,
      title: "Desain Logo & Brand Identity",
      price: 150000,
      status: "Aktif",
      orders: 15
    },
    {
      id: 2,
      title: "Social Media Design Package",
      price: 200000,
      status: "Aktif",
      orders: 8
    },
    {
      id: 3,
      title: "Ilustrasi Custom",
      price: 300000,
      status: "Draft",
      orders: 0
    }
  ];

  const recentOrders = [
    {
      id: 1,
      client: "Andi Prasetyo",
      service: "Desain Logo & Brand Identity",
      status: "Dalam Proses",
      deadline: "2 hari lagi"
    },
    {
      id: 2,
      client: "Siti Nurhaliza",
      service: "Social Media Design Package",
      status: "Review",
      deadline: "1 hari lagi"
    },
    {
      id: 3,
      client: "Budi Santoso",
      service: "Desain Logo & Brand Identity",
      status: "Selesai",
      deadline: "-"
    }
  ];

  return (
    <div className="flex min-h-screen bg-[#F7F8FA]">
      {/* Welcome Toast */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 24, x: "-50%" }}
            exit={{ opacity: 0, y: -50, x: "-50%" }}
            className="fixed top-0 left-1/2 z-50 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Star className="w-5 h-5 text-green-600" fill="#10B981" />
            </div>
            <div>
              <p className="font-semibold text-[#2C3E50]">Selamat Datang!</p>
              <p className="text-xs text-gray-600">Login berhasil. Selamat bekerja! 🎉</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-64 min-h-screen p-6 sticky top-0"
        style={{ backgroundColor: '#A68FE3' }}
      >
        <Link to="/" className="flex items-center gap-2 mb-8">
          <GraduationCap className="w-8 h-8 text-white" />
          <span className="text-xl text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
            EduSkill Hub
          </span>
        </Link>

        <nav className="space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-white bg-white/20 rounded-xl hover:bg-white/30 transition-colors">
            <User className="w-5 h-5" />
            <span>Profil Saya</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-white rounded-xl hover:bg-white/20 transition-colors">
            <Briefcase className="w-5 h-5" />
            <span>Jasa Saya</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-white rounded-xl hover:bg-white/20 transition-colors">
            <ShoppingBag className="w-5 h-5" />
            <span>Pesanan Masuk</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-white rounded-xl hover:bg-white/20 transition-colors">
            <TrendingUp className="w-5 h-5" />
            <span>Statistik & Penghasilan</span>
          </button>
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <Link to="/">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-white rounded-xl hover:bg-white/20 transition-colors">
              <LogOut className="w-5 h-5" />
              <span>Keluar</span>
            </button>
          </Link>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Top Bar */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white border-b border-gray-200 px-8 py-6 sticky top-0 z-10"
        >
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-[#2C3E50]">Halo, Rara Kusuma 👋</h4>
              <p className="text-sm text-gray-600">Selamat datang kembali di dashboard</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Bell className="w-6 h-6 text-gray-600" />
                <motion.span 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"
                />
              </button>
              <ImageWithFallback
                src="https://i.pravatar.cc/150?img=47"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-8"
        >
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="rounded-2xl border-none shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${stat.bgColor}20` }}
                      >
                        <IconComponent className="w-6 h-6" style={{ color: stat.color }} />
                      </div>
                    </div>
                    <h3 className="text-[#2C3E50] mb-1">{stat.value}</h3>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Jasa Saya */}
            <div className="lg:col-span-2">
              <Card className="rounded-2xl border-none shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h5 className="text-[#2C3E50]">Jasa Saya</h5>
                    <Button 
                      className="rounded-full text-white"
                      style={{ background: 'linear-gradient(135deg, #4F8CC9 0%, #A68FE3 100%)' }}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Tambah Jasa
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {myServices.map((service) => (
                      <div 
                        key={service.id}
                        className="p-4 rounded-xl border border-gray-100 hover:border-[#4F8CC9] transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h6 className="text-[#2C3E50]">{service.title}</h6>
                              <span 
                                className={`text-xs px-3 py-1 rounded-full ${
                                  service.status === 'Aktif' 
                                    ? 'bg-green-100 text-green-700' 
                                    : 'bg-gray-100 text-gray-700'
                                }`}
                              >
                                {service.status}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm">
                              <span className="text-[#4F8CC9] font-semibold">
                                Rp {service.price.toLocaleString('id-ID')}
                              </span>
                              <span className="text-gray-600">
                                {service.orders} pesanan
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="rounded-full"
                            >
                              Edit
                            </Button>
                            <Button 
                              size="sm" 
                              variant="ghost"
                              className="rounded-full text-gray-600"
                            >
                              Hapus
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pesanan Terbaru */}
            <div>
              <Card className="rounded-2xl border-none shadow-soft">
                <CardContent className="p-6">
                  <h5 className="text-[#2C3E50] mb-6">Pesanan Terbaru</h5>
                  
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div 
                        key={order.id}
                        className="p-4 rounded-xl bg-[#F7F8FA]"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h6 className="text-[#2C3E50] text-sm">{order.client}</h6>
                          <span 
                            className={`text-xs px-2 py-1 rounded-full ${
                              order.status === 'Selesai' 
                                ? 'bg-green-100 text-green-700'
                                : order.status === 'Review'
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-blue-100 text-blue-700'
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 mb-2">{order.service}</p>
                        <p className="text-xs text-gray-500">
                          Deadline: {order.deadline}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full mt-4 rounded-full"
                  >
                    Lihat Semua Pesanan
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Actions */}
          <Card className="rounded-2xl border-none shadow-soft mt-8">
            <CardContent className="p-6">
              <h5 className="text-[#2C3E50] mb-4">Aksi Cepat</h5>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button 
                  variant="outline"
                  className="h-auto py-6 flex-col gap-2 rounded-xl hover:border-[#4F8CC9]"
                >
                  <Plus className="w-6 h-6 text-[#4F8CC9]" />
                  <span className="text-sm">Tambah Jasa</span>
                </Button>
                <Button 
                  variant="outline"
                  className="h-auto py-6 flex-col gap-2 rounded-xl hover:border-[#A68FE3]"
                >
                  <TrendingUp className="w-6 h-6 text-[#A68FE3]" />
                  <span className="text-sm">Lihat Statistik</span>
                </Button>
                <Button 
                  variant="outline"
                  className="h-auto py-6 flex-col gap-2 rounded-xl hover:border-[#4F8CC9]"
                >
                  <MessageSquare className="w-6 h-6 text-[#4F8CC9]" />
                  <span className="text-sm">Pesan Masuk</span>
                </Button>
                <Button 
                  variant="outline"
                  className="h-auto py-6 flex-col gap-2 rounded-xl hover:border-[#A68FE3]"
                >
                  <User className="w-6 h-6 text-[#A68FE3]" />
                  <span className="text-sm">Edit Profil</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
