import React from 'react'

const Classtemplate = (
    {
        title,
        text,
        button,
        classname,
    }
) => {
  return (
    <div className={`classcontainer1 ${classname}`}>
        <div className='classtemp'/>
        <p className='classnametitle'>{title}</p>
        <p className='classnamedesclorem'>{text}</p>
        <div className='classnamebuttomsec'>
            <p className='classnamebuttomsectext'>{button}</p>
        </div>
    </div>
  )
}

export default Classtemplate