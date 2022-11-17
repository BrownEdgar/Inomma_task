import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Link({ to, linkName }) {
  return (
    <NavLink to={to} >{linkName}</NavLink>
  )
}
