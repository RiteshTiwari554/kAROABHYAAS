import React from 'react'

const StudentTemplate = ({
    name,
    classtitle,
    template,
    desc,
}) => {
  return (
    <div className= {classtitle}>
        <div className={template}>    
        {name ? <h3 className='name'>{name}</h3> : null}
        { desc ? <h3 className= 'desc'>{desc}</h3> : null} 
        </div>
    </div>
    
  )
}

export default StudentTemplate;