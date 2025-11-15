import React from 'react';

interface YouTubeIconProps {
  className?: string;
  size?: number;
  color?: string;
  title?: string;
}
interface PinterestIconProps {
  className?: string;
  size?: number;
  color?: string;
  title?: string;
}


export const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
  </svg>
);

export const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

export const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25zM16.63 19.75h1.844L7.157 4.25H5.16l11.47 15.5z"/>
  </svg>
);

export const PinterestIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 0C5.373 0 0 5.373 0 12c0 4.991 3.657 9.128 8.438 10.447-.117-.887-.223-2.25.047-3.222.243-.84 1.562-5.336 1.562-5.336s-.398-.797-.398-1.972c0-1.85 1.073-3.234 2.407-3.234 1.136 0 1.686.853 1.686 1.877 0 1.144-.729 2.853-1.105 4.438-.316 1.336.67 2.426 1.984 2.426 2.382 0 3.983-3.032 3.983-6.617 0-2.728-1.84-4.775-5.183-4.775-3.779 0-6.135 2.823-6.135 5.983 0 1.09.422 2.26.948 2.894.104.125.118.234.087.36-.094.395-.306 1.254-.348 1.43-.055.23-.18.279-.418.168-1.56-.727-2.536-3.01-2.536-4.845 0-3.946 2.87-7.577 8.27-7.577 4.344 0 7.717 3.095 7.717 7.23 0 4.317-2.721 7.799-6.503 7.799-1.27 0-2.465-.662-2.875-1.444l-.783 2.984c-.283 1.081-1.05 2.435-1.563 3.263A12.01 12.01 0 0 0 24 12C24 5.373 18.627 0 12 0z" />
  </svg>
);


export const AbbaselLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="black"/>
    <path d="M12.934 29.5L16.222 20.932L19.51 29.5H22.342L17.542 18.292L22.066 10.5H19.234L15.946 16.594L12.658 10.5H9.826L14.35 18.292L9.55 29.5H12.934Z" fill="white"/>
  </svg>
);

export const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

// FIX: Added the missing SparklesIcon component.
export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m12 3-1.5 3L7 7.5l3 1.5L11.5 12l1.5-3L16 7.5l-3-1.5z" />
    <path d="M5 11.5 4 14l-2.5.5.5 2.5L4 19.5l1.5-2 1.5 2 .5-2.5L7 14l-2-2.5z" />
    <path d="m18 11.5 1 2.5 2.5.5-.5 2.5-2 1.5-1.5-2-1.5 2-.5-2.5.5-2.5 2.5-.5z" />
  </svg>
);

export const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export const YouTubeIcon: React.FC<YouTubeIconProps> = ({
  className,
  size = 24,
  color = "currentColor",
  title = "YouTube",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    role="img"
    aria-label={title}
    className={className}
  >
    {title && <title>{title}</title>}
    <path
      fill={color}
      d="M23.498 6.186a2.999 2.999 0 0 0-2.114-2.115C19.2 3.5 12 3.5 12 3.5s-7.2 0-9.384.571A2.999 2.999 0 0 0 .502 6.186 31.18 31.18 0 0 0 0 12a31.18 31.18 0 0 0 .502 5.814 2.999 2.999 0 0 0 2.114 2.115C4.8 20.5 12 20.5 12 20.5s7.2 0 9.384-.571a2.999 2.999 0 0 0 2.114-2.115A31.18 31.18 0 0 0 24 12a31.18 31.18 0 0 0-.502-5.814ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z"
    />
  </svg>
);

export const HeartIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export const ThreeDotsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="5" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="12" cy="19" r="2" />
  </svg>
);