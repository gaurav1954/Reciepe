import React, { useState, useEffect } from 'react';
import Post from '../components/Post';

export default function Saved() {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8000/recipes/saved`, {
                    method: 'GET',
                    credentials: 'include' // Include credentials for cross-origin requests
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                const data = await response.json();
                setRecipes(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching recipes:', error);
                setIsLoading(false);
            }
        };

        fetchData(); // Call the fetchData function

    }, []); // Dependency array is empty, so this effect runs only once when the component mounts

    return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="feed">
                    {recipes.map(recipe => (
                        <Post key={recipe._id} recipeId={recipe._id} {...recipe} />
                    ))}
                </div>
            )}
        </>
    );
}
