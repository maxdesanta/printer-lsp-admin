import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { getProductAction, deleteProductAction, searchProductAction } from "../../redux/actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";

// import component
import Search from "../../components/Search";

// import helper
import { convertRupiah } from "../../helper";

// import css
import "./_style.scss";

// import fontawesome
import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Product() {
  // bahan
  const [searchP, setSearchP] = useState("");
  // const [checkEmpty, setCheckEmpty] = useState("habis");
  const dispatch = useDispatch();
  const { isGetProduct, isDeleteProduct, isCheckProduct } = useSelector(state => state.product);

  // delete data

  function deleteProduct(id) {
    dispatch(deleteProductAction({ id }));
  }

  //search product result
  function searchProductResult(value) {
    dispatch(searchProductAction(value));
  }

  // useEffect
  useEffect(() => {
    dispatch(getProductAction());
  }, [dispatch]);

  useEffect(() => {
    if (isDeleteProduct) {
      dispatch(getProductAction());
    }
  }, [dispatch, isDeleteProduct])

  return (
    <div className="product">
      <div className="container">
        <Search
          resultSearch={searchP}
          inputSearch={(e) => setSearchP(e.target.value)}
          formulaResult={searchProductResult}
        />
        <div className="add-product">
          <Link to="/products/add">
            <FontAwesomeIcon
              icon={faPlus}
              style={{ color: "#7f5af0", fontSize: "24px" }}
            />
          </Link>
        </div>
      </div>
      <div className="product-table">
        <table>
          <tr>
            <th>Nama</th>
            <th>Gambar</th>
            <th>Deskripsi</th>
            <th>Harga</th>
            <th>Stok</th>
            <th>Action</th>
          </tr>
          {isGetProduct.map((data, index) => (
            <tr key={index}>
              <td>{data.nama_produk}</td>
              <td>
                <img src={data.url_gambar} alt={data.gambar} />
              </td>
              <td>{data.deskripsi}</td>
              <td>{convertRupiah(data.harga_produk)}</td>
              <td>{data.stok == 0 ? isCheckProduct : data.stok}</td>
              <td>
                <Link to={`/products/edit/${data.id_produk}`}>
                  <FontAwesomeIcon
                    icon={faPen}
                    style={{
                      marginRight: "12px",
                      fontSize: "18px",
                      color: "#7f5af0",
                      cursor: 'pointer'
                    }}
                  />
                </Link>
                <FontAwesomeIcon
                  onClick={() => deleteProduct(data.id_produk)}
                  icon={faTrash}
                  style={{
                    fontSize: "18px",
                    color: "#7f5af0",
                    cursor: "pointer",
                  }}
                />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
