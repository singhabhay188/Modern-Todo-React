import React,{useState} from 'react'

function Taskview({visible,toggleVisibility,todo}){

    return (
        <>  {visible && (
            <div id='taskform' className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-[1px] border-black shadow-md p-6 rounded-xl w-[500px] z-10 flex flex-col '>
                <h1 className="text-2xl text-black">View Task</h1>
                <i id='close' className="ri-close-fill block text-end text-2xl cursor-pointer mb-2" onClick={toggleVisibility}></i>

                <p className='text-xl font-semibold text-black'>{todo.task}</p>
                <p>{todo.desc}</p>
            </div>
        )}
        </>
    )
}

export default Taskview;