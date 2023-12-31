import requiredMak from '../../../assets/required-mask.png'
import recommendedMask from '../../../assets/recommended-mask.png'
import requiredMakToel from '../../../assets/required-towel.png'
import recommendedToel from '../../../assets/recommended-towel.png'
import requiredLockerroom from '../../../assets/required-lockerroom.png'
import partialLockerroom from '../../../assets/partial-lockerroom.png'
import forbiddenLockerroom from '../../../assets/forbidden-lockerroom.png'
import partialFountain from '../../../assets/partial-fountain.png'
import forbiddenFountain from '../../../assets/forbidden-fountain.png'

export const Restrictions = () => {
  const containerGeneral =
    'flex flex-col justify-center items-center mt-4 bg-light-gray-300 rounded p-4 py-12 gap-16 sm:flex-row sm:flex-wrap md:gap-4 md:py-4 min-[1280px]:gap-16'
  const containerWarning = 'text-center flex flex-col gap-4 '
  const titleWarning = 'font-bold text-dark-gray-900'
  const flexWarning =
    'flex flex-wrap text-center justify-center items-center gap-2 '
  const divWarning =
    'text-center flex flex-col items-center md:text-[14px] font-semibold'
  const imgWarning = 'h-16 w-16 md:h-12 md:w-12'
  return (
    <div className={containerGeneral}>
      <div className={containerWarning}>
        <h1 className={titleWarning}>Máscara</h1>
        <div className={flexWarning}>
          <div className={divWarning}>
            <img className={imgWarning} src={requiredMak} alt="" />
            <span>Obrigatório</span>
          </div>
          <div className={divWarning}>
            <img className={imgWarning} src={recommendedMask} alt="" />
            <span>Recomendado</span>
          </div>
        </div>
      </div>
      <div className={containerWarning}>
        <h1 className={titleWarning}>Toalha</h1>
        <div className={flexWarning}>
          <div className={divWarning}>
            <img src={requiredMakToel} className={imgWarning} alt="" />
            <span>Obrigatório</span>
          </div>
          <div className={divWarning}>
            <img src={recommendedToel} className={imgWarning} alt="" />
            <span>Recomendado</span>
          </div>
        </div>
      </div>
      <div className={containerWarning}>
        <h1 className={titleWarning}>Bebedouro</h1>
        <div className={flexWarning}>
          <div className={divWarning}>
            <img src={partialFountain} alt="" className={imgWarning} />
            <span>Recomendado</span>
          </div>
          <div className={divWarning}>
            <img src={forbiddenFountain} alt="" className={imgWarning} />
            <span>Obrigatório</span>
          </div>
        </div>
      </div>
      <div>
        <div className={containerWarning}>
          <h1 className={titleWarning}>Vestiários</h1>
          <div className={flexWarning}>
            <div className={divWarning}>
              <img src={requiredLockerroom} alt="" className={imgWarning} />
              <span>Liberado</span>
            </div>
            <div className={divWarning}>
              <img src={partialLockerroom} alt="" className={imgWarning} />
              <span>Parcial</span>
            </div>
            <div className={divWarning}>
              <img src={forbiddenLockerroom} alt="" className={imgWarning} />
              <span>Fechado</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
