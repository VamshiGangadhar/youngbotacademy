import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Sparkles } from "lucide-react";

interface WelcomeDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WelcomeDialog: React.FC<WelcomeDialogProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="bg-gradient-to-r from-[#0a192f] to-[#1e3a5f] text-white border border-[#1e3a5f] shadow-lg rounded-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <DialogHeader className="text-center">
                <Sparkles className="mx-auto text-[#64ffda] w-12 h-12 mb-4" />
                <DialogTitle className="text-4xl font-extrabold">
                  Welcome to Young Bot Academy
                </DialogTitle>
                <DialogDescription className="text-[#8892b0] mt-2">
                  Building Tomorrow’s Innovators Today
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-center space-x-4 mt-6">
                <Button
                  onClick={onClose}
                  className="bg-[#64ffda] text-[#0a192f] hover:bg-[#45e0c0] px-6 py-3 rounded-full shadow-md transform transition-transform hover:scale-105"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
