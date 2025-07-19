import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ title, styles }) => {
  return (
    <div>
     < Pill title="Featured" styles="text-blue-500" />


      <p className="text-sm">{title}</p>
    </div>
  )
}

export default Pill;
