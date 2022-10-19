import React, { useState, useEffect } from "react";
import type { RealEstateInfo } from "../types/realEstate";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";

const InfoModal = () => {
  const [open, setOpen] = useState(false);
  const [articles, setArticles] = useState<[] | RealEstateInfo[]>([]);

  const getArticles = async () => {
    const url =
      "http://localhost:8080/realestate?latitude=37.492151723031024&longitude=139.94461074269023";
    await fetch(url)
      .then((res: any) => res.json())
      .then((data) => {
        setArticles(data.Realestates);
      })
      .catch((err) => {
        console.error("ERROR API: ", err);
      });
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div>
      <Button variant="solid" color="primary" onClick={() => setOpen(true)}>
        Information
      </Button>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <ModalDialog
          aria-labelledby="variant-modal-title"
          aria-describedby="variant-modal-description"
        >
          <ModalClose />
          <Typography
            id="variant-modal-title"
            component="h2"
            level="inherit"
            fontSize="1.25em"
            mb="0.25em"
          >
            物件情報
          </Typography>
          <Typography id="variant-modal-description" textColor="inherit">
            会津レデンス
          </Typography>
          <ul>
            {Array.isArray(articles)
              ? articles.map((element) => {
                  return <h2 key={element.id}>{element.name}</h2>;
                })
              : "null"}
          </ul>
        </ModalDialog>
      </Modal>
    </div>
  );
};

export default InfoModal;
