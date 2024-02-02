export const DisplaySize = {
    NotSupported: 0,
    MobileS: 320,
    MobileM: 375,
    MobileL: 425,
    Tablet: 768,
    ComputerS: 1024,
    ComputerM: 1440,
};

export const determineDisplaySize = (width) => {
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

export const AnimationInterval = 300;
export const FadeAnimationItems = [
  { opacity: 0 },
  { opacity: 1 },
];
export const FadeAnimationItemsReversed = FadeAnimationItems.slice().reverse();
export const ForwardAnimationParams = {
  duration: AnimationInterval,
  iterations: 1,
  fill: "forwards",
};

export class Storage {
  static set = (key, value) => localStorage.setItem(key, JSON.stringify(value));

  static get = (key) => JSON.parse(localStorage.getItem(key));

  static remove = (key) => localStorage.removeItem(key);

  static clear = () => localStorage.clear();
}
