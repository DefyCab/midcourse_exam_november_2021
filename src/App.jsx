import React, { useEffect, useState } from 'react'
import Header from './components/Title'
import GHSearch from './components/GHSearch'
import { Container } from 'semantic-ui-react'
import SearchUser from './modules/Search'

const App = () => {
  const [searchresults, setSearchResults] = useState([])

  useEffect(() => {
    SearchUser.index().then((data) => {
      setSearchResults(data.items)
    })
  }, [])

  const searchList = searchresults.map((query) => {
    return <div key={query.id}>{query.login}</div>
  })

  return (
    <Container>
      <section name="title">
        <Header />
      </section>
      <section name="main">
        <GHSearch />
      </section>
    </Container>
  )
}

export default App
