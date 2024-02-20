import axios from 'axios';

const PdfViewerService = {
  getPdfUrl: async (filename) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/pdf/${filename}`, {
        responseType: 'blob' // Ensure response type is blob
      });
      const fileURL = URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
      return fileURL;
    } catch (error) {
      console.error('Error fetching PDF:', error);
      throw error; // Rethrow error for handling in components
    }
  }
};

export default PdfViewerService;
