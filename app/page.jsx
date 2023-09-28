"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDoc,
  querySnapshot,
  onSnapshot,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { type } from "os";
import { data } from "./firebase";
import EmblaCarousel from "./components/EmblaCarousel";

export default function Home() {
  const [products, setProducts] = useState([]);

  const [total, setTotal] = useState(0);

  //  Create functie

  const [newProduct, setNewProduct] = useState({ name: "", price: "" });

  const addProduct = async (e) => {
    e.preventDefault();
    if (newProduct.name !== "" && newProduct.price !== "") {
      await addDoc(collection(data, "products"), {
        name: newProduct.name.trim(),
        price: newProduct.price,
      }),
        setNewProduct({ name: "", price: "" });
    }
  };

  //  Read functie
  useEffect(() => {
    const q = query(collection(data, "products"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr = [];
      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setProducts(itemsArr);


      // Totaal van de itemsArr
      const calculateTotal = () => {
        const totalPrice = itemsArr.reduce(
          (sum, item) => sum + parseFloat(item.price),
          0
        );
        setTotal(totalPrice.toFixed(2));
      };
      calculateTotal();
      return () => unsubscribe();
    });
  }, []);

//  Delete item

const deleteItem = async (id) => {
  await deleteDoc(doc(data, 'products', id))
}


  return (
    <div className="  m-2 h-screen bg-blend-color-dodge pt-10 ">
      <EmblaCarousel />
      <h1 className="text-center text-3xl border-b-2 mb-16 w-1/4 m-auto p-5 mt-8 border-slate-500 text-cyan-800 font-semibold">
        Lijst
      </h1>
      <div className="h-100   ">
        <div className="flex border rounded-lg w-3/4 m-auto bg-cyan-800 space-between p-5">
          <form className=" p-2 m-auto w-3/6 mt-10  h-4/6 ">
            <div className=" text-center flex m-auto flex-col w-2/3 p-2 space-y-8 ">
              {/* Product input */}
              <input
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
                className="p-2 rounded-md text-lg font-bold text-center"
                type="text"
                placeholder="Product"
              />
              {/* Prijs van het product */}
              <input
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
                className="p-2 rounded-md text-lg text-center font-bold  "
                type="number"
                placeholder="€"
              />

              <button
                onClick={addProduct}
                className="bg-slate-300 p-2 rounded-xl text-1xl hover:bg-slate-400"
                type="submit"
              >
                +
              </button>
            </div>
          </form>

          <div className="border rounded-lg p-8  font-semibold w-4/6 bg-slate-300  ">
            <ul className="pt-4 text-slate-600 text-left  text-xs  flex flex-col md:text-sm lg:text-lg">
              {products.map((product) => (
                <li
                  className="uppercase min-w-fit text-xs flex m-1 w-full bg-slate-100 rounded-md p-1"
                  key={product.id}
                >
                  <div className="w-full flex justify-between ">
                    <span className="text-center"> {product.name} </span>
                    <span className="  px-1 rounded-lg mx-3 text-right ">
                      € {product.price}
                    </span>
                  </div>
                  <button 
                  onClick={() => deleteItem(product.id)}
                  className=" text-slate-600 w-fit px-2 border-l-2 border-slate-600 hover:bg-slate-200    ">
                    x
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-4 w-9/12 mt-8  py-4 font-bold text-3xl rounded  bg-slate-200 m-auto px-10 flex flex-row justify-between text-center  ">
          <h1>Totaal</h1>
          {products.length < 1 ? (
            ""
          ) : (
            <p className="tabular-nums pr-10 mt">{total}</p>
          )}
        </div>
      </div>
    </div>
  );
}
