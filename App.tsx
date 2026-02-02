
import React, { useState, useRef, useEffect } from 'react';
import { Brand, SignatureData } from './types';
import { BRANDS } from './constants';
import { SignatureTemplate } from './components/SignatureTemplates';

const App: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<Brand>(Brand.ANSLEY);
  const [formData, setFormData] = useState<SignatureData>({
    name: '',
    email: '',
    jobTitle: '',
    mobile: '',
    office: '',
    address: '',
    license: '',
  });

  const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const previewRef = useRef<HTMLDivElement>(null);

  const isComingSoon = selectedBrand === Brand.SUBURBAN_JUNGLE;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (isComingSoon) return;
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const copyHtml = async () => {
    if (!previewRef.current || isComingSoon) return;
    try {
      const html = previewRef.current.innerHTML;
      await navigator.clipboard.writeText(html);
      showStatus();
    } catch (err) {
      setCopyStatus('error');
    }
  };

  const copyRichText = async () => {
    if (!previewRef.current || isComingSoon) return;
    try {
      const html = previewRef.current.innerHTML;
      const type = "text/html";
      const blob = new Blob([html], { type });
      const data = [new ClipboardItem({ [type]: blob })];
      await navigator.clipboard.write(data);
      showStatus();
    } catch (err) {
      // Fallback for older browsers or restricted environments
      try {
          const selection = window.getSelection();
          const range = document.createRange();
          range.selectNodeContents(previewRef.current);
          selection?.removeAllRanges();
          selection?.addRange(range);
          document.execCommand('copy');
          selection?.removeAllRanges();
          showStatus();
      } catch (fallbackErr) {
          setCopyStatus('error');
      }
    }
  };

  const showStatus = () => {
    setCopyStatus('success');
    setTimeout(() => setCopyStatus('idle'), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-black text-white p-2 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-gray-900">AT WORLD PROPERTIES EMAIL SIGNATURE GENERATOR</h1>
          </div>
          <div className="text-sm font-medium text-gray-500">
            At World Properties Email Signature Tool
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Form */}
        <div className="lg:col-span-5 space-y-6">
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
              Brand Configuration
            </h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Brand Identity</label>
              <select 
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value as Brand)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-white text-gray-900"
              >
                {Object.values(Brand).map(b => (
                  <option key={b} value={b} className="bg-white text-gray-900">{b}</option>
                ))}
              </select>
            </div>

            <h2 className={`text-lg font-semibold mb-4 mt-8 flex items-center gap-2 ${isComingSoon ? 'opacity-50' : ''}`}>
              <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
              Personal Details
            </h2>
            
            <div className={`grid grid-cols-1 gap-4 transition-opacity duration-300 ${isComingSoon ? 'opacity-40 pointer-events-none grayscale' : ''}`}>
              <InputField label="Full Name" name="name" value={formData.name} onChange={handleInputChange} placeholder="e.g. John Smith" disabled={isComingSoon} />
              <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="john.smith@example.com" disabled={isComingSoon} />
              <InputField label="Job Title" name="jobTitle" value={formData.jobTitle} onChange={handleInputChange} placeholder="Real Estate Broker" disabled={isComingSoon} />
              
              <div className="grid grid-cols-2 gap-4">
                <InputField label="Mobile Phone" name="mobile" value={formData.mobile} onChange={handleInputChange} placeholder="555.555.5555" disabled={isComingSoon} />
                <InputField label="Office Phone" name="office" value={formData.office} onChange={handleInputChange} placeholder="555.555.1234" disabled={isComingSoon} />
              </div>

              <InputField label="Office Address" name="address" value={formData.address} onChange={handleInputChange} placeholder="123 Business Way, Suite 100, City, ST 12345" disabled={isComingSoon} />
              
              {selectedBrand === Brand.ANSLEY && (
                <InputField label="License Number" name="license" value={formData.license || ''} onChange={handleInputChange} placeholder="123456 (ST)" disabled={isComingSoon} />
              )}
            </div>
          </section>
        </div>

        {/* Right Column: Preview & Actions */}
        <div className="lg:col-span-7 space-y-6">
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 sticky top-24">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <span className="w-1.5 h-6 bg-green-500 rounded-full"></span>
                Live Preview
              </h2>
              <div className={`flex gap-2 ${isComingSoon ? 'opacity-30 pointer-events-none' : ''}`}>
                <button 
                  onClick={copyRichText}
                  disabled={isComingSoon}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-sm disabled:cursor-not-allowed"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  Copy Signature
                </button>
                <button 
                  onClick={copyHtml}
                  disabled={isComingSoon}
                  className="px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-sm disabled:cursor-not-allowed"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Copy HTML
                </button>
              </div>
            </div>

            {copyStatus === 'success' && (
              <div className="mb-4 p-2 bg-green-50 text-green-700 text-sm text-center rounded-lg animate-pulse border border-green-200">
                Copied to clipboard!
              </div>
            )}

            {copyStatus === 'error' && (
              <div className="mb-4 p-2 bg-red-50 text-red-700 text-sm text-center rounded-lg border border-red-200">
                Failed to copy. Please try manually.
              </div>
            )}

            <div className="bg-white border border-gray-100 rounded-lg p-8 min-h-[300px] flex items-center justify-center overflow-auto shadow-inner bg-dots">
               <div ref={previewRef} className="max-w-full">
                  {isComingSoon ? (
                    <div className="flex flex-col items-center justify-center text-center space-y-4">
                      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 tracking-tight">COMING SOON</h3>
                        <p className="text-gray-500 text-sm mt-1 uppercase tracking-widest font-medium">{selectedBrand}</p>
                      </div>
                    </div>
                  ) : (
                    <SignatureTemplate data={formData} brand={selectedBrand} />
                  )}
               </div>
            </div>

            <div className="mt-6 space-y-2">
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Pro Tip: Use "Copy Signature" for Gmail, Outlook, or Apple Mail.
              </p>
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                The generator uses HTML Tables to ensure the layout doesn't break in different email clients.
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} SignGen Pro - Multi-Brand Real Estate Signature System
      </footer>

      <style>{`
        .bg-dots {
          background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
          background-size: 16px 16px;
        }
      `}</style>
    </div>
  );
};

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, value, onChange, placeholder, type = "text", disabled = false }) => (
  <div>
    <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${disabled ? 'text-gray-400' : 'text-gray-600'}`}>{label}</label>
    <input 
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`w-full p-2.5 border rounded-lg transition-all outline-none text-sm 
        ${disabled 
          ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed italic' 
          : 'bg-gray-50 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-white text-gray-900'
        }`}
    />
  </div>
);

export default App;
