import React from 'react';
import './index.scss'

type IglooButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  className?: string;
};

const IglooButton: React.FC<IglooButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  className = '',
}) => {
  const baseStyle = `btn`; // Base class for common styles
  const variantStyles = {
    primary: `btn-primary`,
    secondary: `btn-secondary`,
    danger: `btn-danger`,
  };

  const computedClassName = `${baseStyle} ${variantStyles[variant]} ${
    disabled ? 'btn-disabled' : ''
  } ${className}`.trim();

  return (
    <button
      className={computedClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default IglooButton;
