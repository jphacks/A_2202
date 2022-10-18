import axios from "axios";
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
      const url = "https://localhost:8080/hello";

      const response = await axios.get<RealEstateInfo[]>(url, {
        headers: { "Content-Type": "application/json" },
      });
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
  }, []);

  return (
    <div>
      <h1>Blog Articals</h1>
      <ul>
        {articals.map((info: RealEstateInfo) => (
          <li key={info.sequential_number.toString()}>{info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BulletinBoard;
