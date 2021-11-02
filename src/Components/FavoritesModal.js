import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  removeFromFavorites,
  addToFavorites,
} from "../redux/reducers/favoritesSlice"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

const FavoritesModal = (props) => {
  const { modalOpen, modalContent, toggleModal } = props
  const favoriteList = useSelector((state) => state.favoriteList)
  const dispatch = useDispatch()

  return (
    <Modal isOpen={modalOpen} toggle={toggleModal} centered size="xl">
      <ModalHeader>
        <p>
          {modalContent.description !== null
            ? `${modalContent.description} by ${modalContent.user.name}`
            : `Taken by: ${modalContent.user.name}`}
        </p>
        <p>{modalContent.id}</p>
      </ModalHeader>
      <ModalBody>
        <img src={modalContent.urls.regular} alt={modalContent.description} />
      </ModalBody>
      <ModalFooter>
        {favoriteList.find((item) => item.id === modalContent.id) ? (
          <Button
            color="danger"
            onClick={() => dispatch(removeFromFavorites(modalContent.id))}
          >
            Remove from favorites
          </Button>
        ) : (
          <Button onClick={() => dispatch(addToFavorites(modalContent))}>
            Add to favorites
          </Button>
        )}
      </ModalFooter>
    </Modal>
  )
}

export default FavoritesModal
