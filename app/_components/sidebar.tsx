import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-xl font-bold border-b border-gray-700">
        Event Management
      </div>
      <nav className="flex-1 p-4">
        <ul>
          <li className="mb-4">
            <Link href="/view-info">
              <div className="flex items-center p-2 text-base font-normal text-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-800 cursor-pointer">
                <svg className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 14V8h2v6H9zm1-9a1 1 0 110-2 1 1 0 010 2z" /></svg>
                <span className="ml-3">Announcements</span>
              </div>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/announcement">
              <div className="flex items-center p-2 text-base font-normal text-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-800 cursor-pointer">
                <svg className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 14V8h2v6H9zm1-9a1 1 0 110-2 1 1 0 010 2z" /></svg>
                <span className="ml-3">create</span>
              </div>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/view-student">
              <div className="flex items-center p-2 text-base font-normal text-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-800 cursor-pointer">
                <svg className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 14V8h2v6H9zm1-9a1 1 0 110-2 1 1 0 010 2z" /></svg>
                <span className="ml-3">view students</span>
              </div>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/student">
              <div className="flex items-center p-2 text-base font-normal text-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-800 cursor-pointer">
                <svg className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 14V8h2v6H9zm1-9a1 1 0 110-2 1 1 0 010 2z" /></svg>
                <span className="ml-3">student</span>
              </div>
            </Link>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
