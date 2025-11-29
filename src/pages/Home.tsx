import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Palette, PenTool, Code, BookOpen, Star, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { testimonials } from "../data/mockData";
import { motion } from "motion/react";

export function Home() {
  const categories = [
    {
      icon: Palette,
      name: "Desain Grafis",
      description: "Logo, poster, social media, dan branding",
      color: "#4F8CC9"
    },
    {
      icon: PenTool,
      name: "Writing",
      description: "Artikel, copywriting, content creation",
      color: "#A68FE3"
    },
    {
      icon: Code,
      name: "Coding",
      description: "Website, aplikasi, dan automation",
      color: "#4F8CC9"
    },
    {
      icon: BookOpen,
      name: "Tutoring",
      description: "Les privat, mentoring, dan bimbingan",
      color: "#A68FE3"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #4F8CC9 0%, rgba(79, 140, 201, 0.1) 100%)',
          minHeight: '700px'
        }}
      >
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-white">
                Temukan Freelancer Muda Berbakat dari Sekolah & Kampus Indonesia
              </h1>
              <p className="text-xl text-white/90">
                Harga ramah kantong, kualitas menjanjikan, dukung karya pelajar.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/jelajahi-jasa">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      size="lg"
                      className="rounded-full px-8 text-white"
                      style={{ background: 'linear-gradient(135deg, #2C3E50 0%, #34495E 100%)' }}
                    >
                      Cari Freelancer
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/auth">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="rounded-full px-8 bg-white hover:bg-gray-50 border-2 border-white text-[#4F8CC9]"
                    >
                      Tawarkan Jasa
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1646756089735-487709743361?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwd29ya2luZyUyMGxhcHRvcCUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NjQzNTA1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Student working on laptop"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kategori Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[#2C3E50] mb-4">Jelajahi Kategori Populer</h2>
            <p className="text-gray-600">
              Temukan berbagai layanan yang ditawarkan oleh pelajar berbakat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="rounded-2xl border-none shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  >
                  <CardContent className="p-8 text-center">
                    <div 
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: `${category.color}20` }}
                    >
                      <IconComponent className="w-8 h-8" style={{ color: category.color }} />
                    </div>
                    <h5 className="mb-2 text-[#2C3E50]">{category.name}</h5>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </CardContent>
                </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section className="py-20" style={{ backgroundColor: '#F7F8FA' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[#2C3E50] mb-4">Apa Kata Mereka?</h2>
            <p className="text-gray-600">
              Testimoni dari pengguna EduSkill Hub
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
              >
                <Card className="rounded-2xl border-none shadow-soft">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <ImageWithFallback
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h6 className="text-[#2C3E50]">{testimonial.name}</h6>
                      <p className="text-sm text-gray-600">{testimonial.university}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#FFC107] fill-[#FFC107]" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section 
        className="py-20"
        style={{ background: 'linear-gradient(135deg, #A68FE3 0%, #4F8CC9 100%)' }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-white mb-6">Mulai Karier Freelance-mu Hari Ini!</h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan pelajar dan mahasiswa yang sudah memulai perjalanan freelance mereka
          </p>
          <Link to="/auth">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
            >
              <Button 
                size="lg"
                className="rounded-full px-12 bg-white text-[#4F8CC9] hover:bg-gray-100"
              >
                Gabung Sekarang
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </Link>
        </div>
      </section>

      <ScrollToTop />
      <Footer />
    </div>
  );
}
