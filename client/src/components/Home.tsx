import axios         from "axios";
import { useEffect } from "react";

export const Home = () => {
  const getData = async () => {
    try {
      const response = await axios.get("/api/users/get-user-info-by-id/", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      })
      console.log(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, []);
  return (
      <>
        hi
      </>
  );
};