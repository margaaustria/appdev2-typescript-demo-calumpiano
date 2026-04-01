(() => {

    function subtract(a: number, b: number): number {
        return a - b
    }

    console.log(subtract(20, 5)) 

    function printMessage(msg: string): void {
        console.log(`Message: ${msg}`)
    }

    printMessage("Hello, Margaux!")

    function fail(message: string): never {
        throw new Error(message)
    }


    function repeatTask(task: (count: number) => void, times: number) {
        for (let i = 1; i <= times; i++) {
            task(i)
        }
    }

    const showCount = (n: number): void => {
        console.log(`Count: ${n}`)
    }

    repeatTask(showCount, 3)

    type Product = {
        name: string
        price: number
        discount: (percent: number) => number
    }

    const product: Product = {
        name: "Laptop",
        price: 1000,
        discount(percent) {
            const discountedPrice = this.price * ((100 - percent) / 100)
            console.log(`Discounted Price: $${discountedPrice}`)
            return discountedPrice
        }
    }

    product.discount(35) 

})()