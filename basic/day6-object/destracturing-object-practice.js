let employee = {
  engineers: {
    en1: {
      id: 1,
      name: "umesha",
      occupation: " front end developer",
    },
    en2: {
      id: 2,
      name: "ramesha",
      occupation: " back end developer",
    },
  },
  placement: {
    en3: {
      id: 3,
      name: "ram",
      occupation: "java developer",
    },
    en3: {
      id: 3,
      name: "ram",
      occupation: "java developer",
    },
  },
  youtube: {
    en4: {
      id: 4,
      name: "ramesh",
      occupation: " youtube manager",
    },
  },
};

// let {engineers} = employee;
// console.log(engineers);

// let {engineers : {en2}} = employee;
// console.log(en2);

// let {engineers : {en1 : {name}}} = employee;
// console.log(name)

// let {engineers : {en1 : {name, ...rest}}} = employee;
// console.log(name);
// console.log(rest);

// let {engineers:{en1 : {id,name,occupation}}} = employee;
// console.log(id);
// console.log(name);
// console.log(occupation);

// let {engineers,placement,youtube} = employee;
// console.log(engineers);
// console.log(placement);
// console.log(youtube);

//error ---->
// let {name} = engineers
// console.log(name);