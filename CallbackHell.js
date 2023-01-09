// callbackhell - is essential nested callback stacked below onw another forming a pyramid structure/
const tour = () => {
  setTimeout(() => {
    console.log("Home to belgaum");
    setTimeout(() => {
      console.log("belgaum to bangalore");
      setTimeout(() => {
        console.log("banglore to USA");
      }, 3000);
    }, 2000);
  }, 1000);
};
tour();
