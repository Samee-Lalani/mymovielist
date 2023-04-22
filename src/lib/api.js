const HEADERS = {
    'Content-Type': 'application/json'
};

const API_URL = 'http://localhost:8082';

export const addMovie = async (movie) => {
    const response = await fetch(`/api/items/`, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify(movie),
    });
    return response.json();
    };

export const getMovies = async () => {
    const response = await fetch(`/api/items/`);
    return response.json();
    }

export const deleteMovie = async (id) => {
    const response = await fetch(`/api/items/${id}`, {
        method: 'DELETE',
    });
    return response.json();
    }

export const updateMovie = async (id, movie) => {
    const response = await fetch(`/api/items/${id}`, {
        method: 'PUT',
        headers: HEADERS,
        body: JSON.stringify(movie),
    });
    return response.json();
    }

