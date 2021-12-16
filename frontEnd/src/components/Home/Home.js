import { useState, useEffect } from "react";
import Axios from "axios";
import "../../App.css";
import Card from "../Card/Card";

function Home() {
  const [name1, setname1] = useState("");
  const [userName1, setuserName1] = useState("");
  const [email1, setemail1] = useState("");
  const [mobile1, setmobile1] = useState("");
  const [country1, setcountry1] = useState("");

  const [data, setdata] = useState([]);

  const inputHandler = () => {
    if (!name1 || !userName1 || !email1 || !mobile1 || !country1) {
      alert("Please Fill All The Inputs..");
    } else {
      const data = {
        name: name1,
        userName: userName1,
        email: email1,
        mobile: mobile1,
        country: country1,
      };
      Axios.post("http://localhost:5000/send", data).then((res) =>
        window.location.reload()
      );
    }
  };

  useEffect(() => {
    Axios.get("http://localhost:5000/get").then((res) => {
      setdata(res.data);
    });
  }, []);

  return (
    <div className="Home_Page">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="all_Inputs">
              <input
                type="text"
                placeholder="Enter Your Name"
                name={name1}
                onChange={(e) => setname1(e.target.value)}
              />
            </div>
            <div className="all_Inputs">
              <input
                type="text"
                placeholder="Enter Your UserName"
                name={userName1}
                onChange={(e) => setuserName1(e.target.value)}
              />
            </div>
            <div className="all_Inputs">
              <input
                type="text"
                placeholder="Enter Your Email"
                name={email1}
                onChange={(e) => setemail1(e.target.value)}
              />
            </div>
            <div className="all_Inputs">
              <input
                type="number"
                placeholder="Enter Your Mobile"
                name={mobile1}
                onChange={(e) => setmobile1(e.target.value)}
              />
            </div>
            <div className="all_Inputs">
              <input
                type="text"
                placeholder="Enter Your Country"
                name={country1}
                onChange={(e) => setcountry1(e.target.value)}
              />
            </div>
            <div className="submit_Btn">
              <button onClick={inputHandler}>Submit</button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="list_Data">
              {data.map((val) => {
                return (
                  <Card
                    name={val.name}
                    username={val.userName}
                    email={val.email}
                    mobile={val.mobile}
                    country={val.country}
                    id={val._id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
