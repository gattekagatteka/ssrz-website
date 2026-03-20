import { useState, useEffect, useRef } from 'react'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import './Opportunities.css'
import chernomorets from '../../assets/chernomorets.jpg'
import slavyanets from '../../assets/slavyanets.jpg'
import bk1200 from '../../assets/bk-1200.jpg'
import rbtUdarnik from '../../assets/rbt_udarnik.jpg'
import slvPortovik from '../../assets/slv_portovik-4.jpg'
import nms25 from '../../assets/nms-25.jpg'

const sliderImages = [
  { id: 1, src: chernomorets, title: 'Самоходный плавучий кран «Черноморец-34»' },
  { id: 2, src: slavyanets, title: 'Буксир-кантовщик «Славянец»' },
  { id: 3, src: bk1200, title: 'Буксир-кантовщик «БК-1200»' },
  { id: 4, src: rbtUdarnik, title: 'Рейдовый буксир-толкач РБТ-135 / «Ударник»' },
  { id: 5, src: slvPortovik, title: 'Сборщик льяльных вод СЛВ «Портовик-4»' },
  { id: 6, src: nms25, title: 'Нефтемусоросборщик «НМС-25»' },
]

function Opportunities() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const autoPlayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const currentXRef = useRef(0)

  const resetAutoPlay = () => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current)
    }

    autoPlayTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
    }, 3000)
  }

  useEffect(() => {
    resetAutoPlay()

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current)
      }
    }
  }, [])

  const handleSlideChange = (newIndex: number) => {
    setCurrentSlide(newIndex)
    resetAutoPlay()
  }

  const nextSlide = () => {
    handleSlideChange((currentSlide + 1) % sliderImages.length)
  }

  const prevSlide = () => {
    handleSlideChange((currentSlide - 1 + sliderImages.length) % sliderImages.length)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true
    startXRef.current = e.clientX
    currentXRef.current = e.clientX
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return
    currentXRef.current = e.clientX
  }

  const handleMouseUp = () => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false

    const deltaX = startXRef.current - currentXRef.current

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    isDraggingRef.current = true
    startXRef.current = e.touches[0].clientX
    currentXRef.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current) return
    currentXRef.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false

    const deltaX = startXRef.current - currentXRef.current

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
  }

  return (
    <>
      <Header />
      <main className="opportunities__main">
        <section className="opportunities__content">
          <h1 className="opportunities__title">Наши возможности</h1>

          <nav className="opportunities__nav-section">
            <p className="opportunities__nav-label">На этой странице:</p>
            <div className="opportunities__nav">
              <a href="#docks" className="opportunities__nav-link">Плавучие доки</a>
              <a href="#vessels" className="opportunities__nav-link">Плавсредства</a>
              <a href="#moorings" className="opportunities__nav-link">Причальный фронт</a>
              <a href="#production" className="opportunities__nav-link">Производство</a>
            </div>
          </nav>

          <section id="docks" className="opportunities__detail">
            <h2 className="opportunities__detail-title">Плавучие доки</h2>

            <div className="opportunities__info-block">
              <p className="opportunities__info-text">
                Для выполнения ремонта судовых корпусов, винторулевой группы и т.д. завод располагает плавучим доком со
                следующими характеристиками:
              </p>

              <div className="opportunities__table-block">
                <div className="opportunities__table-wrap" role="region" aria-label="Плавучий док № 1-К" tabIndex={0}>
                  <table className="opportunities__table">
                    <thead>
                      <tr>
                        <th className="opportunities__th">Главные размерения и элементы</th>
                        <th className="opportunities__th">Док № 1-К</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="opportunities__td opportunities__td--label">Г/П (грузоподъемность)</td>
                        <td className="opportunities__td opportunities__td--value">8500 тонн</td>
                      </tr>
                      <tr>
                        <td className="opportunities__td opportunities__td--label">Длина понтона, м</td>
                        <td className="opportunities__td opportunities__td--value">139 метров</td>
                      </tr>
                      <tr>
                        <td className="opportunities__td opportunities__td--label">Ширина между входными кранцами, м</td>
                        <td className="opportunities__td opportunities__td--value">23,4 метра</td>
                      </tr>
                      <tr>
                        <td className="opportunities__td opportunities__td--label">Высота башен, м</td>
                        <td className="opportunities__td opportunities__td--value">10,5 метра</td>
                      </tr>
                      <tr>
                        <td className="opportunities__td opportunities__td--label">Глубина погружения, м</td>
                        <td className="opportunities__td opportunities__td--value">6,7 метра</td>
                      </tr>
                      <tr>
                        <td className="opportunities__td opportunities__td--label">Грузоподъемность доковых кранов</td>
                        <td className="opportunities__td opportunities__td--value">2 - 5т / 5т</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="opportunities__info-text opportunities__info-text--margin">
                Кроме того, может быть арендован находящийся на акватории завода плавучий док №194 со следующими
                характеристиками:
              </p>

              <div className="opportunities__table-block">
                <div className="opportunities__table-wrap" role="region" aria-label="Плавучий док №194" tabIndex={0}>
                  <table className="opportunities__table">
                    <thead>
                      <tr>
                        <th className="opportunities__th">Главные размерения и элементы</th>
                        <th className="opportunities__th">Док № 194</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="opportunities__td opportunities__td--label">Г/П (грузоподъемность)</td>
                        <td className="opportunities__td opportunities__td--value">35600 тонн</td>
                      </tr>
                      <tr>
                        <td className="opportunities__td opportunities__td--label">Длина понтона, м</td>
                        <td className="opportunities__td opportunities__td--value">264 метра</td>
                      </tr>
                      <tr>
                        <td className="opportunities__td opportunities__td--label">Ширина между входными кранцами, м</td>
                        <td className="opportunities__td opportunities__td--value">35,2 метра</td>
                      </tr>
                      <tr>
                        <td className="opportunities__td opportunities__td--label">Высота башен, м</td>
                        <td className="opportunities__td opportunities__td--value">16,4 метра</td>
                      </tr>
                      <tr>
                        <td className="opportunities__td opportunities__td--label">Глубина погружения, м</td>
                        <td className="opportunities__td opportunities__td--value">11 метров</td>
                      </tr>
                      <tr>
                        <td className="opportunities__td opportunities__td--label">Грузоподъемность доковых кранов</td>
                        <td className="opportunities__td opportunities__td--value">3 - 20 т / 5т<br />1 - 10 т / 3т</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section id="vessels" className="opportunities__detail">
            <h2 className="opportunities__detail-title">Плавсредства</h2>

            <div className="opportunities__info-block">
              <p className="opportunities__info-text">
                Завод располагает следующими плавсредствами, которые также могут быть сданы в аренду:
              </p>

              <ul className="opportunities__info-list">
                <li>Самоходный плавучий кран «Черноморец-34» г/п 100 т.</li>
                <li>Буксир-кантовщик «Славянец», мощность 2600 элс.</li>
                <li>Буксир-кантовщик «БК-1200», проект 498, мощность 1200 элс.</li>
                <li>Рейдовый буксир-толкач РБТ-135, мощность 450 элс.</li>
                <li>Рейдовый буксир-толкач «Ударник», мощность 450 элс.</li>
                <li>Сборщик льяльных вод СЛВ «Портовик-4»</li>
                <li>Нефтемусоросборщик «НМС-25»</li>
              </ul>
            </div>

            <div className="opportunities__slider" ref={sliderRef} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
              <div className="opportunities__slider-container">
                <img
                  src={sliderImages[currentSlide].src}
                  alt={sliderImages[currentSlide].title}
                  className="opportunities__slider-image"
                  draggable={false}
                />
              </div>
              <p className="opportunities__slider-title">{sliderImages[currentSlide].title}</p>

              <div className="opportunities__slider-controls">
                <button
                  className="opportunities__slider-btn opportunities__slider-btn--prev"
                  onClick={prevSlide}
                  aria-label="Предыдущее изображение"
                >
                  ❮
                </button>
                <div className="opportunities__slider-dots">
                  {sliderImages.map((_, index) => (
                    <button
                      key={index}
                      className={`opportunities__slider-dot ${index === currentSlide ? 'opportunities__slider-dot--active' : ''}`}
                      onClick={() => handleSlideChange(index)}
                      aria-label={`Слайд ${index + 1}`}
                    />
                  ))}
                </div>
                <button className="opportunities__slider-btn opportunities__slider-btn--next" onClick={nextSlide} aria-label="Следующее изображение">
                  ❯
                </button>
              </div>
            </div>
          </section>

          <section id="moorings" className="opportunities__detail">
            <h2 className="opportunities__detail-title">Причальный фронт</h2>

            <div className="opportunities__info-block">
              <p className="opportunities__info-text">
                На территории завода располагается судоремонтный пирс длиной 300 метров, он позволяет принимать суда с
                осадкой до 9 м. Пирс оборудован тремя портальными кранами гп 30 тонн и вылетом стрелы до 30 метров.
                Кроме того, имеется причальная набережная длиной 440м, пригодная для стоянки судов с осадкой до 5-и
                метров.
              </p>
            </div>
          </section>

          <section id="production" className="opportunities__detail">
            <h2 className="opportunities__detail-title">Производство</h2>

            <div className="opportunities__info-block">
              <p className="opportunities__info-text">
                Судоремонтные работы завода обеспечиваются двумя основными объединенными цехами: слесарно-электро-механический (СЭМЦ) и корпусно-доковый (КДЦ), каждый из которых имеет свои подразделения:
              </p>

              <h3 className="opportunities__info-subtitle">Слесарно-электро-механический цех (СЭМЦ)</h3>
              
              <p className="opportunities__info-text">
                Слесарно-электро-механический цех (СЭМЦ) выполняет все виды слесарных и электромеханических работ.
              </p>

              <p className="opportunities__info-text">
                <strong>Участок слесарного производства</strong> осуществляет ремонт всех видов главных и вспомогательных ДВС, вспомогательных механизмов: насосов, сепараторов, компрессоров, лебедок, брашпилей, шпилей, рефустановок, механизмов тралового комплекса рыболовных судов, рулевых машин, механизмов люковых закрытий, судовых кранов и теплообменных аппаратов.
              </p>

              <p className="opportunities__info-text">
                <strong>Электромонтажный участок</strong> производит ремонт всех видов электромашин (генераторов и двигателей) постоянного и переменного тока с восстановлением изоляции любого класса с изготовлением новых обмоток, электрощитов, кабельные работы.
              </p>

              <p className="opportunities__info-text">
                <strong>Участок станочного производства СЭМЦ</strong> оснащен современным металлорежущим оборудованием, широкие возможности которого позволяют выполнять любые станочные работы: шлифовку шеек коленчатых валов судовых дизелей, изготовление гребных валов из поковок заказчика весом до 40 т, ремонт гребных валов весом до 70 т, сложную токарно-фрезерную обработку различных деталей (например, изготовление шестерен диаметром до 2000 мм и с модулем до 18мм).
              </p>

              <p className="opportunities__info-text">
                <strong>Участок литейного и кузнечно-прессового производства</strong> выполняет стальное, чугунное и цветное литье весом до 400 кг, изготовление поковок для нужд судоремонта весом до 100 кг; термическая обработка, в т. ч. цементация, закалка, ионное азотирование (упрочнение) деталей.
              </p>

              <p className="opportunities__info-text">
                <strong>Такелажный участок</strong> обеспечивает оперативную транспортировку деталей и механизмов в цеха и обратно к судам, стоящим в доках и у причалов.
              </p>

              <p className="opportunities__info-text">
                Все производственные участки расположены в едином блоке цехов, оснащенном мостовыми кранами г/п до 70 т и самоходными рельсовыми площадками, что положительно отражается на производительности труда и сроках выполнения заказов.
              </p>

              <h3 className="opportunities__info-subtitle">Корпусо-доковый цех (КДЦ)</h3>
              
              <p className="opportunities__info-text">
                Корпусо-доковый цех (КДЦ) выполняет все виды работ по ремонту корпуса, винто-рулевых устройств, дельных вещей судна.
              </p>

              <p className="opportunities__info-text">
                <strong>Доковый участок.</strong> Одним из безусловных преимуществ завода является качественный ремонт механизмов винторулевой группы судна. На ССРЗ восстанавливаются любые гребные валы по согласованной с Регистром технологии методом наплавки. Завод производит ремонт гребных устройств весом до 70 тонн, в том числе с ВРШ. Пример: ремонт ВПЛ т/х «Игарка» (тип СА-15) мощностью 22000 элс. Здесь способны восстановить винторулевые устройства любых типов судов, в том числе ледоколов. Производится ремонт подруливающих устройств всех типов. Доковый участок также производит корпусно-сварочные работы по замене наружной обшивы подводной части кораблей и судов толщиной до 52 мм, замену протекторов на корпусе и в кингстонных выгородках, опрессовку танков.
              </p>

              <p className="opportunities__info-text">
                <strong>Участок корпусно-сварочного производства</strong> обеспечивает все виды корпусных работ, в том числе замену обшивы судов, ремонт люковых закрытий любого типа, в т. ч. сварочные работы, наплавку гребных валов и деталей, сварку цветных и алюминиевых сплавов. Возможно выполнение судостроительных работ.
              </p>

              <p className="opportunities__info-text">
                <strong>Участок трубопроводного производства</strong> также входит в структуру КДЦ. Здесь выполняется ремонт и замена труб и судовой арматуры. При необходимости используются трубогибочные станки с прогревом токами высокой частоты. В настоящее время горячее цинкование труб не применяется.
              </p>

              <p className="opportunities__info-text">
                <strong>Малярный участок,</strong> входящий в состав КДЦ, оснащен высокопроизводительными установками по очистке и окраске. Наряду с хорошо зарекомендовавшим себя методом абразивной очистки с помощью металлургического шлака, здесь применяется гидроструйная очистка. Новый метод обеспечивает высокую степень чистоты (до стандарта SA-2,5) обрабатываемых поверхностей не только за счет удаления грязи и ржавчины, но и за счет полного вымывания соли с корпуса судна. Это обстоятельство позволяет существенно продлить срок службы лакокрасочных покрытий, тем самым снизить общие затраты на покраску судна в дальнейшем. Гидроструйная очистка производится с помощью современной гидродинамической установки фирмы HAMMELMAN (Германия), и позволяет обрабатывать до 70 кв. м поверхности в час. Славянский СРЗ тесно сотрудничает с такими известными производителями судовых лакокрасочных материалов, как «AKZO NOBEL», «HEMPEL», «JOTUN». Представители этих компаний заинтересованы в качественном использовании своих продуктов, поэтому соблюдение технологий очистки и покраски под контролем производителя дополнительная гарантия высокого качества.
              </p>

              <p className="opportunities__info-text">
                <strong>Деревообрабатывающий участок</strong> КДЦ подготавливает фронт работ для замены наружной обшивы и переборок, осуществляет отделку кают и судовых помещений, изготавливает мебель, производит парусные работы (пошив чехлов и тентов).
              </p>

              <p className="opportunities__info-text opportunities__info-text--margin-top">
                Все подразделения завода имеют тесную взаимосвязь и общее управление. Это позволяет оперативно координировать работу разных участков, выполнять по-настоящему комплексный ремонт судна.
              </p>

              <p className="opportunities__info-text">
                Тел. для справок: (42331) 46-253
              </p>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Opportunities
