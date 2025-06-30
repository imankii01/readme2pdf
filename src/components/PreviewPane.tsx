import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import { Eye, Palette } from 'lucide-react';

interface PreviewPaneProps {
  markdown: string;
  theme: string;
}

const PreviewPane: React.FC<PreviewPaneProps> = ({ markdown, theme }) => {
  const getThemeStyles = () => {
    switch (theme) {
      case 'minimal':
        return {
          backgroundColor: '#ffffff',
          color: '#2d3748',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        };
      case 'dark':
        return {
          backgroundColor: '#1a202c',
          color: '#e2e8f0',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        };
      case 'elegant':
        return {
          backgroundColor: '#fefefe',
          color: '#2d3748',
          fontFamily: 'Georgia, serif'
        };
      default: // github
        return {
          backgroundColor: '#ffffff',
          color: '#24292f',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
        };
    }
  };

  const themeStyles = getThemeStyles();

  return (
    <div className="h-full flex flex-col">
      {/* Preview Header */}
      <div className="flex-shrink-0 p-4 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Eye className="w-5 h-5 text-gray-600" />
          <span className="font-medium text-gray-900">Live Preview</span>
          <div className="ml-auto flex items-center gap-2">
            <Palette className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600 capitalize">{theme} Theme</span>
          </div>
        </div>
      </div>

      {/* Preview Content */}
      <div 
        className="flex-1 overflow-auto"
        style={{ minHeight: '500px' }}
      >
        <div 
          className="h-full p-8 markdown-preview"
          style={themeStyles}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight, rehypeRaw]}
            className="prose prose-lg max-w-none"
            components={{
              // Custom components for better styling
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-200">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-semibold mb-4 mt-8">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold mb-3 mt-6">
                  {children}
                </h3>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-600">
                  {children}
                </blockquote>
              ),
              code: ({ inline, children }) => (
                inline ? (
                  <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">
                    {children}
                  </code>
                ) : (
                  <code className="block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    {children}
                  </code>
                )
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto my-4">
                  <table className="min-w-full border border-gray-200">
                    {children}
                  </table>
                </div>
              ),
              th: ({ children }) => (
                <th className="border border-gray-200 px-4 py-2 bg-gray-50 font-semibold text-left">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="border border-gray-200 px-4 py-2">
                  {children}
                </td>
              )
            }}
          >
            {markdown || '*Start typing to see your preview...*'}
          </ReactMarkdown>
        </div>
      </div>

      {/* Preview Footer */}
      <div className="flex-shrink-0 px-4 py-3 bg-gray-50 border-t border-gray-200">
        <div className="text-xs text-gray-500 text-center">
          This preview shows how your PDF will look
        </div>
      </div>
    </div>
  );
};

export default PreviewPane;