import React from "react"
import Search from "./Search"
import Image from "../Components/Image"
import FavoritesSidebar from "./FavoritesSidebar"

import { Container, Spinner } from "reactstrap"

import { useSelector } from "react-redux"

const Body = () => {
  const imageList = useSelector((state) => state.imageList.images)
  const favoriteList = useSelector((state) => state.favoriteList)
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
      {favoriteList.length > 0 ? <FavoritesSidebar /> : null}
    </>
  )
}

export default Body
