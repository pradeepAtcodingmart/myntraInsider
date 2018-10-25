import React from 'react'

export default function Title(props) {
  return (
   <div className="title">
   <br/>
   <span className="title-header" style={{marginLeft:15}}><b>{props.header}</b></span>
   <span className="title-view" >{props.view}</span>
   </div>
  )
}
