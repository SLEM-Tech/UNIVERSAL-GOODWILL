"use client";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Picture from "../picture/Picture";
import Link from "next/link";
import { convertToSlug } from "@constants";
import { useDispatch } from "react-redux";
import { updateCategorySlugId } from "../config/features/subCategoryId";

interface HomeCardProps {
  id: string;
  image: string | undefined;
  name: string;
}

const HomeCard = ({ id, image, name }: HomeCardProps) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleCategoryClick = (name: string, id: number) => {
    const categorySlugId = `${convertToSlug(name) + "-" + id}`;
    dispatch(updateCategorySlugId({ categorySlugId }));
    router.push(`/category/${convertToSlug(name) + "-" + id}`);
  };
  return (
    <Link
      href={`${"/category/" + convertToSlug(name) + "-" + id}`}
      onClick={() => handleCategoryClick(name, Number(id))}
      className="flex flex-col gap-2 items-center min-w-[120px] max-w-[120px] cursor-pointer relative overflow-hidden rounded-2xl group"
    >
      <Picture
        src={image || "/images/home-img-2.png"}
        alt={`${name}-img`}
        className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-5 transition-all duration-300" />
      <div className="absolute bottom-4 left-4">
        <h4
          dangerouslySetInnerHTML={{ __html: name }}
          className="sm:text-sm leading-[1.3] text-center bg-white px-4 py-2 rounded-lg text-xs font-medium text-gray-900 shadow-md"
        />
      </div>
    </Link>
  );
};

export default HomeCard;
