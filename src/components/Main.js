import React from 'react'


export default function Main() {
  return (
    <main>
       <div className="main_imagen_contain">
        <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='picy'/>
       </div>
       <div className="main_buttons_container">
        <button className="btns">Tools</button>
        <button className="btns">Projects</button>
       </div>
       <button className="btns">Email Me</button>
    </main>
  )
}
