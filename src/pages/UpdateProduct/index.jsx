import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetailProductAction, updateProductAction } from "../../redux/actions/ProductAction";

// import component
import Button from "../../components/Button";

// import css
import "./_style.scss";

export default function UpdateProduct() {
  // bahan
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const { isDetailProduct } = useSelector(state => state.product);
  const push = useNavigate();
  const { id } = useParams();

  // proses file image
  function addImage(e) {
    const img = e.target.files[0];
    console.log(img);
    setImage(img);
  }

  // proses update
  async function updateProduct(e) {
    e.preventDefault();

    try {
      dispatch(updateProductAction( { name, price, stock, desc, image, id }))
      push("/products");
    } catch (err) {
      console.error(err);
    }
  }

  // end product
  useEffect(() => {
    dispatch(getDetailProductAction({id}));
  }, [dispatch, id]);

  useEffect(() => {
    if (isDetailProduct) {
      setName(isDetailProduct.nama_produk);
      setDesc(isDetailProduct.deskripsi);
      setPrice(isDetailProduct.harga_produk);
      setStock(isDetailProduct.stok);
      setImage(isDetailProduct.image_produk);
    }
},[isDetailProduct])

  return (
    <div>
      <h2 className="update-title">Update Product</h2>
      <form className="update-container" onSubmit={updateProduct}>
        <div className="product-name-update">
          <label htmlFor="name">Nama Produk</label>
          <div className="input-update">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="desc-product-update">
          <label htmlFor="desc">Deskripsi</label>
          <div className="input-update">
            <input
              type="text"
              name="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
        </div>
        <div className="harga-prduct-update">
          <label htmlFor="price">Harga</label>
          <div className="input-update">
            <input
              type="text"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="stock-product-update">
          <label htmlFor="stock">Stok</label>
          <div className="input-update">
            <input
              type="text"
              name="stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
        </div>
        <div className="gambar-product-update">
          <label htmlFor="image">Upload Gambar</label>
          <div className="input-update">
            <input type="file" name="image" onChange={addImage} />
          </div>
        </div>
        <Button className="btn-update" textbtn="Update" accept="submit" />
      </form>
    </div>
  );
}