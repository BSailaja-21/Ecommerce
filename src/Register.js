import React from "react";
import './Register.css';
import log from '../src/Assets/icons8-cart.gif';
const products = [
    {
      id: 1,
      name: "Hydrating Face Cream",
      price: "$25",
      image: "https://organethic.it/en/wp-content/uploads/2018/08/DAY-HYDRATING-FACE-CREAM.jpg",
    },
    {
      id: 2,
      name: "Vitamin C Serum",
      price: "$50",
      image: "https://www.sephora.ae/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw7dec5d8d/images/hi-res/alternates/PID_alternate2/PID_alternate2_517/P3473032_2.jpg",
    },
    {
      id: 3,
      name: "Lip Balm",
      price: "$10",
      image: "https://i5.walmartimages.com/asr/6601e54f-400f-4721-a33c-098a4a8d968d_1.4c7adf3defc5428642671b30f809092f.jpeg",
    },
    {
        id: 3,
        name: "Sunscreen",
        price: "$100",
        image: "https://media1.popsugar-assets.com/files/thumbor/DKVRmBmtxVFL8O2rr681iRvGwWw/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2022/05/02/804/n/1922153/1b393f5862702098d3bea3.91491797_s2435261-av-/i/Sunscreen-Stick-Shiseido-Clear-Sunscreen-Stick-SPF-50.webp",
      },
      {
        id: 3,
        name: "Compact",
        price: "$30",
        image: "https://img.freepik.com/premium-photo/compact-powder_981061-1381.jpg",
      },
      {
        id: 3,
        name: "Kajal",
        price: "$10",
        image: "https://4.bp.blogspot.com/-_DLWVrH_7qM/WFF4tFggqKI/AAAAAAAAB6Y/vIyGM54S_Dw73Uu0Ipi2FO3JYP3SP7tJgCLcB/s1600/Lakme-Eyeconic-Kajal-Regal-Green-review.JPG",
      },
      {
        id: 3,
        name: "BB Cream",
        price: "$60",
        image: "https://m.media-amazon.com/images/I/41MNQJ7jM+L.jpg",
      },
      {
        id: 3,
        name: "Hightlighter",
        price: "$30",
        image: "https://img.joomcdn.net/79a18d003ee5396b7dac8fa7be4a9af43fb3bd64_original.jpeg",
      },
      {
        id: 3,
        name: "Lipstick",
        price: "$10",
        image: "https://cdn11.bigcommerce.com/s-9d396/images/stencil/2048x2048/products/29/450/Lipstick_image_Website__25366.1516291014.jpg?c=2",
      },
      {
        id: 3,
        name: "Mascara",
        price: "35",
        image: "https://i.pinimg.com/originals/4d/ef/84/4def84a901cb77052ef0f5d5e9b7b134.jpg",
      },
      {
        id: 3,
        name: "Foundation",
        price: "$65",
        image: "https://i5.walmartimages.com/seo/Maybelline-Fit-Me-Matte-Poreless-Liquid-Foundation-Makeup-238-Rich-Tan-1-fl-oz_c2c0ccfc-8e83-4dbc-bafe-52f598f93184.5eaa35cce34bb0ba3c9d5617026a4181.jpeg",
      },
      {
        id: 3,
        name: "Perfume",
        price: "$85",
        image: "https://i.pinimg.com/originals/61/ec/20/61ec20f16fe5dd24b18f59fae55717ae.jpg",
      },
      {
        id: 3,
        name: "Hair Serum",
        price: "$75",
        image: "https://meds.myupchar.com/114966/loreal-paris-extraordinary-oil-serum-30ml-0.webp",
      },
      {
        id: 3,
        name: "Eyeshadow",
        price: "$35",
        image: "https://media6.ppl-media.com/tr:h-750,w-750,c-at_max,dpr-2/static/img/product/294843/swiss-beauty-ultimate-eyeshadow-palette-kit-multi-02-9-g-17_1_display_1680089291_301bfec5.jpg",
      },
      {
        id: 3,
        name: "Moisturizer",
        price: "$75",
        image: "https://imgmedia.lbb.in/media/2023/04/6448c14f1baa3d7a09ce0047_1682489679605.jpg",
      },
      {
        id: 3,
        name: "Eyebrow pencil",
        price: "$5",
        image: "https://2.bp.blogspot.com/-Ss_4SHP-7lg/XMrk43EmcMI/AAAAAAAANzI/yqcc1-nt9BgG9Yn6PHTgkS_5-OLSmlLGgCLcBGAs/s1600/MUA-Brow-Define.JPG",
      },
      {
        id: 3,
        name: "Nail Polish",
        price: "$10",
        image: "https://1.bp.blogspot.com/-28kY5uPU-qI/WZ3_lRUyyJI/AAAAAAAAJQI/3MyztKvB_7Ad6sRojBzTQ6X0TQycNNGpgCLcBGAs/s1600/opi_AuroraBerry-alis.JPG",
      },
      {
        id: 3,
        name: "Lip Liners",
        price: "$20",
        image: "https://superlook-official.com/wp-content/uploads/2021/11/image0-10-scaled.jpeg",
      },
      {
        id: 3,
        name: "Blush",
        price: "$10",
        image: "https://assets.burberry.com/is/image/Burberryltd/a2fd4122881a902ec7069f1c8ae076a287eaa988.jpg?$BBY_V2_B_1x1$&wid=2500&hei=2500",
      },
      {
        id: 3,
        name: "Toner",
        price: "$50",
        image: "https://puresense.co.in/cdn/shop/products/PinkGuavaFaceToner_1200x.jpg?v=1680239547",
      },

  ];
export default function Register() {
    return(
        <>
        <div className="app-container">
        <div className="search-sort">
        <h1 className="header-title">Beauty Products</h1>
        <input
            type="text"
            placeholder="Search products..."
            className="search-input"
          />
        <select className="sort-select">
            <option value="price">Sort by Price</option>
            <option value="name">Sort by Name</option>
          </select>
          <div>
          <img src={log} class="logos" alt=""/> 
          <div className="nav-cart-count">0</div>
          </div>
        
        
          
          
        </div>
      

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
        </>
    )
}