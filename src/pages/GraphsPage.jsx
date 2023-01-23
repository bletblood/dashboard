import React from 'react'
import { LinkPages } from '../static'

const GraphsPage = (params) => {
  const { url } = params
  const page = LinkPages.find(key => key.name.toLowerCase() === url)

  console.log(page)
  return (
    <div>GraphsPage, {url}</div>
  )
}

export default GraphsPage