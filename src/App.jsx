import style from './App.module.css'
import Github from '../src/assets/icon-github.png'
import Linkedin from '../src/assets/icon-linkedin.png'
import Whatsapp from '../src/assets/whatsapp.png'
import Bosch from '../src/assets/bosch.jpeg'
import Programming from '../src/assets/programming.jpeg'
import Work from '../src/assets/work.jpeg'
import Tads from '../src/assets/tads.jpeg'
import Perfil from '../src/assets/perfil.png'
import Ceep from '../src/assets/icon-ceep.jpeg'
import Ufpr from '../src/assets/icon-ufpr.webp'
import Senai from '../src/assets/icon-senai.webp'
import Music from '../src/assets/music.jpeg'
import Book from '../src/assets/book.jpeg'
import Code from '../src/assets/code.jpeg'
import Sge from '../src/assets/sge.jpeg'
import Machine from '../src/assets/machine.jpeg'
import VideoTela from '../src/assets/videoTela2.mp4'

function App() {

    const handleZap = () => {
        
        const defaultPhoneNumber = "5541999999999"

        const urlZAPZAP = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=Olá, acabei de ver o seu currículo!`

        window.open(urlZAPZAP, '_blank')

    }

    return (
    <>
      <header id="top" className={style.top}>
          <button className={style.iconMenu}><img src='../src/assets/menu.png'></img></button>
          <h2>ICR | Portfolio</h2>
          <nav>
              <a href="#home"><h3>Home</h3></a>
              <a href="#about-me"><h3>About Me</h3></a>
              <a href="#experience"><h3>Experience</h3></a>
              <a href="#my-skills"><h3>Skills</h3></a>
              <a href="#projects"><h3>Projects</h3></a>
              <a href="#contact"><h3>Contact</h3></a>
          </nav>
      </header>

      <main>
        <a href="#home"><input type="button" name="btn-cv" id="btn-back" className={style.btnBack} value="^"/></a>
        <section id="home" className={style.home}>
            <div className={style.boxHome}>
                <h4>Hello, I am</h4>
                <h5>Ingrid Cristine Rocha</h5>
                <p className={style.homeTitle}>Welcome to my professional portfolio! Here you can get to know me better and learn more about my interests.</p>

                <input type="button" name="btn-cv" className={style.btnCv} id="btn-cv" value="Download CV"/> 

                <p className={style.homeMedia}>Follow me</p>
                <div className={style.homeIcons}>
                    <a target='_blank' href="https://github.com/ingridcriistine"><img src={Github} alt="Ícone do GitHub"/></a>
                    <a target='_blank' href="https://www.linkedin.com/in/ingridcristinerocha/"><img src={Linkedin} alt="Ícone do Linkedin"/></a>
                    <a onClick={handleZap}><img src={Whatsapp} alt="Ícone do Linkedin"/></a>
                </div>
            </div>

            <div className={style.perfil}><img src={Perfil} alt="Foto de perfil"/></div>    
        </section>

        <section id="about-me" className={style.aboutMe}>
                <div className={style.whoAmI}>
                    <div className={style.imgsAbout}>
                        <img src={Bosch} alt="Imagem" className={style.imgLeft}/>
                        <img src={Programming} alt="Imagem" className={style.imgRight}/>
                        <img src={Work} alt="Imagem" className={style.imgLeft}/>
                        <img src={Tads} alt="Imagem" className={style.imgRight}/>
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

                <hr/>

                <div className={style.academicFormations}>
                    <p className={style.sectionTitle}>ACADEMIC FORMATIONS</p>
                    <div className={style.containerFormations}>
                        <div className={style.boxFormation}>
                            <div className={style.circle}><img src={Ceep} alt="Ícone CEEP"/></div>
                            <p className={style.formationTitle}>Technical High School in Eletromechanics | <a href="" className={style.formationTitlePlace}>CEEP</a></p>
                            <p className={style.formationYear}>2020 - 2023</p>
                        </div>
                        <div className={style.boxFormation}>
                            <div className={style.circle}><img src={Ufpr} alt="Ícone UFPR"/></div>
                            <p className={style.formationTitle}>University Degree in Systems Analisys and Development | <a href="" className={style.formationTitlePlace}>UFPR</a></p>
                            <p className={style.formationYear}>2024 - 2026</p>
                        </div>
                        <div className={style.boxFormation}>
                            <div className={style.circle}><img src={Senai} alt="Ícone SENAI"/></div>
                            <p className={style.formationTitle}>Technical Course in Systems Development | <a href="" className={style.formationTitlePlace}>SENAI</a></p>
                            <p className={style.formationYear}>2024 - 2025</p>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className={style.curiosities}>
                    <p className={style.sectionTitle}>CURIOSITIES</p>
                    <div className={style.boxCuriosity}>
                        <img src={Music} alt="Ícone"/>
                        <p className={`${style.curiosityText} ${style.curiosityTextLeft}`}>I love music! I play guitar, ukulele, keyboard (a little) and I’m currently learning violin by myself. I've had a passion for music since I was a child. My favorite hobby is singing.</p>
                    </div>
                    <div className={style.boxCuriosity}>
                        <p className={`${style.curiosityText} ${style.curiosityTextRight}`}>I read at least fifteen books a year. I really enjoy the peace of reading I book outdoors, in the middle of nature.</p>
                        <img src={Book} alt="Ícone"/>
                    </div>
                    <div className={style.boxCuriosity}>
                        <img src={Code} alt="Ícone"/>
                        <p className={`${style.curiosityText} ${style.curiosityTextLeft}`}>My first contact with programming was during the pandemic, with HTML5, CSS3 and JavaScript. After that, I knew that I wanted to work in the area of Technology.</p>
                    </div>
                </div>
            </section>

            <section id='experience'>
               <div className={style.experience}>
                    <p className={style.sectionTitle}>EXPERIENCE</p>
                    <div className={style.experienceImg}>
                        <img src="" alt=""/>
                    </div>
                    <div className={style.experienceDescription}>
                        <div className={style.columnLeft}>
                            <div className={`${style.boxExperience} ${style.boxExperienceLeft}`}>
                                <p className={style.experienceTitle}>ASSISTENT</p>
                                <p className={style.experienceText}>Salão de Festas</p>
                                <p className={style.experienceYear}>2018 - 2019</p>
                            </div>
                            <div className={`${style.boxExperience} ${style.boxExperienceLeft2}`}>
                                <p className={style.experienceTitle}>APPRENTICE</p>
                                <p className={style.experienceText}>Robert Bosch</p>
                                <p className={style.experienceYear}>2024 - now</p>
                            </div>
                        </div>

                        <div className={style.middle}>
                            <div className={style.lines}>
                                <div className={style.line1}></div>
                                <div className={style.line2}></div>
                            </div>
                            <div className={style.column}></div>
                            <div className={style.line2}></div>
                        </div>


                        <div className={`${style.boxExperience} ${style.boxExperienceRight}`}>
                            <p className={style.experienceTitle}>MACHINE OPERATOR</p>
                            <p className={style.experienceText}>Empresa Metalúrgica</p>
                            <p className={style.experienceYear}>2022 - 2023</p>
                        </div>
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

            <section id='projects' className={style.projects}>
                <div className={style.projectsContainer}>
                  <p className={style.littleTitle}>My Projects</p>
                  <div className={style.boxProject}>
                    <div className={style.textos}>
                        <p className={style.projectTitle}>MOVIEFY TICKETS</p>
                        <p className={style.projectText}>Ticket sales system for cinemas in different locations and franchises.</p>   
                        <p className={style.projectLink}><a href='https://github.com/ingridcriistine/Moviefy_Tickets.git'>View project on github</a></p>   
                    </div>
                    <iframe src={VideoTela}></iframe>
                  </div>
                  <div className={style.boxProject}>
                    <div className={style.textos}>
                        <p className={style.projectTitle}>SISTEMA DE GESTÃO EMPRESARIAL</p>
                        <p className={style.projectText}>Simple, intuitive and dynamic system for managing and organizing company data.</p>   
                        <p className={style.projectLink}><a href='https://github.com/JuanoneD/Sistema_Gestao_Empresa.git'>View project on github</a></p>   
                    </div>
                    <img src={Sge} alt="Ícone"/>
                  </div>
                  <div className={style.boxProject}>
                    <div className={style.textos}>
                        <p className={style.projectTitle}>MACHINE MONITORING</p>
                        <p className={style.projectText}>Database, web and iot integration project to monitor a machine and collect information on its operation to generate a report.</p>   
                        <p className={style.projectLink}><a href='https://github.com/ingridcriistine/Machine_Monitoring.git'>View project on github</a></p>   
                    </div>
                    <img src={Machine} alt="Ícone"/>
                  </div>
                </div>
            </section>

            <section id="contact" className={style.contact}>
                <p className={style.littleTitle}>My Projects</p>
                <p className={style.sectionTitle}>CONTACT</p>
                <div className={style.contactsContainer}>
                    <div className={style.boxContacts}>
                        <div className={style.contactTitle}>
                            <p className={style.contactText}>E-mail</p>
                            <p className={style.contactText}>ingridrochacristine@gmail.com</p>
                        </div>
                    </div>
                    <div className={style.boxSocialMedia}>
                        <p className={style.contactText}>Social Media</p>
                        <div className={style.contactIcons}>
                            <a target='_blank' href="https://github.com/ingridcriistine"><img src={Github} alt="Ícone do GitHub"/></a>
                            <a target='_blank' href="https://www.linkedin.com/in/ingridcristinerocha/"><img src={Linkedin} alt="Ícone do Linkedin"/></a>
                            <a onClick={handleZap}><img src={Whatsapp} alt="Ícone do Wpp"/></a>
                        </div>
                    </div>
                </div>
            </section>
      </main>

      <footer>
            <section className={style.copyright}>
                <p className={style.copyrightText}>Copyright © 2024 INGRID CRISTINE ROCHA.</p> 
                <p className={style.copyrightText}>Todos os direitos reservados.</p>
            </section>
        </footer>
    </>
  )
}

export default App