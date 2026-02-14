export default class Timer {
  constructor(duration, onTick, onFinish) {
    this.duration = duration;
    this.remaining = duration;
    this.interval = null;
    this.onTick = onTick;
    this.onFinish = onFinish;
  }

  start() {
    this.interval = setInterval(() => {
      this.remaining--;
      this.onTick(this.remaining);

      if (this.remaining <= 0) {
        clearInterval(this.interval);
        this.onFinish();
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }
}
