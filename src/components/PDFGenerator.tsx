import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import { Download, Settings, Loader2, FileDown } from 'lucide-react';

interface PDFGeneratorProps {
  markdown: string;
  theme: string;
  onThemeChange: (theme: string) => void;
  isGenerating: boolean;
  setIsGenerating: (generating: boolean) => void;
}

const themes = [
  { id: 'github', name: 'GitHub', description: 'Clean and professional' },
  { id: 'minimal', name: 'Minimal', description: 'Simple and clean' },
  { id: 'dark', name: 'Dark', description: 'Dark mode styling' },
  { id: 'elegant', name: 'Elegant', description: 'Serif fonts and spacing' }
];

const PDFGenerator: React.FC<PDFGeneratorProps> = ({ 
  markdown, 
  theme, 
  onThemeChange, 
  isGenerating, 
  setIsGenerating 
}) => {
  const [showSettings, setShowSettings] = useState(false);

  const generatePDF = async () => {
    if (!markdown.trim()) {
      alert('Please enter some markdown content first!');
      return;
    }

    setIsGenerating(true);

    try {
      // Create a temporary element with rendered markdown
      const element = document.createElement('div');
      element.innerHTML = document.querySelector('.markdown-preview')?.innerHTML || '';
      
      // PDF options
      const options = {
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: 'README.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          logging: false
        },
        jsPDF: { 
          unit: 'in', 
          format: 'letter', 
          orientation: 'portrait' 
        }
      };

      // Generate PDF
      await html2pdf().set(options).from(element).save();
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex items-center gap-3">
      {/* Theme Settings */}
      <div className="relative">
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <Settings className="w-4 h-4" />
          Theme
        </button>

        {showSettings && (
          <div className="absolute right-0 top-12 bg-white rounded-lg shadow-lg border border-gray-200 p-4 min-w-64 z-10">
            <h3 className="font-medium text-gray-900 mb-3">Choose Theme</h3>
            <div className="space-y-2">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    onThemeChange(t.id);
                    setShowSettings(false);
                  }}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    theme === t.id 
                      ? 'bg-blue-50 border border-blue-200 text-blue-700' 
                      : 'hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <div className="font-medium">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.description}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Generate PDF Button */}
      <button
        onClick={generatePDF}
        disabled={isGenerating}
        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
      >
        {isGenerating ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <FileDown className="w-4 h-4" />
            Download PDF
          </>
        )}
      </button>
    </div>
  );
};

export default PDFGenerator;