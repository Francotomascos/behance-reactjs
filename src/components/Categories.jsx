import { NavLink } from "react-router-dom";
import { get } from "../server/requests";
import { useEffect, useState } from "react";

export default function Categories() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                let data = await get('https://fakestoreapi.com/products/categories');
                data = ['all', ...data];
                setCategories(data);
            } catch (error) {
                console.error('Error al obtener categorias:', error);
                throw error;
            }
        }

        fetchData();
    }, [])
    return (
        <section>
            <ul className="list-unstyled d-flex gap-3 category-list">
                {categories.map((category) => (
                    <li key={category} className="category-list-item">
                        <NavLink className='nav-link' to={`/category/${category}`}>
                            {category}
                            <div className="category-list-item-line"></div>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </section>
    );
}