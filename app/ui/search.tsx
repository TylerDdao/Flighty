'use client';

// import { usePathname, useSearchParams, useRouter } from "next/navigation";
// import { useDebouncedCallback } from "use-debounce";

export default function Search({placeHolder}:{placeHolder:string}){

    return(
        <div className="">
        <input
            className="h-[50px] w-full drop-shadow-xl rounded-xl bg-white placeholder:text-gray-500 pl-[10px]"
            placeholder={placeHolder}
            // onChange={(e) => {
            // // handleSearch(e.target.value);
            // }}
            // defaultValue={searchParams.get('query')?.toString()}
        />
        </div>
    );
}