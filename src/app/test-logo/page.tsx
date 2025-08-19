export default function TestLogo() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Logo Test Page</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Regular img tag:</h2>
          <img 
            src="/KaranLogo.png" 
            alt="Test Logo" 
            className="h-16 border border-gray-300"
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">With Next.js Image:</h2>
          <img 
            src="/.png" 
            alt="Test Logo" 
            className="h-16 border border-gray-300"
            width={180}
            height={60}
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">File info:</h2>
          <p>File path: /KaranLogo.png</p>
          <p>File size: 92KB</p>
        </div>
      </div>
    </div>
  );
} 