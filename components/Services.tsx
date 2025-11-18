export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'full-stack development',
      description: 'end-to-end web applications with modern frameworks like Next.js, React, and Node.js',
      tags: ['React', 'Next.js', 'TypeScript', 'Node.js'],
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'ai integration',
      description: 'intelligent systems powered by LLMs, machine learning models, and custom AI solutions',
      tags: ['OpenAI', 'MLJ', 'TensorFlow', 'Python'],
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: 'blockchain solutions',
      description: 'decentralized applications, smart contracts, and web3 integrations on various chains',
      tags: ['XRP Ledger', 'Smart Contracts', 'Web3'],
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: 'cloud infrastructure',
      description: 'scalable cloud architecture, automation, and DevOps solutions for production systems',
      tags: ['Kubernetes', 'Docker', 'OCI', 'Grafana'],
    },
  ]

  return (
    <section className="mb-24 sm:mb-32">
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12">Capabilities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="section-border bg-white p-8 sm:p-10 rounded-2xl group"
          >
            <div className="text-black mb-6 group-hover:text-gray-600 transition-colors duration-300">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-4 tracking-tight capitalize">{service.title}</h3>
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className="text-xs px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

