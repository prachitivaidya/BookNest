import React, { useState } from 'react';
import axios from 'axios';
import './css/FileUploadComponent.css'; // Import the CSS file
import AdminHeader from '../Admin/AdminHeader';

const FileUploadComponent = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('file', file);

        axios.post('http://localhost:8080/api/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            console.log(response.data);
            alert('File uploaded successfully!');
            // Navigate to /admin after successful upload
            window.location.href = '/admin';
        })
        .catch(error => {
            console.error('Error uploading file: ', error);
            alert('Failed to upload file.');
        });
    };

    return (
        <div>
            <AdminHeader />
            <div className="file-upload-container">
                <h2>Upload File</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <input type="file" onChange={handleFileChange} />
                            </td>
                            <td>
                                <button onClick={handleUpload}>Upload</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FileUploadComponent;
