import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import './Contacts.css'

function Contacts() {
  return (
    <>
      <Header />
      <main className="contacts__main">
        <section className="contacts__content">
          <h1 className="contacts__title">Контакты</h1>
          <div className="contacts__info-block">
            <p className="contacts__info-text">
              Здесь будут контактные данные предприятия
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Contacts
