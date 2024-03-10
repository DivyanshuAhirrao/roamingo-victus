import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
} & React.ComponentProps<"button">

const Button = ({ type, title, icon, variant, full,  children, ...rest  }: ButtonProps) => {
  return (
    <button
    className= {`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`} {...rest} type={type}>
      {icon && <Image src={icon} alt={title} width={24} height={24} />} {children}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button