import React, { useState } from "react";
import "../../App.css";
import Axios from "axios";

const Card = ({ name, username, email, mobile, country, id }) => {
  const [name1, setname1] = useState("");
  const [userName1, setuserName1] = useState("");
  const [email1, setemail1] = useState("");
  const [mobile1, setmobile1] = useState("");
  const [country1, setcountry1] = useState("");
  const [update, setupdate] = useState(false);

  const updateHandler = () => {
    if ((!name1, !userName1, !email1, !mobile1, !country1)) {
      alert("Please Fill The Inputs First");
    } else {
      const data = {
        _id: id,
        name: name1,
        userName: userName1,
        email: email1,
        mobile: mobile1,
        country: country1,
      };
      Axios.post("http://localhost:5000/update", data).then((res) =>
        window.location.reload()
      );
    }
  };

  const deleteBtn = () => {
    Axios.post("http://localhost:5000/delete", { _id: id }).then((res) => {
      window.location.reload();
    });
  };
  return (
    <div>
      <div className="card">
        <ul className="card_Data">
          <li>
            Name :{" "}
            {update ? (
              <input
                className="update_Inputs"
                type="text"
                name={name1}
                onChange={(e) => setname1(e.target.value)}
              />
            ) : (
              name
            )}
          </li>
          <li>
            UserName :{" "}
            {update ? (
              <input
                className="update_Inputs"
                type="text"
                name={userName1}
                onChange={(e) => setuserName1(e.target.value)}
              />
            ) : (
              username
            )}
          </li>
          <li>
            Email :{" "}
            {update ? (
              <input
                className="update_Inputs"
                type="text"
                name={email1}
                onChange={(e) => setemail1(e.target.value)}
              />
            ) : (
              email
            )}
          </li>
          <li>
            Mobile :{" "}
            {update ? (
              <input
                className="update_Inputs"
                type="number"
                name={mobile1}
                onChange={(e) => setmobile1(e.target.value)}
              />
            ) : (
              mobile
            )}
          </li>
          <li>
            Country :{" "}
            {update ? (
              <input
                className="update_Inputs"
                type="text"
                name={country1}
                onChange={(e) => setcountry1(e.target.value)}
              />
            ) : (
              country
            )}
          </li>
        </ul>
        <div className="update_delete">
          {update ? (
            <button className="update_btn" onClick={updateHandler}>
              Update
            </button>
          ) : (
            <button className="update_btn" onClick={() => setupdate(true)}>
              Edit
            </button>
          )}

          <button className="delete_btn" onClick={() => deleteBtn(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
