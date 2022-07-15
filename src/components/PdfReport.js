import Button from "./UI/Button";
import Card from "./UI/Card";
import classes from './AddMouse2.module.css'
import {useState} from 'react'
import { Document, Page} from "react-pdf/dist/esm/entry.webpack";

const PdfReport = () => {
    const [blobContent, setBlobContent] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [pageNumber, setPageNumber] = useState(1)

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
        console.log(blob)
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
      {!isLoading && <Document file={window.URL.createObjectURL(blobContent)}>
<<<<<<< HEAD
        <Page pageNumber={pageNumber}/>
        </Document>
=======
        <Page pageNumber={pageNumber} />
      </Document>
>>>>>>> 829c2503f89fbd584bf5f03285bbada14e431696
      }
    </Card>
  );
};

export default PdfReport;
