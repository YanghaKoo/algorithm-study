// 입력 출력을 두는 경우 
// process.stdout.write로 하면 됨



process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    for(let i =0; i<b; i++){
        for(let j=0; j<a; j++){
            process.stdout.write("*");
        }
        process.stdout.write("\n");
    }
});

