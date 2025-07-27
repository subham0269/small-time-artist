import React, { useEffect, useState } from "react";
import MainContainer from "../../components/MainContainer/MainContainer";
import Section from "../../components/Section/SectionContainer";
import WrapperContainer from "../../components/Wrapper/WrapperContainer";
import Heading from "../../components/Heading/Heading";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import css from "./IndividualProduct.module.css";
import Slider from "react-slick";
import allListings from "../../data/products/individual_product_listings.json";
import { useLocation } from "react-router";
import Loading from "../../components/Loading/Loading";
import { PiOnigiriFill } from "react-icons/pi";
import classNames from "classnames";
import CustomButton from "../../components/Buttons/Buttons";

function IndividualProduct() {
  const [currListing, setCurrentListing] = useState(null);
  const location = useLocation();
  const productUrl = location.pathname.split("/").pop();
  let average = null;
  useEffect(() => {
    if (
      productUrl &&
      Object.prototype.hasOwnProperty.call(allListings, productUrl)
    ) {
      setCurrentListing(allListings[productUrl]);
    }
  }, [productUrl]);
  if (!currListing) return <Loading />;

  const { original, discounted } = currListing?.price || {};
  if (discounted) {
    average = parseFloat(100 - (discounted / original) * 100).toFixed(1);
  }

  const { min, max, unit } = currListing?.tentativeShippingDate || {};

  function ExtraChargesInfo({ extraCharges }) {
    const formatted = `${extraCharges.for.join(" + ")} - Rs. ${
      extraCharges.charge
    }`;

    return <p className={css.charges}>{formatted}</p>;
  }

  return (
    <MainContainer>
      <Breadcrumbs />
      <Section>
        <WrapperContainer>
          <div className={css.container}>
            <div>
              <Slider></Slider>
            </div>
            <div className={css.mainContentContainer}>
              <Heading level="1" className={css.heading}>
                {currListing?.title}
              </Heading>
              <div className={css.prodCont}>
                <div>
                  <Heading className={css.desHeading} level="2">
                    Craft Story
                  </Heading>
                  <p className={css.desc}>{currListing?.desc}</p>
                </div>
                <div>
                  {currListing?.specialOffer && (
                    <Heading className={css.specialOffer} level="2">
                      Special Price
                    </Heading>
                  )}
                  <div className={css.pricingCont}>
                    {discounted && <span>{`\u20B9 ${discounted}`}</span>}
                    <span
                      className={classNames(css.strike, {
                        [css.main]: !discounted,
                      })}
                    >{`\u20B9 ${original}`}</span>
                    {average && (
                      <span className={css.percentage}>{`${average}%`}</span>
                    )}
                  </div>
                </div>
                <div>
                  <Heading className={css.delivery} level="2">
                    Tentative Shopping Time
                  </Heading>
                  <p className={css.charges}>{`${min} - ${max} ${unit}`}</p>
                </div>
                <div>
                  <Heading className={css.delivery} level="2">
                    Extra Charges
                  </Heading>
                  <ExtraChargesInfo extraCharges={currListing?.extraCharges} />
                </div>
                <CustomButton className={css.button} primary outward>
                  Buy Now
                </CustomButton>
              </div>
            </div>
          </div>
        </WrapperContainer>
      </Section>
    </MainContainer>
  );
}

export default IndividualProduct;
