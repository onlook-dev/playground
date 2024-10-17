const NoiseOverlay = () => (
  <div
    className="fixed inset-0 pointer-events-none z-50 mix-blend-multiply"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      filter: "contrast(120%) brightness(120%)",
    }}
  />
);

export default function Page() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white relative overflow-hidden flex-col gap-[50px]">
      <div className="bg-transparent h-[fit-content] w-[fit-content]">
        <p className="w-[fit-content] h-[fit-content]">Flex</p>
        <div className="rounded-[10px] bg-transparent border border-[#000000] w-[800px] h-[800px] flex flex-col justify-center items-center gap-[40px]">
          <div className="w-[182px] h-[149px] border-[10px] border-[#000000] bg-transparent text-[56px] flex flex-col justify-center items-center">
            1
          </div>
          <div className="w-[182px] h-[149px] border-[10px] border-[#000000] bg-transparent text-[56px] flex flex-col justify-center items-center">
            2
          </div>
          <div className="w-[182px] h-[149px] border-[10px] border-[#000000] bg-transparent text-[56px] flex flex-col justify-center items-center">
            3
          </div>
        </div>
      </div>
      <div className="bg-transparent h-[fit-content] w-[fit-content]">
        <p className="w-[fit-content] h-[fit-content]">Grid</p>
        <div className="rounded-[10px] bg-transparent border border-[#000000] w-[800px] h-[800px] grid grid-rows-[repeat(3,_1fr)] grid-cols-[repeat(3,_1fr)] p-[40px] gap-[30px]">
          <div className="w-[182px] h-[149px] border-[10px] border-[#000000] bg-transparent"></div>
          <div className="w-[182px] h-[149px] border-[10px] border-[#000000] bg-transparent"></div>
          <div className="w-[182px] h-[149px] border-[10px] border-[#000000] bg-transparent"></div>
          <div className="w-[182px] h-[149px] border-[10px] border-[#000000] bg-transparent"></div>
          <div className="w-[182px] h-[149px] border-[10px] border-[#000000] bg-transparent"></div>
          <div className="w-[182px] h-[149px] border-[10px] border-[#000000] bg-transparent"></div>
          <div className="w-[182px] h-[149px] border-[10px] border-[#000000] bg-transparent"></div>
          <div className="w-[182px] h-[149px] border-[10px] border-[#000000] bg-transparent"></div>
          <div className="w-[182px] h-[149px] border-[10px] border-[#000000] bg-transparent"></div>
        </div>
      </div>
    </div>
  );
}
