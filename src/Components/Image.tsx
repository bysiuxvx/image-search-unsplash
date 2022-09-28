import React, {FC} from "react"
import {Button, Row, Col} from "reactstrap"
import {RootStateOrAny, useDispatch, useSelector} from "react-redux"
import {
    addToFavorites,
    removeFromFavorites,
} from "../redux/reducers/favoritesSlice"
import {ImageData} from "../types/interface";

const Image: FC<{ details: ImageData }> = ({details}) => {
    const {urls, user, tags, id} = details
    const favoriteList = useSelector((state: RootStateOrAny) => state.favoriteList)

    const dispatch = useDispatch()

    return (
        <div className="image-wrapper">
            <img
                className="image-search-result"
                src={urls.small}
                alt={tags.title}
            />
            <Row className="image-details">
                <Col xs="6">
                    <p>Taken by: {user.name}</p>
                </Col>
                <Col xs="4">
                    {favoriteList.find((item: ImageData) => item.id === id) ? (
                        <Button
                            color="danger"
                            onClick={() => dispatch(removeFromFavorites(id))}
                        >
                            Remove from favorites
                        </Button>
                    ) : (
                        <Button
                            onClick={() => dispatch(addToFavorites(details))}>
                            Add to favorites
                        </Button>
                    )}
                </Col>
            </Row>
        </div>
    )
}

export default Image
