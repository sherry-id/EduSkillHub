import { useParams, Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Star, Clock, CheckCircle, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { freelancers, portfolioImages, reviews } from "../data/mockData";
import { motion } from "motion/react";

export function DetailFreelancer() {
  const { id } = useParams();
  const freelancer = freelancers.find(f => f.id === Number(id)) || freelancers[0];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        {/* Back Button */}
        <Link to="/jelajahi-jasa">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Jelajahi Jasa
          </Button>
        </Link>

        {/* Header Profil */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="rounded-2xl shadow-soft mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <ImageWithFallback
                  src={freelancer.avatar}
                  alt={freelancer.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-[#2C3E50] mb-1">{freelancer.name}</h3>
                  <p className="text-gray-600 mb-2">{freelancer.university}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-[#FFC107] fill-[#FFC107]" />
                      <span className="font-semibold text-[#2C3E50]">{freelancer.rating}</span>
                      <span className="text-sm text-gray-500">({freelancer.reviewCount} ulasan)</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{freelancer.completedOrders} pesanan selesai</span>
                    </div>
                  </div>
                </div>
              </div>
              <Button 
                size="lg"
                className="rounded-full px-8 text-white whitespace-nowrap"
                style={{ background: 'linear-gradient(135deg, #4F8CC9 0%, #A68FE3 100%)' }}
              >
                Pesan Sekarang
              </Button>
            </div>
          </CardContent>
        </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Deskripsi Jasa */}
            <Card className="rounded-2xl shadow-soft">
              <CardContent className="p-8">
                <h4 className="text-[#2C3E50] mb-4">{freelancer.title}</h4>
                <div className="space-y-4 text-gray-700">
                  <p>{freelancer.description}</p>
                  <p>
                    Saya adalah mahasiswa {freelancer.university} yang berpengalaman di bidang {freelancer.category.toLowerCase()}. 
                    Saya telah menyelesaikan lebih dari {freelancer.completedOrders} proyek dengan tingkat kepuasan klien yang tinggi.
                  </p>
                  <p>
                    Setiap proyek akan dikerjakan dengan profesional, tepat waktu, dan sesuai dengan kebutuhan Anda. 
                    Saya siap untuk berdiskusi terlebih dahulu untuk memastikan hasil yang maksimal.
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h6 className="text-[#2C3E50] mb-3">Keahlian:</h6>
                  <div className="flex flex-wrap gap-2">
                    {freelancer.skills.map((skill, index) => (
                      <Badge 
                        key={index}
                        className="px-4 py-2 rounded-full text-sm"
                        style={{ backgroundColor: '#F5F2FF', color: '#A68FE3' }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Portofolio */}
            <Card className="rounded-2xl shadow-soft">
              <CardContent className="p-8">
                <h4 className="text-[#2C3E50] mb-6">Portofolio</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {portfolioImages.map((image, index) => (
                    <div 
                      key={index}
                      className="aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    >
                      <ImageWithFallback
                        src={image}
                        alt={`Portfolio ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Ulasan */}
            <Card className="rounded-2xl shadow-soft">
              <CardContent className="p-8">
                <h4 className="text-[#2C3E50] mb-6">Ulasan Pengguna</h4>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="pb-6 border-b border-gray-100 last:border-0">
                      <div className="flex items-start gap-4">
                        <ImageWithFallback
                          src={review.avatar}
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h6 className="text-[#2C3E50]">{review.name}</h6>
                            <span className="text-xs text-gray-500">{review.date}</span>
                          </div>
                          <div className="flex gap-1 mb-2">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-[#FFC107] fill-[#FFC107]" />
                            ))}
                          </div>
                          <p className="text-sm text-gray-700">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <Card className="rounded-2xl shadow-soft sticky top-24">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-600 mb-2">Harga Mulai Dari</p>
                  <h3 className="text-[#4F8CC9]">
                    Rp {freelancer.price.toLocaleString('id-ID')}
                  </h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#A68FE3]" />
                    <div>
                      <p className="text-sm font-semibold text-[#2C3E50]">Estimasi Pengerjaan</p>
                      <p className="text-sm text-gray-600">3-5 hari kerja</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="text-sm font-semibold text-[#2C3E50]">Revisi</p>
                      <p className="text-sm text-gray-600">2x revisi gratis</p>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full rounded-full text-white"
                  size="lg"
                  style={{ background: 'linear-gradient(135deg, #4F8CC9 0%, #A68FE3 100%)' }}
                >
                  Pesan Sekarang
                </Button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Pembayaran aman melalui platform
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
