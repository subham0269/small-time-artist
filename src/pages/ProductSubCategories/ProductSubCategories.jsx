import React, { useEffect, useState } from "react";
import css from "./ProductSubCategories.module.css";
import MainContainer from "../../components/MainContainer/MainContainer";
import Section from "../../components/Section/SectionContainer";
import { useParams } from "react-router";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Heading from "../../components/Heading/Heading";

function ProductSubCategories() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    const loadProduct = async () => {
      try {
        const module = await import(`../data/products/${id}.json`);
        setProduct(module.default);
      } catch (err) {
        setError("Product not found.");
        console.error(err);
      }
    };
    loadProduct();
  }, [id]);
  //   if (error) return <div>{error}</div>;
  //   if (!product) return <div>Loading...</div>;
  return (
    <MainContainer>
      <Breadcrumbs />
      <Section label="Item category section">
        <Heading level="1">{id}</Heading>
      </Section>
    </MainContainer>
  );
}

export default ProductSubCategories;
