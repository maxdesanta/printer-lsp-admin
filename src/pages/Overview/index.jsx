import { useState, useEffect } from "react";
import Card from "../../components/Card";
import './_style.scss'
import axios from "axios";

export default function Overview() {
  // bahan
  const [pAmount, setPAmount] = useState(0);
  const [cAmount, setCAmount] = useState(0);
  const [oAmount, setOAmount] = useState(0);
  const token = localStorage.getItem("Authorization");

  // proses angka product
  async function productTotal() {
    try {
      const res = await axios.get('http://localhost:5000/products', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      // bahan convert angka
      let dataConvert = res.data.message;
      setPAmount(dataConvert.length);
    
    } catch (err) {
      console.log(err);
    }
  }

  // proses angka customer
  async function customerTotal() {
    try {
      const res = await axios.get('http://localhost:5000/users', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      // bahan convert angka
      let dataConvert = res.data.message;
      setCAmount(dataConvert.length);
      
    } catch (err) {
      console.log(err);
    }
  }

  // proses angka order
  async function OrderTotal() {
    try {
      const res = await axios.get("http://localhost:5000/transaction", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      const dataConvert = res.data.message;
      let dataCount = 0
      dataConvert.forEach(data => {
        if (data.status === 'progress') {
          setOAmount(dataCount += 1);
        }
      })
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    productTotal();
    customerTotal();
    OrderTotal();
  }, [token])

  return (
    <div className="overview">
      <Card text="Total Product" number={pAmount} />
      <Card text="Total Customer" number={cAmount} />
      <Card text="Total Orders" number={oAmount} />
    </div>
  );
}