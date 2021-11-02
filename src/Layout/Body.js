import React from "react"
import Search from "./Search"
import { Container, Spinner } from "reactstrap"

import { useSelector } from "react-redux"
import Image from "../Components/Image"

const Body = () => {
  const imageList = useSelector((state) => state.imageList.images)
  const isLoading = useSelector((state) => state.isLoading.value)

  return (
    <>
      <Search />
      {imageList.length > 0 ? (
        <Container className="body-container">
          {isLoading ? (
            <Spinner />
          ) : (
            imageList.map((image) => <Image key={image.id} details={image} />)
          )}
        </Container>
      ) : null}
    </>
  )
}

export default Body
