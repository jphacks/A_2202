import { useEffect, useState } from "react";

type RealEstateInfo = {
  sequential_number: number;
  name: string;
  longitude: string;
  latitude: string;
  address: string;
  price: number;
};

const BulletinBoard: React.FC = () => {
  async function getArticals(): Promise<void> {
    try {
      // URL
      const url = "http://localhost:8080/realestate";

      let response: Array<RealEstateInfo> = [];
      fetch(url).then((res: any) => (response = JSON.parse(res)));
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
  const [articals, setArticals] = useState<[] | RealEstateInfo[]>([]);

  useEffect(() => {
    (async () => {
      await getArticals();
      // const articals = await getArticals();
      setArticals(articals);
    })();
  });

  return (
    <div>
      <h1>Blo</h1>
      <ul>
        {articals.map((info: RealEstateInfo) => (
          <li key={info.sequential_number.toString()}>{info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BulletinBoard;
