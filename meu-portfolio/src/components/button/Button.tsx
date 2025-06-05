// src/components/Button/Button.tsx
import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode; // O texto ou ícone dentro do botão
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Função ao clicar
  type?: 'button' | 'submit' | 'reset'; // Tipo do botão HTML
  variant?: 'primary' | 'secondary'; // Para diferentes estilos (opcional)
  className?: string; // Para classes CSS adicionais passadas de fora
  disabled?: boolean; // Para desabilitar o botão
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary', // Define um variant padrão
  className = '',
  disabled = false,
}) => {
  // Constrói a lista de classes CSS dinamicamente
  const buttonClasses = `
    ${styles.buttonBase}
    ${variant === 'primary' ? styles.primary : ''}
    ${variant === 'secondary' ? styles.secondary : ''}
    ${className}
  `;

  return (
    <button
      type={type}
      className={buttonClasses.trim()} // .trim() para remover espaços extras
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;