import { useState } from 'react'

//components
import Taskform from './components/Taskform'
import Taskview from './components/Taskview'

function App() {
  let [todos, setTodos] = useState([{task:'Task 1',desc:'Hey there this is a quite and descriptive description given to me'},{task:'Task 4',desc:''}]); // Array of todos
  let [ctodos, setCTodos] = useState([{task:'Task 2',desc:'Hey there this is a quite and descriptive description given to me'},{task:'Task 3',desc:''},{task:'Task 5',desc:'This task is completed by me'}]); // Array of completed todos

  let [selectedTodo,setSelectedTodo] = useState(null); // Object of selected todo
  
  let [addTaskVisible,setAddTaskVisible] = useState(false);
  let [viewTaskVisible,setViewTaskVisible] = useState(false);

  function toggleVisibility(){
    setAddTaskVisible(!addTaskVisible);
  }
  function toggleVisiblity2(){
    setViewTaskVisible(!viewTaskVisible);
  }

  function Onetask2({todo}) {
    return (
      <div className="flex p-3 border-t-[1px] border-gray-400 items-center gap-4">
        <p>{todo.task}</p>
        <button className='border-[1px] border-gray-400 text-[#4f4f4f] text-sm font-bold py-2 px-4 rounded-lg ml-auto' onClick={()=>{console.log('Marking Undone'); setCTodos(ctodos.filter(t=>t!==todo)); setTodos(prev=>[...prev,todo]);}}>Mark Undone</button>
        <button className="primaryButton text-sm font-bold py-2 px-4 rounded-lg" onClick={()=>{console.log('Deleting'); setCTodos(ctodos.filter(t=>t !== todo));}}>Delete</button>
      </div>
    )
  }

  function Onetask1({todo}) {
    return(
      <div className="flex p-3 border-t-[1px] border-gray-400 items-center gap-4">
        <button className="primaryButton text-sm font-bold py-2 px-4 rounded-lg" onClick={()=>{console.log('Marking done'); setTodos(todos.filter(t=>t!==todo)); setCTodos(prev=>[...prev,todo]);}}>Mark Done</button>
        <p>{todo.task}</p>
        <button className='border-[1px] border-gray-400 text-[#4f4f4f] text-sm font-bold py-2 px-4 rounded-lg ml-auto' onClick={()=>{console.log('namaste'); setSelectedTodo(todo); setViewTaskVisible(true)}}>View</button>
      </div>
    )
  }

  return (
    <>
      <div id="mainpart1" className={`h-screen w-[60%] p-4 ${addTaskVisible || viewTaskVisible ? 'disable' : ''}`}>
        <div className='flex justify-between items-center py-6'>
          <h1 className="text-2xl lg:text-4xl font-extrabold roboto text-[#4f4f4f]">To Do List</h1>
          <button className="primaryButton text-sm font-bold py-2 px-4 rounded-lg" onClick={()=>{setAddTaskVisible(true)}}>Add New Task</button>
        </div>
        
        <p className='text-center text-2xl mb-4'>Tasks Pending ({todos.length}) <i className="ri-time-fill text-red-500"></i></p>

        <div id='TasksList' className=''>
          {todos.map((todo, index) => (
            <Onetask1 key={index} todo={todo}/>
          ))}
        </div>

      </div>

      <Taskform visible={addTaskVisible} toggleVisibility={toggleVisibility}  setTodos={setTodos}/>
      <Taskview visible={viewTaskVisible} toggleVisibility={toggleVisiblity2} todo={selectedTodo}/>
      
      <div id="mainpart2" className={`m-4 rounded-xl bg-zinc-200 w-[40%] p-4 ${addTaskVisible || viewTaskVisible ? 'disable' : ''}`}>
        <p className='text-center text-2xl mb-4'>Tasks Completed ({ctodos.length}) <i className="ri-task-fill text-green-500"></i></p>

        <div id='TasksList' className=''>
          {ctodos.map((e,ind)=>(
            <Onetask2 todo={e} key={ind}/>
          ))}

        </div>

      </div>
    </>
  )
}

export default App
