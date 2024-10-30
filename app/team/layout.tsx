import Link from "next/link";

export const metadata = {
  title: 'SAI TEAM',
  description: 'SAI Cell - CAAIR',
}

export default function Layout({ children }: {
  children: React.ReactNode
}) {
  return (
    <>
      <main>
        <h1 className="font-medium text-center text-3xl py-5">The Team</h1>
        <hr />
        <ul className="flex justify-center space-x-8 py-4">
          <li className="mr-6">
            <Link 
              className="text-blue-500 font-semibold hover:text-blue-700 transition-all duration-200 px-4 py-2 rounded-md border-2 border-transparent hover:border-blue-500 hover:bg-blue-100"
              href="/team/present"
            >
              Present Team Member
            </Link>
          </li>
          <li>
            <Link 
              className="text-blue-500 font-semibold hover:text-blue-700 transition-all duration-200 px-4 py-2 rounded-md border-2 border-transparent hover:border-blue-500 hover:bg-blue-100"
              href="/team/former"
            >
              Former SAIC Member
            </Link>
          </li>
          <li>
            <Link 
              className="text-blue-500 font-semibold hover:text-blue-700 transition-all duration-200 px-4 py-2 rounded-md border-2 border-transparent hover:border-blue-500 hover:bg-blue-100"
              href="/team/faculty"
            >
              Dean Alumni Affairs and Outreach
            </Link>
          </li>
        </ul>
        {children}
      </main>
    </>
  );
}
