window.onload = function () {
  const studentRandomizer = {
    pickOne: function () {
      let randomStudent = students[Math.floor(Math.random() * students.length)]
      return randomStudent.name;
    },
    timeout: null,
    time: null,
    pickOneByTime: function (startTime = 10) {
      this.time = startTime;
      this.timeout = setTimeout(() => {
        if (this.time > 300) {
          this.h1.style = 'color: red'
          this.h1.innerHTML = this.pickOne();
          clearTimeout(this.timeout);
        } else {
          this.h1.innerHTML = this.pickOne();
          this.time *= 1.05;
          this.pickOneByTime(this.time)
        }
      }, this.time);
    },
    main: document.querySelector('main'),
    h1: document.createElement('h1'),
    start: function () {
      this.h1.innerHTML = 'Ironhacker';
      this.main.appendChild(this.h1);
    }
  }

  studentRandomizer.start();
  studentRandomizer.pickOneByTime();

}