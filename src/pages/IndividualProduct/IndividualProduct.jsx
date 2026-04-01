import React, { useEffect, useState } from "react";
import MainContainer from "../../components/MainContainer/MainContainer";
import Section from "../../components/Section/SectionContainer";
import { Helmet } from "react-helmet-async";
import WrapperContainer from "../../components/Wrapper/WrapperContainer";
import Heading from "../../components/Heading/Heading";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import css from "./IndividualProduct.module.css";
import allListings from "../../data/products/individual_product_listings.json";
import { useLocation } from "react-router";
import Loading from "../../components/Loading/Loading";
import classNames from "classnames";
import CustomButton from "../../components/Buttons/Buttons";
import SliderCarousel from "../../components/Slider/Slider";
import { BsPaperclip } from "react-icons/bs";
import { CgClose } from "react-icons/cg";

function BuyModal(props) {
  const { isOpen, onClose, title } = props;
  useEffect(() => {
    if (isOpen) {
      document.getElementById("root").style.overflow = "hidden";
    } else {
      document.getElementById("root").style.overflow = "";
    }
  }, [isOpen]);

  function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { fullName, mobileNumber, customizationDetails } =
      Object.fromEntries(formData);

    const message = `Hi Monami,

I'm interested in: *${title}*

*Name:* ${fullName}
*Mobile:* ${mobileNumber}

*Customization Details:*
${customizationDetails}

Looking forward to your response. Thanks!`;

    const phone = import.meta.env.VITE_WHATSAPP_PHONE;
    if (!phone) {
      alert("Unable to connect to WhatsApp. Please try again later.");
      return;
    }
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className={classNames(css.overlay, { [css.open]: isOpen })}>
      <div
        className={classNames(
          css.modalContainer,
          isOpen ? css.animateSlideIn : css.animateSlideOut,
        )}
      >
        <CgClose onClick={onClose} className={css.closeBtn} />
        <Heading level="2" className={css.modalTopHeading}>
          Customize Your <span>product</span>
        </Heading>
        <Heading level="3" className={css.modalProdTitle}>
          {title}
        </Heading>
        <div className={css.formContainer}>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="fullName">
              <span>Full Name</span>
              <input
                name="fullName"
                type="text"
                placeholder="Jane Doe"
                required
                minLength={2}
                maxLength={100}
              />
            </label>
            <label htmlFor="mobileNumber">
              <span>Mobile Number</span>
              <input
                name="mobileNumber"
                type="tel"
                placeholder="+91 98765 43210"
                required
                pattern="[+]?[0-9\s]{7,15}"
                title="Enter a valid phone number (7-15 digits, optional + prefix)"
                onKeyDown={(e) => {
                  if (
                    ![
                      "Backspace",
                      "Delete",
                      "Tab",
                      "ArrowLeft",
                      "ArrowRight",
                      "Home",
                      "End",
                    ].includes(e.key) &&
                    !/[0-9+\s]/.test(e.key)
                  ) {
                    e.preventDefault();
                  }
                }}
              />
            </label>
            <label htmlFor="customizationDetails">
              <span>Customisation Details</span>
              <textarea
                rows={7}
                name="customizationDetails"
                placeholder="Tell me how you want your product to be customized."
                required
              />
            </label>
            {/* <label className={css.forImageLabel}>
              <input
                name="imageUpload"
                type="file"
                accept="image/*"
                className={css.hidden}
                multiple
              />
              <BsPaperclip />
            </label> */}
            <CustomButton className={css.modalFormSubmit} primary outward>
              Submit
            </CustomButton>
          </form>
        </div>
      </div>
    </div>
  );
}

function IndividualProduct() {
  const [currListing, setCurrentListing] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const productUrl = location.pathname.split("/").pop();
  let average = null;

  const buyMessage = `<span style='color: #d9534f;'>Add your twist—customize this phone cover with your style in seconds. Tap 'Buy' and we’ll craft your design together on WhatsApp.</span>`;

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
  if (original && discounted) {
    average = parseFloat(100 - (discounted / original) * 100).toFixed(1);
  }

  const { min, max, unit } = currListing?.tentativeShippingDate || {};

  // Products that should show custom pricing message
  const productsWithCustomMessage = [
    "story-walls-gogh",
    "keepsake-boxes-gogh",
    "painted-keepsakes-gogh",
    "love-and-latte-coasters",
  ];

  const shouldShowCustomMessage =
    productsWithCustomMessage.includes(productUrl);

  function ExtraChargesInfo({ extraCharges }) {
    if (!extraCharges) return null;
    const formatted = `${extraCharges.for.join(" + ")} - Rs. ${
      extraCharges.charge
    }`;

    return <p className={css.charges}>{formatted}</p>;
  }

  // Function to strip HTML tags from description
  const stripHtml = (html) => {
    return html?.replace(/<[^>]*>/g, "");
  };

  // Format price for meta description
  const formatPrice = () => {
    if (original && discounted) {
      return `₹${discounted} (Regular Price: ₹${original}, Save ${average}%)`;
    } else if (discounted) {
      return `₹${discounted} & above`;
    } else if (original) {
      return `₹${original}`;
    }
    return "";
  };

  return (
    <>
      <Helmet>
        <title>{`${
          currListing?.title || "Product"
        } - Small Time Artist`}</title>
        <meta
          name="description"
          content={`${stripHtml(currListing?.desc)} ${formatPrice()}`}
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="product" />
        <meta
          property="og:title"
          content={`${currListing?.title || "Product"} - Small Time Artist`}
        />
        <meta
          property="og:description"
          content={stripHtml(currListing?.desc)}
        />
        {currListing?.images?.[0] && (
          <meta property="og:image" content={currListing.images[0]} />
        )}
        <meta
          property="product:price:amount"
          content={discounted || original}
        />
        <meta property="product:price:currency" content="INR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${currListing?.title || "Product"} - Small Time Artist`}
        />
        <meta
          name="twitter:description"
          content={stripHtml(currListing?.desc)}
        />
        {currListing?.images?.[0] && (
          <meta name="twitter:image" content={currListing.images[0]} />
        )}
      </Helmet>
      <MainContainer className={css.main}>
        <Breadcrumbs className={css.changedW} />
        <Section className={css.sec}>
          <WrapperContainer>
            <div className={css.container}>
              <div className={css.carouselContainer}>
                <SliderCarousel slides={currListing?.images} />
              </div>
              {/* <div className={css.slider}> */}
              {/* </div> */}
              <div className={css.mainContentContainer}>
                <Heading level="1" className={css.heading}>
                  {currListing?.title}
                </Heading>
                <div className={css.prodCont}>
                  <div>
                    <Heading className={css.desHeading} level="2">
                      {/* Craft Story */}
                    </Heading>
                    <p
                      className={css.desc}
                      dangerouslySetInnerHTML={{
                        __html: `${currListing?.desc}${
                          currListing?.buyInfoShow ? buyMessage : ""
                        }`,
                      }}
                    />
                  </div>
                  <div>
                    {currListing?.specialOffer && (
                      <Heading className={css.specialOffer} level="2">
                        Special Price
                      </Heading>
                    )}
                    <div className={css.pricingCont}>
                      {shouldShowCustomMessage ? (
                        <span className={css.main}>
                          Prices vary based on customization. Connect with us on
                          WhatsApp for personalized quotes.
                        </span>
                      ) : original ? (
                        <>
                          {discounted && <span>{`\u20B9 ${discounted}`}</span>}
                          <span
                            className={classNames(css.strike, {
                              [css.main]: !discounted,
                            })}
                          >{`\u20B9 ${original}`}</span>
                          {average && (
                            <span
                              className={css.percentage}
                            >{`${average}%`}</span>
                          )}
                        </>
                      ) : (
                        <span
                          className={css.main}
                        >{`Rs. ${discounted} & above`}</span>
                      )}
                    </div>
                  </div>
                  <div>
                    <Heading className={css.delivery} level="2">
                      Tentative Shopping Time
                    </Heading>
                    <p className={css.charges}>{`${min} - ${max} ${unit}`}</p>
                  </div>
                  {currListing?.extraCharges && (
                    <div>
                      <Heading className={css.delivery} level="2">
                        Extra Charges
                      </Heading>
                      <ExtraChargesInfo
                        extraCharges={currListing?.extraCharges}
                      />
                    </div>
                  )}
                  <CustomButton
                    onClick={() => setIsOpen(true)}
                    outward={"true"}
                    className={css.button}
                    primary
                  >
                    Buy Now
                  </CustomButton>
                </div>
              </div>
            </div>
          </WrapperContainer>
        </Section>
      </MainContainer>
      <BuyModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={currListing?.title}
      />
    </>
  );
}

export default IndividualProduct;
