import { Github, Linkedin, Mail } from 'lucide-react';


export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-8">
          <img
            src={avatarImage}
            <img src="/hero-image.png" alt="Profile" ... />
            className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg border-4 border-white"
          />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Xin chào, tôi là <span className="text-blue-600">Phan Minh Hiếu</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Web Developer | Designer | MiHi
        </p>
        
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Tôi là một nhà phát triển web đam mê sáng tạo và xây dựng những trải nghiệm web tuyệt vời. 
          Với kinh nghiệm trong việc phát triển ứng dụng hiện đại và responsive.
        </p>
        
        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Liên hệ với tôi
          </a>
          <a
            href="#projects"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
          >
            Xem dự án
          </a>
        </div>
        
        <div className="flex justify-center gap-6 mt-12">
          <a href="https://github.com" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Linkedin size={28} />
          </a>
          <a href="mailto:hieu01634754158@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
