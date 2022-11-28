const MainContent = ({ children }) => {
    return (
      <main>
        <div className="grid xl:ml-72 sm:ml-20 min-h-screen">
          {children}
        </div>
      </main>
    )
  }

  export default MainContent;