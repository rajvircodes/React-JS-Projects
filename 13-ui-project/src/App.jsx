import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const users = [
  { img: "https://plus.unsplash.com/premium_photo-1681681082172-cc25f19674b4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    intro: "", 
    tag: "Satisfied" 
  },

  { img: "https://images.unsplash.com/photo-1762341120638-b5b9358ef571?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    intro: "", 
    tag: "Underbanked" 

  },

  { img: "https://plus.unsplash.com/premium_photo-1663011108304-0215dfabeabf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    intro: "", 
    tag: "Underserved" 
  },
];
const App = () => {
  return (
    <div>
      <Section1 users={users} />
    
    </div>
  );
};

export default App;
