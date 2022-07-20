import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './PdfReport.module.css'
import {useState} from 'react'
import { Document, Page} from "react-pdf/dist/esm/entry.webpack";

const PdfReport = (props) => {
    const [blobContent, setBlobContent] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [pageNumber, setPageNumber] = useState(1)

  const downloadReport = (idx) => {
    console.log(idx);
    fetch(props.url + "/getreport", {
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
    setPageNumber(1)
  }
  return (
    <Card className={classes.AddMouse}>
      <form onSubmit={submitHandler}>
        <Button name="Load PDF" type="submit" />
      </form>
      {!isLoading && <Document file={window.URL.createObjectURL(blobContent)}>
        <Page pageNumber={pageNumber}/>
        </Document>
      }
    </Card>
  );
};

export default PdfReport;
