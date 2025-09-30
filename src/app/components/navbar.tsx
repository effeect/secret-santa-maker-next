// Navbar component for my projects which give links to my social media and github

const navigation = [
  { name: 'BlueSky', href: 'https://bsky.app/profile/effeect.bsky.social' },
  { name: 'Github', href: 'https://github.com/effeect' },
]

export default function Navbar() {
    return (<>
        <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
          </div>
          <div className="flex gap-x-8">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white hover:text-blue-300">
                {item.name}
              </a>
            ))}
          </div>
          {/* Empty div to keep the objects about in check*/}
          <div className="lg:flex lg:flex-1 lg:justify-end">
          </div>
        </nav>
      </header>
      </>);

      }