const production = false
var isWin = process.platform === "win32";
const { exec } = require("child_process")
var proces = null
function run() {
        proces = exec("npx serve -s build -l 3000")
        proces.stdout.on('data', (data) => {
            console.log(data);
        })
        proces.stderr.on('data', (data) => {
            console.log(data);
        })
}
run()