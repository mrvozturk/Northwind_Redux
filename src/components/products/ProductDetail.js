import React from "react";
import TextInput from "../toolbox/TextInput";
import { Button } from "reactstrap";
import SelectInput from "../toolbox/SelectInput";

const ProductDetail = ({
  categories,
  product,
  onSave,
  onChange = () => {},
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName || ""}
        onChange={onChange}
       
      />
      <SelectInput
        name="categoryId"
        label="Category"
        value={product.categoryId || ""}
        defaultOption="Seçin"
        options={categories.map((category) => ({
          value: category.id,
          text: category.categoryName,
        }))}
        onChange={onChange}
      
      />
      <TextInput
        name="unitPrice"
        label="unitPrice"
        value={product.unitPrice}
        onChange={onChange}
        
      />{" "}
      <TextInput
        name="quantityPerUnit"
        label="quantityPerUnit"
        value={product.quantityPerUnit}
        onChange={onChange}
      
      />{" "}
      <TextInput
        name="unitsInStock"
        label="unitsInStock"
        value={product.unitsInStock}
        onChange={onChange}
        
      />
      <Button type="submit" className="btn btn-success">
        Kaydet
      </Button>
    </form>
  );
};

export default ProductDetail;
