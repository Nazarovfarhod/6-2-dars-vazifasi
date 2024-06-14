import { useState } from "react";
import "./index.css";

const App = () => {
  const products = [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      discountPercentage: 7.17,
      rating: 4.94,
      stock: 5,
      tags: ["beauty", "mascara"],
      brand: "Essence",
      sku: "RCH45Q1A",
      weight: 2,
      dimensions: {
        width: 23.17,
        height: 14.43,
        depth: 28.01,
      },
      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "Low Stock",
      reviews: [
        {
          rating: 2,
          comment: "Very unhappy with my purchase!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "John Doe",
          reviewerEmail: "john.doe@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Not as described!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Nolan Gonzalez",
          reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Scarlett Wright",
          reviewerEmail: "scarlett.wright@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 24,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "9164035109868",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      description:
        "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      category: "beauty",
      price: 19.99,
      discountPercentage: 5.5,
      rating: 3.28,
      stock: 44,
      tags: ["beauty", "eyeshadow"],
      brand: "Glamour Beauty",
      sku: "MVCFH27F",
      weight: 3,
      dimensions: {
        width: 12.42,
        height: 8.63,
        depth: 29.13,
      },
      warrantyInformation: "1 year warranty",
      shippingInformation: "Ships in 2 weeks",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Liam Garcia",
          reviewerEmail: "liam.garcia@x.dummyjson.com",
        },
        {
          rating: 1,
          comment: "Very disappointed!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Nora Russell",
          reviewerEmail: "nora.russell@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Highly impressed!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Elena Baker",
          reviewerEmail: "elena.baker@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 32,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "2817839095220",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
    },
    {
      id: 3,
      title: "Powder Canister",
      description:
        "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      category: "beauty",
      price: 14.99,
      discountPercentage: 18.14,
      rating: 3.82,
      stock: 59,
      tags: ["beauty", "face powder"],
      brand: "Velvet Touch",
      sku: "9EN8WLT2",
      weight: 8,
      dimensions: {
        width: 24.16,
        height: 10.7,
        depth: 11.07,
      },
      warrantyInformation: "2 year warranty",
      shippingInformation: "Ships in 1-2 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Very happy with my purchase!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Ethan Thompson",
          reviewerEmail: "ethan.thompson@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Great value for money!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Levi Hicks",
          reviewerEmail: "levi.hicks@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Highly impressed!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Hazel Gardner",
          reviewerEmail: "hazel.gardner@x.dummyjson.com",
        },
        {
          id: 5,
          title: "Apple",
          description:
            "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
          category: "groceries",
          price: 1.99,
          discountPercentage: 1.97,
          rating: 2.96,
          stock: 9,
          tags: ["fruits"],
          sku: "QTROUV79",
          weight: 8,
          dimensions: {
            width: 8.29,
            height: 5.58,
            depth: 12.41,
          },
          warrantyInformation: "2 year warranty",
          shippingInformation: "Ships in 2 weeks",
          availabilityStatus: "In Stock",
          reviews: [
            {
              rating: 4,
              comment: "Great product!",
              date: "2024-05-23T08:56:21.620Z",
              reviewerName: "Logan Lee",
              reviewerEmail: "logan.lee@x.dummyjson.com",
            },
            {
              rating: 4,
              comment: "Great product!",
              date: "2024-05-23T08:56:21.620Z",
              reviewerName: "Elena Long",
              reviewerEmail: "elena.long@x.dummyjson.com",
            },
            {
              rating: 1,
              comment: "Not as described!",
              date: "2024-05-23T08:56:21.620Z",
              reviewerName: "Grayson Coleman",
              reviewerEmail: "grayson.coleman@x.dummyjson.com",
            },
          ],
          returnPolicy: "60 days return policy",
          minimumOrderQuantity: 44,
          meta: {
            createdAt: "2024-05-23T08:56:21.620Z",
            updatedAt: "2024-05-23T08:56:21.620Z",
            barcode: "2517819903837",
            qrCode: "https://dummyjson.com/public/qr-code.png",
          },
          images: [
            "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png",
          ],
          thumbnail:
            "https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png",
        },
      ],
      returnPolicy: "60 days return policy",
      minimumOrderQuantity: 25,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "0516267971277",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
    },
    {
      id: 4,
      title: "Red Lipstick",
      description:
        "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
      category: "beauty",
      price: 12.99,
      discountPercentage: 19.03,
      rating: 2.51,
      stock: 68,
      tags: ["beauty", "lipstick"],
      brand: "Chic Cosmetics",
      sku: "O5IF1NTA",
      weight: 5,
      dimensions: {
        width: 14.37,
        height: 13.94,
        depth: 14.6,
      },
      warrantyInformation: "Lifetime warranty",
      shippingInformation: "Ships in 2 weeks",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Great product!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Leo Rivera",
          reviewerEmail: "leo.rivera@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Very pleased!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Oscar Powers",
          reviewerEmail: "oscar.powers@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very pleased!",
          date: "2024-05-23T08:56:21.619Z",
          reviewerName: "Carter Rivera",
          reviewerEmail: "carter.rivera@x.dummyjson.com",
        },
      ],
      returnPolicy: "90 days return policy",
      minimumOrderQuantity: 6,
      meta: {
        createdAt: "2024-05-23T08:56:21.619Z",
        updatedAt: "2024-05-23T08:56:21.619Z",
        barcode: "9444582199406",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png",
    },
    {
      id: 5,
      title: "Asus Zenbook Pro Dual Screen Laptop",
      description:
        "The Asus Zenbook Pro Dual Screen Laptop is a high-performance device with dual screens, providing productivity and versatility for creative professionals.",
      category: "laptops",
      price: 1799.99,
      discountPercentage: 9.21,
      rating: 3.14,
      stock: 38,
      tags: ["laptops"],
      brand: "Asus",
      sku: "4A9KFMBG",
      weight: 8,
      dimensions: {
        width: 19.67,
        height: 11.05,
        depth: 14.32,
      },
      warrantyInformation: "No warranty",
      shippingInformation: "Ships in 3-5 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.622Z",
          reviewerName: "Jack Ward",
          reviewerEmail: "jack.ward@x.dummyjson.com",
        },
        {
          rating: 1,
          comment: "Very disappointed!",
          date: "2024-05-23T08:56:21.622Z",
          reviewerName: "Ava Harris",
          reviewerEmail: "ava.harris@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Great value for money!",
          date: "2024-05-23T08:56:21.622Z",
          reviewerName: "Brayden Fleming",
          reviewerEmail: "brayden.fleming@x.dummyjson.com",
        },
      ],
      returnPolicy: "No return policy",
      minimumOrderQuantity: 1,
      meta: {
        createdAt: "2024-05-23T08:56:21.622Z",
        updatedAt: "2024-05-23T08:56:21.622Z",
        barcode: "2899455033799",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/1.png",
        "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/2.png",
        "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/thumbnail.png",
    },
    {
      id: 6,
      title: "Apple Watch Series 4 Gold",
      description:
        "The Apple Watch Series 4 in Gold is a stylish and advanced smartwatch with features like heart rate monitoring, fitness tracking, and a beautiful Retina display.",
      category: "mobile-accessories",
      price: 349.99,
      discountPercentage: 5.14,
      rating: 4.42,
      stock: 68,
      tags: ["electronics", "smartwatches"],
      brand: "Apple",
      sku: "ZNXPOEPT",
      weight: 6,
      dimensions: {
        width: 8.96,
        height: 28.26,
        depth: 26.46,
      },
      warrantyInformation: "6 months warranty",
      shippingInformation: "Ships in 1-2 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 3,
          comment: "Would not buy again!",
          date: "2024-05-23T08:56:21.624Z",
          reviewerName: "Ellie Stewart",
          reviewerEmail: "ellie.stewart@x.dummyjson.com",
        },
        {
          rating: 1,
          comment: "Poor quality!",
          date: "2024-05-23T08:56:21.624Z",
          reviewerName: "Grayson Coleman",
          reviewerEmail: "grayson.coleman@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Fast shipping!",
          date: "2024-05-23T08:56:21.624Z",
          reviewerName: "Alice Smith",
          reviewerEmail: "alice.smith@x.dummyjson.com",
        },
      ],
      returnPolicy: "60 days return policy",
      minimumOrderQuantity: 2,
      meta: {
        createdAt: "2024-05-23T08:56:21.624Z",
        updatedAt: "2024-05-23T08:56:21.624Z",
        barcode: "4492482209885",
        qrCode: "https://dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/1.png",
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/2.png",
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/3.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/thumbnail.png",
    },
  ];

  let [state, setState] = useState(products);
  console.log(state);

  return (
    <div className="cards">
      {state.map((item) => {
        return (
          <div className="card">
            <img src={item.thumbnail} alt="" />
            <h3 className="title">{item.title}</h3>
            <p className="old-price">
              <b>Old Price:</b> {item.price}
              <b>$</b>
            </p>
            <div className="new-priceSale">
              <p>
                <b>New Price : </b>
                {(
                  item.price -
                  (item.price * item.discountPercentage) / 100
                ).toFixed(2)}
                <b>$</b>
              </p>
              <span>
                <b>Sale : </b>
                <span className="sale"> {item.discountPercentage}%</span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
