// src/pages/Portfolio/Portfolio.tsx
import React from 'react';
import styles from './Portfolio.module.scss';
import ProjectCard from '../components/ProjectCard/ProjectCard'; // Importar o ProjectCard

// Dados dos projetos (poderiam vir de uma API ou um arquivo JSON no futuro)
const projectsData = [
  {
    id: 'proj1',
    title: 'Projeto Voyager',
    description: 'Uma exploração interativa do espaço profundo, utilizando tecnologias web de ponta para visualização de dados astronômicos em tempo real.',
    linkUrl: 'https://github.com', // Substitua pelo link real
  },
  {
    id: 'proj2',
    title: 'Aplicativo Stellar',
    description: 'Plataforma móvel para gerenciamento de tarefas e colaboração em equipe, focada na simplicidade e eficiência.',
    linkUrl: 'https://github.com', // Substitua pelo link real
  },
  {
    id: 'proj3',
    title: 'Ferramenta Galaxy',
    description: 'Solução de análise de dados em larga escala para o setor financeiro, otimizando processos e identificando novas oportunidades de mercado.',
    linkUrl: 'https://github.com', // Substitua pelo link real
  },
  // Adicione mais objetos de projeto aqui
];

const Portfolio: React.FC = () => {
  return (
    <div className={styles.portfolioContainer}>
      <header className={styles.portfolioHeader}>
        <h1>Meu Portfólio Incrível</h1>
        <p>Bem-vindo(a) aos meus projetos e experiências!</p>
      </header>

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
          <p className={styles.noProjects}>Ainda não há projetos para exibir. Volte em breve!</p>
        )}
      </section>

      <footer className={styles.portfolioFooter}>
        <p>&copy; {new Date().getFullYear()} Seu Nome Aqui. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Portfolio;