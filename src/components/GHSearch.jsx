import React from 'react'
import { Button, Input } from 'semantic-ui-react'

const GHSearch = () => {
  return (
    <>
      <Input type="text" name="search" placeholder="Input GH username" />
      <Button name="search">Search</Button>
    </>
  )
}

export default GHSearch

// whatever is passed in the search query must be passed as a param
// and a onClick event should pass that to the searchfunction