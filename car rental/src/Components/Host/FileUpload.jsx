import React, { Fragment, useState } from "react";
import Message from "./Message";
import Progress from "./Progress";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import HostNavbarCompo from "./HostNavBar";

const FileUpload = () => {
  // useEffect(() => {
  //   if (
  //     sessionStorage.getItem("role") === "null" ||
  //     sessionStorage.getItem("role") != "FARMER"
  //   ) {
  //     window.location.href = "/login";
  //   }
  // }, []);
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);
  let carId = sessionStorage.getItem("carId");
  const navigate = useNavigate();
  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        `http://localhost:8080/hostcarpicupload/${carId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            setUploadPercentage(
              parseInt(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              )
            );
          },
        }
      );
      // Clear percentage
      setTimeout(() => setUploadPercentage(0), 10000);

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage("File Uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
      setUploadPercentage(0);
    }
    navigate("/host");
  };

  return (
    <Fragment>
      <HostNavbarCompo />
      <div className="alert alert-primary text-center">Upload car image</div>
      {message ? <Message msg={message} /> : null}
      <div className="mt-5">
        <form onSubmit={onSubmit} style={{ marginTop: "150px" }}>
          <div className="custom-file mb-4 text-center">
            <input
              type="file"
              className="custom-file-input"
              id="customFile"
              onChange={onChange}
            />
            <label className="custom-file-label" htmlFor="customFile">
              {filename}
            </label>
          </div>
          <div className="row justify-content-center">
            <div className="col-5">
              <Progress percentage={uploadPercentage} />
            </div>
          </div>
          <div className="text-center">
            <input
              type="submit"
              value="Upload"
              className="btn btn-primary btn-block mt-4"
            />
          </div>
        </form>
      </div>
      {uploadedFile ? (
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <h3 className="text-center">{uploadedFile.fileName}</h3>
            <img style={{ width: "100%" }} src={uploadedFile.filePath} alt="" />
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default FileUpload;
