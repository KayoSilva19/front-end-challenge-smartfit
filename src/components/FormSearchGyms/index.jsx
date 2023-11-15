import iconHour from '../../assets/icon-hour.png'

export const FormSearchGyms = () => {
  const svgCheck =
    'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg=='

  const styleInputDiv = 'border-t-[1px] py-4 flex justify-between'
  const styleInputLabel = 'flex gap-2 items-center'
  const styleInput = `appearance-none border-2 border-light-gray-900 rounded-[100%] checked:bg-yellow-500 
  peer relative h-5 w-5 shrink-0 appearance-none border after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[url('${svgCheck}')] after:bg-[length:35px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-yellow-500 hover:ring hover:ring-gray-300 focus:outline-none" cursor-pointer`
  const styleInputSquare = `appearance-none border-2 border-light-gray-900 peer relative h-5 w-5 shrink-0 rounded-[4px] after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[url('${svgCheck}')] after:bg-[length:35px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-yellow-500 hover:ring hover:ring-gray-300 focus:outline-none cursor-pointer`
  return (
    <section>
      <form className="text-light-gray-500 border-2 min-h-[500px] rounded-[8px] p-4">
        <header className="flex items-center gap-2">
          <img src={iconHour} className="w-[24px]" alt="" />
          <span>Horário</span>
        </header>
        <div className="mt-4">
          <h1 className="text-[24px] font-thin max-w-[180px]">
            Qual período quer treinar?
          </h1>

          <div className="mt-2 ">
            <div className={styleInputDiv}>
              <label className={styleInputLabel}>
                <input className={styleInput} type="checkbox" />
                Manhã
              </label>
              <span>06:00 às 12:00</span>
            </div>
            <div className={styleInputDiv}>
              <label className={styleInputLabel}>
                <input className={styleInput} type="checkbox" />
                Tarde
              </label>
              <span>12:01 às 18:00</span>
            </div>
            <div className={`${styleInputDiv} border-b-[1px]`}>
              <label className={styleInputLabel}>
                <input className={styleInput} type="checkbox" />
                Noite
              </label>
              <span>18:01 às 23:00</span>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center text-center mt-4 items-center">
            <label className={styleInputLabel}>
              <input className={styleInputSquare} type="checkbox" />
              Exibir unidades fechadas
            </label>

            <span className="mt-3">
              Resultados Encontrados: <strong>0</strong>
            </span>
          </div>
        </div>

        <footer className="flex flex-col mt-4 gap-4">
          <button className="h-[64px] bg-yellow-500 rounded font-bold text-dark-gray-900">
            ENCONTRAR UNIDADE
          </button>
          <button className="min-h-[64px] rounded font-bold  border border-light-gray-900 text-dark-gray-900">
            LIMPAR
          </button>
        </footer>
      </form>
    </section>
  )
}
