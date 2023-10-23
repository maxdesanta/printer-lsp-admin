import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductAction } from "../../redux/actions/ProductAction";
import { useNavigate } from "react-router-dom";

// import component
import Button from "../../Components/Button";

// import css
import "./_style.scss";

export default function AddProduct() {
  // bahan
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const push = useNavigate();
  const dispatch = useDispatch();

  // proses file image
  function addImage(e) {
    const img = e.target.files[0];
    setImage(img);
  }

  // proses add
  function addProduct(e) {
    e.preventDefault();
    dispatch(addProductAction({ name, price, stock, desc, image }));
    push("/products");
  }

  return (
    <div>
      <h2 className="add-title">Add Product</h2>
      <form className="add-container" onSubmit={addProduct}>
        <div className="product-name-add">
          <label htmlFor="name">Nama Produk</label>
          <div className="input-add">
            <input type="text" name="name-product" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        </div>
        <div className="desc-product-add">
          <label htmlFor="desc">Deskripsi</label>
          <div className="input-add">
            <input type="text" name="desc" value={desc} onChange={(e) => setDesc(e.target.value)}/>
          </div>
        </div>
        <div className="harga-prduct-add">
          <label htmlFor="price">Harga</label>
          <div className="input-add">
            <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
          </div>
        </div>
        <div className="stock-product-add">
          <label htmlFor="stock">Stok</label>
          <div className="input-add">
            <input type="text" name="stock" value={stock} onChange={(e) => setStock(e.target.value)} />
          </div>
        </div>
        <div className="gambar-product-add">
          <label htmlFor="image">Upload Gambar</label>
          <div className="input-add">
            <input type="file" name="image" onChange={addImage}/>
          </div>
        </div>
        <Button className="btn-add" textbtn="Add" accept="submit" />
      </form>
    </div>
  );
}
