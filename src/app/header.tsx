import Link from 'next/link'

function Header() {
  return (
    <header className="flex items-center h-16 w-full bg-black border-b-2 border-sky-500">
      <Link
        href="/"
        className="pl-4 hover:text-sky-500"
      >
        blog.sungwook.dev
      </Link>
    </header>
  )
}

export default Header
