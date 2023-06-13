import React from "react";
import emailjs from "emailjs-com";

function Blog() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_xnt1z9b', 'template_4niml8h', e.target, 'Kh6YK49KF4xov9JWF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  
  return (
    <div className="bg-blue-200 h-full font-serif">
      <div className="container">
        <form onSubmit={sendEmail} className="flex flex-col items-center">
          <h2 className="text-3xl pt-6 lg:pt-14 pb-10">Send me a Text</h2>
          <div className="flex">
            <h3 className="pb-4 w-16">Name:</h3>
            <input className="h-6 w-56 md:w-72 mr-0 md:mr-36 rounded-md border-2 border-slate-500 pl-1" name="name"></input>
          </div>
          <div className="flex pt-2 pb-2">
            <h3 className="pb-4 w-16">E-mail:</h3>
            <input className="h-6 w-56 md:w-72 mr-0 md:mr-36 rounded-md border-2 border-slate-500 pl-1" name="email"></input>
          </div>
          <div className="flex">
            <h3 className="pb-4 w-16">Subject:</h3>
            <input className="h-6 w-56 md:w-72 mr-0 md:mr-36 rounded-md border-2 border-slate-500 pl-1" name="subject"></input>
          </div>
          <textarea className="w-72 h-52 md:w-96 md:h-40 rounded-md border-2 border-slate-500 pl-1" name="message"></textarea>
          <button className="bg-purple-800 text-white w-20 h-8 mt-4 rounded-md hover:bg-red-500 hover:text-black" value="Send Message">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Blog;
