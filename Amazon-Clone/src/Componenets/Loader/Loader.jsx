import React from 'react'
import{FadeLoader} from "react-spinners"
function Loader() {
  return (
    <div
      Style={{

        display: " flex",
        alignItems: "center",
        justifyContent:" center",
        height:"50vh"
      }  }
>
      <FadeLoader  color=" #364767"/>
    </div>
  )
}

export default Loader
