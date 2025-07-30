export default function ChangelogPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">Changelog</h1>
      
      <div className="space-y-8">
        <div className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl font-bold mb-2">v1.0.0 - Initial Release</h2>
          <p className="text-gray-600 mb-2">January 15, 2024</p>
          <ul className="space-y-2 text-gray-700">
            <li>• Launched Open Sauced platform</li>
            <li>• Added project discovery features</li>
            <li>• Implemented contribution tracking</li>
            <li>• Created developer dashboard</li>
          </ul>
        </div>
        
        <div className="border-l-4 border-green-600 pl-6">
          <h2 className="text-2xl font-bold mb-2">v0.9.0 - Beta Release</h2>
          <p className="text-gray-600 mb-2">December 1, 2023</p>
          <ul className="space-y-2 text-gray-700">
            <li>• Beta testing with select developers</li>
            <li>• Performance improvements</li>
            <li>• Bug fixes and stability updates</li>
          </ul>
        </div>
        
        <div className="border-l-4 border-purple-600 pl-6">
          <h2 className="text-2xl font-bold mb-2">v0.8.0 - Alpha Release</h2>
          <p className="text-gray-600 mb-2">November 1, 2023</p>
          <ul className="space-y-2 text-gray-700">
            <li>• Initial alpha release</li>
            <li>• Core functionality implemented</li>
            <li>• Basic UI/UX design</li>
          </ul>
        </div>
      </div>
    </main>
  )
} 