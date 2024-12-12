import React, { createContext, useState, useEffect } from 'react';

// Create a context
const CardContext = createContext();

// Context provider component
const CardProvider = ({ children }) => {
    const [cards, setCards] = useState([]); // State to store card data
    const [loading, setLoading] = useState(true); // Optional: loading state
    const [error, setError] = useState(null); // Optional: error handling

    // Fetch data from backend (replace the URL with your API)
    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch('/data.json');
                const data = await response.json();
                setCards(data); // Set the fetched data into state
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCards();
    }, []);

    return (
        <CardContext.Provider value={{ cards, loading, error }}>
            {children}
        </CardContext.Provider>
    );
};

export { CardContext, CardProvider };
