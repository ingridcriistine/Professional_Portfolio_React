import style from './App.module.css'

function App() {

  return (
    <>
      <header id="top">
          <h2>ICR | Portfolio</h2>
          <nav>
              <a href="#home"><h3>Home</h3></a>
              <a href="#about-me"><h3>About Me</h3></a>
              <a href="#my-experience"><h3>Experience</h3></a>
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

        <section id="about-me" className={style.aboutMe}>
                <div className={style.whoAmI}>
                    <div className={style.imgsAbout}>
                        <img src="../src/assets/bosch.jpeg" alt="Imagem" className={style.imgLeft}/>
                        <img src="../src/assets/programming.jpeg" alt="Imagem" className={style.imgRight}/>
                        <img src="../src/assets/work.jpeg" alt="Imagem" className={style.imgLeft}/>
                        <img src="../src/assets/tads.jpeg" alt="Imagem" className={style.imgRight}/>
                    </div>
                    <div className={style.boxAbout}>
                        <p className={style.littleTitle}>About me</p>
                        <p className={style.sectionTitle}>WHO AM I?</p>
                        <p className={style.sectionText}>Hello, my name is Ingrid, I'm nineteen years old and I'm growing in my professional life, with lots of changes and new experiences.</p>
                        <p className={style.sectionText}>I'm currently working for Bosch Company as an apprentice. I'm learning more about technology and studying a lot of programming languages.</p>
                        <p className={style.sectionText}>I'm a very curious and determined person! I love interacting with different people and learning about a variety of things. </p>
                        <p className={style.sectionText}>Did you say challenge? I accept!</p>
                        
                        <div className={style.sectionFooter}>
                            <div className={style.itemFooter}>
                                <p className={style.sectionFooter}>BORN</p>
                                <p className={style.sectionFooterText}>2005</p>
                            </div>
                            <div className={style.itemFooter}>
                                <p className={style.sectionFooter}>RESIDENCE</p>
                                <p className={style.sectionFooterText}>Curitiba, PR</p>
                            </div>
                            <div className={style.itemFooter}>
                                <p className={style.sectionFooter}>COUNTRY</p>
                                <p className={style.sectionFooterText}>Brazil</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.academicFormations}>
                    <p className={style.sectionTitle}>ACADEMIC FORMATIONS</p>
                    <div className={style.containerFormations}>
                        <div className={style.boxFormation}>
                            <div className={style.circle}><img src="../src/assets/icon-ceep.jpeg" alt="Ícone CEEP"/></div>
                            <p className={style.formationTitle}>Technical High School in Eletromechanics | <a href="" className={style.formationTitlePlace}>CEEP</a></p>
                            <p className={style.formationYear}>2020 - 2023</p>
                        </div>
                        <div className={style.boxFormation}>
                            <div className={style.circle}><img src="../src/assets/icon-ufpr.webp" alt="Ícone UFPR"/></div>
                            <p className={style.formationTitle}>University Degree in Systems Analisys and Development | <a href="" className={style.formationTitlePlace}>UFPR</a></p>
                            <p className={style.formationYear}>2024 - 2026</p>
                        </div>
                        <div className={style.boxFormation}>
                            <div className={style.circle}><img src="../src/assets/icon-senai.webp" alt="Ícone SENAI"/></div>
                            <p className={style.formationTitle}>Technical Course in Systems Development | <a href="" className={style.formationTitlePlace}>SENAI</a></p>
                            <p className={style.formationYear}>2024 - 2025</p>
                        </div>
                    </div>
                </div>

                <div className={style.curiosities}>
                    <p className={style.sectionTitle}>CURIOSITIES</p>
                    <div className={style.boxCuriosity}>
                        <img src="../src/assets/music.jpeg" alt="Ícone"/>
                        <p className={`${style.curiosityText} ${style.curiosityTextLeft}`}>I love music! I play guitar, ukulele, keyboard (a little) and I’m currently learning violin by myself. I've had a passion for music since I was a child. My favorite hobby is singing.</p>
                    </div>
                    <div className={style.boxCuriosity}>
                        <p className={`${style.curiosityText} ${style.curiosityTextRight}`}>I read at least fifteen books a year. I really enjoy the peace of reading I book outdoors, in the middle of nature.</p>
                        <img src="../src/assets/book.jpeg" alt="Ícone"/>
                    </div>
                    <div className={style.boxCuriosity}>
                        <img src="../src/assets/code.jpeg" alt="Ícone"/>
                        <p className={`${style.curiosityText} ${style.curiosityTextLeft}`}>My first contact with programming was during the pandemic, with HTML5, CSS3 and JavaScript. After that, I knew that I wanted to work in the area of Technology.</p>
                    </div>
                </div>
            </section>

            <section id="my-skills" className={style.mySkills}>
                <p className={style.littleTitle}>My Skills</p>
                <p className={style.sectionTitle}>HARD SKILLS</p>
                <div className={style.hardSkills}>
                    <div className={style.boxHardSkill}>
                        <p className={style.hardSkillTitle}>HTML5</p>
                        <div className={style.hardSkillContainer}>
                            <div className={style.hardSkillBar}></div>
                            <div className={style.hardSkillCircle}></div>
                        </div>
                    </div>
                    <div className={style.boxHardSkill}>
                        <p className={style.hardSkillTitle}>CSS3</p>
                        <div className={style.hardSkillContainer}>
                            <div className={style.hardSkillBar}></div>
                            <div className={style.hardSkillCircle}></div>
                        </div>
                    </div>
                    <div className={style.boxHardSkill}>
                        <p className={style.hardSkillTitle}>JavaScript</p>
                        <div className={style.hardSkillContainer}>
                            <div className={style.hardSkillBar}></div>
                            <div className={style.hardSkillCircle}></div>
                        </div>
                    </div>
                    <div className={style.boxHardSkill}>
                        <p className={style.hardSkillTitle}>Python</p>
                        <div className={style.hardSkillContainer}>
                            <div className={style.hardSkillBar}></div>
                            <div className={style.hardSkillCircle}></div>
                        </div>
                    </div>
                    <div className={style.boxHardSkill}>
                        <p className={style.hardSkillTitle}>Linguagem C</p>
                        <div className={style.hardSkillContainer}>
                            <div className={style.hardSkillBar}></div>
                            <div className={style.hardSkillCircle}></div>
                        </div>
                    </div>
                    <div className={style.boxHardSkill}>
                        <p className={style.hardSkillTitle}>Java</p>
                        <div className={style.hardSkillContainer}>
                            <div className={style.hardSkillBar}></div>
                            <div className={style.hardSkillCircle}></div>
                        </div>
                    </div>
                    <div className={style.boxHardSkill}>
                        <p className={style.hardSkillTitle}>Figma</p>
                        <div className={style.hardSkillContainer}>
                            <div className={style.hardSkillBar}></div>
                            <div className={style.hardSkillCircle}></div>
                        </div>
                    </div>
                    <div className={style.boxHardSkill}>
                        <p className={style.hardSkillTitle}>MySQL</p>
                        <div className={style.hardSkillContainer}>
                            <div className={style.hardSkillBar}></div>
                            <div className={style.hardSkillCircle}></div>
                        </div>
                    </div>
                    <div className={style.boxHardSkill}>
                        <p className={style.hardSkillTitle}>Eletroeletrônica</p>
                        <div className={style.hardSkillContainer}>
                            <div className={style.hardSkillBar}></div>
                            <div className={style.hardSkillCircle}></div>
                        </div>
                    </div>
                    <div className={style.boxHardSkill}>
                        <p className={style.hardSkillTitle}>Excel</p>
                        <div className={style.hardSkillContainer}>
                            <div className={style.hardSkillBar}></div>
                            <div className={style.hardSkillCircle}></div>
                        </div>
                    </div>
                    <div className={style.boxHardSkill}>
                        <p className={style.hardSkillTitle}>IoT</p>
                        <div className={style.hardSkillContainer}>
                            <div className={style.hardSkillBar}></div>
                            <div className={style.hardSkillCircle}></div>
                        </div>
                    </div>
                    <div className={style.boxHardSkill}>
                        <p className={style.hardSkillTitle}>Pascal</p>
                        <div className={style.hardSkillContainer}>
                            <div className={style.hardSkillBar}></div>
                            <div className={style.hardSkillCircle}></div>
                        </div>
                    </div>
                    <div className={style.boxHardSkill}>
                        <p className={style.hardSkillTitle}>Inglês</p>
                        <div className={style.hardSkillContainer}>
                            <div className={style.hardSkillBar}></div>
                            <div className={style.hardSkillCircle}></div>
                        </div>
                    </div>
                    <div className={style.boxHardSkill}>
                        <p className={style.hardSkillTitle}>Word</p>
                        <div className={style.hardSkillContainer}>
                            <div className={style.hardSkillBar}></div>
                            <div className={style.hardSkillCircle}></div>
                        </div>
                    </div>
                    <div className={style.boxHardSkill}>
                        <p className={style.hardSkillTitle}>Eletromecânica</p>
                        <div className={style.hardSkillContainer}>
                            <div className={style.hardSkillBar}></div>
                            <div className={style.hardSkillCircle}></div>
                        </div>
                    </div>
                </div>

                <p className={style.sectionTitle}>SOFT SKILLS</p>
                <div className={style.softSkills}>
                    <div className={style.boxSoftSkill}>
                        <p className={style.softSkillTitle}>Comunicação</p>
                    </div>
                    <div className={style.boxSoftSkill}>
                        <p className={style.softSkillTitle}>Trabalho em Equipe</p>
                    </div>
                    <div className={style.boxSoftSkill}>
                        <p className={style.softSkillTitle}>Organização</p>
                    </div>
                    <div className={style.boxSoftSkill}>
                        <p className={style.softSkillTitle}>Comprometimento</p>
                    </div>
                    <div className={style.boxSoftSkill}>
                        <p className={style.softSkillTitle}>Adaptabilidade</p>
                    </div>
                    <div className={style.boxSoftSkill}>
                        <p className={style.softSkillTitle}>Responsabilidade</p>
                    </div>
                    <div className={style.boxSoftSkill}>
                        <p className={style.softSkillTitle}>Proatividade</p>
                    </div>
                    <div className={style.boxSoftSkill}>
                        <p className={style.softSkillTitle}>Cooperação</p>
                    </div>
                </div>
            </section>
      </main>
    </>
  )
}

export default App
