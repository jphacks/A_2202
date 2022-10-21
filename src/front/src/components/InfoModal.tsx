import React, { useState, useEffect } from "react"
import './InfoModal.css';
import type { RealEstateDetail } from "../types/realEstate";
import Button from "@mui/joy/Button";
// import Modal from "@mui/joy/Modal";
import Modal from 'react-modal';
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";
import Card from '@mui/joy/Card';
import CloseIcon from '@mui/icons-material/Close';


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
      })
      .catch((err) => {
        window.alert("Failed to get API!");
        // window.alert("InfoModal data.Realestates" + data.Realestates);
      })
  };

  useEffect(() => {
    getRealEstateDetail(latitude, longitude);
  }, [latitude, longitude]);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  Modal.setAppElement('#root')

  // モーダルを画面中央に表示する用のスタイル
  const customStyles = {
    content: {
      width:'50%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <div id="modal">
      <Button variant="soft" color="primary" onClick={() => setIsOpen(true)}>
        Information
      </Button>
      <Modal
      style={customStyles}
      isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)} >
      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        {realEstateDetail.length !== 0
          ?
          <div>
            <div className="wrapper">
              <Card className="next-to-close-button">
                <Typography>
                  {realEstateDetail[0].name}
                </Typography >
              </Card>
              <div className="px-4 py-3">
                <Button color="danger" size="sm" variant="soft" disabled={false} onClick={() => setIsOpen(false)}><CloseIcon/></Button>
              </div>
            </div>
            <table className="modal-table">
              <tbody className="modal-tbody">
                  <tr>
                      <th>見出し</th>
                      <td>テキストが入ります</td>
                      <td>テキストが入ります</td>
                      <td>テキストが入ります</td>
                  </tr>
                  <tr>
                      <th>見出し</th>
                      <td>テキストが入ります</td>
                      <td>テキストが入ります</td>
                      <td>テキストが入ります</td>
                  </tr>
                  <tr>
                      <th>見出し</th>
                      <td>テキストが入ります</td>
                      <td>テキストが入ります</td>
                      <td>テキストが入ります</td>
                  </tr>
                  <tr>
                      <th>見出し</th>
                      <td>テキストが入ります</td>
                      <td>テキストが入ります</td>
                      <td>テキストが入ります</td>
                  </tr>
                  <tr>
                      <th>見出し</th>
                      <td>テキストが入ります</td>
                      <td>テキストが入ります</td>
                      <td>テキストが入ります</td>
                  </tr>
              </tbody>
            </table>
            <Typography
              fontSize="1.2em"
              mb="0.25em"
            >
              建物名
            </Typography>
            <Typography textColor="inherit">
              {realEstateDetail[0].name}
            </Typography>
            <Typography
              fontSize="1.2em"
              mb="0.25em"
            >
              種類
            </Typography>
            <Typography textColor="inherit">
              {realEstateDetail[0].property_type} 円
            </Typography>
            <Typography
              fontSize="1.2em"
              mb="0.25em"
            >
            </Typography>
        </div>
      : "No Data"}
      </div>
      
    </Modal>
    </div>
  );
};

export default InfoModal;
