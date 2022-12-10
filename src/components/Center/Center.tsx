import React from 'react'
import './Center.css'

function Center (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) {
  return <div className='center'>{props.children}</div>
}

export default Center