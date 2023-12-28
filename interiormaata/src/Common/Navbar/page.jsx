"use client";
import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/Home">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link href="/ContactUs">
              <p>ContactUs</p>
            </Link>
          </li>
          <li>
            <Link href="/AboutUs">
              <p>AboutUs</p>
            </Link>
          </li>

          <li>
            <Link href="/Consultancy">
              <p>Consultancy</p>
            </Link>
          </li>

          <li>
            <Link href="/HowWeWork">
              <p>HowWeWork</p>
            </Link>
          </li>

          <li>
            <Link href="/Projects">
              <p>Projects</p>
            </Link>
          </li>

          <li>
            <Link href="/Services">
              <p>Services</p>
            </Link>
          </li>

         

          <li>
            <Link href="/Team">
              <p>Team</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Page;
