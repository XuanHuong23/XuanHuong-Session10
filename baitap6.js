for (i = 1; i >= 100; i++) {
    if (i % 3 == 0) {
        console.log("Jazz ", i)
    }
    if (i % 5 == 0) {
        console.log("Buzz ", i)
    }
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("BuzzJazz ", i)
    }
}
