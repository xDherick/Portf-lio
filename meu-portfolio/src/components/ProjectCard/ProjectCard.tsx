// src/components/ProjectCard/ProjectCard.tsx
import React from 'react';
import styles from './ProjectCard.module.scss';
import Button from '../button/Button'; // Importar nosso componente Button

interface ProjectCardProps {
  title: string;
  description: string;
  linkUrl?: string; // Link para detalhes do projeto (opcional)
  // imageUrl?: string; // Para uma imagem do projeto no futuro
  // tags?: string[];   // Para tags/tecnologias do projeto
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  linkUrl,
  // imageUrl,
  // tags,
}) => {
  const handleSeeDetails = () => {
    if (linkUrl) {
      // Ação ao clicar no botão. Pode ser:
      // 1. Navegar para uma rota interna (usando useNavigate do react-router-dom)
      // 2. Abrir um link externo:
      window.open(linkUrl, '_blank', 'noopener noreferrer');
      // 3. Chamar uma função passada por props, etc.
      console.log(`Abrindo link: ${linkUrl}`);
    }
  };

  return (
    <article className={styles.projectCard}>
      {/* {imageUrl && <img src={imageUrl} alt={title} className={styles.projectImage} />} */}
      <div className={styles.cardContent}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>
        {/* {tags && tags.length > 0 && (
          <div className={styles.tagsContainer}>
            {tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
          </div>
        )} */}
      </div>
      {linkUrl && ( // Renderiza o botão apenas se linkUrl for fornecido
        <div className={styles.cardActions}>
          <Button onClick={handleSeeDetails} variant="primary">
            Ver Detalhes
          </Button>
        </div>
      )}
    </article>
  );
};

export default ProjectCard;