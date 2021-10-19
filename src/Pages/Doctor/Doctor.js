import React, { useEffect, useState } from "react";
import "./Doctor.css";

const Doctor = () => {
  const [fakeData, setFakeData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/farhanahad/fakedata/main/doctors.json"
    )
      .then((res) => res.json())
      .then((data) => setFakeData(data));
  }, []);
  return (
    <div className="container w-100 m-auto p-5">
      <div className="prevention d-flex justify-content-center p-5">
        <img
          src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png"
          alt=""
        />
        <h6 className="ms-3 me-3">MediCare</h6>
        <img
          src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png"
          alt=""
        />
      </div>
      <h1 className="Prevent-title">Our Doctors</h1>
     

      <div className="row">
        {fakeData.map((pd) => (
          <div key={pd.id} className="col-md-6 col-lg-4 col-sm-12">
            <div className="cart p-3 m-2 border border">
              <div className="service img">
                <img src={pd.image} alt="category" />
              </div>
              <h6 className="mt-4">{pd.name}</h6>
              <p className="mt-2">{pd.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctor;
