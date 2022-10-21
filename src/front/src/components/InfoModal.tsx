import React, { useState, useEffect } from "react";
import type { RealEstateDetail } from "../types/realEstate";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";

const InfoModal: React.FC<{
  latitude: number;
  longitude: number;
}> = ({ latitude, longitude }) => {
  const [open, setOpen] = useState(false);
  const [realEstateDetail, setRealEstateDetail] = useState<
    [] | RealEstateDetail[]
  >([]);

  const getRealEstateDetail = async (latitude: number, longitude: number) => {
    // const url = `https://back-lpzceixskq-de.a.run.app/realestate/detail/latlon?latitude=${latitude}&longitude=${longitude}`;
    const url = `http://localhost:8080/realestate/detail/latlon?latitude=${latitude}&longitude=${longitude}`;
    // window.alert("InfoModal url" + url);
    await fetch(url)
      .then((res: any) => res.json())
      .then((data) => {
        setRealEstateDetail(data.RealEstateDetails);
        // window.alert("InfoModal data.Realestates" + data.Realestates);
      })
      .catch((err) => {
        window.alert("Failed to get API!");
      });
  };

  useEffect(() => {
    getRealEstateDetail(latitude, longitude);
  }, [latitude, longitude]);

  return (
    <div
      style={{
        position: "absolute",
        top: "90%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <Button
        variant="solid"
        style={{ backgroundColor: "#75CDD9" }}
        onClick={() => setOpen(true)}
      >
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
            {Array.isArray(realEstateDetail)
              ? realEstateDetail.map((element) => {
                  return <span key={element.id}>{element.name}</span>;
                })
              : "Fail"}
          </Typography>
        </ModalDialog>
      </Modal>
    </div>
  );
};

export default InfoModal;
