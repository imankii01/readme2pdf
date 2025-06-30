import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText, Cast as Paste, Github } from 'lucide-react';

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  onFileUpload: (content: string) => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ value, onChange, onFileUpload }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file && file.type === 'text/markdown' || file.name.endsWith('.md')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        onFileUpload(content);
      };
      reader.readAsText(file);
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/markdown': ['.md'],
      'text/plain': ['.txt']
    },
    multiple: false,
    noClick: true
  });

  const handleSampleLoad = () => {
    const samples = {
      portfolio: `# John Doe - Full Stack Developer

## 👋 About Me
Passionate full-stack developer with 5+ years of experience building scalable web applications.

## 🚀 Skills
- **Frontend:** React, Vue.js, TypeScript
- **Backend:** Node.js, Python, PostgreSQL
- **Cloud:** AWS, Docker, Kubernetes

## 📫 Contact
- Email: john@example.com
- LinkedIn: [linkedin.com/in/johndoe](https://linkedin.com/in/johndoe)
- GitHub: [github.com/johndoe](https://github.com/johndoe)`,

      project: `# Awesome Project

![Project Banner](https://via.placeholder.com/800x200/4f46e5/ffffff?text=Awesome+Project)

## 🌟 Overview
This project solves the problem of converting README files to beautiful PDFs.

## ✨ Features
- 🎨 Multiple themes
- 📱 Responsive design
- ⚡ Fast conversion
- 🔒 Secure processing

## 🛠 Installation
\`\`\`bash
npm install awesome-project
cd awesome-project
npm start
\`\`\`

## 📖 Usage
\`\`\`javascript
import { convertToPDF } from 'awesome-project';

convertToPDF('README.md').then(pdf => {
  console.log('PDF generated!');
});
\`\`\`

## 🤝 Contributing
Pull requests are welcome!`
    };

    onChange(samples.project);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Editor Header */}
      <div className="flex-shrink-0 p-4 bg-gray-50 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-900">Markdown Input</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleSampleLoad}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors"
            >
              <Paste className="w-3 h-3" />
              Load Sample
            </button>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <button className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
                <Upload className="w-3 h-3" />
                Upload .md
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Drop Zone */}
      <div {...getRootProps()} className="flex-1 relative">
        <input {...getInputProps()} />
        
        {isDragActive && (
          <div className="absolute inset-0 bg-blue-50 border-2 border-dashed border-blue-300 z-10 flex items-center justify-center">
            <div className="text-center">
              <Upload className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <p className="text-lg font-medium text-blue-700">Drop your README file here</p>
              <p className="text-sm text-blue-600">Supports .md and .txt files</p>
            </div>
          </div>
        )}

        {/* Textarea */}
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Paste your markdown content here or drag & drop a .md file..."
          className="w-full h-full p-6 font-mono text-sm border-0 resize-none focus:outline-none focus:ring-0 bg-white"
          style={{ minHeight: '500px' }}
        />
      </div>

      {/* Footer */}
      <div className="flex-shrink-0 px-4 py-3 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Supports GitHub Flavored Markdown</span>
          <span>{value.length} characters</span>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;