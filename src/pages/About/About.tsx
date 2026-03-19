import { useState, useEffect } from 'react'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import './About.css'
import history01 from '../../assets/history_01.jpg'
import lakiza from '../../assets/lakiza.jpg'
import lihter from '../../assets/lihter.jpg'
import ReactMarkdown from 'react-markdown'
import personalPolicy from '../../content/policies/personal.md?raw'
import qualityPolicy from '../../content/policies/quality.md?raw'
import todayContent from '../../content/today.md?raw'
import fcc17 from '../../assets/fcc_17.jpg'
import fcc03 from '../../assets/fcc_03.jpg'
import fcc10 from '../../assets/fcc_10.jpg'
import fcc11 from '../../assets/fcc_11.jpg'
import fcc12 from '../../assets/fcc_12.jpg'
import fcc21 from '../../assets/fcc_21.jpg'
import fcc26 from '../../assets/fcc_26.jpg'
import fcc27 from '../../assets/fcc_27.jpg'
import fcc22 from '../../assets/fcc_22.jpg'
import fcc07 from '../../assets/fcc_07.jpg'
import fcc05 from '../../assets/fcc_05.jpg'
import annexEng from '../../assets/certificates/annex_cert_eng.jpg'
import annexRus from '../../assets/certificates/annex_cert_rus.jpg'
import annexRusTranslate from '../../assets/certificates/annex_cert_rus_translate.jpg'

import certEng from '../../assets/certificates/cert_eng.jpg'
import certRus from '../../assets/certificates/cert_rus.jpg'
import certRusTranslate from '../../assets/certificates/cert_rus_translate.jpg'

import svid1 from '../../assets/certificates/svid_1.jpg'
import svidRegistry from '../../assets/certificates/svid_registry.jpg'
import svidResident from '../../assets/certificates/svid_resident.jpg'

import licAmmo from '../../assets/certificates/lic_ammo.pdf'
import licBuksir from '../../assets/certificates/lic_buksir.pdf'
import licGostaina from '../../assets/certificates/lic_gostaina.jpg'
import licRests from '../../assets/certificates/lic_rests.pdf'
import oboroncert from '../../assets/certificates/oboroncert.pdf'
import svidSro from '../../assets/certificates/svid_sro.pdf'

const vacancies = [
  'Сменный электромеханик (судовой)',
  'Сменный механик (судовой)',
  'Машинист крана (крановщик)',
  'Маляры судовые',
  'Судокорпусники-ремонтники',
  'Слесари-судоремонтники',
  'Столяры судовые',
  'Слесари-ремонтники',
  'Трубопроводчики судовые',
  'Токари',
  'Токарь-расточник',
  'Такелажники судовые',
  'Фрезеровщики',
  'Электросварщики',
  'Электрогазосварщики',
  'Электромонтажники судовые',
  'Электромонтеры по ремонту и обслуживанию электрооборудования',
]

const policies = [
  { id: 'policy-1', title: 'Политика в области качества', md: qualityPolicy },
  { id: 'policy-2', title: 'Политика обработки персональных данных', md: personalPolicy },
]

const documents = [
  {
    title: 'Инструкция о пропускном и объектовом режиме',
    file: '/docs/security/Instruction.pdf',
    type: 'pdf',
  },
  {
    title: 'Правила допуска на объект транспортной инфраструктуры ПАО "Славянский СРЗ" от 02.06.2017 г.',
    file: '/docs/security/Admission_Rules.pdf',
    type: 'pdf',
  },
  {
    title: 'Приказ ДВТУ Росграницы № 154 от 19.10.2015',
    file: '/docs/security/Prikaz_DVTU_RG_154_20151019.pdf',
    type: 'pdf',
  },
  {
    title: 'Приказ № 220 от 02.06.2017 об утверждении Правил допуска на объект транспортной инфраструктуры',
    file: '/docs/security/Prikaz_220_20170602.pdf',
    type: 'pdf',
  },
  {
    title: 'Приказ № 345 от 24.10.2019 О внесении изменений в Правила допуска',
    file: '/docs/security/Prikaz_345_20191024.pdf',
    type: 'pdf',
  },
  {
    title: 'Приказ Росграницы № 451-ОД от 27.12.2010',
    file: '/docs/security/Prikaz_RG_451_20101227.docx',
    type: 'doc',
  },
  {
    title: 'Заявка на материальный пропуск',
    file: '/docs/security/Mat_Propusk.docx',
    type: 'doc',
  },
  {
    title: 'Приложение 9 - Заявка на выдачу материального пропуска на ввоз-вывоз ТМЦ',
    file: '/docs/security/Pril-9_Mat_Propusk.docx',
    type: 'doc',
  },
  {
    title: 'Приложение 10 - Заявка на пропуск личный постоянный или временный',
    file: '/docs/security/Pril-10_Lichn_Propusk_Post_Vrem.docx',
    type: 'doc',
  },
  {
    title: 'Приложение 11 - Заявка на пропуск личный разовый',
    file: '/docs/security/Pril-11_Lichn_Propusk_Raz.docx',
    type: 'doc',
  },
  {
    title: 'Приложение 12 - Заявка на выдачу материального пропуска предметов и веществ',
    file: '/docs/security/Pril-12_Mat_Propusk.docx',
    type: 'doc',
  },
  {
    title: 'Приложение 13 - Заявка на пропуск транспортный постоянный или временный',
    file: '/docs/security/Pril-13_Transp_Propusk_Post_Vrem.docx',
    type: 'doc',
  },
  {
    title: 'Приложение 14 - Заявка на пропуск транспортный разовый',
    file: '/docs/security/Pril-14_Transp_Propusk_Raz.docx',
    type: 'doc',
  },
]

const cerlicsvid = [
  {
    title: 'Сертификат соответствия системы менеджмента качества № 13.0227.026 от 18 января 2016 года.',
    category: 'Сертификаты',
    type: 'image',
    file: certRus,
  },
  {
    title: 'Обратная сторона сертификата соответствия системы менеджмента качества № 13.0227.026 от 18 января 2016 года.',
    category: 'Сертификаты',
    type: 'image',
    file: annexRus,
  },
  {
    title: 'Сертификат соответствия системы менеджмента качества № 13.0227.026 от 18 января 2016 года. (англ.)',
    category: 'Сертификаты',
    type: 'image',
    file: certRusTranslate,
  },
  {
    title: 'Обратная сторона сертификата соответствия системы менеджмента качества № 13.0227.026 от 18 января 2016 года. (англ)',
    category: 'Сертификаты',
    type: 'image',
    file: annexRusTranslate,
  },
  {
    title: 'Сертификат соответствия № RU-16.0153.026 от 18 февраля 2016 года.',
    category: 'Сертификаты',
    type: 'image',
    file: certEng,
  },
  {
    title: 'Обратная сторона сертификата соответствия № RU-16.0153.026 от 18 февраля 2016 года.',
    category: 'Сертификаты',
    type: 'image',
    file: annexEng,
  },
  {
    title: 'Сертификат соответствия ВС № 16.842.026 от 08 сентября 2016 года.',
    category: 'Сертификаты',
    type: 'pdf',
    file: oboroncert,
  },
  {
    title: 'Свидетельство о соответствии предприятия требованиям Российского морского регистра судоходства № 08.00047.170 от 25.09.2008 г.',
    category: 'Свидетельства',
    type: 'image',
    file: svid1,
  },
  {
    title: 'Свидетельство о внесении в Национальный Реестр "Ведущие промышленные предприятия России - 2011" № 1040 от 12.12.2011г.',
    category: 'Свидетельства',
    type: 'image',
    file: svidRegistry,
  },
  {
    title: 'Свидетельство, удостоверяющее регистрацию юридического лица или индивидуального предпринимателя в качестве резидента свободного порта Владивосток.',
    category: 'Свидетельства',
    type: 'image',
    file: svidResident,
  },
  {
    title: 'Свидетельство о допуске к определенному виду или видам работ, которые оказывают влияние на безопасность объектов капитального строительства № 842.01-2014-2531001535-С-274 от 20.10.2014 г.',
    category: 'Свидетельства',
    type: 'pdf',
    file: svidSro,
  },

  {
    title: 'Лицензия на ремонт вооружений и военной техники. Серия 003135 №003278 ВВТ-Р от 06.08.2014г.',
    category: 'Лицензии',
    type: 'pdf',
    file: licAmmo,
  },
  {
    title: 'Лицензия на деятельность по осуществлению буксировок морским транспортом. Серия МТ-3 №001576 от 14.01.2015г. ',
    category: 'Лицензии',
    type: 'pdf',
    file: licBuksir,
  },
  {
    title: 'Лицензия на осуществление работ, связанных с использованием сведений, составляющих государственную тайну. Серия ГТ 0066992 №1293 от 20.02.2014г.',
    category: 'Лицензии',
    type: 'image',
    file: licGostaina,
  },
  {
    title: 'Лицензия на осуществление деятельности по транспортированию отходов IV класса опасности. Серия 025 №00239 от 08.08.2016г.',
    category: 'Лицензии',
    type: 'pdf',
    file: licRests,
  },
]

function About() {
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

  const mdComponents = {
    p: (props: any) => <p className="about__info-text" {...props} />,
    h1: (props: any) => <h3 className="about__info-subtitle" {...props} />,
    h2: (props: any) => <h3 className="about__info-subtitle" {...props} />,
    h3: (props: any) => <h4 className="about__info-subtitle" {...props} />,
    h4: (props: any) => <h4 className="about__info-subtitle" {...props} />,
    ul: (props: any) => <ul className="about__info-list" {...props} />,
    ol: (props: any) => <ol className="about__info-list" {...props} />,
    li: (props: any) => <li className="about__info-item" {...props} />,
    a: (props: any) => <a className="about__vacancies-note-link" {...props} />,
  }

  return (
    <>
      <Header />
      <main className="about__main">
        <section className="about__content">
          <h1 className="about__title">О нас</h1>

          <nav className="about__nav-section">
            <p className="about__nav-label">На этой странице:</p>
            <div className="about__nav">
              <a href="#history" className="about__nav-link">История завода</a>
              <a href="#today" className="about__nav-link">ССРЗ сегодня</a>
              <a href="#vacancies" className="about__nav-link">Вакансии</a>
              <a href="#policies" className="about__nav-link">Политики предприятия</a>
              <a href="#security" className="about__nav-link">Транспортная безопасность</a>
              <a href="#productivity" className="about__nav-link">Производительность труда и поддержка занятости</a>
              <a href="#quality" className="about__nav-link">Система менеджмента качества</a>
            </div>
          </nav>

          <section id="history" className="about__detail">
            <h2 className="about__detail-title">История завода</h2>

            <div className="about__info-block">
              <div className="about__media-wrap">
                <div className="about__media-text">
                  <p className="about__info-text">
                    В соответствии с приказом Министра ММФ СССР № 197 от 19 сентября 1964 года для осуществления руководства организована дирекция строящегося
                    судоремонтного завода в бухте Славянка, которую возглавил Карамушко Фёдор Дмитриевич.
                  </p>

                  <p className="about__info-text">
                    Особенность становления будущего завода заключалась в том, что он начал действовать, выполнять государственный план и наращивать мощности, когда
                    все производственные площадки завода находились в стадии строительства.
                  </p>

                  <p className="about__info-text">
                    С завершением строительства части объектов первой очереди завода, с вводом в эксплуатацию производственных мощностей блока цехов № 1 и организацией
                    ремонта судов ДВМП в Славянке приказом Министра морского флота Т.Б. Гуженко № 47 от 6 апреля 1970 года создан Славянский судоремонтный завод на
                    самостоятельном балансе с подчинением Дальневосточному пароходству. 1970 год — год рождения завода.
                  </p>

                  <p className="about__info-text">С декабря 1971 года Славянский СРЗ возглавил Максимов Михаил Матвеевич.</p>

                  <h3 className="about__info-subtitle">Ключевые вехи</h3>
                  <ul className="about__info-list">
                    <li className="about__info-item">1970 — создан Славянский судоремонтный завод на самостоятельном балансе.</li>
                    <li className="about__info-item">1971 — назначен директор Максимов М.М.</li>
                    <li className="about__info-item">1973 — заложена и спущена на воду первая самоходная баржа «Восток».</li>
                    <li className="about__info-item">1977 — установлен второй плавучий док грузоподъёмностью 30 000 тонн.</li>
                  </ul>

                  <p className="about__info-text">
                    4 мая 1973 года была заложена первая самоходная баржа «Восток», а 26 декабря этого же года она была спущена на воду. К концу 9-й пятилетки
                    (1971–1975 гг.) барж «Восток» было построено 26 единиц.
                  </p>

                  <p className="about__info-text">
                    В эти годы за трудовые достижения коллективу завода неоднократно присуждаются первые места по итогам социалистического соревнования.
                  </p>

                  <p className="about__info-text">
                    В коллективе появились первые орденоносцы. За успешное выполнение плана 9-й пятилетки орденом «Трудового Красного Знамени» был награждён
                    бригадир слесарей-судоремонтников Лакиза К.С. (фото), орденом «Знак Почёта» — бригадир корпусников-ремонтников Нефанский В.И. Получили
                    высокие правительственные награды и другие работники.
                  </p>

                  <p className="about__info-text">
                    К середине 70-х завод становится современным судоремонтным предприятием, способным решать практически любые технические вопросы судоремонта,
                    оснащенным современным технологическим оборудованием с развитой организацией труда и квалифицированными кадрами рабочих и инженерно-технических
                    специалистов.
                  </p>

                  <p className="about__info-text">
                    В мае 1977 года на акватории завода устанавливается второй плавучий док, пришедший из Югославии, грузоподъёмностью 30 000 тонн — в те годы
                    крупнейший на Дальнем Востоке. В декабре 1978 года славянские судоремонтники впервые отдоковали в нём ледоколы «Ленинград» и «Адмирал Макаров».
                    В 1977 году на заводе приступили к выпуску нового вида продукции — строительству плавучих причалов специального назначения, которых было
                    построено 12 единиц, и барж-площадок проекта 1735 грузоподъёмностью 400 тонн. Головной образец баржи-площадки был сдан в 1978 году. В 1979 году
                    приступили к строительству новой самоходной баржи «Славянка», одновременно продолжая выпуск барж «Восток».
                  </p>

                  <p className="about__info-text">
                    Впервые с 1977 года Славянский СРЗ по планам внутриминистерской кооперации начал изготавливать сменно-запасные части (СЗЧ) двигателей внутреннего
                    сгорания и выпускать продукцию машиностроения — грейфера, торцевальные и точковочные станки, контейнеры-волокуши, а также производить товары
                    культурно-бытового назначения и хозяйственного обихода.
                  </p>

                  <p className="about__info-text">
                    Наращивая темпы производства не забывалось и о качестве выпускаемой продукции. Уже в 1972 году на заводе внедряется система бездефектного
                    изготовления продукции, а с 1977 года начала разрабатываться и внедряться комплексная система управления качеством продукции. Это позволило
                    довести процент сдачи продукции с 93% в 1972 году до 98,4% в 1979 году. В те годы с заводским «Аттестатом качества» выпускалось четыре изделия и
                    два технологических процесса.
                  </p>

                  <p className="about__info-text">
                    Прошли большой творческий путь строители А.М. Мельниченко, А.И. Лавренов, Н.В. Шишкарёв, С.С. Казанко, А.А. Бузин. От рядовых мастеров до
                    заместителей начальников подразделений дошли Ю.Н. Сидоров, П.Г. Курский, А.М. Малиновский, В.Г. Прибытков. Свой трудовой путь начинали с
                    мастеров и достигли должностей руководителей основными цехами Б.М. Артюхов, Ю.Ф. Иванов, В.В. Корягин, Ю.А. Яковлев, Г.В. Апанасенко. До
                    главных специалистов и руководителей — В.И. Сидоров, Н.В. Бабаков, А.Л. Смирнов.
                  </p>

                  <p className="about__info-text">
                    Росли и комплектовались производственные бригады, совершенствовалось мастерство, закладывался фундамент заводских успехов трудом многих
                    замечательных рабочих, кто служил примером молодым рабочим, пришедшим из ГПТУ и школ.
                  </p>

                  <p className="about__info-text">
                    В судостроении планировалось освоение выпуска рейдовых катеров, судов на воздушной подушке, строительство цеха-завода по выпуску лихтеров типа
                    ЛЭШ с программой выпуска 120 лихтеров в год.
                  </p>

                  <p className="about__info-text">
                    Строительство лихтерного комплекса было начато в 1981 году по финскому проекту с участием финнов.
                  </p>

                  <p className="about__info-text">
                    В 1981 году Славянский СРЗ за высокие показатели в труде занесён на Всесоюзную Доску Почёта ВДНХ СССР, награждён переходящим Красным знаменем
                    ЦК КПСС, Совета Министров и ЦК ВЛКСМ и трижды награждался по итогам кварталов знаменем Министерства морского флота. Переходящим Красным знаменем
                    ММФ завод трижды награждался и в 1982 году.
                  </p>

                  <p className="about__info-text">
                    С 1983 года директора Максимов Михаила Матвеевича перевели главным инженером Дальневосточного Морского Пароходства, и завод возглавил Жан
                    Андреевич Мазница.
                  </p>

                  <p className="about__info-text">
                    В 1984 году на завод для ремонта прибыло тысячное судно — теплоход «Ольга Садовская».
                  </p>

                  <p className="about__info-text">
                    В эти годы разработана, утверждена и зарегистрирована «Комплексная система управления качеством продукции». Её цель — обеспечение соответствия
                    качества продукции и услуг технической документации и Правилам Морского Регистра Судоходства.
                  </p>

                  <p className="about__info-text">
                    На заводе существуют более 60 видов профессий и специальностей, что позволяет производить комплексный ремонт судов, действуют 159 бригад основного
                    и вспомогательного производства.
                  </p>

                  <p className="about__info-text">
                    В 1988 году из Югославии подошёл 3-й плавучий док грузоподъёмностью 36 000 тонн. Подход этого крупнейшего на Дальнем Востоке дока дал
                    возможность производить докование судов любого класса и любого водоизмещения, имеемых в составе флота Российской Федерации, — вплоть до
                    докования лихтеровозов с атомными силовыми установками.
                  </p>

                  <p className="about__info-text">
                    В эти годы, наряду с судостроением и судоремонтом, завод продолжает заниматься производством сменно-запасных частей для двигателей внутреннего
                    сгорания, гребных валов для крупно-тоннажных судов, гребных винтов, средств механизации для погрузочно-разгрузочных работ в морских портах.
                    Например: зерноперегружатели, точковочные станки, грузовые площадки, грейфера для разгрузки и погрузки сыпучих грузов грузоподъёмностью 3 и 5
                    тонн.
                  </p>

                  <p className="about__info-text">
                    С февраля 1990 года на заводе в цехе 02 начал функционировать участок станков с цифровым программным управлением. По подсчётам специалистов
                    производительность станочного парка здесь в трое выше обычной. Организационную работу по созданию участка, планированию, заказу станков и их
                    размещению провёл инженер бюро развития производства М.Ф. Купера.
                  </p>

                  <p className="about__info-text">
                    В начале 1993 года завершился первый этап преобразования предприятия — с 15 февраля завод стал Акционерным Обществом Открытого Типа.
                  </p>

                  <p className="about__info-text">
                    Прорабатываются вопросы строительства специализированного перегрузочного комплекса, вопрос перевалки и бункеровки судов нефтепродуктами.
                    Совместно с Администрацией Приморского края готовятся документы для рассмотрения в правительстве РФ об открытии Славянки для захода судов под
                    иностранным флагом.
                  </p>

                  <p className="about__info-text">
                    В 1995 году завод получил Сертификат, удостоверяющий вхождение в состав 5 тысяч ведущих предприятий со статусом «Лидер российской экономики».
                  </p>

                  <p className="about__info-text">
                    В 1997 году наращивались объёмы услуг «Порта» по перевалке коммерческих грузов. Выросли объёмы по выгрузке автомобилей и портовым сборам (1997
                    год — 1 223 тыс.руб.; 1998 год — 3 410 тыс.руб.).
                  </p>

                  <p className="about__info-text">
                    20 марта 2002 года на должность генерального директора завода назначен Басаргин Андрей Георгиевич. Вместе с ним на завод пришли работать
                    финансовый директор Герус Людмила Алексеевна, директор по экономике Мачехин Владимир Валерьевич, коммерческий директор Гребенюк Евгений
                    Иванович.
                  </p>

                  <p className="about__info-text">
                    За последние годы среди предприятий судоремонтной отрасли ПАО «Славянский СРЗ» занимает первое место по рейтингу эффективности и 33 место среди
                    100 крупнейших компаний Дальнего Востока.
                  </p>

                  <p className="about__info-text">
                    Для увеличения объёма судоремонтных услуг ведётся работа по размещению заказов на ремонт военных судов, участию в тендерах в рамках проектов
                    «Сахалин-1» и «Сахалин-2».
                  </p>

                  <p className="about__info-text">
                    Усредненный анализ стоимости ремонта флота показывает, что при таком объеме ремонтируемых судов общая емкость рынка гражданского судоремонта по
                    Дальневосточному бассейну составляет примерно 1 млрд 900 млн рублей. На основании этого можно сделать вывод, что доля Славянского СРЗ на рынке
                    гражданского судоремонта Дальневосточного бассейна составляет 14,4%. Данный показатель является очень высоким и говорит о том, что ПАО
                    «Славянский СРЗ» сохранил лидирующие позиции на рынке гражданского судоремонта в Дальневосточному бассейне.
                  </p>
                </div>

                <div className="about__figure-column">
                  <figure
                    className="about__figure"
                    role="button"
                    tabIndex={0}
                    onClick={() => openLightbox(history01, 'Строительство завода, 1960-е')}
                    onKeyDown={(e) => (e.key === 'Enter' ? openLightbox(history01, 'Строительство завода, 1960-е') : null)}
                  >
                    <img src={history01} alt="Строительство завода, 1960-е" />
                    <figcaption>Строительство завода, 1960-е</figcaption>
                  </figure>

                  <figure
                    className="about__figure"
                    role="button"
                    tabIndex={0}
                    onClick={() => openLightbox(lakiza, 'Лакиза К.С.')}
                    onKeyDown={(e) => (e.key === 'Enter' ? openLightbox(lakiza, 'Лакиза К.С.') : null)}
                  >
                    <img src={lakiza} alt="Лакиза К.С." />
                    <figcaption>Лакиза К.С.</figcaption>
                  </figure>

                  <figure
                    className="about__figure"
                    role="button"
                    tabIndex={0}
                    onClick={() => openLightbox(lihter, 'Лихтерный комплекс, 1980-е')}
                    onKeyDown={(e) => (e.key === 'Enter' ? openLightbox(lihter, 'Лихтерный комплекс, 1980-е') : null)}
                  >
                    <img src={lihter} alt="Лихтерный комплекс, 1980-е" />
                    <figcaption>Лихтерный комплекс, 1980-е</figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </section>

          <section id="today" className="about__detail">
            <h2 className="about__detail-title">ССРЗ сегодня</h2>
            <div className="about__info-block">
              <ReactMarkdown components={mdComponents as any}>
                {todayContent}
              </ReactMarkdown>
            </div>
          </section>

          <section id="vacancies" className="about__detail">
            <h2 className="about__detail-title">Вакансии</h2>
            <div className="about__info-block">
              <p className="about__info-text">
                Ниже — актуальные вакансии. Если вы хотите работать в команде ПАО «Славянский СРЗ», свяжитесь с отделом кадров.
              </p>

              <div className="about__vacancies-grid" role="list">
                {vacancies.map((title) => (
                  <div key={title} className="about__vacancy-card" role="listitem">
                    <div className="about__vacancy-card-content">
                      <div className="about__vacancy-title">{title}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="about__vacancies-note" aria-label="Контакты для трудоустройства">
                <div className="about__vacancies-note-title">Куда обращаться</div>
                <p className="about__vacancies-note-text">
                  По вопросам трудоустройства обращаться в отдел кадров по тел.{' '}
                  <a className="about__vacancies-note-link" href="tel:+74233146169">
                    (42331) 46-1-69
                  </a>{' '}
                  или по электронной почте:{' '}
                  <a className="about__vacancies-note-link" href="mailto:ok@ssrz.ru">
                    ok@ssrz.ru
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          <section id="policies" className="about__detail">
            <h2 className="about__detail-title">Политики предприятия</h2>
            <div className="about__info-block">
              <p className="about__info-text">
                Документы представлены в виде раскрывающихся разделов — выберите пункт, чтобы посмотреть текст.
              </p>

              <div className="about__accordion" role="list">
                {policies.map((p) => (
                  <details key={p.id} className="about__accordion-item" role="listitem">
                    <summary className="about__accordion-summary">{p.title}</summary>
                    <div className="about__accordion-panel">
                      <ReactMarkdown components={mdComponents as any}>{p.md}</ReactMarkdown>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section id="security" className="about__detail">
            <h2 className="about__detail-title">Транспортная безопасность</h2>

            <div className="about__info-block">
              <p className="about__info-text">
                В разделе представлены документы, регулирующие транспортную безопасность предприятия.
              </p>

              <div className="about__docs-grid">
                {documents.map((doc) => (
                  <div key={doc.title} className="about__doc-card">
                    <div className="about__doc-type">
                      {doc.type.toUpperCase()}
                    </div>

                    <div className="about__doc-title">
                      {doc.title}
                    </div>

                    <div className="about__doc-actions">
                      <a
                        href={doc.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about__doc-btn"
                      >
                        Открыть
                      </a>

                      <a
                        href={doc.file}
                        download
                        className="about__doc-btn about__doc-btn--secondary"
                      >
                        Скачать
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="productivity" className="about__detail">
            <h2 className="about__detail-title">Производительность труда и поддержка занятости</h2>

            <div className="about__info-block">
              <div className="about__media-wrap">
                <div className="about__media-text">

                  <p className="about__info-text">
                    Славянский судоремонтный завод внедряет технологии бережливого производства, что позволяет сокращать сроки изготовления продукции,
                    уменьшать количество брака и повышать общую эффективность работы предприятия. В этом заводчанам помогают эксперты Федерального центра компетенций.
                  </p>

                  <p className="about__info-text">
                    ПАО «Славянский судоремонтный завод» присоединилось к национальному проекту «Производительность труда и поддержка занятости».
                    Работа проходит в три этапа: сначала проводится анализ потерь и слабых мест, затем внедряются инструменты бережливого производства,
                    и далее — масштабирование результатов.
                  </p>

                  <h3 className="about__info-subtitle">Внедрение бережливого производства</h3>

                  <p className="about__info-text">
                    Специалисты завода совместно с экспертами выявили узкие места в производственных процессах и разработали план их устранения.
                    Были внедрены инструменты производственного анализа, а также современные подходы к организации труда.
                  </p>

                  <p className="about__info-text">
                    По словам руководства предприятия, реализация программы позволяет увеличивать производительность труда примерно на 5% ежегодно.
                    Это дает возможность снижать себестоимость продукции, повышать конкурентоспособность и улучшать условия для сотрудников.
                  </p>

                  <h3 className="about__info-subtitle">Обучение и развитие персонала</h3>

                  <p className="about__info-text">
                    В рамках проекта сотрудники проходят обучение при поддержке Федерального центра компетенций. Уже более 30 человек приняли участие
                    в тренингах, а также ведется подготовка внутренних бизнес-тренеров для дальнейшего развития персонала.
                  </p>

                  <h3 className="about__info-subtitle">Эталонный участок</h3>

                  <p className="about__info-text">
                    В качестве пилотного проекта был выбран цех металлоконструкций — один из наиболее трудоемких участков. Здесь внедрены стандарты
                    бережливого производства и создан эталонный участок.
                  </p>

                  <p className="about__info-text">
                    Производственные зоны были структурированы: каждая секция отвечает за конкретные заготовки, что позволяет быстро отслеживать
                    нехватку материалов и оперативно реагировать на нее.
                  </p>

                  <p className="about__info-text">
                    Также внедрены доски планирования, которые помогают контролировать выполнение задач, повышают прозрачность процессов и
                    дисциплину на производстве.
                  </p>

                  <h3 className="about__info-subtitle">Результаты</h3>

                  <p className="about__info-text">
                    Новая система позволила значительно упорядочить работу: детали теперь хранятся по секциям и комплектам, что сокращает время
                    их поиска и выдачи. Введены сменно-суточные задания, а также ежедневный анализ результатов.
                  </p>

                  <p className="about__info-text">
                    Это не только ускоряет производственные процессы, но и снижает трудозатраты, повышая общую эффективность работы предприятия.
                  </p>

                  <h3 className="about__info-subtitle">Дальнейшее развитие</h3>

                  <p className="about__info-text">
                    В настоящее время проект находится на завершающей стадии. В случае успешного завершения предприятие получает доступ к
                    льготному финансированию, а накопленный опыт будет распространяться на все производственные участки завода.
                  </p>

                </div>

                <div className="about__figure-column">
                  {[fcc17, fcc03, fcc10, fcc11, fcc12].map((img, i) => (
                    <figure
                      key={i}
                      className="about__figure"
                      role="button"
                      tabIndex={0}
                      onClick={() => openLightbox(img)}
                      onKeyDown={(e) => (e.key === 'Enter' ? openLightbox(img) : null)}
                    >
                      <img src={img} alt={`Производственный процесс ${i + 1}`} />
                    </figure>
                  ))}
                </div>
              </div>
              <div className="about__gallery-grid">
                {[fcc21, fcc26, fcc27, fcc22, fcc07, fcc05].map((img, i) => (
                  <figure
                    key={i}
                    className="about__figure"
                    role="button"
                    tabIndex={0}
                    onClick={() => openLightbox(img)}
                    onKeyDown={(e) => (e.key === 'Enter' ? openLightbox(img) : null)}
                  >
                    <img src={img} alt={`Производственный процесс ${i + 6}`} />
                  </figure>
                ))}
              </div>
            </div>
          </section>

          <section id="quality" className="about__detail">
            <h2 className="about__detail-title">Система менеджмента качества</h2>

            <div className="about__info-block">
              <p className="about__info-text">
                Ниже представлены сертификаты, лицензии и свидетельства предприятия.
              </p>

              <div className="about__docs-grid">
                {cerlicsvid.map((doc, i) => (
                  <div
                    key={i}
                    className="about__doc-card"
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      if (doc.type === 'image') {
                        openLightbox(doc.file, doc.title)
                      } else {
                        window.open(doc.file, '_blank')
                      }
                    }}
                  >
                    {doc.type === 'image' ? (
                      <img src={doc.file} alt={doc.title} />
                    ) : (
                      <div className="about__doc-pdf">PDF</div>
                    )}

                    <div className="about__doc-title">{doc.title}</div>
                    <div className="about__doc-category">{doc.category}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
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

export default About