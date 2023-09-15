

class  Reservation {
  constructor() {
    this.init();
  }

  init = () => {
    const interval = setInterval(async () => {
      let li = document.querySelector(".item_date");
      console.log(li);
      if (li !== null) {
        li.querySelector("button")?.click();

        const timeInterval = setInterval(() => {
          const timeUl = document.querySelector("#list_time");
          if (timeUl !== null) {
            const timeBtn = timeUl.querySelector("button");
            console.log(timeBtn);
            timeBtn?.click();

            const btnInterval = setInterval(() => {
              const ticket = document.querySelector("#ticketReservation_Btn");
              if (ticket !== null) {
                console.log("버튼 찾음");
                const btn = ticket as HTMLButtonElement;
                console.log(btn);
                btn.click();

                clearInterval(btnInterval);
              }
            }, 0);

            clearInterval(timeInterval);
          }
        }, 0);

        clearInterval(interval);
      }
    }, 0);
  };
}

new Reservation();
