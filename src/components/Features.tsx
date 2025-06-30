import React from 'react';
import { FileText, Eye, Palette, Zap, Shield, Heart } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: 'Markdown Support',
      description: 'Full GitHub Flavored Markdown support with tables, code blocks, and more.'
    },
    {
      icon: <Eye className="w-8 h-8 text-green-500" />,
      title: 'Live Preview',
      description: 'See your changes instantly with real-time preview as you type.'
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-500" />,
      title: 'Multiple Themes',
      description: 'Choose from GitHub, Minimal, Dark, and Elegant themes for your PDFs.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Instant Conversion',
      description: 'Convert your README files to PDF in seconds with one click.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Secure & Private',
      description: 'All processing happens in your browser. Your files never leave your device.'
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: 'Free Forever',
      description: 'No subscriptions, no limits, no hidden fees. Use it as much as you want.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features that make converting README files to PDF effortless and professional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-white p-3 rounded-xl w-fit mb-4 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h3>
            <p className="text-lg text-gray-600">
              Convert your README to PDF in just three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Input Your Content
              </h4>
              <p className="text-gray-600">
                Paste your markdown content or drag & drop your README.md file
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Choose Your Theme
              </h4>
              <p className="text-gray-600">
                Select from multiple professional themes to match your style
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Download PDF
              </h4>
              <p className="text-gray-600">
                Click the download button and get your beautiful PDF instantly
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;