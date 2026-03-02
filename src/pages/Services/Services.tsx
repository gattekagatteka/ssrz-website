import { useEffect, useState } from 'react'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import './Services.css'
import barzha from '../../assets/barzha.jpg'
import buksir from '../../assets/buksir.jpg'
import marikultura from '../../assets/marikultura.jpg'
import mrds from '../../assets/mrds.jpg'
import vostok from '../../assets/vostok.jpg'
import repair07 from '../../assets/repair_07.jpg'
import repair31 from '../../assets/repair_31.jpg'
import hammelman from '../../assets/hammelman.jpg'

type SpecRow = { label: string; value: string }

function SpecTable({
  title = 'Главные размерения и элементы',
  columns,
  rows,
}: {
  title?: string
  columns: string[]
  rows: SpecRow[]
}) {
  return (
    <div className="services__table-block">
      <div className="services__table-wrap" role="region" aria-label={title} tabIndex={0}>
        <table className="services__table">
          <thead>
            <tr>
              {columns.map((c) => (
                <th key={c} className="services__th">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label}>
                <td className="services__td services__td--label">{r.label}</td>
                <td className="services__td services__td--value" colSpan={Math.max(1, columns.length - 1)}>
                  {r.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function CompareTable({
  columns,
  rows,
}: {
  columns: string[]
  rows: { label: string; v1: string; v2: string }[]
}) {
  return (
    <div className="services__table-block">
      <div className="services__table-wrap" role="region" aria-label={columns.join(' / ')} tabIndex={0}>
        <table className="services__table">
          <thead>
            <tr>
              {columns.map((c) => (
                <th key={c} className="services__th">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label}>
                <td className="services__td services__td--label">{r.label}</td>
                <td className="services__td services__td--value">{r.v1}</td>
                <td className="services__td services__td--value">{r.v2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const services = [
  {
    id: 'sudoremont',
    title: 'Судоремонт',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path
          d="M8 26v12c0 2 2 4 4 4h24c2 0 4-2 4-4V26"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M8 26h32" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 26V18L24 8l12 10v8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="18" cy="32" r="2" fill="currentColor" />
        <circle cx="30" cy="32" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'sudostroenie',
    title: 'Судостроение',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M4 34h40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M8 34V22l8-12 8 4 8-4 8 12v12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M16 22h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 14v8M28 14v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'metallokonstrukcii',
    title: 'Металлоконструкции',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M8 8h32v8H8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 16v16M24 16v16M36 16v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 32h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 36h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'prochie-uslugi',
    title: 'Прочие услуги',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="6" y="10" width="36" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M16 20h16M16 26h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 14v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
]

function Services() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const [lightboxAlt, setLightboxAlt] = useState<string>('')

  useEffect(() => {
    if (!lightboxSrc) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxSrc(null)
    }

    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightboxSrc])

  const openLightbox = (src: string, alt = '') => {
    setLightboxSrc(src)
    setLightboxAlt(alt)
  }

  const closeLightbox = () => setLightboxSrc(null)

  return (
    <>
      <Header />
      <main className="services__main">
        <section className="services__content">
          <h1 className="services__title">Услуги</h1>

          <div className="services__cards">
            {services.map((service) => (
              <a
                key={service.id}
                className="services__card"
                href={`#${service.id}`}
                aria-label={`Перейти к разделу ${service.title}`}
              >
                <div className="services__card-icon">{service.icon}</div>
                <h2 className="services__card-title">{service.title}</h2>
              </a>
            ))}
          </div>

          <div className="services__details">
            <section id="sudoremont" className="services__detail">
              <h2 className="services__detail-title">Судоремонт</h2>

              <div className="services__info-block">
                <div className="services__media-wrap">
                  <div className="services__media-text">
                    <p className="services__info-text">
                      Судоремонт является основным направлением деятельности предприятия и составляет 80% от общего объема производства.
                    </p>

                    <p className="services__info-text">
                      Сегодня, наряду с ремонтом коммерческих судов, принадлежащих судовладельцам Дальнего Востока и стран Азиатско-Тихоокеанского региона,
                      завод выполняет заказы по ремонту Военно-Морского флота и кораблей пограничной службы.
                    </p>

                    <p className="services__info-text">
                      Три дока, специализированные цеха по ремонту всех составных частей судна, оборудованные всеми необходимыми коммуникациями, и достроечные
                      набережные создают условия для выполнения любых видов ремонта — докования, модернизации и переоборудования кораблей и судов различного
                      класса и назначения.
                    </p>

                    <p className="services__info-text">
                      Специалисты нашего завода выполнят ремонт и модернизацию линейных ледоколов, пассажирских, транспортных, нефтеналивных, рыбопромысловых
                      и рыбоперерабатывающих судов, а также буксирного флота, барж и катеров, яхт и судов на подводных крыльях.
                    </p>

                    <h3 className="services__info-subtitle">Основной перечень работ и услуг</h3>
                    <ul className="services__info-list">
                      <li className="services__info-item">Обмыв корпусов судов водой высокого давления.</li>
                      <li className="services__info-item">Пескоструйная и гидравлическая очистка корпусов судов до степени SA-2,5.</li>
                      <li className="services__info-item">Окраска корпусов судов любыми типами красок.</li>
                      <li className="services__info-item">
                        Корпусной ремонт (замена наружной обшивы и набора, наплавка сварных швов, ремонт бортовых килей).
                      </li>
                      <li className="services__info-item">Ремонт донно-забортной арматуры.</li>
                      <li className="services__info-item">Ремонт подруливающих устройств.</li>
                      <li className="services__info-item">Испытание кингстонных шахт, выгородок танков, пиков.</li>
                      <li className="services__info-item">Изготовление новых судовых и других крупногабаритных стальных конструкций.</li>
                      <li className="services__info-item">Ремонт якорей и якорных цепей.</li>
                      <li className="services__info-item">Ремонт всех типов главных и вспомогательных двигателей, вспомогательных механизмов.</li>
                      <li className="services__info-item">
                        Ремонт главного и вспомогательного паровых котлов, утилизационных котлов, теплообменных аппаратов.
                      </li>
                      <li className="services__info-item">Ремонт и изготовление всех видов трубопровода.</li>
                      <li className="services__info-item">Ремонт палубных механизмов и грузовых лебедок, шпилей, брашпилей, палубных рельс.</li>
                      <li className="services__info-item">Ремонт радионавигационного оборудования и судовой автоматики.</li>
                      <li className="services__info-item">Электротехнические работы.</li>
                      <li className="services__info-item">Доставка запчастей и оборудования.</li>
                      <li className="services__info-item">Ремонт коленчатых валов.</li>
                      <li className="services__info-item">Столярные и обивочные работы.</li>
                      <li className="services__info-item">Изготовление резинотехнических изделий.</li>
                    </ul>

                    <h3 className="services__info-subtitle">Технологические возможности</h3>
                    <p className="services__info-text">
                      Завод обладает современным арсеналом средств по очистке корпусов судов абразивным и гидроструйным методами с высокой степенью чистки.
                      Гидродинамическая установка HAMMELMANN позволяет обрабатывать до 70 м² поверхности в час до степени очистки SA-2,5.
                    </p>

                    <p className="services__info-text">
                      Одним из безусловных преимуществ завода является качественный ремонт механизмов винторулевой группы судов. На ССРЗ восстанавливаются
                      любые гребные валы по согласованной с Регистром технологии методом наплавки. Кроме того, на заводе можно заказать гребные валы и баллеры
                      рулей из поковок заказчика. Также завод производит ремонт гребных устройств весом до 120 тонн.
                    </p>

                    <p className="services__info-text">
                      На Славянском СРЗ успешно эксплуатируются более 200 станков. Уникальное оборудование позволяет вести обработку коленчатых валов ДВС в
                      ремонтные размеры согласно ТУ, производит ремонт штоков гидроцилиндров, восстанавливать геометрию разъемов нижних головок шатунов при
                      зубчатом соединении, выполнять любые виды зубофрезерных, шлифовальных и долбежных операций.
                    </p>

                    <p className="services__info-text">
                      Завод имеет единственную на Дальнем Востоке установку для ионного азотирования, на которой производится упрочнение деталей после
                      восстановления их размеров наплавкой и обработкой. Упрочненные таким методом детали приобретают поверхностную твердость 60–65 единиц по
                      Роквеллу, что обеспечивает более длительную эксплуатацию.
                    </p>

                    <p className="services__info-text">
                      Машина термической резки металлов «Кристалл ПКП 2,5» предназначена для автоматизированной вырезки деталей из листового проката с
                      использованием систем числового программного управления. Толщина разрезаемого листа 3–60 мм, габариты вырезаемых деталей — 1465 × 4050 мм.
                    </p>

                    <h3 className="services__info-subtitle">Опыт выполнения заказов</h3>
                    <p className="services__info-text">
                      С 2009 года Славянский СРЗ активно участвует в конкурсах и ремонтирует корабли пограничного управления Приморского края и Сахалинской области.
                      Завод активно принимал участие в подготовке к саммиту АТЭС и изготавливает оболочки причала океанариума на острове Русский. В 2011 году завод
                      приступил к производству плавучих причалов для маломерного флота.
                    </p>
                  </div>

                  <div className="services__figure-column">
                    <figure
                      className="services__figure"
                      role="button"
                      tabIndex={0}
                      onClick={() => openLightbox(repair07)}
                      onKeyDown={(e) => (e.key === 'Enter' ? openLightbox(repair07) : null)}
                    >
                      <img src={repair07} alt="Ремонт корпуса" />
                    </figure>

                    <figure
                      className="services__figure"
                      role="button"
                      tabIndex={0}
                      onClick={() => openLightbox(hammelman)}
                      onKeyDown={(e) => (e.key === 'Enter' ? openLightbox(hammelman) : null)}
                    >
                      <img src={hammelman} alt="Установка Hammelmann" />
                    </figure>

                    <figure
                      className="services__figure"
                      role="button"
                      tabIndex={0}
                      onClick={() => openLightbox(repair31)}
                      onKeyDown={(e) => (e.key === 'Enter' ? openLightbox(repair31) : null)}
                    >
                      <img src={repair31} alt="Работы на доке" />
                    </figure>
                  </div>
                </div>
              </div>
            </section>

            <section id="sudostroenie" className="services__detail">
              <h2 className="services__detail-title">Судостроение</h2>
              <div className="services__info-block">
                <div className='services__media-text'>
                  <p className="services__info-text">
                    Начиная с 1973 года, на ССРЗ параллельно с работами по ремонту и переоборудованию судов шло строительство маломерного флота. Объем судостроения
                    составлял до 40% от общего объема продукции предприятия.
                  </p>

                  <h3 className="services__info-subtitle">Построено</h3>
                  <ul className="services__info-list">
                    <li className="services__info-item">Самоходные баржи проекта «Восток» — 206 единиц.</li>
                    <li className="services__info-item">Самоходные баржи «Славянка» — 22 единицы.</li>
                    <li className="services__info-item">Баржи г/п 400 т.</li>
                    <li className="services__info-item">Плавучие пирсы — 13 единиц.</li>
                    <li className="services__info-item">Плавучие контейнеры (лихтеры) — 646 единиц.</li>
                  </ul>

                  <p className="services__info-text">
                    В 2003 году завод был номинирован Министерством транспорта РФ как базовое предприятие на российском Дальнем Востоке по строительству
                    малотоннажного портового флота. ССРЗ предлагает обоснованные и конкурентоспособные условия. Кроме того, славянцы в состоянии решить проблемы,
                    связанные с модернизацией и переоборудованием судов.
                  </p>

                  <p className="services__info-text">
                    Баржи по проекту «Восток» на ССРЗ выпускают с 1973 года. Последняя баржа была спущена на воду в 2006 году.
                  </p>

                  <p className="services__info-text">
                    В 2007–2008 гг. в рамках выигранного конкурса реализован проект по строительству двух самоходных барж «Славянка» пр. 20150.
                  </p>

                </div>

                <div className="services__media-wrap">
                  <div className="services__media-text">
                    <CompareTable
                      columns={['Главные размерения и элементы', 'Баржа «Восток», пр. 1733', 'Баржа «Славянка», пр. 20150']}
                      rows={[
                        { label: 'Длина габаритная, м', v1: '16,56', v2: '21,95' },
                        { label: 'Ширина габаритная, м', v1: '4,79', v2: '5,82' },
                        { label: 'Высота борта, м', v1: '1,35', v2: '1,56' },
                        { label: 'Осадка средняя в полном грузу, м', v1: '0,94', v2: '1,10' },
                        { label: 'Грузоподъемность, т', v1: '20', v2: '40' },
                        { label: 'Мощность ГЦ ЗД6Н-235, кВт', v1: '173', v2: '2 × 173' },
                        { label: 'Скорость, узлов', v1: '8,2', v2: '9,85' },
                        { label: 'Экипаж, чел.', v1: '2', v2: '2' },
                        { label: 'Класс Регистра', v1: 'КМ®III', v2: 'КМ®III' },
                      ]}
                    />
                  </div>

                  <div className="services__figure-column">
                    <figure
                      className="services__figure"
                      role="button"
                      tabIndex={0}
                      onClick={() => openLightbox(vostok, 'Баржа «Восток»')}
                      onKeyDown={(e) => (e.key === 'Enter' ? openLightbox(vostok, 'Баржа «Восток»') : null)}
                    >
                      <img src={vostok} alt="Баржа «Восток»" />
                      <figcaption>Баржа «Восток»</figcaption>
                    </figure>
                  </div>
                </div>
                <div className='services__media-text'>
                  <p className="services__info-text">
                    Самоходные баржи «Восток» пр. 1733 и «Славянка» пр. 20150 незаменимы в условиях необорудованного приморского побережья. Они обладают
                    маневренностью и достаточной мореходностью. Осадка при полной загрузке — менее одного метра, что позволяет подходить к любому берегу.
                  </p>

                  <p className="services__info-text">
                    Благодаря широкой аппарели в носовой части грузовой, легковой и специальный автотранспорт может легко въезжать на борт судна. Плавсредство
                    оборудовано лебедкой для затягивания груза. Возможна доукомплектация «волокушами» для выгрузки на необорудованный берег. Баржи в состоянии
                    перевозить до 40 тонн различных грузов.
                  </p>

                  <p className="services__info-text">
                    Продолжая строительство традиционных типов плавсредств, предприятие произвело дооснащение судостроительных мощностей современным технологическим
                    оборудованием, что позволяет строить суда не только малого, но и среднего тоннажа.
                  </p>
                </div>

                <h3 className="services__info-subtitle">Самоходная баржа г/п 150 т</h3>

                <div className="services__media-row">
                  <div className="services__media-content">
                    <SpecTable
                      columns={['Главные размерения и элементы', '']}
                      rows={[
                        { label: 'Длина габаритная, м', value: '38,40' },
                        { label: 'Ширина габаритная, м', value: '7,50' },
                        { label: 'Высота борта, м', value: '2,50' },
                        { label: 'Осадка средняя в полном грузу, м', value: '1,94' },
                        {
                          label: 'Грузоподъемность, т',
                          value: 'песок — 165; уголь — 140; генгруз — 125; контейнеры ИСО-1С — 7 шт / 85',
                        },
                        { label: 'Главный двигатель СДРА-300, кВт', value: '220' },
                        { label: 'Грузовой кран г/п, т', value: '3,2' },
                        { label: 'Скорость, узл', value: '8,0' },
                        { label: 'Экипаж, чел.', value: '6' },
                        { label: 'Класс Регистра', value: 'КМ ЛУ1 I А3' },
                      ]}
                    />
                  </div>

                  <figure
                    className="services__figure"
                    role="button"
                    tabIndex={0}
                    onClick={() => openLightbox(barzha, 'Самоходная баржа г/п 150 т')}
                    onKeyDown={(e) => (e.key === 'Enter' ? openLightbox(barzha, 'Самоходная баржа г/п 150 т') : null)}
                  >
                    <img src={barzha} alt="Самоходная баржа г/п 150 т" />
                    <figcaption>Самоходная баржа г/п 150 т</figcaption>
                  </figure>
                </div>
                <div className='services__media-text'>
                  <p className="services__info-text">
                    Самоходная баржа — однопалубное судно-площадка, с баком, квартердеком, надстройкой и рубкой, с кормовым расположением машинного отделения,
                    одновинтовое с дизельной энергетической установкой.
                  </p>

                  <p className="services__info-text">
                    Назначение судна и район плавания — перевозка генеральных, насыпных, лесных грузов и контейнеров; район плавания — ограниченный 1.
                  </p>

                  <h4 className="services__info-subtitle services__info-subtitle--small">Автономность плавания</h4>
                  <ul className="services__info-list">
                    <li className="services__info-item">По запасам топлива, масла: 10 суток.</li>
                    <li className="services__info-item">По запасам пресной воды: 10 суток.</li>
                    <li className="services__info-item">По сдаче нефтеостатков и хозбытовых вод: 10 суток.</li>
                    <li className="services__info-item">По сдаче мусора: 5 суток.</li>
                  </ul>
                </div>

                <h3 className="services__info-subtitle">Малое рыболовное добывающее судно пр. 20090.1</h3>

                <div className="services__media-row">
                  <div className="services__media-content">
                    <SpecTable
                      columns={['Главные размерения и элементы', '']}
                      rows={[
                        { label: 'Длина габаритная, м', value: '31,76' },
                        { label: 'Ширина габаритная, м', value: '8,70' },
                        { label: 'Высота борта, м', value: '4,20' },
                        { label: 'Осадка средняя в полном грузу, м', value: '3,70' },
                        { label: 'Грузоподъемность, т', value: '60' },
                        { label: 'Главный двигатель ДРА, кВт', value: '440' },
                        { label: 'Скорость, узл', value: '9,5' },
                        { label: 'Экипаж, чел.', value: '12' },
                        { label: 'Класс Регистра', value: 'КМ ЛУ2 I Рыболовное' },
                      ]}
                    />
                  </div>

                  <figure
                    className="services__figure"
                    role="button"
                    tabIndex={0}
                    onClick={() => openLightbox(mrds, 'Малое рыболовное добывающее судно пр. 20090.1')}
                    onKeyDown={(e) => (e.key === 'Enter' ? openLightbox(mrds, 'Малое рыболовное добывающее судно пр. 20090.1') : null)}
                  >
                    <img src={mrds} alt="Малое рыболовное добывающее судно" />
                    <figcaption>Малое рыболовное добывающее судно пр. 20090.1</figcaption>
                  </figure>
                </div>
                <div className='services__media-text'>
                  <p className="services__info-text">
                    Тип судна — однопалубное судно морского плавания, одновинтовое с дизельной энергетической установкой, винт в поворотной насадке, с кормовым
                    расположением машинного отделения и слипом в корме для постановки и выборки трала и снюрревода.
                  </p>

                  <p className="services__info-text">
                    Назначение — лов рыбы в морях Дальневосточного бассейна с температурными режимами воздуха летом до +25°C, зимой — до −23°C.
                  </p>

                  <p className="services__info-text">
                    Сезоны работы — круглый год, с учетом ледовой обстановки согласно классу судна (регулярное самостоятельное плавание в мелкобитом разреженном
                    льду толщиной до 0,55 м со скоростью 5 узлов).
                  </p>

                  <h4 className="services__info-subtitle services__info-subtitle--small">Автономность плавания</h4>
                  <ul className="services__info-list">
                    <li className="services__info-item">По запасам топлива, масла: 14 суток.</li>
                    <li className="services__info-item">По запасам пресной воды: неограниченно (опреснитель).</li>
                    <li className="services__info-item">По запасам провизии: 14 суток.</li>
                  </ul>

                  <p className="services__info-text">Производственно-технологическое оборудование — с использованием установки «жидкий лед».</p>
                </div>


                <h3 className="services__info-subtitle">Судно для обслуживания марикультуры (подготовка производства)</h3>

                <div className="services__media-row">
                  <div className="services__media-content">
                    <SpecTable
                      columns={['Главные размерения и элементы', '']}
                      rows={[
                        { label: 'Длина габаритная, м', value: '16,00' },
                        { label: 'Ширина габаритная, м', value: '5,40' },
                        { label: 'Высота борта, м', value: '2,10' },
                        { label: 'Грузоподъемность, т', value: '15' },
                        { label: 'Водоизмещение полное, т', value: '48' },
                        { label: 'Главный двигатель ДРА, кВт', value: '55' },
                        { label: 'Скорость, узл', value: '8' },
                        { label: 'Экипаж, чел.', value: '2' },
                        { label: 'Класс Регистра', value: 'КМ ЛУ1 III Рыболовное' },
                      ]}
                    />
                  </div>

                  <figure
                    className="services__figure"
                    role="button"
                    tabIndex={0}
                    onClick={() => openLightbox(marikultura, 'Судно для обслуживания марикультуры')}
                    onKeyDown={(e) => (e.key === 'Enter' ? openLightbox(marikultura, 'Судно для обслуживания марикультуры') : null)}
                  >
                    <img src={marikultura} alt="Судно для обслуживания марикультуры" />
                    <figcaption>Судно для обслуживания марикультуры</figcaption>
                  </figure>
                </div>
                <div className='services__media-text'>
                  <p className="services__info-text">
                    Тип судна — однопалубное судно морского прибрежного плавания, одновинтовое с дизельной энергетической установкой, винт в поворотной насадке,
                    с кормовым расположением машинного отделения.
                  </p>

                  <p className="services__info-text">
                    Назначение — обслуживание плантаций марикультуры в морях Дальневосточного бассейна.
                  </p>

                  <h4 className="services__info-subtitle services__info-subtitle--small">Автономность плавания</h4>
                  <ul className="services__info-list">
                    <li className="services__info-item">По запасам топлива, масла: 7 суток.</li>
                    <li className="services__info-item">По запасам пресной воды: 3 суток.</li>
                  </ul>
                </div>


                <h3 className="services__info-subtitle">Морской буксир</h3>

                <div className="services__media-row">
                  <div className="services__media-content">
                    <SpecTable
                      columns={['Главные размерения и элементы', '']}
                      rows={[
                        { label: 'Длина габаритная, м', value: '30,30' },
                        { label: 'Ширина габаритная, м', value: '9,50' },
                        { label: 'Высота борта, м', value: '4,80' },
                        { label: 'Осадка средняя в полном грузу, м', value: '4,30' },
                        { label: 'Главный двигатель, кВт', value: '2 × 1305' },
                        { label: 'Скорость, узл', value: '12,0' },
                        { label: 'Экипаж, чел.', value: '9' },
                        { label: 'Класс Регистра', value: 'КМ ЛУ5 II А1 буксир' },
                      ]}
                    />
                  </div>

                  <figure
                    className="services__figure"
                    role="button"
                    tabIndex={0}
                    onClick={() => openLightbox(buksir, 'Морской буксир')}
                    onKeyDown={(e) => (e.key === 'Enter' ? openLightbox(buksir, 'Морской буксир') : null)}
                  >
                    <img src={buksir} alt="Морской буксир" />
                    <figcaption>Морской буксир</figcaption>
                  </figure>
                </div>
                <div className='services__media-text'>
                  <p className="services__info-text">
                    Двухвинтовой, однопалубный буксир с винтами регулируемого шага и поворотными насадками тягой на швартовых не менее 40 тонн для выполнения
                    буксирно-кантовочных операций. Конструкция корпуса может быть дополнительно доработана по результатам технической экспертизы на соответствие
                    ледовым условиям эксплуатации.
                  </p>
                </div>

              </div>
            </section>

            <section id="metallokonstrukcii" className="services__detail">
              <h2 className="services__detail-title">Металлоконструкции</h2>

              <div className="services__info-block">
                <p className="services__info-text">
                  Участок занимается изготовлением металлоконструкций для объектов капитального строительства и индивидуальных заказов по чертежам заказчика или по
                  эскизам и техническим требованиям, предлагая заказчику конструкторское сопровождение и обеспечение заказа.
                </p>

                <p className="services__info-text">
                  Участок закупает материал для изготовления конструкций в строгом соответствии с требованиями конструкторской документации с предоставлением
                  сертификатов, актов входного контроля или использует материал, предоставляемый заказчиком. Заказчику предоставляется полный пакет документов на
                  изделие. На участке ведется постоянный пооперационный контроль качества за изготовлением продукции.
                </p>

                <p className="services__info-text">
                  Завод располагает новым оборудованием и специалистами в области проведения дефектоскопии разных видов, что позволяет производить сварочные работы в
                  соответствии с требованиями к данным конструкциям и изделиям.
                </p>

                <p className="services__info-text">
                  Персонал обладает достаточной квалификацией и разрядами для выполнения различных сложных задач. Сварщики постоянно подтверждают аттестации НАКС и
                  требования Регистра РМС.
                </p>

                <p className="services__info-text">
                  Участок располагает современным сварочным оборудованием для качественного выполнения любого заказа. Для изготовления деталей из листового проката на
                  участке имеется станок плазменной резки, способный производить качественную резку металла толщиной от 1 до 70 мм. По желанию заказчика детали и
                  конструкции могут пройти дробеструйную обработку гупершлаком, а также могут быть огрунтованы и окрашены.
                </p>

                <h3 className="services__info-subtitle">Сервис и сопровождение</h3>
                <ul className="services__info-list">
                  <li className="services__info-item">Конструкторское сопровождение и обеспечение заказа.</li>
                  <li className="services__info-item">Поставка материалов с подтверждающими документами (сертификаты, акты входного контроля).</li>
                  <li className="services__info-item">Пооперационный контроль качества на всех этапах.</li>
                  <li className="services__info-item">Ответственное хранение и своевременная доставка продукции.</li>
                </ul>

                <p className="services__info-text">
                  Мы рады всегда пойти навстречу пожеланиям заказчика в изготовлении, закупке материала, ответственном хранении и своевременной доставке продукции.
                </p>

                <h3 className="services__info-subtitle">Партнеры</h3>
                <p className="services__info-text">
                  Нашими партнерами были: ООО «Технология», ЗАО «ПО Технорос» и ООО «Запсибгазпром-Газификация», с которыми мы продолжаем сотрудничество и сейчас.
                </p>
              </div>
            </section>

            <section id="prochie-uslugi" className="services__detail">
              <h2 className="services__detail-title">Прочие услуги</h2>

              <div className="services__info-block">
                <p className="services__info-text">
                  Помимо основных видов деятельности наш завод готов предложить своим партнерам следующие виды услуг:
                </p>

                <ul className="services__info-list">
                  <li className="services__info-item">Восстановление деталей СЗЧ.</li>
                  <li className="services__info-item">Точная автоматизированная резка листового проката толщиной до 60 мм.</li>
                  <li className="services__info-item">Автотранспортные услуги.</li>
                  <li className="services__info-item">Зачистка топливных танков.</li>
                  <li className="services__info-item">Сбор лояльных вод.</li>
                  <li className="services__info-item">Бункеровка водой.</li>
                  <li className="services__info-item">Оформление автотранспорта.</li>
                  <li className="services__info-item">Навигационный ремонт судов в межрейсовом режиме (г. Владивосток).</li>
                  <li className="services__info-item">Морское агентирование.</li>
                  <li className="services__info-item">Снабжение судов.</li>
                  <li className="services__info-item">Услуги плавучего крана.</li>
                  <li className="services__info-item">Конструкторские услуги.</li>
                  <li className="services__info-item">Технологические услуги.</li>
                  <li className="services__info-item">Производство и реализация углекислоты, кислорода и ацетилена в баллонах.</li>
                </ul>
              </div>
            </section>
          </div>
        </section>
      </main>

      {lightboxSrc && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <div className="lightbox__backdrop" />
          <div className="lightbox__panel" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="lightbox__close" onClick={closeLightbox} aria-label="Закрыть">
              ×
            </button>
            <img src={lightboxSrc} alt={lightboxAlt} className="lightbox__img" />
            {lightboxAlt && <div className="lightbox__caption">{lightboxAlt}</div>}
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}

export default Services