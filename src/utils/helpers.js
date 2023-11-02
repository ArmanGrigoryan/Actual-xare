export const DisplaySize = {
    NotSupported: 0,
    MobileS: 320,
    MobileM: 375,
    MobileL: 425,
    Tablet: 768,
    ComputerS: 1024,
    ComputerM: 1440,
};

const determineDisplaySize = (width) => {
  if (width >= DisplaySize.Tablet) {
    if (width >= DisplaySize.ComputerM) {
        return DisplaySize.ComputerM;
    } else if (width >= DisplaySize.ComputerS) {
      return DisplaySize.ComputerS;
    } else {
      return DisplaySize.Tablet;
    }
  } else if (width >= DisplaySize.MobileL) {
      return DisplaySize.MobileM;
  } else {
    return DisplaySize.MobileS;
  }
}

export default determineDisplaySize;