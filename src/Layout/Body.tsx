import React from "react"
import Search from "./Search"
import Image from "../Components/Image"
import FavoritesSidebar from "./FavoritesSidebar"

import { Container, Spinner } from "reactstrap"

import {RootStateOrAny, useSelector} from "react-redux"
import {ImageData} from "../types/interface";

const Body = () => {
  const imageList = useSelector((state: RootStateOrAny) => state.imageList)
  const favoriteList = useSelector((state: RootStateOrAny) => state.favoriteList)
  const isLoading = useSelector((state: RootStateOrAny) => state.isLoading)

  return (
    <>
      <Search />
      {imageList && (
        <Container className="body-container">
          {isLoading ? (
            <Spinner />
          ) : (
            imageList.map((item : ImageData) => <Image details={item} />)
          )}
        </Container>
      )}
      {favoriteList.length > 0 ? <FavoritesSidebar /> : null}
    </>
  )
}

export default Body
