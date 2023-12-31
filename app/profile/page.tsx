"use client";
import Navbar from "@/components/Navbar";
import React, { ReactComponentElement, useState } from "react";
import Photo from "../../assets/maz.jpg";
import Image, { StaticImageData } from "next/image";
import FileUploader from "@/components/FileUploader";
import PdfUploader from "@/components/FileUploader";

const Profile = () => {
  type intro = {
    icon: ReactComponentElement<any>;
    title: string;
  };
  type profile = {
    photo: StaticImageData;
    name: string;
    bio: string;
    about: string;
    intro: intro[];
  };
  const profileInfo: profile = {
    photo: Photo,
    name: "mohammad mazketly",
    about:
      "As a BBA accounting and finance graduate with two years of experience as an accountant, I am proficient in using ERP software such as QuickBooks and Oracle. My knowledge and expertise in accounting principles, financial reporting, and data analysis will help me excel in my role as an accountant. I am passionate about providing accurate financial information to support the growth of the company and ensure compliance with regulatory requirements",
    bio: "BBA (Accounting) Graduate with 2 Years of Accounting Experience and ERP Software Proficiency",
    intro: [
      {
        title: "syria",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        ),
      },
      {
        title: "(316) 555-0116",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
        ),
      },
      {
        title: "Studied Erp, oracle financial 'accounting at Teach lead it",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
            />
          </svg>
        ),
      },
    ],
  };
  const [uploadedFile, setUploadedFile] = useState<File | undefined>(undefined);

  const handlePdfUpload = (file: any) => {
    setUploadedFile(file);
  };
  return (
    <div className="w-full lg:h-screen md:h-full   bg-slate-100">
      <Navbar />
      <div className="bg-white py-5 px-20 w-full h-fit rounded-lg  shadow-sm mt-20 lg:flex md:block ">
        <div className="lg:w-[20%] md:w-full">
          <Image
            width={700}
            height={700}
            alt="profile"
            src={profileInfo.photo.src}
            className="rounded-full w-60 h-60 -mt-16"
          />
        </div>
        <div className="m-5 lg:w-[80%] md:w-full">
          <p className="text-4xl font-bold mb-10">{profileInfo.name}</p>
          <p className="text-2xl font-normal md:w-full lg:w-[700px]">
            {profileInfo.bio}
          </p>
          <div className="flex justify-end   mt-16">
            <button className=" flex py-2 bg-blue-500 rounded-3xl px-8  hover:bg-blue-400 transition duration-200 relative  text-white ">
              <p className="mx-2">contact</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="lg:flex md:block gap-5 mx-5 m-5">
        <div className="bg-white lg:w-[30%] md:w-full p-10    rounded-lg  shadow-sm mt-10  ">
          <p className="text-4xl font-normal mb-5">Intro</p>
          {profileInfo.intro.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="flex mb-5">
                <p className="mx-3 text-blue-500 ">{item.icon}</p>
                <p className="w-full">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white md:w-full  lg:w-[70%] p-10     rounded-lg  shadow-sm mt-10 ">
          <p className="text-4xl font-normal mb-5">Intro</p>
          <p className="text-lg font-medium">
            As a BBA accounting and finance graduate with two years of
            experience as an accountant, I am proficient in using ERP software
            such as QuickBooks and Oracle. My knowledge and expertise in
            accounting principles, financial reporting, and data analysis will
            help me excel in my role as an accountant. I am passionate about
            providing accurate financial information to support the growth of
            the company and ensure compliance with regulatory requirements
          </p>
          <div className="flex flex-col items-end justify-center">
            <div className="mr-6">
              <PdfUploader onUpload={handlePdfUpload} />
            </div>
            {uploadedFile ? (
              <p>Selected PDF: {uploadedFile.name}</p>
            ) : (
              <p>No PDF file selected.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
