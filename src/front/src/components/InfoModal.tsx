import React, { useState, useEffect } from "react";
import "./InfoModal.css";
import type { RealEstateDetail } from "../types/realEstate";
import Button from "@mui/joy/Button";
// import Modal from "@mui/joy/Modal";
import Modal from "react-modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import CloseIcon from "@mui/icons-material/Close";

const InfoModal: React.FC<{
  latitude: number;
  longitude: number;
}> = ({ latitude, longitude }) => {
  const [open, setOpen] = useState(false);
  const [realEstateDetail, setRealEstateDetail] = useState<
    [] | RealEstateDetail[]
  >([]);

  const getRealEstateDetail = async (latitude: number, longitude: number) => {
    if (latitude !== 0 && longitude !== 0) {
      const url = `https://back-lpzceixskq-de.a.run.app/realestate/detail/latlon?latitude=${latitude}&longitude=${longitude}`;
      // const url = `http://localhost:8080/realestate/detail/latlon?latitude=${latitude}&longitude=${longitude}`;
      // window.alert("InfoModal url" + url);
      // console.log("InfoModal url", url);
      // setRealEstateDetail([
      //   {
      //     id: "82ddbc14-9284-4ca8-abc0-037e6eaed6c3",
      //     name: "Test",
      //   },
      // ]);
      await fetch(url)
        .then((res: any) => res.json())
        .then((data) => {
          setRealEstateDetail(data.RealEstateDetails);
          // window.alert("InfoModal data.Realestates" + data.Realestates);
        })
        .catch((err) => {
          // window.alert("Failed to get API!");
        });
    }
  };

  useEffect(() => {
    getRealEstateDetail(latitude, longitude);
  }, [latitude, longitude]);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  Modal.setAppElement("#root");

  // モーダルを画面中央に表示する用のスタイル
  const customStyles = {
    content: {
      width: "50%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "7%",
      padding: "1.6rem 2.3rem",
    },
  };

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
        onClick={() => setIsOpen(true)}
      >
        Information
      </Button>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <div>
          {realEstateDetail.length !== 0 ? (
            <div>
              <div className="wrapper">
                <div className="next-to-close-button">
                  <Typography className="title">
                    {realEstateDetail[0].name}
                  </Typography>
                </div>
                <div className="px-4 py-3">
                  <button
                    className="close-button"
                    onClick={() => setIsOpen(false)}
                  >
                    <CloseIcon className="close-button-color" />
                  </button>
                </div>
              </div>
              <table className="modal-table">
                <tbody className="modal-tbody">
                  {realEstateDetail[0].price ? (
                  <tr>
                    <th>値段</th>
                    <td>{realEstateDetail[0].price} 円</td>
                  </tr>
                   ) : (
                    null
                  )}
                  {realEstateDetail[0].year_builds ? (
                  <tr>
                    <th>設立年</th>
                    <td>{realEstateDetail[0].year_builds} 年</td>
                  </tr>
                  ) : (
                   null
                  )}
                  {realEstateDetail[0].address ? (
                  <tr>
                    <th>住所</th>
                    <td>{realEstateDetail[0].address}</td>
                  </tr>
                  ) : (
                   null
                  )}
                   {realEstateDetail[0].room_count ? (
                  <tr>
                    <th>部屋数</th>
                    <td>{realEstateDetail[0].room_count}</td>
                  </tr>
                  ) : (
                   null
                  )}
                  {realEstateDetail[0].propety_storucture ? (
                  <tr>
                    <th>構造</th>
                    <td>{realEstateDetail[0].propety_storucture}</td>
                  </tr>
                  ) : (
                   null
                  )}
                  {realEstateDetail[0].total_ground_story ? (
                  <tr>
                    <th>階数</th>
                    <td>{realEstateDetail[0].total_ground_story} 階</td>
                  </tr>
                  ) : (
                   null
                  )}
                  {realEstateDetail[0].under_ground_story ? (
                  <tr>
                    <th>地下階数</th>
                    <td>{realEstateDetail[0].under_ground_story} 階</td>
                  </tr>
                  ) : (
                   null
                  )}
                  {realEstateDetail[0].fee ? (
                  <tr>
                    <th>賃貸料</th>
                    <td>{realEstateDetail[0].fee} 円</td>
                  </tr>
                  ) : (
                    null
                   )}
                  {/* {realEstateDetail[0].facility ? (
                  <tr>
                    <th>設備</th>
                    <td>{realEstateDetail[0].facility}</td>
                  </tr>
                   ) : (
                    null
                   )} */}
                </tbody>
              </table>
            </div>
          ) : (
            "No Data"
          )}
        </div>
      </Modal>
    </div>
  );
};

export default InfoModal;
