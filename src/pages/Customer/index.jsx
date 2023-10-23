import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomerAction, searchCustomerAction } from "../../redux/actions/CustomerAction";

// import scss
import "./_style.scss";

// import component
import Search from "../../components/Search";

export default function Customer() {
  // bahan
  const [searchC, setSearchC] = useState("");
  const dispatch = useDispatch();
  const { isGetCustomer } = useSelector(state => state.customer);

  // search customer result
  function searchCustomerResult(value) {
    dispatch( searchCustomerAction(value))    
  }

  useEffect(() => {
    dispatch(getCustomerAction());
  }, [dispatch]);


  return (
    <div className="user">
      <Search resultSearch={searchC} inputSearch={(e) => setSearchC(e.target.value)} formulaResult={searchCustomerResult} />
      <div className="user-table">
        <table>
          <tr>
            <th>Nama</th>
            <th>Email</th>
            <th>Alamat</th>
            <th>Nomor Telepon</th>
          </tr>
          {isGetCustomer.map((d, index) => (
            <tr key={index}>
              <td>{d.nama}</td>
              <td>{d.email}</td>
              <td>{d.alamat}</td>
              <td>{d.no_hp}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
