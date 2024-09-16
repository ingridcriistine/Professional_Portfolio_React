import style from './App.module.css'

function App() {

  return (
    <>
      <header id="top">
          <h2>ICR | Portfolio</h2>
          <nav>
              <a href="#home"><h3>Home</h3></a>
              <a href="#about-me"><h3>About Me</h3></a>
              <a href="#my-skills"><h3>My Skills</h3></a>
              <a href="#contact"><h3>Contact</h3></a>
          </nav>
      </header>

      <main>
        <a href="#top"><input type="button" name="btn-cv" id="btn-back" className={style.btnBack} value="^"/></a>
        <section id="home" className={style.home}>
            <div className={style.boxHome}>
                <h4>Hello, I am</h4>
                <h5>Ingrid Cristine Rocha</h5>
                <p className={style.homeTitle}>Welcome to my professional portfolio! Here you can get to know me better and learn more about my interests.</p>

                <input type="button" name="btn-cv" className={style.btnCv} id="btn-cv" value="Download CV"/> 

                <p className={style.homeMedia}>Follow me</p>
                <div className={style.homeIcons}>
                    <a href="https://github.com/ingridcriistine"><img src="../src/assets/icon-github.png" alt="Ícone do GitHub"/></a>
                    <a href="https://www.linkedin.com/in/ingridcristinerocha/"><img src="../src/assets/icon-linkedin.png" alt="Ícone do Linkedin"/></a>
                </div>
            </div>

            <div className={style.perfil}><img src="../src/assets/perfil.png" alt="Foto de perfil"/></div>    
        </section>
      </main>
    </>
  )
}

export default App
