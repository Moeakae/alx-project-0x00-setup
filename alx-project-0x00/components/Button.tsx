
 type ButtonProps = {
    title: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string
};

const Button: React.FC<ButtonProps> = ({ title, style, onClick }) => (
    <button style={style} onClick={onClick}>
        {title}
    </button>
);

export default Button;