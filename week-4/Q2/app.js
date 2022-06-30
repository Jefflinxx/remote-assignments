function ajax(src, callback) {
  fetch(src)
    .then((data) => data.json())
    .then((parseData) => {
      console.log(parseData);
      callback(parseData);
    })
    .catch((e) => {
      console.log(e);
    });
}

function render(data) {
  console.log(data);

  data.forEach((element) => {
    const str = document.createElement("div");

    str.textContent = `name : ${element.name},
price :  ${element.price},
description : ${element.description}
`;

    document.querySelector("body").appendChild(str);
  });
}

ajax(
  "https://appworks-school.github.io/Remote-Aassigiment-Data/products",
  function (response) {
    render(response);
  }
);
