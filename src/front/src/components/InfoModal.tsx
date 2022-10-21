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
      })
      .catch((err) => {
        window.alert("Failed to get API!");
        // window.alert("InfoModal data.Realestates" + data.Realestates);
      })
  };

  useEffect(() => {
    getRealEstateDetail(latitude, longitude);
  }, [latitude, longitude]);

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
            mb="1.25em"
          >
            物件情報
          </Typography>
          
            {realEstateDetail.length !== 0
              ?
              <div>
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
                  値段
                </Typography>
                <Typography textColor="inherit">
                  {realEstateDetail[0].price}
                </Typography>
                <Typography
                  fontSize="1.2em"
                  mb="0.25em"
                >
                  賃貸料
                </Typography>
                <Typography textColor="inherit">
                  {realEstateDetail[0].rent}
                </Typography>
                <Typography
                  fontSize="1.2em"
                  mb="0.25em"
                >
                  契約形態
                </Typography>
                <Typography textColor="inherit">
                  {realEstateDetail[0].transaction_contents}
                </Typography>
                <Typography
                  fontSize="1.2em"
                  mb="0.25em"
                >
                  敷地面積
                </Typography>
                <Typography textColor="inherit">
                  {realEstateDetail[0].area}
                </Typography>
                <Typography
                  fontSize="1.2em"
                  mb="0.25em"
                >
                  設立年
                </Typography>
                <Typography textColor="inherit">
                  {realEstateDetail[0].year_builds}
                </Typography>
                <Typography
                  fontSize="1.2em"
                  mb="0.25em"
                >
                  住所
                </Typography>
                <Typography textColor="inherit">
                  {realEstateDetail[0].address}
                </Typography>
                <Typography
                  fontSize="1.2em"
                  mb="0.25em"
                >
                  キャッチコピー
                </Typography>
                <Typography textColor="inherit">
                  {realEstateDetail[0].catch_copy}
                </Typography>
                <Typography
                  fontSize="1.2em"
                  mb="0.25em"
                >
                  部屋数
                </Typography>
                < div className="m-4 p-1">Hello World</ div>
                {/* 
                <Typography textColor="inherit">
                  {realEstateDetail[0].room_count}
                </Typography>
                <Typography
                  fontSize="1.2em"
                  mb="0.25em"
                >
                  フロア数
                </Typography>
                <Typography textColor="inherit">
                  {realEstateDetail[0].floor_plan}
                </Typography>
                <Typography
                  fontSize="1.2em"
                  mb="0.25em"
                >
                  方角
                </Typography>
                <Typography textColor="inherit">
                  {realEstateDetail[0].direction}
                </Typography>
                <Typography
                  fontSize="1.2em"
                  mb="0.25em"
                >
                  構造
                </Typography>
                <Typography textColor="inherit">
                  {realEstateDetail[0].propety_storucture}
                </Typography>
                <Typography
                  fontSize="1.2em"
                  mb="0.25em"
                >
                  階数
                </Typography>
                <Typography textColor="inherit">
                  {realEstateDetail[0].total_ground_story}
                </Typography>
                <Typography
                  fontSize="1.2em"
                  mb="0.25em"
                >
                  地下階数
                </Typography>
                <Typography textColor="inherit">
                  {realEstateDetail[0].under_ground_story}
                </Typography>
                <Typography
                  fontSize="1.2em"
                  mb="0.25em"
                >
                  物件情報
                </Typography>
                <Typography textColor="inherit">
                  {realEstateDetail[0].total_unit}
                </Typography>
                <Typography
                  fontSize="1.2em"
                  mb="0.25em"
                >
                  物件情報
                </Typography> */}
                {/* <Typography textColor="inherit">
                  {realEstateDetail[0].fee}
                </Typography>
                <Typography
                  fontSize="1.2em"
                  mb="0.25em"
                >
                  物件情報
                </Typography>
                <Typography textColor="inherit">
                  {realEstateDetail[0].facility}
                </Typography>
                <Typography
                  fontSize="1.2em"
                  mb="0.25em"
                >
                  物件情報
                </Typography>
                <Typography textColor="inherit">
                  {realEstateDetail[0].neighbor}
                </Typography>
                <Typography
                  fontSize="1.2em"
                  mb="0.25em"
                >
                  物件情報
                </Typography>
                <Typography textColor="inherit">
                  {realEstateDetail[0].current_status}
                </Typography>
                <Typography
                  fontSize="1.2em"
                  mb="0.25em"
                >
                  物件情報
                </Typography>
                <Typography textColor="inherit">
                  {realEstateDetail[0].latitude}
                </Typography>
                <Typography
                  fontSize="1.2em"
                  mb="0.25em"
                >
                  物件情報
                </Typography>
                <Typography textColor="inherit">
                  {realEstateDetail[0].longitude}
                </Typography> */}
              </div>
              : "No Data"}
        </ModalDialog>
      </Modal>
    </div>
  );
};

export default InfoModal;
