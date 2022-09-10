import React from 'react'
import ReactDOM from 'react-dom'

interface Props {
  children: JSX.Element | JSX.Element[]
}

function Modal ({ children }: Props) {
  return ReactDOM.createPortal(
    <div className='fixed flex bg-black/80 -top-[10px] -left-[10px] -right-[10px] -bottom-[10px] justify-center items-center text-white'>{children}</div>,
    document.getElementById('modal') as HTMLElement
  )
}

export { Modal }
