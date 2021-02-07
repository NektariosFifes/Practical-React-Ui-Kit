const ln_input = require("readline");
const cmdRead = ln_input.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);

cmdRead.question("Welcome to practical ui kit manager | OPTIONS: \n1:build project \n2:edit build configuration\n",
    (num)=>{console.log(`You chose ${num}`)

})

cmdRead.on("close", ()=>{
    HandleEvent('cls');
});


function HandleEvent() {
    cmdRead.close()
    console.log("Manager gracefully shutting down")
}
