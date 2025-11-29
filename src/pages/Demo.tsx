import { motion } from "motion/react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { 
  CheckCircle, 
  Loader2, 
  Star, 
  Heart,
  Zap,
  TrendingUp,
  Bell
} from "lucide-react";

export function Demo() {
  return (
    <div className="min-h-screen bg-[#F7F8FA] py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-[#2C3E50] mb-4">Demo Interaksi EduSkill Hub</h1>
          <p className="text-gray-600">Showcase semua animasi dan interaksi prototype</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Button Interactions */}
          <Card className="rounded-2xl shadow-soft">
            <CardContent className="p-6">
              <h5 className="text-[#2C3E50] mb-4">Button Animations</h5>
              <div className="space-y-3">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    className="w-full rounded-full text-white"
                    style={{ background: 'linear-gradient(135deg, #4F8CC9 0%, #A68FE3 100%)' }}
                  >
                    Hover & Tap Me
                  </Button>
                </motion.div>
                
                <Button 
                  className="w-full rounded-full text-white"
                  disabled
                  style={{ background: 'linear-gradient(135deg, #4F8CC9 0%, #A68FE3 100%)' }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Loader2 className="w-5 h-5 mr-2" />
                  </motion.div>
                  Loading...
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Card 2: Icon Animations */}
          <Card className="rounded-2xl shadow-soft">
            <CardContent className="p-6">
              <h5 className="text-[#2C3E50] mb-4">Icon Animations</h5>
              <div className="flex justify-around items-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="relative"
                >
                  <Bell className="w-8 h-8 text-[#4F8CC9]" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
                </motion.div>

                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Star className="w-8 h-8 text-[#FFC107]" fill="#FFC107" />
                </motion.div>

                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart className="w-8 h-8 text-red-500" fill="#EF4444" />
                </motion.div>
              </div>
            </CardContent>
          </Card>

          {/* Card 3: Success Animation */}
          <Card className="rounded-2xl shadow-soft">
            <CardContent className="p-6">
              <h5 className="text-[#2C3E50] mb-4">Success Notification</h5>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto"
              >
                <CheckCircle className="w-12 h-12 text-green-600" />
              </motion.div>
              <p className="text-center mt-4 text-sm text-gray-600">
                Animated check icon with spring effect
              </p>
            </CardContent>
          </Card>

          {/* Card 4: Stagger Animation */}
          <Card className="rounded-2xl shadow-soft">
            <CardContent className="p-6">
              <h5 className="text-[#2C3E50] mb-4">Stagger Animation</h5>
              <div className="space-y-2">
                {[1, 2, 3, 4].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="p-3 bg-[#F5F2FF] rounded-xl"
                  >
                    <p className="text-sm text-[#A68FE3]">Item {item}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Card 5: Floating Animation */}
          <Card className="rounded-2xl shadow-soft">
            <CardContent className="p-6">
              <h5 className="text-[#2C3E50] mb-4">Floating Animation</h5>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex justify-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#4F8CC9] to-[#A68FE3] rounded-2xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              <p className="text-center mt-4 text-sm text-gray-600">
                Continuous floating effect
              </p>
            </CardContent>
          </Card>

          {/* Card 6: Hover Card */}
          <Card className="rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <CardContent className="p-6">
              <h5 className="text-[#2C3E50] mb-4">Hover Card Effect</h5>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-[#4F8CC9] mx-auto mb-3" />
                <p className="text-sm text-gray-600">
                  Hover me to see shadow & lift effect
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Card 
            className="rounded-2xl shadow-soft max-w-2xl mx-auto"
            style={{ background: 'linear-gradient(135deg, #A68FE3 0%, #4F8CC9 100%)' }}
          >
            <CardContent className="p-8">
              <h3 className="text-white mb-4">Siap Mencoba?</h3>
              <p className="text-white/90 mb-6">
                Kembali ke halaman utama untuk melihat semua interaksi dalam action!
              </p>
              <a href="/">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg"
                    className="rounded-full px-8 bg-white text-[#4F8CC9] hover:bg-gray-100"
                  >
                    Kembali ke Beranda
                  </Button>
                </motion.div>
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
