import Image from 'next/image';

interface SocialLoginButtonProps {
  iconSrc: string;
  backgroundColor: string;
  border: string;
  text: string;
  iconWidth?: number;
}

export const SocialLoginButton = ({
  iconSrc,
  backgroundColor,
  border,
  text,
  iconWidth,
}: SocialLoginButtonProps) => {
  return (
    <button
      style={{
        backgroundColor,
        border: border ? `1px solid ${border}` : 'none',
        boxSizing: 'border-box',
        borderRadius: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '3rem',
        gap: '1rem',
      }}
    >
      <Image src={iconSrc} alt="social Icon" width={iconWidth ? iconWidth : 24} height={24} />
      <p className="text-[1.125rem] font-bold leading-none text-gray-900">{text}</p>
    </button>
  );
};
