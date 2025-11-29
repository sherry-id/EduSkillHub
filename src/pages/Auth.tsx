import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Checkbox } from "../components/ui/checkbox";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, X } from "lucide-react";

export function Auth() {
  const [activeTab, setActiveTab] = useState("register");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        setActiveTab("login");
      }, 2000);
    }, 1000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <Header />
      
      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
              onClick={() => setShowSuccessModal(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </motion.div>
                  <h4 className="text-[#2C3E50] mb-2">Pendaftaran Berhasil!</h4>
                  <p className="text-gray-600 mb-6">
                    Akun Anda telah dibuat. Silakan login untuk melanjutkan.
                  </p>
                  <Button
                    onClick={() => {
                      setShowSuccessModal(false);
                      setActiveTab("login");
                    }}
                    className="rounded-full px-8 text-white"
                    style={{ background: 'linear-gradient(135deg, #4F8CC9 0%, #A68FE3 100%)' }}
                  >
                    Login Sekarang
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 py-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Illustration */}
          <div className="hidden lg:block">
            <div className="rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVlbGFuY2UlMjBkZXNpZ25lciUyMHdvcmtpbmd8ZW58MXx8fHwxNzY0MzUwNTgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Student working"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-[#2C3E50] mb-2">Mulai Perjalanan Freelancemu</h3>
              <p className="text-gray-600">
                Bergabung dengan ribuan pelajar yang sudah mendapatkan pengalaman dan penghasilan
              </p>
            </div>
          </div>

          {/* Right Side - Forms */}
          <div>
            <Card className="rounded-2xl shadow-soft border-none">
              <CardContent className="p-8">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger 
                      value="register"
                      className="rounded-full data-[state=active]:bg-[#4F8CC9] data-[state=active]:text-white transition-all duration-300"
                    >
                      Daftar
                    </TabsTrigger>
                    <TabsTrigger 
                      value="login"
                      className="rounded-full data-[state=active]:bg-[#4F8CC9] data-[state=active]:text-white transition-all duration-300"
                    >
                      Masuk
                    </TabsTrigger>
                  </TabsList>

                  {/* Register Tab */}
                  <TabsContent value="register">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="text-center mb-6">
                        <h4 className="text-[#2C3E50] mb-2">Buat Akun Baru</h4>
                        <p className="text-sm text-gray-600">
                          Pilih jenis akun yang sesuai dengan kebutuhanmu
                        </p>
                      </div>

                      {/* Account Type Selection */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            type="button"
                            variant="outline"
                            className="w-full h-auto py-4 px-6 rounded-xl border-2 hover:border-[#4F8CC9] hover:bg-[#4F8CC9]/5 transition-all"
                          >
                            <div className="text-center">
                              <div className="text-2xl mb-2">💼</div>
                              <p className="text-sm font-semibold">Freelancer</p>
                              <p className="text-xs text-gray-500">Tawarkan jasamu</p>
                            </div>
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            type="button"
                            variant="outline"
                            className="w-full h-auto py-4 px-6 rounded-xl border-2 hover:border-[#A68FE3] hover:bg-[#A68FE3]/5 transition-all"
                          >
                            <div className="text-center">
                              <div className="text-2xl mb-2">🛍️</div>
                              <p className="text-sm font-semibold">Klien</p>
                              <p className="text-xs text-gray-500">Cari freelancer</p>
                            </div>
                          </Button>
                        </motion.div>
                      </div>

                      <form className="space-y-4" onSubmit={handleRegister}>
                        <div className="space-y-2">
                          <Label htmlFor="name">Nama Lengkap</Label>
                          <Input 
                            id="name"
                            type="text"
                            placeholder="Masukkan nama lengkap"
                            className="rounded-xl"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email"
                            type="email"
                            placeholder="nama@email.com"
                            className="rounded-xl"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="institution">Asal Sekolah/Kampus</Label>
                          <Input 
                            id="institution"
                            type="text"
                            placeholder="Contoh: Universitas Indonesia"
                            className="rounded-xl"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="password">Password</Label>
                          <Input 
                            id="password"
                            type="password"
                            placeholder="Minimal 8 karakter"
                            className="rounded-xl"
                            required
                          />
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox id="terms" required />
                          <label
                            htmlFor="terms"
                            className="text-sm text-gray-600 cursor-pointer"
                          >
                            Saya setuju dengan{" "}
                            <span className="text-[#4F8CC9] hover:underline">
                              Syarat & Ketentuan
                            </span>
                          </label>
                        </div>

                        <Button 
                          type="submit"
                          disabled={isLoading}
                          className="w-full rounded-full text-white hover:opacity-90 transition-opacity disabled:opacity-70"
                          size="lg"
                          style={{ background: 'linear-gradient(135deg, #4F8CC9 0%, #A68FE3 100%)' }}
                        >
                          {isLoading ? (
                            <div className="flex items-center gap-2">
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                              />
                              Memproses...
                            </div>
                          ) : (
                            "Buat Akun"
                          )}
                        </Button>
                      </form>

                      <p className="text-center text-sm text-gray-600">
                        Sudah punya akun?{" "}
                        <button 
                          onClick={() => setActiveTab("login")}
                          className="text-[#4F8CC9] hover:underline font-semibold"
                        >
                          Masuk di sini
                        </button>
                      </p>
                    </motion.div>
                  </TabsContent>

                  {/* Login Tab */}
                  <TabsContent value="login">
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="text-center mb-6">
                        <h4 className="text-[#2C3E50] mb-2">Selamat Datang Kembali</h4>
                        <p className="text-sm text-gray-600">
                          Masuk ke akunmu untuk melanjutkan
                        </p>
                      </div>

                      <form className="space-y-4" onSubmit={handleLogin}>
                        <div className="space-y-2">
                          <Label htmlFor="login-email">Email</Label>
                          <Input 
                            id="login-email"
                            type="email"
                            placeholder="nama@email.com"
                            className="rounded-xl"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="login-password">Password</Label>
                          <Input 
                            id="login-password"
                            type="password"
                            placeholder="Masukkan password"
                            className="rounded-xl"
                            required
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="remember" />
                            <label
                              htmlFor="remember"
                              className="text-sm text-gray-600 cursor-pointer"
                            >
                              Ingat saya
                            </label>
                          </div>
                          <a href="#" className="text-sm text-[#4F8CC9] hover:underline">
                            Lupa password?
                          </a>
                        </div>

                        <Button 
                          type="submit"
                          disabled={isLoading}
                          className="w-full rounded-full text-white hover:opacity-90 transition-opacity disabled:opacity-70"
                          size="lg"
                          style={{ background: 'linear-gradient(135deg, #4F8CC9 0%, #A68FE3 100%)' }}
                        >
                          {isLoading ? (
                            <div className="flex items-center gap-2">
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                              />
                              Masuk...
                            </div>
                          ) : (
                            "Masuk"
                          )}
                        </Button>
                      </form>

                      <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-4 bg-white text-gray-500">atau masuk dengan</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <Button 
                          type="button"
                          variant="outline"
                          className="rounded-full"
                        >
                          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                          Google
                        </Button>
                        <Button 
                          type="button"
                          variant="outline"
                          className="rounded-full"
                        >
                          <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                          Facebook
                        </Button>
                      </div>

                      <p className="text-center text-sm text-gray-600">
                        Belum punya akun?{" "}
                        <button 
                          onClick={() => setActiveTab("register")}
                          className="text-[#4F8CC9] hover:underline font-semibold"
                        >
                          Daftar sekarang
                        </button>
                      </p>
                    </motion.div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
