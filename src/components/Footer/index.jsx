import Logo from '../../assets/logo.svg'

export const Footer = () => {
  return (
    <footer className="relative bottom-0 bg-dark-gray-900 w-full h-60 flex flex-col items-center justify-center text-center font-normal ">
      <img src={Logo} className="w-32" alt="logo SmartFit" />

      <span className="mt-8 text-gray-50 max-w-[220px]">
        Todos os direitos reservados - 2020
      </span>
    </footer>
  )
}
