export default function Navigation() {
  return (
    <nav className="section-border bg-white p-3 sm:p-4 mb-8 sm:mb-12 inline-block w-full sm:w-auto">
      <ul className="flex flex-wrap gap-3 sm:gap-8 text-xs sm:text-sm justify-center sm:justify-start">
        <li>
          <a href="#home" className="bg-gray-800 text-white px-4 sm:px-6 py-2 inline-block hover:bg-gray-700 transition-colors">
            home
          </a>
        </li>
        <li>
          <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors py-2 px-2">
            projects
          </a>
        </li>
        <li>
          <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors py-2 px-2">
            experience
          </a>
        </li>
        <li>
          <a href="/blogs" className="text-gray-600 hover:text-gray-900 transition-colors py-2 px-2">
            essays
          </a>
        </li>
      </ul>
    </nav>
  )
}

