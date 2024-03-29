import React from "react";
import FormInput from "./FormInput";

const ItemList = ({ form, setForm }: { form: any; setForm: React.SetStateAction<any> }) => {
  const { products } = form;

  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });

    console.log(products);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;
    const newProducts = [...products];
    newProducts[index][name] = value;
    setForm({ ...form, products: newProducts });
  };

  const deleteHandler = (e: React.MouseEvent<HTMLElement>, index: number) => {
    const newProducts = [...products];
    delete newProducts[index];

    setForm({ ...form, products, newProducts });
  };
  return (
    <div className="item-list">
      <h4>Purchased Items</h4>
      {products.map((product: any, index: number) => (
        <ProductsList
          key={index}
          index={index}
          product={product}
          changeHandler={changeHandler}
          deleteHandler={deleteHandler}
        />
      ))}
      <button onClick={addHandler}>Add</button>
    </div>
  );
};

export default ItemList;

function ProductsList({ product, changeHandler, deleteHandler, index }: any) {
  return (
    <div className="form-input__list">
      <FormInput
        name="name"
        label="product name"
        type="text"
        value={product.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHandler(e, index)}
      />

      <div>
        <FormInput
          name="price"
          label="product price"
          type="text"
          value={product.price}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHandler(e, index)}
        />
        <FormInput
          name="qty"
          label="product qty"
          type="number"
          value={product.qty}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHandler(e, index)}
        />
      </div>

      <button onClick={(e: React.MouseEvent<HTMLElement>) => deleteHandler(e)}>Remove</button>
    </div>
  );
}
