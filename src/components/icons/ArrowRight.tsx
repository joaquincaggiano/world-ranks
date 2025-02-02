interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const ArrowRight = ({ width = 24, height = 24, color = "#000000" }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="#1B1D1F" />
      <path
        d="M6 12H18M18 12L13 7M18 12L13 17"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowRight;
