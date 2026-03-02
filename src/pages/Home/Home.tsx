import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import './Home.css'
import videoBg from '../../assets/video-bg.mp4'

function Home() {
  return (
    <>
      <Header />
      <main className="home__main">
        <section className="home__hero">
          <video
            className="home__hero-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videoBg} type="video/mp4" />
          </video>
          <div className="home__hero-overlay" aria-hidden />
          <div className="home__hero-content">
            <h1 className="home__hero-title">
              Славянский судоремонтный завод
            </h1>
            <p className="home__hero-subtitle">
              занимаемся судоремонтом с 1970 года
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
