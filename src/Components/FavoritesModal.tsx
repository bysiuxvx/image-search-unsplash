import React from "react"
import {RootStateOrAny, useDispatch, useSelector} from "react-redux"
import {
    removeFromFavorites,
    addToFavorites,
} from "../redux/reducers/favoritesSlice"
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap"
import {ImageData} from "../types/interface";

const FavoritesModal = (props: any) => {
    const {modalOpen, modalContent, toggleModal} = props
    const favoriteList = useSelector((state: RootStateOrAny) => state.favoriteList)
    const dispatch = useDispatch()

    return (
        <Modal isOpen={modalOpen} toggle={toggleModal} centered size="xl">
            <ModalHeader>
                <p>
                    {modalContent.description !== null
                        ? `${modalContent.description} by ${modalContent.user.name}`
                        : `Taken by: ${modalContent.user.name}`}
                </p>
            </ModalHeader>
            <ModalBody className="modal-favorite-image">
                <img src={modalContent.urls.regular}
                     alt={modalContent.description}/>
            </ModalBody>
            <ModalFooter>
                {favoriteList.find((item: ImageData) => item.id === modalContent.id) ? (
                    <Button
                        color="danger"
                        onClick={() => dispatch(removeFromFavorites(modalContent.id))}
                    >
                        Remove from favorites
                    </Button>
                ) : (
                    <Button
                        onClick={() => dispatch(addToFavorites(modalContent))}>
                        Add to favorites
                    </Button>
                )}
            </ModalFooter>
        </Modal>
    )
}

export default FavoritesModal
