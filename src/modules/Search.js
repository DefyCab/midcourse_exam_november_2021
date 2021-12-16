import axios from 'axios'

const Search = {
  async index() {
    const { data } = await axios.get('https://api.github.com/search/users', {
  params: {
    q: "Barack"
  }
  })
    return data
  }
}  

export default Search