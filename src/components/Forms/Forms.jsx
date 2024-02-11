import React from "react";
import DetailsForm from "./DetailsForm";
import AddDetails from "./AddDetails";
import FreeCancellation from "./FreeCancellation";

function Forms() {
  return (
    <div className="main-div px-4 md:space-y-16">
      <div className="mt-12 hidden md:block">
        <h1 className="text-[#1C2024] text-3xl md:text-5xl font-bold">
          Confirm & pay
        </h1>
      </div>

      <div className="section-message mt-7 md:mt-12">
        <FreeCancellation />
        <div className="divider border-[1px] border-solid border-[#DDDDE3] rounded-b mt-8 block sm:hidden md:hidden"></div>
      </div>

      <DetailsForm />
      <AddDetails />
    </div>
  );
}

export default Forms;
