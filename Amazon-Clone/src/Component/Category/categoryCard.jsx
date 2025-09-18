import React from 'react'

function CategoryCard({data}) {
  return (
    <div>
<a href='imgLink'>
<span>
    <h2>{data.title}</h2>
</span>
<img src={ data.imgLink} alt=''/>
<p>shope now</p>
 </a>
    </div>
  )
}

export default CategoryCard