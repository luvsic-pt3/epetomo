import { TextField } from "@material-ui/core"
import { Search as SearchIcon } from "@material-ui/icons"
import { useState } from "react"

export function SearchForm() {
  const [keyword, setKeyword] = useState("")

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setKeyword(event.target.value)
  }

  return (
    <>
      <div className="my-4">
        <SearchIcon />
        <TextField
          value={keyword}
          onChange={handleChange}
        />
      </div>
    </>
  )
}
