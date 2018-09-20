export class CountDownLatch {
   private counter = 0;
   private readonly binaryAction = new Map<boolean, () => void>();

   constructor(private readonly max: number, onEnd: () => void = () => {}, onCountDown: (count) => void = () => {}) {
      this.binaryAction.set(true, () => {
	     this.counter++;
         onCountDown(this.counter);
	  })
	  
	  this.binaryAction.set(false, () => {
	     onEnd();
	  });
   }
   
   countDown() {
      this.binaryAction.get(this.counter < this.max - 1)();
   }
}