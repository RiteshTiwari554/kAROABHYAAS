import React from 'react'

const ProductItem = (
  {
    title,
    text,
    price,
    carttext,
    classname,
    lineclass
  }
) => {
  return (
    <>
    <div className={`productItemcard  ${classname}`}>
       <div className='producttempContainer' />
        <h3 className='producttemptitle'>{title}</h3>
        <h3 className='producttemptext'>{text}</h3>
        <h3 className='producttempval'>{price}</h3>
        <div className='productcartcontainer'>
          <h3 className='productcartcontainertext'>{carttext}</h3>
        </div>

    </div>

    <div className={`productline ${lineclass}`} />
    </>
  )
}

export default ProductItem;