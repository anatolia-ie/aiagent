import React, { useEffect } from 'react';

const ChatbotPage = () => {
  useEffect(() => {
    // Create and append the chatbot script
    const script = document.createElement('script');
    script.src = 'https://raiabot.raia2.com/assets/raia-chatbot-widget.js';
    script.async = true;
    script.setAttribute('data-api-key', 'c5ba2eed-0bd5-477f-acec-45f2f13d113f');
    
    // Append to document head
    document.head.appendChild(script);
    
    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.querySelector(
        'script[src="https://raiabot.raia2.com/assets/raia-chatbot-widget.js"]'
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Click Support
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                AI-Powered Help Center
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Welcome to Click Support
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Get instant help with our AI-powered chatbot. Ask questions and get answers instantly.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900">
              Need Help? Start Chatting!
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Click the chat icon in the bottom right corner to get started with our AI assistant.
            </p>
            <div className="mt-6">
              <div className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100">
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                AI Assistant Ready
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatbotPage;
