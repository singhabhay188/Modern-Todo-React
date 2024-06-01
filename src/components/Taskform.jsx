import React,{useState} from 'react'
import './Taskform.css'

function Taskform({visible,toggleVisibility,setTodos}){

    return (
        <>  {visible && (
            <div id='taskform' className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-[1px] border-black shadow-md p-6 rounded-xl w-[500px] z-10 flex flex-col justify-evenly'>
                <h1 className="text-2xl text-black">Add New Task</h1>
                <i id='close' className="ri-close-fill block text-end text-2xl cursor-pointer mb-8" onClick={toggleVisibility}></i>

                <input type="text" placeholder='Enter your Task' id="taskInputt" className='w-full rounded-md p-3 outline-none border-2 focus:border-[#6b7280]' />
                <textarea id="taskInputd" rows={4} className='resize-none w-full my-3 border-2 rounded-md outline-none p-3 focus:border-[#6b7280]' placeholder='Enter description if any...'></textarea>

                <button className="w-full text-sm font-bold py-2 px-4 rounded-lg primaryButton" onClick={(e)=>{ 
                    let task = document.getElementById('taskInputt').value;
                    let desc = document.getElementById('taskInputd').value;
                    let todo = {task,desc};
                    console.log(todo);
                    setTodos(prev=>[...prev,todo]);
                    toggleVisibility();
                }}>Add Task</button>
            </div>
        )}
        </>
    )
}

export default Taskform;