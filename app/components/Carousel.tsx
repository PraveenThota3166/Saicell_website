"use client";

import React from "react";
import { car1 } from "@/public/carousel-pics/index"; // Replace with the image you want to display
import Image from "next/image";

function SingleImageDisplay() {
    return (
        <div className="max-w-[1400px] h-[500px] w-full mx-auto my-1 py-16 px-2 flex items-center justify-center">
            <Image
                src={car1} // Displaying only a single image (car1)
                alt="Featured image"
                className="rounded-2xl object-cover"
            />
        </div>
    );
}

export default SingleImageDisplay;
