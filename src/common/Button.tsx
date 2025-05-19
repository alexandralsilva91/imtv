import '../styles/button.scss';

interface Props {
    children: React.ReactNode;
    color?: 'yellow' | 'blue';
}

function Button({ children, color = 'blue' }: Props) {
    return (
        <button className={`button button--${color}`}> {children} </button>
    )
}

export default Button;