import React from "react"
import { Button, Row, Col } from "reactstrap"
import { useDispatch, useSelector } from "react-redux"
import {
  addToFavorites,
  removeFromFavorites,
} from "../redux/reducers/favoritesSlice"

const Image = (props) => {
  const { details } = props

  const favoriteList = useSelector((state) => state.favoriteList)

  const dispatch = useDispatch()

  return (
    <div className="image-wrapper">
      <img
        className="image-search-result"
        src={details.urls.small}
        alt={details.tags.title}
      ></img>
      <Row className="image-details">
        <Col xs="6">
          <p>Taken by: {details.user.name}</p>
        </Col>
        <Col xs="4">
          {favoriteList.find((item) => item.id === details.id) ? (
            <Button
              color="danger"
              onClick={() => dispatch(removeFromFavorites(details.id))}
            >
              Remove from favorites
            </Button>
          ) : (
            <Button onClick={() => dispatch(addToFavorites(details))}>
              Add to favorites
            </Button>
          )}
        </Col>
      </Row>
    </div>
  )
}

export default Image
