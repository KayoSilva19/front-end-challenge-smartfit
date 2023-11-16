import Logo from '../../assets/logo.svg'

export const Header = () => {
  return (
    <header className="text-dark-gray-900 sm:flex sm:flex-col sm:justify-center sm:items-center ">
      <nav className="bg-black w-full flex justify-center items-center px-4 h-40">
        <img src={Logo} className="w-52 sm:w-56" alt="logo SmartFit" />
      </nav>
    </header>
  )
}
