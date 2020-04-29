window.onload = function () {
  let teams = [
    {name: "André e Fábio"},
    {name: "Ricky e Bruno",},
    {name: "Fabrício e Vinícius",},
    {name: "Marcela e Massao",},
    {name: "Daniel e Rafael",},
    {name: "Pedro e Gabriela",},
    {name: "Julia e Gabriel",},
    {name: "Sebá e Rhaysa"},
  ];
  const order = [];
  const studentRandomizer = {
    pickOne: function () {
      let randomStudent = teams[Math.floor(Math.random() * teams.length)];
      return randomStudent;
    },
    timeout: null,
    time: null,
    button: document.querySelector("#next"),
    pickOneByTime: function (startTime = 10) {
      this.time = startTime;
      this.timeout = setTimeout(() => {
        if (this.time > 300) {
          this.button.removeAttribute("disabled");
          this.h1.style = "color: red";
          const team = this.pickOne();
          this.h1.innerHTML = team.name;
          one = teams.splice(teams.indexOf(team), 1);
          order.push(...one);
          let text = "<ol>";
          order.forEach((item) => {
            text += `<li>${item.name}</l1>`;
          });
          text += "</ol>";
          this.h3.innerHTML = text;
          clearTimeout(this.timeout);
        } else {
          this.button.setAttribute("disabled", "disabled");
          this.h1.style = "color: black";
          this.h1.innerHTML = this.pickOne().name;
          this.time *= 1.05;
          this.pickOneByTime(this.time);
        }
      }, this.time);
    },
    main: document.querySelector("main"),
    list: document.querySelector("list"),
    h1: document.createElement("h1"),
    h3: document.createElement("h3"),
    start: function () {
      this.h1.innerHTML = "Ironhacker";
      this.main.appendChild(this.h1);
      this.list.appendChild(this.h3);
    },
    next: function () {
      if (teams.length > 1) {
        this.pickOneByTime();
      } else {
        order.push(teams[0]);
        one = teams.splice(0, 1);
        this.h1.style = "color: blue";
        const team = this.pickOne();
        let text = "<ol>";
          order.forEach((item) => {
            text += `<li>${item.name}</l1>`;
          });
          text += "</ol>";
        this.h3.innerHTML = text;
        this.h1.innerHTML = "Good luck!";
        this.button.setAttribute("disabled", "disabled");
      }
    },
  };

  studentRandomizer.start();
  studentRandomizer.pickOneByTime();

  document.getElementById("next").addEventListener("click", () => {
    studentRandomizer.next();
  });
};
