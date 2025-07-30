export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">About Open Sauced</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          Open Sauced is a platform that helps developers discover, track, and contribute to open source projects. 
          We provide tools and insights to make open source contribution easier and more rewarding.
        </p>
        
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="mb-6">
          We believe in the power of open source and want to make it easier for developers to get involved. 
          Our platform provides the tools and insights needed to discover projects, track contributions, 
          and build a strong open source portfolio.
        </p>
        
        <h2 className="text-2xl font-bold mb-4">What We Do</h2>
        <ul className="space-y-3 mb-6">
          <li>• Help developers discover interesting open source projects</li>
          <li>• Track contributions and build portfolios</li>
          <li>• Provide insights into open source ecosystems</li>
          <li>• Connect developers with project maintainers</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4">Get Started</h2>
        <p>
          Ready to supercharge your open source knowledge? 
          <a href="/welcome" className="text-blue-600 hover:text-blue-800 ml-1">
            Check out our demo page
          </a> 
          to see what we can do for you.
        </p>
      </div>
    </main>
  )
} 