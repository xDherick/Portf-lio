import React from "react";
import styles from "./Portfolio.module.scss";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import profileImageFromFile from "../assets/foto/foto.svg";

const projectsData = [
  {
    id: "proj1",
    title: "Reserva de Salas UniEvangélica",
    description:
      "Esse foi o meu primeiro projeto de front-end, desenvolvido para a Universidade Evangélica de Goiás. A aplicação permite que os professores reservem salas de aula e laboratórios, facilitando o gerenciamento de espaços acadêmicos.",
    linkUrl: "https://github.com/xdherick/reserva-de-salas",
  },
  {
    id: "proj2",
    title: "Controle de Estágios de alunos da UnieVangélica",
    description:
      "Automatização do processo de controle de estágios dos alunos da Universidade Evangélica de Goiás. A aplicação permite que os alunos registrem seus estágios, facilitando o acompanhamento e a validação por parte dos professores.",
    linkUrl: "https://github.com/VitorMelo1/UniState",
  },
  {
    id: "proj3",
    title: "Lista de Tarefas (To-Do List)",
    description:
      "Um projeto fullstack simples de uma Lista de Tarefas (To-Do List) construído para fins de aprendizado, cobrindo todas as etapas de desenvolvimento, do banco de dados à interface do usuário.",
    linkUrl: "https://github.com/xDherick/list-fullstack",
  },
];

const Portfolio: React.FC = () => {
  const seuNome = "Dherick Bruçó Rodrigues";
  const suaDescricaoCurta =
    "Estudante de Engenharia de Software na UniEvangélica, apaixonado por tecnologia e desenvolvimento web.";
  const linkedinUrl =
    "https://www.linkedin.com/in/dherick-rodrigues-282515322/";
  const githubUrl = "https://github.com/xdherick";

  // 2. Use a variável importada para o src da imagem
  // A linha antiga era: const profileImageSrc = "/profile-pic.jpg";
  const profileImageSrc = profileImageFromFile; // <<<<<<< ALTERADO: Usando o SVG importado

  return (
    <div className={styles.portfolioContainer}>
      <header className={styles.portfolioHeader}>
        <h1>Portfólio do Dherick</h1>
        <p>Bem-vindo(a) aos meus projetos e experiências!</p>
      </header>

      <section className={styles.profileSection}>
        <div className={styles.profileImageContainer}>
          <img
            src={profileImageSrc} // <<<<<<< ALTERADO: Agora usa a variável do SVG importado
            alt={`Foto de perfil de ${seuNome}`}
            className={styles.profileImage}
          />
        </div>
        <div className={styles.profileInfo}>
          <h2 className={styles.profileName}>{seuNome}</h2>
          <p className={styles.profileDescription}>{suaDescricaoCurta}</p>
          <div className={styles.profileLinks}>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialLink} ${styles.linkedinLink}`}
            >
              LinkedIn
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialLink} ${styles.githubLink}`}
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section className={styles.projectsSection}>
        <h2>Projetos Destacados</h2>
        {projectsData.length > 0 ? (
          <div className={styles.projectGrid}>
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                linkUrl={project.linkUrl}
              />
            ))}
          </div>
        ) : (
          <p className={styles.noProjects}>
            Ainda não há projetos para exibir. Volte em breve!
          </p>
        )}
      </section>

      <footer className={styles.portfolioFooter}>
        <p>
          &copy; {new Date().getFullYear()} {seuNome}. Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
