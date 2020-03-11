import React, { useState } from "react";

const Parse = props => {
  const [object, setObject] = useState("");

  const upload = event => {
    console.log(event.target.files);
    console.log(event.target.files[0].size);
    console.log(event.target.files[0]);
    fetch("/game/parse", {
      // Your POST endpoint
      method: "POST",
      headers: {
        "Content-Type": "application/pdf"
      },
      body: event.target.files[0] // This is your file object
    })
      .then(response => response.text())
      .then(body => {
        let obj = { ...JSON.parse(body) };
        console.log(obj);
        console.log(body);
        setObject(obj);
      })
      .catch(
        error => console.log(error) // Handle the error response object
      );
  };

  return (
    <div className="container col">
      <form>
        <input type="file" onChange={upload} accept=".pdf,.doc,.docx,.txt" />
      </form>
      <form>
        <h2>Parse data</h2>
        <div className="form-group">
          <div className="col-xs-3">
            <label htmlFor="ta1">object</label>
            <textarea
              onChange={event => setObject(event.target.value)}
              value={object}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Parse;
