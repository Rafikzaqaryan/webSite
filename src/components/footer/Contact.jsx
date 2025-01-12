import React from "react";

export default function Contact() {
  return (
    <div className="w-[1519px] h-[424px] bg-[#101623]">
      <div className="text-white pt-[40px] flex justify-center text-[30px] ">
        <strong>Կոնտակտներ</strong>
      </div>
      <div className="flex justify-center pt-[30px] text-[13px] gap-[70px] text-white">
        <div className=" flex items-center gap-2">
          <img src="https://amaranoc.am/images/social/phone.svg" />
          <p>041-611-611/044-611-611</p>
        </div>
        <div className="flex items-center gap-2">
          <img src="https://amaranoc.am/images/social/mail.svg" />
          <p>ADDRESS.AMARANOC@GMAIL.COM</p>
        </div>
        <div className="flex items-center gap-2">
          <img src="https://amaranoc.am/images/social/instagram.svg" />
          <p>AMARANOC.AM</p>
        </div>
        <div className="flex items-center gap-2">
          <img src="https://amaranoc.am/images/social/facebook.svg" />
          <p>AMARANOC.AM</p>
        </div>
        <div className="flex items-center gap-2">
          <img src="https://amaranoc.am/images/location-outlined.svg" />
          <p>ԹՈՒՄԱՆՅԱՆ 5</p>
        </div>
      </div>
      <div className="text-white text-[13px] pt-[30px] flex justify-center">
        Գաղտնիության քաղաքականություն
      </div>
      <div>
        <img
          src="https://amaranoc.am/_next/image?url=%2Fimages%2Ffooter%2Ffooter-background.png&w=1920&q=75"
          className="pt-[112px]"
        />
      </div>
    </div>
  );
}
