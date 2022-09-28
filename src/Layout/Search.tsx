import axios from "axios"
import React, {useState, Dispatch, SetStateAction} from "react"
import {Row, Input, Button, Form} from "reactstrap"
import {useDispatch} from "react-redux"
import {setImageList} from "../redux/reducers/imageListSlice"
import {setIsLoading} from "../redux/reducers/loadingSlice"
import {ImageData} from "../types/interface";

interface ServerResponse {
    data: ServerData
}

interface ServerData {
    results: ImageData[]
}

const Search = () => {
    const [searchInput, setSearchInput] = useState<string>('')

    const dispatch = useDispatch()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const key = "vWSGto7UY05Q1PZMLdqszg-mxU4kIsOWbeOLGyu1ACA"
        const url = `https://api.unsplash.com/search/photos?page=1&query=${searchInput}&client_id=${key}`

        try {
            dispatch(setIsLoading(true))
            const response = await axios.get(url)
            setSearchInput("")
            if (response.data) {
                dispatch(setImageList(response.data.results))
                dispatch(setIsLoading(false))
            }
        } catch (error) {
           console.log(error)
        }
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
