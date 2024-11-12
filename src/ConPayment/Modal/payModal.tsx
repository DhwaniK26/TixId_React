import React from "react";
import Cross from "../../Assets/images/cross.png";
import Transfer from "./transfer";
import DanaLogo from "../../Assets/images/dana.png";
import Tick from "../../Assets/images/tick.png";

import Indo from "../../Assets/images/indo.png";
import Alfa from "../../Assets/images/alfa.png";
import BCA from "../../Assets/images/bca.png";
import BRI from "../../Assets/images/bri.png";
import BNI from "../../Assets/images/bni.png";
import Man from "../../Assets/images/man.png";

interface PayType {
  close: boolean;
  setclose: (value: boolean) => void;
}

export default function PayModal({ close, setclose }: PayType) {
  const dim = {
    h: "13px",
    w: "38px",
    b: { borderBottom: "2px solid rgb(225, 225, 225)" },
  };

  return (
    <div className="pay-div">
      <div className="utility">
        <h2>Select Payment</h2>
        <img
          src={Cross}
          width={15}
          height={15}
          onClick={() => setclose(!close)}
        />
      </div>

      <h4 className="mr c-grey">Virtual Wallet</h4>

      <Transfer
        logo={DanaLogo}
        bankname={"Dana"}
        tick={Tick}
        h={30}
        w={30}
        styles={dim.b}
      />

      <h4 className="mr c-grey">Minimart</h4>

      <Transfer
        logo={Indo}
        bankname={"Indomaret"}
        tick={Tick}
        h={dim.h}
        w={dim.w}
        styles={dim.b}
      />

      <Transfer
        logo={Alfa}
        bankname={"Alfamart"}
        tick={Tick}
        h={dim.h}
        w={dim.w}
        styles={dim.b}
      />

      <h4 className="mr c-grey">Transfer Bank</h4>

      <Transfer
        logo={BCA}
        bankname={"Bank BCA"}
        tick={Tick}
        h={dim.h}
        w={dim.w}
        styles={dim.b}
      />

      <Transfer
        logo={BRI}
        bankname={"Bank BRI"}
        tick={Tick}
        h={30}
        w={30}
        styles={dim.b}
      />

      <Transfer
        logo={BNI}
        bankname={"Bank BNI"}
        tick={Tick}
        h={dim.h}
        w={dim.w}
        styles={dim.b}
      />

      <Transfer
        logo={Man}
        bankname={"Bank Mandiri"}
        tick={Tick}
        h={dim.h}
        w={dim.w}
        styles={{ borderBottom: "none" }}
      />
    </div>
  );
}
