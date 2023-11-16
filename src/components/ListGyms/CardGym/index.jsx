import requiredMak from '../../../assets/required-mask.png'
import recommendedMask from '../../../assets/recommended-mask.png'
import requiredToel from '../../../assets/required-towel.png'
import recommendedToel from '../../../assets/recommended-towel.png'
import requiredLockerroom from '../../../assets/required-lockerroom.png'
import partialLockerroom from '../../../assets/partial-lockerroom.png'
import forbiddenLockerroom from '../../../assets/forbidden-lockerroom.png'
import partialFountain from '../../../assets/partial-fountain.png'
import forbiddenFountain from '../../../assets/forbidden-fountain.png'

export const CardGym = ({ title, content }) => {
  const containerGeneral =
    'flex flex-col mt-8 bg-light-gray-300 rounded-[8px] p-4 drop-shadow-md grow last:grow-0 min-[1280px]:grow-0 '

  const isOpenedText = 'font-bold text-green-500 text-sm'
  const isClosedText = 'font-bold text-red-500 text-sm'

  const imgWarning = 'h-14 w-14'
  return (
    <div className={containerGeneral}>
      <header className="text-dark-gray-900 border-b border-light-gray-200 pb-4 mb-4 ">
        <span className={isOpenedText}>Aberto</span>
        <h2 className="font-bold text-2xl my-2">{title}</h2>
        <p>{content}</p>
        <p>São Paulo, SP</p>
      </header>
      <div>
        <div className="flex flex-wrap gap-4">
          <img className={imgWarning} src={requiredMak} alt="" />
          <img className={imgWarning} src={requiredToel} alt="" />
          <img className={imgWarning} src={partialFountain} alt="" />
          <img className={imgWarning} src={forbiddenLockerroom} alt="" />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mt-6 text-dark-gray-900">
        <div className="flex flex-col">
          <span className="text-[20px] font-bold ">Seg. à Sex.</span>
          <span>06h às 22h</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[20px] font-bold ">Sáb.</span>
          <span>06 às 18h</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[20px] font-bold ">Dom.</span>
          <span>Fechado.</span>
        </div>
      </div>
    </div>
  )
}
