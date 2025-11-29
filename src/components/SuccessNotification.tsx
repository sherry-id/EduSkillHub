import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

interface SuccessNotificationProps {
  message: string;
  onClose: () => void;
}

export function SuccessNotification({ message, onClose }: SuccessNotificationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
      className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-white rounded-2xl shadow-2xl p-6 flex items-center gap-4 max-w-md"
    >
      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
        <CheckCircle className="w-7 h-7 text-green-600" />
      </div>
      <div className="flex-1">
        <p className="font-semibold text-[#2C3E50]">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-gray-600 transition-colors"
      >
        ✕
      </button>
    </motion.div>
  );
}
