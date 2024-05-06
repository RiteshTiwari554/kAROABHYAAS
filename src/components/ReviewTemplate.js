import React from 'react'

const ReviewTemplate = (
    {
        name,
        classtitle,
        template,
        desc,
        line,
    }
) => {
  return (
    <div className={classtitle}>
      {name ? <h3 className='reviewname'>{name}</h3> : null}
      <div className={line}/>
        { desc ? <h3 className= 'reviewdesc'>{desc}</h3> : null} 

    </div>
  )
}

export default ReviewTemplate;