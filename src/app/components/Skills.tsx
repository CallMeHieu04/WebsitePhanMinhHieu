import { Code2, Palette, Smartphone, Database, Globe, Zap } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'React, TypeScript, Tailwind CSS, Next.js',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Node.js, Express, MongoDB, PostgreSQL',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'React Native, Flutter, Responsive Design',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Figma, Adobe XD, User Research',
    color: 'bg-pink-100 text-pink-600'
  },
  {
    icon: Globe,
    title: 'Web Technologies',
    description: 'HTML5, CSS3, JavaScript, REST APIs',
    color: 'bg-orange-100 text-orange-600'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimization, SEO, Best Practices',
    color: 'bg-yellow-100 text-yellow-600'
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Kỹ năng
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Những công nghệ và kỹ năng tôi làm việc hàng ngày
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className={`w-14 h-14 rounded-lg ${skill.color} flex items-center justify-center mb-4`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-600">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
