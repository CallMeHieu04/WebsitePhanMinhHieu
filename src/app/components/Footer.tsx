import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="flex items-center justify-center gap-2 text-gray-400">
          Made with <Heart size={16} className="text-red-500 fill-red-500" /> by Phan Minh Hiếu (MiHi)
        </p>
        <p className="text-gray-500 mt-2 text-sm">
          © 2026 All rights reserved
        </p>
      </div>
    </footer>
  );
}