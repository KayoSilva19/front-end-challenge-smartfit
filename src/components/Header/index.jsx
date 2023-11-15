import Logo from '../../assets/logo.svg'

export const Header = () => {
  return (
    <header className="text-dark-gray-900 ">
      <nav className="bg-black w-full flex justify-center items-center px-4 h-40">
        <img src={Logo} className="w-52" alt="logo SmartFit" />
      </nav>

      <div className="mt-16 px-8">
        <h1 className="font-bold text-[2rem]">REABERTURA SMART FIT</h1>
        <div className="border-8 mt-4 border-dark-gray-900 max-w-[5.625rem]"></div>

        <p className="mt-8">
          O horário de funcionamento das nossas unidades está seguindo os
          decretos de cada município. Por isso, confira aqui se a sua unidade
          está aberta e as medidas de segurança que estamos seguindo.
        </p>
      </div>
    </header>
  )
}
