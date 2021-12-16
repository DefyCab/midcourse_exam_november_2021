import axios from 'axios'

const Search = {
  async index() {
    const { data } = await axios.get('https://api.github.com/search/',
    )
    return data
  }
}  