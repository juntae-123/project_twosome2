import { GoArrowRight } from "react-icons/go";

interface FranchiseButtonProps {
  label: string;
  duration?: number;
}

const FranchiseButton = ({ label, duration = 300 }: FranchiseButtonProps) => {
  return (
    <button className="relative group border-2 border-black px-6 py-3 bg-white flex items-center gap-4 overflow-hidden max-md:text-sm">
      <span
        className={`absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-${duration} ease-in-out`}
        aria-hidden="true"
      ></span>
      <span className="relative z-10 text-black group-hover:text-white transition-colors">
        {label}
      </span>
      <GoArrowRight className="relative z-10 max-md:hidden group-hover:text-white transition-colors" />
    </button>
  );
};

export default FranchiseButton;
