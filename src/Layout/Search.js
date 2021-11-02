import axios from "axios"
import React, { useState } from "react"
import { Row, Input, Button, Form } from "reactstrap"
import { useDispatch } from "react-redux"
import { setImageList } from "../redux/reducers/imageListSlice"
import { setIsLoading } from "../redux/reducers/loadingSlice"

const Search = () => {
  const [searchInput, setSearchInput] = useState("")

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    const key = "vWSGto7UY05Q1PZMLdqszg-mxU4kIsOWbeOLGyu1ACA"
    const url = `https://api.unsplash.com/search/photos?page=1&query=${searchInput}&client_id=${key}`
    axios
      .get(url)
      .then(dispatch(setIsLoading()), setSearchInput(""))
      .then((response) => {
        dispatch(setImageList(response.data.results))
        dispatch(setIsLoading())
      })
      .catch((error) => console.log(error))
  }

  return (
    <Row className="search-form">
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="what are you looking for?"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        ></Input>
        <Button>Search</Button>
      </Form>
    </Row>
  )
}

export default Search
