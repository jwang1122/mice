import Button from "./UI/Button";
import Card from "./UI/Card";
import classes from './AddMouse2.module.css'
import {useState} from 'react'
import { Document} from "react-pdf/dist/esm/entry.webpack";

const PdfReport = () => {
    const [blobContent, setBlobContent] = useState(null)
    const [isLoading, setLoading] = useState(true)

  const downloadReport = (idx) => {
    console.log(idx);
    fetch("http://localhost:5000/getreport", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "responseType": "application/pdf",
      },
      body: JSON.stringify({ "id": idx }),
    })
      .then((res) => res.blob())
      .catch((error) => {
        console.error("Error:", error);
      })
      .then((blob) => {
        setBlobContent(blob)
        setLoading(false)
      });
  };

  const submitHandler = (event) => {
    event.preventDefault()
    const index = 1234
    downloadReport(index)
  }
  return (
    <Card className={classes.AddMouse}>
      <form onSubmit={submitHandler}>
        <Button name="Load PDF" type="submit" />
      </form>
      {!isLoading && <Document file={window.URL.createObjectURL(blobContent)}/>}
    </Card>
  );
};

export default PdfReport;
