import type { RealEstateInfo } from "../types/realEstate";

const getArticles = async (): Promise<any> => {
  try {
    const url = "http://localhost:8080/realestate";
    let response: Array<RealEstateInfo> = [];
    await fetch(url).then((res: any) => {
      console.log("res", res);
      response = JSON.parse(res);
    });
    console.log("response", response);
    return response;
  } catch (err) {
    console.error("ERROR API: ", err);
  }
};

export default getArticles;
