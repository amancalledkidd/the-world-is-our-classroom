import './Button.scss'

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;

