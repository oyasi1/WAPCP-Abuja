// app/journals/[slug]/JournalActions.jsx
'use client'

import { FaFilePdf, FaDownload, FaCopy, FaShareAlt, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function JournalActions({ pdfUrl, title }) {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out this journal: ${title}`;
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    };
    
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <>
      {/* Actions */}
      <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <FaFilePdf className="w-5 h-5" />
          Download PDF
          <FaDownload className="w-4 h-4 ml-1" />
        </a>
        <button
          onClick={handleCopyLink}
          className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <FaCopy className="w-4 h-4" />
          Copy Link
        </button>
      </div>

      {/* Share Buttons */}
      <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-200">
        <span className="text-gray-600 font-medium flex items-center gap-2">
          <FaShareAlt className="w-4 h-4" />
          Share:
        </span>
        <button 
          onClick={() => handleShare('twitter')}
          className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
          aria-label="Share on Twitter"
        >
          <FaTwitter className="w-4 h-4" />
        </button>
        <button 
          onClick={() => handleShare('linkedin')}
          className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
          aria-label="Share on LinkedIn"
        >
          <FaLinkedin className="w-4 h-4" />
        </button>
        <button 
          onClick={() => handleShare('facebook')}
          className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
          aria-label="Share on Facebook"
        >
          <FaFacebook className="w-4 h-4" />
        </button>
      </div>
    </>
  );
}