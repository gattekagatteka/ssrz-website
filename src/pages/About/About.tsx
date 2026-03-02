import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import './About.css'

function About() {
  return (
    <>
      <Header />
      <main className="about__main">
        <section className="about__content">
          <h1 className="about__title">О нас</h1>
          <div className="about__info-block">
            <p className="about__info-text">
              Здесь будет информация о предприятии
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default About
