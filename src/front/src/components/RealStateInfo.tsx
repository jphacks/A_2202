import { useEffect, useState } from "react";
import type { RealEstateInfo } from "../types/realEstate";
import getArticles from "../api/realEstate";

const BulletinBoard: React.FC = () => {
  const [articles, setArticles] = useState<[] | RealEstateInfo[]>([]);

  useEffect(() => {
    (async () => {
      const articles = await getArticles();
      setArticles(articles);
    })();
  });

  return (
    <div>
      <h1>Blo</h1>
      <ul>
        {articles.map((info: RealEstateInfo) => (
          <li key={info.sequential_number.toString()}>{info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BulletinBoard;
