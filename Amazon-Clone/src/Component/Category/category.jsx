import React from 'react'
import {categoryInfos} from "./CategoryFullInfo"
import CategoryCard from './CategoryCard'
 
function Category() {
  return (
    <section>
{
categoryInfos.map((infos)=>{
<CategoryCard data={infos}/>
})
}
    </section>
  )
}

export default Category