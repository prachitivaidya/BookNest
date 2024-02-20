import React from "react";
import GenreService from "./GenreService";
import "./Plan.css"; // Import CSS file for styling
import AdminHeader from './AdminHeader';

class Genre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            genres: [],
            newGenre: {
                genreName: ""
            },
            updateGenre: {
                id: null,
                genreName: ""
            },
            showUpdateModal: false
        };
    }

    componentDidMount() {
        this.fetchGenres();
    }

    fetchGenres() {
        GenreService.getGenres().then((response) => {
            this.setState({ genres: response.data });
        });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            updateGenre: {
                ...prevState.updateGenre,
                [name]: value
            }
        }));
    };

    handleAddGenre = () => {
        GenreService.addGenre(this.state.newGenre)
            .then(() => {
                this.fetchGenres();
                this.setState({
                    newGenre: {
                        genreName: ""
                    }
                });
            })
            .catch((error) => {
                console.error("Error adding genre:", error);
            });
    };

    handleDeleteGenre = (genreId) => {
        GenreService.deleteGenre(genreId)
            .then(() => {
                this.fetchGenres();
            })
            .catch((error) => {
                console.error("Error deleting genre:", error);
            });
    };

    handleUpdateGenre = () => {
        const { id, genreName } = this.state.updateGenre;
        GenreService.updateGenre(id, { genreName })
            .then(() => {
                this.fetchGenres();
                this.setState({
                    showUpdateModal: false,
                    updateGenre: {
                        id: null,
                        genreName: ""
                    }
                });
            })
            .catch((error) => {
                console.error("Error updating genre:", error);
            });
    };

    populateUpdateForm = (genre) => {
        this.setState({
            updateGenre: {
                id: genre.gid,
                genreName: genre.genreName
            },
            showUpdateModal: true
        });
    };

    render() {
        return (
            <> <AdminHeader />
            <div className="container">
                <h1 className="text-center">Genres</h1>
                <div className="add-genre-form registration-form">
                    <h2>Add Genre</h2>
                    <div className="input-container">
                        <label>Genre Name:</label>
                        <input
                            type="text"
                            name="genreName"
                            value={this.state.newGenre.genreName}
                            onChange={(e) =>
                                this.setState({
                                    newGenre: {
                                        ...this.state.newGenre,
                                        genreName: e.target.value
                                    }
                                })
                            }
                            placeholder="Genre Name"
                        />
                    </div>
                    <button onClick={this.handleAddGenre}>Add Genre</button>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Genre ID</th>
                            <th>Genre Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.genres.map((genre) => (
                            <tr key={genre.gid}>
                                <td>{genre.gid}</td>
                                <td>{genre.genreName}</td>
                                <td>
                                    <button
                                        onClick={() =>
                                            this.handleDeleteGenre(genre.gid)
                                        }
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() =>
                                            this.populateUpdateForm(genre)
                                        }
                                    >
                                        Update
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {this.state.showUpdateModal && (
                    <div className="modal">
                        <div className="modal-content registration-form">
                            <h2>Update Genre</h2>
                            <div className="input-container">
                                <label>Genre Name:</label>
                                <input
                                    type="text"
                                    name="genreName"
                                    value={this.state.updateGenre.genreName}
                                    onChange={this.handleInputChange}
                                    placeholder="Genre Name"
                                />
                            </div>
                            <button onClick={this.handleUpdateGenre}>
                                Update Genre
                            </button>
                        </div>
                    </div>
                )}
            </div>
            </>
        );
    }
}

export default Genre;
