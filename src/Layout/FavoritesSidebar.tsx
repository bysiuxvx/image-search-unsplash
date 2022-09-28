import React, {useState} from "react"
import {
    Container,
    Row,
    Col,
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Button,
} from "reactstrap"
import {RootStateOrAny, useSelector} from "react-redux"
import Tippy from "@tippyjs/react"
import {followCursor} from "tippy.js"
import FavoritesModal from "../Components/FavoritesModal"
import {ImageData} from "../types/interface";

const FavoritesSidebar = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [modalContent, setModalContent] = useState<ImageData | null>(null)
    const [canvasOpen, setCanvasOpen] = useState<boolean>(false)
    const favoriteList = useSelector((state: RootStateOrAny) => state.favoriteList)

    const toggleModal = (imageData: ImageData) => {
        setModalOpen(!modalOpen)
        setModalContent(modalOpen ? null : imageData)
    }

    const toggleCanvas = () => setCanvasOpen(!canvasOpen)

    return (
        <Container className="favorites-sidebar">
            <Button
                outline
                onClick={() => {
                    toggleCanvas()
                }}
                className="canvas-toggler"
            >
                Show favorites
            </Button>

            <Offcanvas isOpen={canvasOpen} toggle={toggleCanvas}>
                <OffcanvasHeader toggle={toggleCanvas}>
                    Your favorites - click them!
                </OffcanvasHeader>
                <OffcanvasBody>
                    {favoriteList.length > 0 &&
                        favoriteList.map((item: ImageData) => (
                            <Row key={item.id} className="favorite-item">
                                <Col onClick={() => toggleModal(item)}>
                                    <Tippy
                                        followCursor={true}
                                        plugins={[followCursor]}
                                        content={
                                            <img
                                                src={item.urls.small}
                                                alt={item.tags.title}
                                                style={{maxWidth: "15rem"}}
                                            />
                                        }
                                    >
                                        <p>
                                            {item.description !== null
                                                ? `${item.description} by ${item.user.name}`
                                                : `Taken by: ${item.user.name}`}
                                        </p>
                                    </Tippy>
                                </Col>
                            </Row>
                        ))}
                </OffcanvasBody>
            </Offcanvas>

            {modalContent ? (
                <FavoritesModal
                    modalOpen={modalOpen}
                    modalContent={modalContent}
                    toggleModal={toggleModal}
                />
            ) : null}
        </Container>
    )
}

export default FavoritesSidebar
