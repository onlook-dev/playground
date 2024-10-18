export default function Page() {
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-white relative overflow-hidden flex-col gap-[50px]">
            <Flex />
            <Text />
            <Grid />
        </div>
    );
}


function Flex() {
    return <div className="bg-transparent h-[fit-content] w-[fit-content]">
        <p className="w-[fit-content] h-[fit-content]">Flex</p>
        <div className="rounded-[10px] border border-[#000000] w-[800px] h-[800px] flex flex-col justify-center items-center gap-[30px] bg-transparent">
            <div className="w-[182px] h-[149px] border-[10px] border-[#000000] text-[56px] flex flex-col justify-center items-center bg-transparent">
                0
            </div>
            <div className="w-[182px] h-[149px] text-[56px] flex flex-col justify-center items-center border-transparent border-0 bg-[#a22424]">
                1
            </div>
            <div className="w-[182px] h-[149px] border-[10px] text-[56px] flex flex-col justify-center items-center border-[#FFFF00] bg-[#008000]">
                2
            </div>
            <div className="w-[182px] h-[149px] border-[10px] border-[#000000] text-[56px] flex flex-col justify-center items-center bg-[#9e1111]">
                3
            </div>
        </div>
    </div>
}

function Text() {
    return <div className="bg-transparent h-[fit-content] w-[fit-content]">
        <p className="w-[fit-content] h-[fit-content]">Text</p>
        <div className="rounded-[10px] bg-transparent border border-[#000000] w-[800px] grid-rows-[repeat(3,_1fr)] grid-cols-[repeat(3,_1fr)] p-[40px] gap-[30px] block h-[500px]">
            <h1 className="w-[123px] h-[49px]">H1</h1>
            <h2 className="w-[123px] h-[49px]">H2</h2>
            <h3 className="w-[123px] h-[49px]">H3</h3>
            <h4 className="w-[123px] h-[49px]">H4</h4>
            <h4 className="w-[123px] h-[49px]">H4</h4>
            <h5 className="w-[123px] h-[49px]">H5</h5>
            <h6 className="w-[123px] h-[49px]">H5</h6>
            <p className="w-[123px] h-[49px]">p</p>
            <span className="w-[123px] h-[49px]">span</span>
            <span className="w-[123px] h-[49px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit neque et tortor sodales iaculis. </span>
        </div>
    </div>
}

function Grid() {
    return <div className="bg-transparent h-[fit-content] w-[fit-content]">
        <p className="w-[fit-content] h-[fit-content]">Grid</p>
        <div className="rounded-[10px] bg-transparent border border-[#000000] w-[800px] h-[800px] grid grid-rows-[repeat(3,_1fr)] grid-cols-[repeat(3,_1fr)] p-[40px] gap-[30px]">
            <div className="w-[182px] h-[149px] border-[10px] border-[#000000] bg-transparent text-[56px] flex flex-col justify-center items-center">
                1
            </div>

            <div className="w-[182px] h-[149px] border-[10px] border-[#000000] bg-transparent text-[56px] flex flex-col justify-center items-center">
                2
            </div>
            <div className="w-[182px] h-[149px] border-[10px] border-[#000000] bg-transparent text-[56px] flex flex-col justify-center items-center">
                3
            </div>

            <div className="w-[182px] h-[149px] border-[10px] border-[#000000] bg-transparent"></div>
            <div className="w-[182px] h-[149px] border-[10px] border-[#000000] bg-transparent"></div>
            <div className="w-[182px] h-[149px] border-[10px] border-[#000000] bg-transparent"></div>
        </div>
    </div>
}