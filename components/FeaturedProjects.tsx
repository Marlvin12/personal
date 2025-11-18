import Image from 'next/image'

interface Project {
  name: string
  description: string
  color: string
  link?: string
  image?: string
}

export default function FeaturedProjects() {
  const projects: Project[] = [
    {
      name: 'PopUp',
      description: 'Social discovery app built for spontaneous, real-world connections. Global iTEC finalist.',
      color: 'bg-purple-50',
      link: 'https://www.campuspopup.io/',
      image: '/popup.png',
    },
    {
      name: 'SafariProtocol',
      description: 'WhatsApp-based remittance and financial onboarding platform powered by the XRP Ledger.',
      color: 'bg-gray-100',
      image: '/safari.png',
      link: 'https://www.safariprotocol.xyz/',
    },
    {
      name: 'DoS Detection System',
      description: 'Machine learning model that detects denial-of-service traffic using MLJ and custom visualizations.',
      color: 'bg-purple-50',
      link: 'https://github.com/Marlvin12/network_traffic_ml',
      image: '/ml.png',
    },
    {
      name: 'ProofLayer',
      description: 'Decentralized verification protocol for on-chain document and credential validation.',
      color: 'bg-gray-100',
      link: 'https://soapy-bed-796.notion.site/White-Paper-1d14185e0d218029833eed4ac1ec73ea',
      image: '/prooflayer.png',
    },
    {
      name: 'Next-jsAI',
      description: 'AI-powered course generator using LLMs and YouTube API. Won 1st place at American Airlines Hackathon.',
      color: 'bg-blue-50',
      link: 'https://github.com/Marlvin12/next-jsai',
      image: '/llm.png',
    },
    {
      name: 'University Innovation Fellow',
      description: 'Selected by Stanford\'s Hasso Plattner Institute of Design to drive campus innovation. Led initiatives to increase student retention through better resource utilization at Jackson State University.',
      color: 'bg-red-50',
      link: 'https://jacksonadvocateonline.com/jsu-celebrates-four-students-awarded-as-university-innovation-fellows/',
      image: '/innovation.png',
    },
  ]

  return (
    <section id="projects" className="mb-24 sm:mb-32">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Featured Work</h2>
        <a 
          href="https://github.com/Marlvin12" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 hover:text-black flex items-center gap-2 transition-colors duration-300 font-medium"
        >
          View All
          <span>→</span>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => {
          const ProjectWrapper = project.link ? 'a' : 'div'
          const wrapperProps = project.link 
            ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
            : {}
          
          return (
            <ProjectWrapper 
              key={index} 
              className="section-border bg-white rounded-2xl overflow-hidden cursor-pointer block group"
              {...wrapperProps}
            >
              <div className="bg-gray-50 h-56 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.name}
                    width={400}
                    height={224}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <span className="text-6xl opacity-20">💻</span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-600 transition-colors duration-300">{project.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            </ProjectWrapper>
          )
        })}
      </div>
    </section>
  )
}

