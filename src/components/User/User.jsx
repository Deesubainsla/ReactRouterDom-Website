import React from 'react'
import { useParams } from 'react-router-dom'
export default function User() {
    const {userid} = useParams();
  return<>
    <h1>{userid} has logedIn:</h1>
  </>
}

