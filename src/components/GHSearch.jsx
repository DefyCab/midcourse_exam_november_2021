import React from 'react'
import { Button, Input } from 'semantic-ui-react'

const GHSearch = () => {
  return (
    <>
      <Input data-cy="search-input" type="text" name="search" placeholder="Input GH username" />
      <Button data-cy="search-button" name="search">Search</Button>
    </>
  )
}

export default GHSearch

// whatever is passed in the search query must be passed as a param
// and a onClick/onChange event should pass that to the searchfunction
//the input is logged in event.target.value
