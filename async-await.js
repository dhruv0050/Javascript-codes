async function data() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello javascript")
        }, 2000);
    })
}

async function main() {
    console.log("Loading 1")
    console.log("Loading 2")
    console.log("Loading 3")

    let data1 = await data()
    console.log(data1)
    console.log("Loading 4")
    console.log("Loading 5")
}

main()