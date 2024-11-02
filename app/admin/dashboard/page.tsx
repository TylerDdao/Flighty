// import { BarChart, LineChart } from '@mui/x-charts/LineChart';
// export default function ChartsOverviewDemo() {
//     return (
//         <LineChart
//         xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
//         series={[
//           {
//             data: [2, 5.5, 2, 8.5, 1.5, 5],
//           },
//         ]}
//         width={500}
//         height={300}
//       />
//     );
//   }

import { LineChart } from '@mui/x-charts/LineChart';
import { flights } from '@/app/lib/simulation';

const pax:number[] =[];
const fPax:number[]=[];
const pPax:number[]=[];
const ePax:number[]=[];

for(let i = 0; i < 12; i++){
    let paxNumb =0;
    for(let j=0;j<flights.length;j++){
        if(flights[j].time.getMonth() == i){
            paxNumb = paxNumb + flights[j].fPax + flights[j].pPax + flights[j].ePax;
        }
    }
    paxNumb /= 100;
    pax.push(paxNumb);
}

for(let i = 0; i < 12; i++){
    let paxNumb =0;
    for(let j=0;j<flights.length;j++){
        if(flights[j].time.getMonth() == i){
            paxNumb = paxNumb + flights[j].fPax;
        }
    }
    paxNumb /= 100;
    fPax.push(paxNumb);
}

for(let i = 0; i < 12; i++){
    let paxNumb =0;
    for(let j=0;j<flights.length;j++){
        if(flights[j].time.getMonth() == i){
            paxNumb = paxNumb + flights[j].pPax;
        }
    }
    paxNumb /= 100;
    pPax.push(paxNumb);
}

for(let i = 0; i < 12; i++){
    let paxNumb =0;
    for(let j=0;j<flights.length;j++){
        if(flights[j].time.getMonth() == i){
            paxNumb = paxNumb + flights[j].ePax;
        }
    }
    paxNumb /= 100;
    ePax.push(paxNumb);
}

export default function DashBoard(){
    return(
        <div className="min-h-screen">
            <div className="flex justify-center w-full">
                <div>
                    <div className='font-bold text-primary text-2xl mt-[20px]'>Pax/Month (x100)</div>
                    <LineChart 
                    xAxis={[{data: [1,2,3,4,5,6,7,8,9,10,11,12]}]}
                    series={[{data: pax}]}
                    height={500}
                    width={1200}
                    />
                </div>
            </div>

            <div className="flex justify-center w-full">
                <div>
                    <div className='font-bold text-primary text-2xl mt-[20px]'>First Class Pax (x100)</div>
                    <LineChart 
                    xAxis={[{data: [1,2,3,4,5,6,7,8,9,10,11,12]}]}
                    series={[{data: fPax}]}
                    height={500}
                    width={1200}
                    />
                </div>
            </div>

            <div className="flex justify-center w-full">
                <div>
                    <div className='font-bold text-primary text-2xl mt-[20px]'>Premium Class Pax (x100)</div>
                    <LineChart 
                    xAxis={[{data: [1,2,3,4,5,6,7,8,9,10,11,12]}]}
                    series={[{data: pPax}]}
                    height={500}
                    width={1200}
                    />
                </div>
            </div>

            <div className="flex justify-center w-full">
                <div>
                    <div className='font-bold text-primary text-2xl mt-[20px]'>Economy Class Pax (x100)</div>
                    <LineChart 
                    xAxis={[{data: [1,2,3,4,5,6,7,8,9,10,11,12]}]}
                    series={[{data: ePax}]}
                    height={500}
                    width={1200}
                    />
                </div>
            </div>

            <div className='flex justify-around'>
                <div className='w-[300px] h-[300px] drop-shadow-xl rounded-xl bg-white flex flex-col'>
                    <div className='text-3xl mt-[20px] ml-[20px]'>Total Routes</div>
                    <div className='bg-white grow grid place-content-center'>
                        <div className='text-5xl font-bold text-primary'>3000</div>
                    </div>
                </div>

                <div className='w-[300px] h-[300px] drop-shadow-xl rounded-xl bg-white flex flex-col'>
                    <div className='text-3xl mt-[20px] ml-[10px]'>Total Customer This Month</div>
                    <div className='bg-white grow grid place-content-center'>
                        <div className='text-5xl font-bold text-primary'>3000</div>
                    </div>
                </div>

                <div className='w-[300px] h-[300px] drop-shadow-xl rounded-xl bg-white flex flex-col'>
                    <div className='text-3xl mt-[20px] ml-[20px]'>Total Revenue</div>
                    <div className='bg-white grow grid place-content-center'>
                        <div className='text-5xl font-bold text-primary'>3000</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
