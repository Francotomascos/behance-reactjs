import { useParams } from "react-router-dom";
import { ItemListContainer, ItemDetailContainer, SpinnerScreen } from "../components";
import { Categories } from "../components";
import { get } from "../server/requests";
import { useState, useEffect } from "react";

export default function Shop () {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const { category, id } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const endpoint = id ? id : category && category !== 'all' ? `category/${category}` : '';
        const data = await get(`https://fakestoreapi.com/products/${endpoint}`);
        if (id) setProduct(data)
        else setProducts(data);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category, id]);

  return (
    <section className="flex justify-center mt-5">
      <div className="container">
        {!id && <Categories />}
        {loading ? <SpinnerScreen/> : id ? <ItemDetailContainer data={product} /> : <ItemListContainer data={products} />}
      </div>
    </section>
  );
}