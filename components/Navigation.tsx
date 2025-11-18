export default function Navigation() {
  return (
    <nav className="mb-16 sm:mb-20">
      <ul className="flex flex-wrap gap-8 text-sm font-medium">
        <li>
          <a href="#home" className="text-black hover:text-gray-600 transition-colors duration-300">
            Home
          </a>
        </li>
        <li>
          <a href="#projects" className="text-gray-500 hover:text-black transition-colors duration-300">
            Projects
          </a>
        </li>
        <li>
          <a href="#experience" className="text-gray-500 hover:text-black transition-colors duration-300">
            Experience
          </a>
        </li>
        <li>
          <a href="/blogs" className="text-gray-500 hover:text-black transition-colors duration-300">
            Essays
          </a>
        </li>
      </ul>
    </nav>
  )
}

