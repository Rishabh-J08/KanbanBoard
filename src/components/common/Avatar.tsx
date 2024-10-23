import React from 'react';

interface AvatarProps {
  src?: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 'md',
  className = ''
}) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const initials = alt
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return src ? (
    <img
      src={src}
      alt={alt}
      className={`
        rounded-full object-cover
        ${sizes[size]}
        ${className}
      `}
    />
  ) : (
    <div
      className={`
        rounded-full bg-indigo-100 text-indigo-600
        flex items-center justify-center font-medium
        ${sizes[size]}
        ${className}
      `}
    >
      {initials}
    </div>
  );
};