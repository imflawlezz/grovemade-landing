import LogoIcon from '../ui/LogoIcon';
import LogoFull from '../ui/LogoFull';
import clsx from 'clsx';

type LogoProps = {
    variant?: 'icon' | 'full';
    color?: string;
    className?: string;
};

const Logo = ({
                  variant = 'full',
                  color = '',
                  className = '',
              }: LogoProps) => {
    const LogoComponent = variant === 'icon' ? LogoIcon : LogoFull;

    return (
        <div className={clsx('', color, className)}>
            <LogoComponent />
        </div>
    );
};

export default Logo;