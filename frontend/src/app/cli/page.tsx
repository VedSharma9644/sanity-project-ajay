export default function CLIPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">Open Sauced CLI</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          The Open Sauced CLI is a powerful command-line tool that helps you discover, track, and contribute to open source projects directly from your terminal.
        </p>
        
        <h2 className="text-2xl font-bold mb-4">Installation</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-6 font-mono text-sm">
          <code>npm install -g @opensauced/cli</code>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-6 font-mono text-sm">
          <div># Login to your account</div>
          <div>sauced login</div>
          <br />
          <div># Discover trending projects</div>
          <div>sauced discover</div>
          <br />
          <div># Track a repository</div>
          <div>sauced track open-sauced/open-sauced</div>
          <br />
          <div># View your insights</div>
          <div>sauced insights</div>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Available Commands</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">sauced login</h3>
            <p className="text-gray-600">Authenticate with your Open Sauced account</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">sauced discover</h3>
            <p className="text-gray-600">Find trending open source projects</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">sauced track [repo]</h3>
            <p className="text-gray-600">Start tracking a specific repository</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">sauced insights</h3>
            <p className="text-gray-600">View your contribution insights and analytics</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">sauced help</h3>
            <p className="text-gray-600">Show all available commands and options</p>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">Documentation</h2>
        <p className="mb-4">
          For detailed documentation and advanced usage examples, visit our 
          <a href="https://opensauced.pizza/docs" className="text-blue-600 hover:text-blue-800 ml-1">
            CLI documentation
          </a>.
        </p>
      </div>
    </main>
  )
} 