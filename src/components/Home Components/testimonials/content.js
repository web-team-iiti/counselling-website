import React from "react";

export default function Content(props){
    return(
        <div className="mx-20 md:w-full md:mx-0 p-8 bg-indigo-600 shadow-lg">
            <p className="leading-loose text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea
            tempora dolores qui eius pariatur odit ad voluptas iste, cum
            accusantium beatae tempore quasi nesciunt distinctio.
            </p>
            <div className="mt-4 -mx-2">
                <div className="mx-2 text-right">
                    <h1 className="font-semibold text-[#79DAE8] ">
                    {props.name}
                    </h1>
                </div>
            </div>
        </div>
    )
}