import * as React from "react";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";

const InfoModal: React.VFC = () => {
  const [open, setOpen] = React.useState("");

  return (
    <div>
      <Button
        variant="outlined"
        color="neutral"
        onClick={() => setOpen("outlined")}
      >
        Outlined
      </Button>
      <Modal open={!!open} onClose={() => setOpen("")}>
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
        </ModalDialog>
      </Modal>
    </div>
  );
};

export default InfoModal;
