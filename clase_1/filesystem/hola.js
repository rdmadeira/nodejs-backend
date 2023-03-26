
import * as fs from "fs";
export function hola() {
    console.log("Hola desde app");
}
export function tchau() {
    fs.writeFileSync("tchau.js","console.log('Tchauuu!!!!');");    
    setTimeout(()=> {
        import("./tchau.js").then(
            data => {
                console.log(data);

            }
        )
        
    }, 4000);
}
