import './Stack.css'
import Reveal from '../../components/Reveal/Reveal'
import StackCard from '../../components/StackCard/StackCard'
import StackSmallCard from '../../components/StackSmallCard/StackSmallCard'

function Stack() {
    return (
        <div className="contentContainer">
            <div className="aboutstack__container">
                <Reveal>
                    <h1>Mi stack tecnológico</h1>
                </Reveal>

                <div className="aboutstack__upper">
                    <div className="aboutstack__technologies flex-row">
                        <Reveal slide delay={0.5}>
                            <h2>Frontend</h2>
                            <div className="stackcards__container flex-row">
                                <StackCard
                                    title={"HTML / JS / CSS"}
                                    description={"La combinación de HTML, JS y CSS se utiliza comúnmente en el desarrollo web para crear páginas web interactivas y atractivas."}
                                    icons={["js.png", "html.png", "css.png"]}
                                />
                                <StackCard
                                    title={"React / React Native"}
                                    description={"React es una biblioteca de JavaScript de código abierto ampliamente utilizada para el desarrollo de interfaces de usuario (UI) en aplicaciones web."}
                                    icons={["react.png"]}
                                />
                            </div>
                        </Reveal>

                        <Reveal slide>
                            <h2>Backend</h2>

                            <div className="stackcards__container flex-row">
                                <StackCard
                                    title={"NodeJS"}
                                    description={"Node.js es un entorno de tiempo de ejecución de código abierto que permite ejecutar JavaScript en el lado del servidor."}
                                    icons={["node.png"]}
                                />
                                <StackCard
                                    title={"NextJS"}
                                    description={
                                        "Next.js es un framework de React que facilita el desarrollo de aplicaciones web de alto rendimiento con características como enrutamiento integrado y carga dinámica de módulos."
                                    }
                                    icons={["next.png"]}
                                />
                                <StackCard title={"Deno"} description={"Deno es un runtime moderno para JavaScript y TypeScript que se basa en el motor V8 de Google, el mismo utilizado por Chrome."} icons={["deno.png"]} />
                            </div>
                        </Reveal>
                    </div>
                </div>

                <div className="aboutstack__lower">
                    <Reveal delay={0.9}>
                        <h2>Databases & Cloud</h2>
                        <div className="aboutstack__lower--cards flex-row">
                            <StackSmallCard name={'Firebase'} icon={'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png'} />
                            <StackSmallCard name={'MongoDB'} icon={'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg'} />
                            <StackSmallCard name={'MySQL'} icon={'https://cdn-icons-png.flaticon.com/512/5968/5968313.png'} />
                            <StackSmallCard name={'SQLite'} icon={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/1200px-Sqlite-square-icon.svg.png'} />
                            <StackSmallCard name={'AWS'} icon={'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Non-Service_Specific_copy__AWS_Cloud-512.png'} />
                            <StackSmallCard name={'Netlify'} icon={'https://cdn.iconscout.com/icon/free/png-256/free-netlify-3628945-3030170.png'} />
                            <StackSmallCard name={'Railway'} icon={'railway.png'} />
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
	)
}

export default Stack