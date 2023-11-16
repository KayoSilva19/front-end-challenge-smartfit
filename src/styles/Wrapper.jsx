export const Wrapper = ({ children }) => {
  return (
    <div className="flex p-8  min-h-[calc(100vh_-_10rem)] flex-col md:items-center md:max-w-[100%] ">
      {children}
    </div>
  )
}
