import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query.trim());
    };

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>How can we help?</h1>
            <div style={styles.searchContainer}>
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search..."
                    style={styles.input}
                />
                <button onClick={handleSearch} style={styles.button}>
                    <span style={styles.buttonText}>Search</span>
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#E4E9F3', 
        textAlign: 'center',
        padding: '50px 20px',
    },
    heading: {
        fontSize: '2.5em',
        marginBottom: '20px',
        color: '#000', 
    },
    searchContainer: {
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    input: {
        fontSize: '1em',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '8px 0 0 8px',
        outline: 'none',
        flex: 1,
    },
    button: {
        backgroundColor: '#000',
        color: '#FFF',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '0 8px 8px 0',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: '1em',
    },
};

export default SearchBar;
