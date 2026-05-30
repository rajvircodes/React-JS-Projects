import React from "react";
import Card from "./components/Card";
import User from "./components/user";

const App = ()=> {
 const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    companyName: "Google",
    datePosted: "5 days ago",
    posts: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior",
    pay: 45,
    location: "Mumbai, India"
  },
  {
  brandLogo: "https://logos-world.net/wp-content/uploads/2021/10/Meta-Logo.png",
  companyName: "Meta",
  datePosted: "6 days ago",
  posts: "Frontend Software Engineer",
  tag1: "Full Time",
  tag2: "Mid Level",
  pay: 58,
  location: "Bengaluru, India"


  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "7 days ago",
    posts: "UI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 55,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    datePosted: "2 days ago",
    posts: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior",
    pay: 50,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    companyName: "Netflix",
    datePosted: "1 day ago",
    posts: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior",
    pay: 70,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    posts: "Web Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 52,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    companyName: "Tesla",
    datePosted: "6 days ago",
    posts: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Senior",
    pay: 68,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    companyName: "IBM",
    datePosted: "8 days ago",
    posts: "UI Developer",
    tag1: "Part Time",
    tag2: "Junior",
    pay: 35,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    companyName: "Oracle",
    datePosted: "5 days ago",
    posts: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 48,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
    companyName: "Adobe",
    datePosted: "2 days ago",
    posts: "UI/UX Engineer",
    tag1: "Full Time",
    tag2: "Senior",
    pay: 60,
    location: "Mumbai, India"
  }
];


return(
  <div className="parent"> 
    {jobOpenings.map(function(elem,idx){

      return<div key={idx}>
        <Card company = {elem.companyName} post={elem.posts} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} loc={elem.location} brandlogo={elem.brandLogo}/>
      </div>
    })}
    </div>
  )
}

export default App