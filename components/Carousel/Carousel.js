class Carousel {
  constructor(element) {
    this.element = element;
    this.images = this.element.querySelectorAll("img");
    this.currentIndex = 0;
    this.timeout = null;

    this.element.querySelector(".left-button").addEventListener("click", () => {
      clearTimeout(this.timeout);
      this.changeImage(false);
    });

    this.element
      .querySelector(".right-button")
      .addEventListener("click", () => {
        this.changeImage(true);
      });

    this.element.addEventListener("mouseover", () => {
      clearTimeout(this.timeout);
      this.timeout = null;
    });
    this.element.addEventListener("mouseout", () => this.autoScroll());

    this.setCurrentImage();
    this.autoScroll();
  }

  setCurrentImage() {
    for (let image of this.images) {
      image.classList.remove("visible");
    }
    this.images[this.currentIndex].classList.add("visible");
  }

  changeImage(isRight) {
    this.currentIndex += isRight ? 1 : -1;

    if (this.currentIndex < 0) this.currentIndex = this.images.length - 1;
    else if (this.currentIndex >= this.images.length) this.currentIndex = 0;

    this.setCurrentImage();
  }

  autoScroll() {
    if (!this.timeout) {
      this.timeout = setTimeout(() => {
        this.timeout = null;
        this.changeImage(true);
        this.autoScroll();
      }, 2000);
    }
  }
}

const carousel = document.querySelector(".carousel");
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
