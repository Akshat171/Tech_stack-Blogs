import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";
const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="container mx-auto px-0 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block flex">
          <div>
            <img
              src="https://media.istockphoto.com/id/1184810877/vector/layers-circle-icon.jpg?s=612x612&w=0&k=20&c=ArWqNcXVk6fNzLH30cgOwSO3Lr7QWSmONprQYmy3Jm0="
              width={70}
              height={70}
              className="rounded-full"
            />
          </div>
          <div className="mt-3">
            <Link href="/">
              <span className="cursor-pointer font-bold text-4xl text-white ml-3 ">
                Tech-Stack
              </span>
            </Link>
          </div>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
