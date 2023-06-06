
![SpreadSheet_Visualizer](https://socialify.git.ci/Arbtrage/SpreadSheet_Visualizer/image?description=1&descriptionEditable=A%20data%20processing%20API%20for%20Excel%20file%20uploads%20and%20data%20transformations&font=Bitter&language=1&name=1&owner=1&theme=Light)
# SpreadSheet Visualizer


"The Data API project provides an API for data processing. It allows users to upload Excel files, extract data from the files, perform data transformations, and retrieve processed data. The API accepts Excel files, reads the data using the 'xlsx' library, processes the data to generate useful insights, and returns the processed data in a structured format. The project utilizes Express.js for the server-side implementation, Multer for file uploading, and Swagger for API documentation. It aims to simplify the process of data analysis and provide a user-friendly interface for data processing tasks.

[Demo Link](https://vimeo.com/833588393?share=copy)

## Getting Started

To get started with this project, follow the steps below:

### Prerequisites
- Node.js (v14 or higher)
- NPM (Node Package Manager)

### Installation

- Clone the repository from GitHub:
```bash
  git clone https://github.com/Arbtrage/SpreadSheet_Visualizer.git
```

- Change to the project directory:
```bash
  cd SpreadSheet_Visualizer
```

- Run the run.sh file:
```bash
  ./run.sh
```


This script will automatically check if the required modules are installed. If not, it will install them and start the server and client.

Make sure to give the script execute permissions using the following command:
```bash
  chmod +x run.sh
```
## Features
- Upload Excel files: Users can upload Excel files containing data.
- Data Processing: The application processes the uploaded Excel file and performs data processing operations.
- Data Visualization: The processed data is visualized using charts or graphs.
- Interactive User Interface: The application provides an interactive user interface for a seamless user experience.
- Real-time Updates: The charts or graphs are updated in real-time as new data is processed or uploaded.
- Multiple Metrics: The application supports processing and visualization of multiple metrics or attributes within the uploaded data.
- Statistical Analysis: The application provides statistical analysis of the data, such as mean, max, and min values.
- Responsive Design: The application is designed to be responsive and accessible across different devices and screen sizes.
- Error Handling: The application includes error handling mechanisms to handle invalid file uploads or processing errors.
- API Documentation: The application includes API documentation using Swagger for easy integration and understanding of the data processing endpoints.
- Easy Deployment: The application can be easily deployed on a server or cloud platform using the provided deployment scripts.
- Scalability: The application is designed to handle large datasets and can scale to accommodate increasing data processing demands.

## ScreenShots

![image](https://github.com/Arbtrage/SpreadSheet_Visualizer/assets/100552235/d268086f-854a-4b8b-80ff-866fbe263c6f)
![image](https://github.com/Arbtrage/SpreadSheet_Visualizer/assets/100552235/bb246f82-d8cb-48b3-a7da-7a4da30e69d3)
![image](https://github.com/Arbtrage/SpreadSheet_Visualizer/assets/100552235/7d56a8ca-aeda-48a3-86ba-592f83b05564)
![image](https://github.com/Arbtrage/SpreadSheet_Visualizer/assets/100552235/ca000d88-3dad-4640-89dd-69d8f2ca99ac)

### Swagger API Docs
![image](https://github.com/Arbtrage/SpreadSheet_Visualizer/assets/100552235/228510ee-ec29-47d0-84dd-a2ca50795b42)


## API Reference

The API documentation is available at http://localhost:3000/api-docs once the server is running. It provides detailed information about the available endpoints, request/response formats, and example usage.


## Tech Stack

**Client:** React,D3.js

**Server:** Node, Express

