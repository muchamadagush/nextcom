import Navbar from "components/Navbar/navbar"

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

const Dashboard = () => {
  const isAdmin = false
  return (
    <div className="min-h-full">

      <Navbar user={user} navigation={navigation} userNavigation={userNavigation} isAdmin={isAdmin} />

      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 flex">
          {/* left */}
          <div className="px-4 sm:px-0 w-1/4 max-h-screen overflow-y-scroll scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-dark-gray-400 scrollbar-hover-black">
            {/* Replace with your content */}
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
          </div>
          {/* right */}
          <div className="px-4 sm:px-0 w-3/4">
            {/* Replace with your content */}
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard