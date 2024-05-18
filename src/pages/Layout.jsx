import React from 'react'

const Layout = ({children}) => {
  return (
   <>
           <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-2 py-4 sm:px-4 lg:px-6">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Chat App</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
   </>
  )
}

export default Layout
