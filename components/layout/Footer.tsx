import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-12 px-6 bg-[var(--color-pale-sky)] text-gray-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col space-y-4">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">NuHome Movers</h3>
          <p className="text-gray-700 max-w-xs">
            Stress-free moving for you and your family. We handle your belongings with care and precision.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4 text-gray-900">Navigation</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-700 hover:text-[var(--color-tomato)] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/schedule" className="text-gray-700 hover:text-[var(--color-tomato)] transition-colors">
                Schedule
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4 text-gray-900">Contact Us</h4>
          <ul className="space-y-2">
            <li>
              <a href="tel:7747225923" className="text-gray-700 hover:text-[var(--color-tomato)] transition-colors">
                (774) 722-5923
              </a>
            </li>
            <li>
              <a href="mailto:nuhomemovers@gmail.com" className="text-gray-700 hover:text-[var(--color-tomato)] transition-colors">
                nuhomemovers@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-300/50 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} NuHome Movers. All rights reserved.
      </div>
    </footer>
  );
}
