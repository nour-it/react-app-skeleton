import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from './Input'
import Icon from './Icon'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`)
      setSearchTerm('')
    }
  }

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setSearchTerm(e.target.value)
  // }

  return (
    <form onSubmit={handleSubmit} className="flex items-center max-w-md bg-gray-100 px-2 ml-auto mr-auto">
      <Icon/>
      <Input/>
      <button
        type="submit"
        className=""
        >
        <Icon/>
      </button>
    </form>
  )
}

export default Search
