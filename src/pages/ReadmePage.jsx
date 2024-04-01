import React from "react";
import { Link } from "react-router-dom";
import "./ReadmePage.css";

const ReadmePage = () => {
  return (
    <div className="readme-page">
      <h1 className="readme-heading">README</h1>
      <p className="readme-paragraph">
        Hi, This Assignment is from me(ARPIT SINGH). I have created this fully
        using React only. I have fulfilled every single condition :
        <ul>
          <li>The whole application is responsive and mobile-friendly</li>
          <li> It has two pages : Catalog and Settings</li>
          <li>
            {" "}
            It gives user two ways to display Navbar : Navbar1 and Navbar2
          </li>
          <li>
            {" "}
            Two ways to display Collection of Cards : Carousel and ViewAll
          </li>
          <li> Two ways to Display Cards itself : With and without buttons</li>
          <li>
            {" "}
            In settings page, user can select these and will be redirected to
            Catalog page on clicking Save Setting, displaying the Catalog page
            with new settings.
          </li>
          <li> Carousel is implemented Correctly</li>
          <li>
            {" "}
            In view All, it fetches the first 10 and then based on the scroll by
            the user.
          </li>
        </ul>
        <b>
          I have also added the Add To Cart and Remove from cart functionality
          along with the Cart Modal that displays all the items added to
          cart,this was asked as optional under GoodToHave{" "}
        </b>
        <br />
        <br />
        But there is also something that i am unable to follow, I didn't
        succeeded at implementing SSR, I didn't knew Next.js, and I had never
        worked on SSR before. So, i thought that I will first make the project
        and then using some library or by any other way i will convert this to
        SSR, so I created the React part first but then i spent the whole day
        trying to convert it to SSR using different ways but i kept getting
        error. And now I don't have much time left before the deadline so I am
        submitting this Client Side Rendered assignment only, I would really
        request you to neglect this one fault in my submission while evaluating.
        <br />
        <br />
        <b> Technical Details</b>
        <ul>
          <li>
            The structure is as follows: The App component on top, It has four
            pages : "Home", "Catalog", "Setting" and "Readme"
          </li>
          <li>
            {" "}
            Only Catalog page has all the smaller components, Other don't have
            any components{" "}
          </li>
          <li>I have implemented settings using context</li>
          <li>
            Cart functionality is implemented using prop drilling from catalog
            to View and Navbar and from View to withButton cards
          </li>
        </ul>
      </p>
      <Link to="/" className="back-to-home">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default ReadmePage;
