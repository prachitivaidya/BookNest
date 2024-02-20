import axios from "axios";

const GENRE_REST_API_URL = "http://localhost:8080/api/genres";

class GenreService {
    // Get all genres
    getGenres() {
        return axios.get(GENRE_REST_API_URL);
    }

    // Add a new genre
    addGenre(genreData) {
        return axios.post(GENRE_REST_API_URL, genreData);
    }

    // Delete a genre by ID
    deleteGenre(genreId) {
        return axios.delete(`${GENRE_REST_API_URL}/${genreId}`);
    }

    // Update a genre by ID
    updateGenre(genreId, genreData) {
        return axios.put(`${GENRE_REST_API_URL}/${genreId}`, genreData);
    }
}

export default new GenreService();
