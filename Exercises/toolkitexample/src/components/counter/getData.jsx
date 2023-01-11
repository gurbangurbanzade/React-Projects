import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../redux/slice/getDataSlice";

const GetData = () => {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  return (
    <div>
      GetData
      <button
        onClick={() => {
          console.log(orders);
          dispatch(fetchData());
        }}
      >
        Get Data
      </button>
      {orders.loading && "Loading......"}
      {orders.error && orders.error}
      {orders.data?.map((item, i) => {
        return <p key={i}>{item.id}</p>;
      })}
    </div>
  );
};

export default GetData;
