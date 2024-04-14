function addTwo(num: number): number{
    return num+2
}

function getUpper(val: string){
    return val.toUpperCase()
}

addTwo(5)

getUpper("a")


function signUp(name: string,email: string,password: string,isPaid: boolean = true){

}
signUp("Sayan","sayan@gmail.com","123")


function getValue(myVal: number){
    if(myVal > 5){
        return true
    }
    return "200 OK"
}

const getHello = (str: string) => {
    return ""
}
const heroes = ['spiderman', 'batman', 'thor']

heroes.map((data: string): string => {
    return `Hello ${data}`
})
function error(err: string): void{
    console.log(err);
    
}
function handleError(errmsg: string): never{
    throw new error(errmsg)
}
export {}