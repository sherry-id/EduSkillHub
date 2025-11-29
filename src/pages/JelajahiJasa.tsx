import { useState } from "react";
import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Search, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { freelancers } from "../data/mockData";
import { motion } from "motion/react";

export function JelajahiJasa() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");

  const filteredFreelancers = freelancers.filter(freelancer => {
    const matchesSearch = freelancer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         freelancer.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || freelancer.category === selectedCategory;
    const matchesPrice = selectedPrice === "all" || 
                        (selectedPrice === "low" && freelancer.price < 150000) ||
                        (selectedPrice === "medium" && freelancer.price >= 150000 && freelancer.price <= 300000) ||
                        (selectedPrice === "high" && freelancer.price > 300000);
    const matchesRating = selectedRating === "all" || 
                         (selectedRating === "4+" && freelancer.rating >= 4) ||
                         (selectedRating === "4.5+" && freelancer.rating >= 4.5) ||
                         (selectedRating === "5" && freelancer.rating === 5);
    
    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Top Section with Search */}
      <section className="py-16 bg-gradient-to-b from-[#4F8CC9]/10 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-[#2C3E50] mb-4">Jelajahi Jasa Freelancer</h2>
            <p className="text-gray-600">
              Temukan freelancer berbakat sesuai kebutuhanmu
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Cari jasa atau freelancer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 rounded-full border-2 border-gray-200 focus:border-[#4F8CC9]"
              />
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <div className="w-48">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="rounded-full border-2">
                  <SelectValue placeholder="Kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Kategori</SelectItem>
                  <SelectItem value="Desain Grafis">Desain Grafis</SelectItem>
                  <SelectItem value="Writing">Writing</SelectItem>
                  <SelectItem value="Coding">Coding</SelectItem>
                  <SelectItem value="Tutoring">Tutoring</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-48">
              <Select value={selectedPrice} onValueChange={setSelectedPrice}>
                <SelectTrigger className="rounded-full border-2">
                  <SelectValue placeholder="Harga" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Harga</SelectItem>
                  <SelectItem value="low">{"< Rp 150.000"}</SelectItem>
                  <SelectItem value="medium">Rp 150.000 - 300.000</SelectItem>
                  <SelectItem value="high">{"> Rp 300.000"}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-48">
              <Select value={selectedRating} onValueChange={setSelectedRating}>
                <SelectTrigger className="rounded-full border-2">
                  <SelectValue placeholder="Rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Rating</SelectItem>
                  <SelectItem value="4+">4+ Bintang</SelectItem>
                  <SelectItem value="4.5+">4.5+ Bintang</SelectItem>
                  <SelectItem value="5">5 Bintang</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Freelancer Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-6">
            <p className="text-gray-600">
              Menampilkan <span className="font-semibold text-[#4F8CC9]">{filteredFreelancers.length}</span> freelancer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFreelancers.map((freelancer, index) => (
              <motion.div
                key={freelancer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="rounded-2xl border-none shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
                >
                <CardContent className="p-6">
                  {/* Header with Avatar & Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <ImageWithFallback
                      src={freelancer.avatar}
                      alt={freelancer.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h6 className="text-[#2C3E50]">{freelancer.name}</h6>
                      <p className="text-xs text-gray-500">{freelancer.university}</p>
                    </div>
                  </div>

                  {/* Service Title */}
                  <h5 className="text-[#2C3E50] mb-2 line-clamp-2 min-h-[3.5rem]">
                    {freelancer.title}
                  </h5>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {freelancer.description}
                  </p>

                  {/* Rating & Category */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-[#FFC107] fill-[#FFC107]" />
                      <span className="text-sm font-semibold text-[#2C3E50]">
                        {freelancer.rating}
                      </span>
                      <span className="text-xs text-gray-500">
                        ({freelancer.reviewCount})
                      </span>
                    </div>
                    <span 
                      className="text-xs px-3 py-1 rounded-full"
                      style={{ backgroundColor: '#F5F2FF', color: '#A68FE3' }}
                    >
                      {freelancer.category}
                    </span>
                  </div>

                  {/* Price & Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500">Mulai dari</p>
                      <p className="font-semibold text-[#4F8CC9]">
                        Rp {freelancer.price.toLocaleString('id-ID')}
                      </p>
                    </div>
                    <Link to={`/freelancer/${freelancer.id}`}>
                      <Button 
                        size="sm"
                        className="rounded-full"
                        style={{ background: 'linear-gradient(135deg, #4F8CC9 0%, #A68FE3 100%)', color: 'white' }}
                      >
                        Lihat Detail
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-12">
            <Button 
              variant="outline" 
              className="rounded-full w-10 h-10 p-0"
            >
              1
            </Button>
            <Button 
              variant="ghost" 
              className="rounded-full w-10 h-10 p-0"
            >
              2
            </Button>
            <Button 
              variant="ghost" 
              className="rounded-full w-10 h-10 p-0"
            >
              3
            </Button>
          </div>
        </div>
      </section>

      <ScrollToTop />
      <Footer />
    </div>
  );
}
