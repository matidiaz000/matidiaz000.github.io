import Head from "next/head";
import Image from "next/image";
import { JetBrains_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { projects_old } from "./projects";

const JetBrainsMono = JetBrains_Mono({
  variable: "--font-jet-brains-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Matias Díaz</title>
        <meta name="description" content="Portfolio de Matias Díaz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${styles.page} ${JetBrainsMono.variable}`}>
        <main>
          <section className={styles.section}>
            <h1 className={`${styles.br} link`}>Matias Diaz:~$ <span>start .</span></h1>
            <p className={styles.br}>Hola mundo, soy un desarrollador profesional en <span>JavaScript</span> e interfaz de usuario (<span>frontend</span>) con 13 años de experiencia.</p>
            <div className={`${styles.image} ${styles.imageMobile}`}>
              <Image
                src="/matidiaz_mobile.svg"
                alt="Matias Díaz"
                width={428}
                height={364}
                priority
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}        
              />
            </div>
          </section>
          <footer className={styles.footer}>
            <ul className={styles.list}>
              {projects_old.map((e) => 
                <li className={styles.listElement} key={e.id}>
                  <a target="_blank" href={e.url}>{e.description}: <span>{e.title}</span></a>
                </li>
              )}
            </ul>
            <nav className={`${styles.iconList} ${styles.br}`}>
              <a className={styles.icons} target="_blank" href="https://dribbble.com/matidiaz00/">
                <Image
                  className={`${styles.image} ${styles.dribble}`}
                  src="/dribbble.svg"
                  alt="Dribbble"
                  width={35}
                  height={35}
                />
              </a>
              <a className={styles.icons} target="_blank" href="https://www.linkedin.com/in/matidiaz/">
                <Image
                  className={`${styles.image} ${styles.linkedin}`}
                  src="/linkedin.svg"
                  alt="Linkedin"
                  width={33}
                  height={33}
                />
              </a>
              <a className={styles.icons} target="_blank" href="https://github.com/matidiaz000/">
                <Image
                  className={`${styles.image} ${styles.github}`}
                  src="/github.svg"
                  alt="github"
                  width={37}
                  height={36}
                />
              </a>
            </nav>
          </footer>
          <div className={`${styles.image} ${styles.imageDesktop}`}>
              <Image
                src="/matidiaz.svg"
                alt="Matias Díaz"
                width={710}
                height={716}
                priority
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}        
              />
            </div>
        </main>
      </div>
    </>
  );
}
