import React from 'react';
// import { useStateValue } from '../StateProvider';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Card() {
  // const [{ records }] = useStateValue();

  const [data = [], setData] = useState();

  const getData = async () => {
    const apiUrl =
      'https://staging.digitalsymphony.it/frontendtest/product/read.php';

    await axios.get(apiUrl).then((response) => {
      const fetchedData = response.data.records;
      setData([...fetchedData]);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Card" id="Card">
      <div className="container mt-2">
        <div className="row">
          {data?.map((record) => {
            return (
              <div className="card-container">
                {record.id === '1' ? (
                  <div className="col-md-3 col-sm-6 item col-md-offset-2">
                    <div className="card item-card card-block">
                      <img src={record.image} alt=""></img>
                      <h3 className="item-card-title mt-3 mb-3">
                        {record.name}
                      </h3>
                      <p className="card-text">{record.description}</p>
                      <h4>READ MORE ></h4>
                    </div>
                  </div>
                ) : (
                  <div className="col-md-3 col-sm-6 item">
                    <div className="card item-card card-block">
                      <img src={record.image} alt=""></img>
                      <h3 className="item-card-title mt-3 mb-3">
                        {record.name}
                      </h3>
                      <p className="card-text">{record.description}</p>
                      <h4>READ MORE ></h4>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
