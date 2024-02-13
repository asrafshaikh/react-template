
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../pages/RouteRoster.css'; // Import your CSS file

const RouteRoster = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [subcategories, setSubcategories] = useState([]);

    useEffect(() => {
        // Fetch categories on component mount
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.get('https://api.example.com/categories'); // Replace with your API endpoint
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchSubcategories = async () => {
        try {
            const response = await axios.get(`https://api.example.com/subcategories?category=${selectedCategory}`);
            setSubcategories(response.data);
        } catch (error) {
            console.error('Error fetching subcategories:', error);
        }
    };

    const handleCategoryChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedCategory(selectedValue);
        fetchSubcategories();
    };

    return (
        <div class="center">
            <h2>Route Roster</h2>

            <div class="rowrost">
                <div class="colrost">
                    <label htmlFor="category">Package:</label>
                </div>
                <div class="colrost">
                    <select id="category" onChange={handleCategoryChange} value={selectedCategory}>
                        <option value="">Select...</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div class="rowrost">
                <div class="colrost">
                    <label htmlFor="subcategory">Route:</label>
                </div>
                <div class="colrost">
                    <select id="subcategory" value={subcategories}>
                        <option value="">Select...</option>
                        {subcategories.map((subcategory) => (
                            <option key={subcategory.id} value={subcategory.id}>
                                {subcategory.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            
            
        </div>
    );
};
export default RouteRoster;
