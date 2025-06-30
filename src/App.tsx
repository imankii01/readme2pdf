import React, { useState, useCallback } from 'react';
import { FileText, Download, Eye, Upload, Sparkles, Github, Twitter, Heart } from 'lucide-react';
import MarkdownEditor from './components/MarkdownEditor';
import PreviewPane from './components/PreviewPane';
import PDFGenerator from './components/PDFGenerator';
import Header from './components/Header';
import Footer from './components/Footer';
import Features from './components/Features';

function App() {
  const [markdown, setMarkdown] = useState(`# Welcome to README2PDF

## 🚀 Convert Your README Files to Beautiful PDFs

This is a **free online tool** that helps you convert your README.md files into professional-looking PDFs.

### Features:
- ✅ Live markdown preview
- ✅ Multiple PDF themes
- ✅ Drag & drop file upload
- ✅ GitHub-style rendering
- ✅ Instant download

### Getting Started:
1. Paste your markdown content or upload a .md file
2. Preview your content in real-time
3. Choose your preferred theme
4. Click "Download PDF" to get your file

> **Tip:** You can also paste a GitHub repository URL to automatically fetch the README!

### Code Example:
\`\`\`javascript
// Sample code block
function convertToPDF() {
  console.log("Converting README to PDF...");
}
\`\`\`

### Why Use README2PDF?
- **Professional Output**: Get beautifully formatted PDFs
- **Easy to Use**: No technical knowledge required
- **Fast & Secure**: All processing happens in your browser
- **Free Forever**: No subscriptions or hidden fees

---

*Ready to create your first PDF? Start editing this content or upload your own README file!*`);

  const [theme, setTheme] = useState('github');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleMarkdownChange = useCallback((value: string) => {
    setMarkdown(value);
  }, []);

  const handleFileUpload = useCallback((content: string) => {
    setMarkdown(content);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Free Online Tool
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Convert <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">README</span> to <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">PDF</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transform your README.md files into professional, beautifully formatted PDFs in seconds. 
              Perfect for documentation, portfolios, and sharing your projects.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-500">
              <span className="inline-flex items-center gap-1">
                <FileText className="w-4 h-4" />
                Markdown Support
              </span>
              <span className="inline-flex items-center gap-1">
                <Eye className="w-4 h-4" />
                Live Preview
              </span>
              <span className="inline-flex items-center gap-1">
                <Download className="w-4 h-4" />
                Instant Download
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Converter */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Converter Header */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Markdown Editor</h2>
                  <p className="text-sm text-gray-600">Edit your content and see the preview in real-time</p>
                </div>
                <PDFGenerator 
                  markdown={markdown} 
                  theme={theme} 
                  onThemeChange={setTheme}
                  isGenerating={isGenerating}
                  setIsGenerating={setIsGenerating}
                />
              </div>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
              <MarkdownEditor 
                value={markdown}
                onChange={handleMarkdownChange}
                onFileUpload={handleFileUpload}
              />
              <PreviewPane 
                markdown={markdown} 
                theme={theme}
              />
            </div>
          </div>
        </div>
      </section>

      <Features />
      <Footer />
    </div>
  );
}

export default App;