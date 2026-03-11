import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import './Contacts.css'

interface Employee {
  id: number
  position: string
  name: string
  email: string
}

interface PhoneNumber {
  id: number
  department: string
  phone: string
}

const phoneNumbers: PhoneNumber[] = [
  { id: 1, department: 'Приемная и директорат', phone: '(42331) 46-7-33' },
  { id: 2, department: 'Отдел кадров', phone: '(42331) 46-1-69' },
  { id: 3, department: 'Финансовая группа', phone: '(42331) 46-4-20' },
  { id: 4, department: 'Юридическая служба', phone: '(42331) 49-6-42' },
  { id: 5, department: 'Группа менеджмента', phone: '(42331) 47-6-17' },
  { id: 6, department: 'Канцелярия', phone: '(42331) 46-1-09' },
  { id: 7, department: 'Служба безопасности', phone: '(42331) 46-4-73' },
  { id: 8, department: 'Бюро агентирования', phone: '(42331) 46-5-97' },
  { id: 9, department: 'IT-отдел', phone: '(42331) 46-3-13' },
  { id: 10, department: 'Хозяйственный участок', phone: '(42331) 46-7-51' },
  { id: 11, department: 'АТУ, общежития', phone: '(42331) 49-6-40' },
  { id: 12, department: 'ГО и ЧС, Охрана труда', phone: '(42331) 46-1-84' },
  { id: 13, department: 'Коммерческий департамент', phone: '(42331) 46-1-22' },
  { id: 14, department: 'Энерго-механическая группа', phone: '(42331) 46-2-08' },
  { id: 15, department: 'СЭМЦ, КДГП', phone: '(42331) 46-2-53' },
  { id: 16, department: 'Отдел маркетинга', phone: '(42331) 46-1-38' },
  { id: 17, department: 'Плавсредства и диспетчер', phone: '(42331) 49-6-44' },
  { id: 18, department: 'Судостроение и металлоконструкции', phone: '(42331) 47-6-08' },
  { id: 19, department: 'Технический департамент', phone: '(42331) 46-8-76' },
  { id: 20, department: 'Судоремонтная группа', phone: '(42331) 46-7-60' },
  { id: 21, department: 'Отдел снабжения', phone: '(42331) 46-9-58' },
]

const employees: Employee[] = [
  { id: 1, position: 'Генеральный директор', name: 'Мусханов Магомед Селимович', email: 'general@ssrz.ru' },
  { id: 2, position: 'Приемная генерального директора', name: 'Барская Елена Александровна', email: 'office@ssrz.ru' },
  { id: 3, position: 'Директор по персоналу', name: 'Абросимова Татьяна Анатольевна', email: 'abrosimova@ssrz.ru' },
  { id: 4, position: 'Директор по экономике и финансам', name: 'Торочков Максим Олегович', email: 'findir@ssrz.ru' },
  { id: 5, position: 'Начальник финансового отдела', name: 'Шиндяпина Нина Петровна', email: 'nina@ssrz.ru' },
  { id: 6, position: 'Начальник отдела кадров', name: 'Янковая Анна Евгеньевна', email: 'ok@ssrz.ru' },
  { id: 7, position: 'Главный бухгалтер', name: 'Гнидкина Татьяна Петровна', email: 'glavbuh@ssrz.ru' },
  { id: 8, position: 'Отдел маркетинга', name: 'Немчинов Дмитрий Александрович', email: 'market@ssrz.ru' },
  { id: 9, position: 'Заместитель генерального директора', name: 'Сокол Петр Федорович', email: 'sokol@ssrz.ru' },
  { id: 10, position: 'Технический директор', name: 'Гуляев Дмитрий Валентинович', email: 'emo@ssrz.ru' },
  { id: 11, position: 'Заместитель генерального директора по развитию судостроения и производству металлоконструкций', name: 'Школик Руслан Васильевич', email: 'shkolik@ssrz.ru' },
  { id: 12, position: 'Начальник отдела менеджмента', name: 'Панасюк Сергей Николаевич', email: 'panasyk@ssrz.ru' },
  { id: 13, position: 'Начальник юридического отдела', name: 'Бояршинова Ирина Владимировна', email: 'bira@ssrz.ru' },
  { id: 14, position: 'Начальник службы качества', name: 'Костенко Александр Николаевич', email: 'quality@ssrz.ru' },
  { id: 15, position: 'Начальник отдела снабжения', name: 'Воловод Любовь Владимировна', email: 'volovod@ssrz.ru' },
]

function Contacts() {
  return (
    <>
      <Header />
      <main className="contacts__main">
        <section className="contacts__content">
          <h1 className="contacts__title">Контакты</h1>

          <nav className="contacts__nav-section">
            <p className="contacts__nav-label">На этой странице:</p>
            <div className="contacts__nav">
              <a href="#requisites" className="contacts__nav-link">Реквизиты</a>
              <a href="#phones" className="contacts__nav-link">Телефоны</a>
              <a href="#people" className="contacts__nav-link">Контактные лица</a>
            </div>
          </nav>
          
          <div id="requisites" className="contacts__info-block">
            <h2 className="contacts__info-title">Реквизиты предприятия</h2>
            <div className="contacts__requisites">
              <p><span className="contacts__requisites-label">Юридический адрес:</span> 692701, Россия, Приморский край, Хасанский район, п. Славянка, ул. Весенняя, 1</p>
              <p><span className="contacts__requisites-label">ИНН:</span> 2531001535</p>
              <p><span className="contacts__requisites-label">КПП:</span> 253101001</p>
              <p><span className="contacts__requisites-label">ОГРН:</span> 1022501193802</p>
              <p><span className="contacts__requisites-label">Р/сч:</span> 40702810450160100081</p>
              <p><span className="contacts__requisites-label">К/сч:</span> 30101810600000000608</p>
              <p><span className="contacts__requisites-label">Дальневосточный банк ПАО Сбербанк г. Хабаровск</span></p>
              <p><span className="contacts__requisites-label">БИК:</span> 040813608</p>
            </div>
          </div>

          <div id="phones" className="contacts__info-block">
            <h2 className="contacts__info-title">Контактные телефоны организации</h2>
            <div className="contacts__phones-grid">
              {phoneNumbers.map((phone) => (
                <div key={phone.id} className="contacts__phone-item">
                  <span className="contacts__phone-department">{phone.department}</span>
                  <a href={`tel:${phone.phone.replace(/\s/g, '')}`} className="contacts__phone-number">
                    {phone.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div id="people" className="contacts__employees-section">
            <h2 className="contacts__employees-title">Контактные лица</h2>
            <div className="contacts__employees-grid">
              {employees.map((employee) => (
                <div key={employee.id} className="contacts__employee-card">
                  <div className="contacts__card-content">
                    <h3 className="contacts__employee-position">{employee.position}</h3>
                    <p className="contacts__employee-name">{employee.name}</p>
                    <a href={`mailto:${employee.email}`} className="contacts__employee-email">
                      {employee.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Contacts
