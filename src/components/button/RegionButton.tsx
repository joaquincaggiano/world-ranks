"use client"

interface Props {
  region: string;
  isActive: boolean;
  setRegion: (region: string) => void;
}

const RegionButton = ({ region, isActive, setRegion }: Props) => {
  return (
    <button className={`${isActive ? "bg-dark2" : "bg-dark"} rounded-xl p-2 font-medium text-sm w-fit`} onClick={() => setRegion(region)}>
      {region}
    </button>
  )
}

export default RegionButton