process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    let solved = ""
    try{
      let numidx
      for(numidx = 0; numidx < a.length; numidx++){
        if('0' < a[numidx] && ':' > parseInt(a[numidx])) break
      }
      
      
      let jdx = numidx;
      let idx;
			for(idx=0;idx<numidx-1;idx++) {
				if(96 < parseInt(a[idx+1]) &&
						123 > parseInt(a[idx+1])) {
					if(a[numidx + idx] == '1') {
						solved += a[idx] + "" + a[idx+1];
					} else {
						solved += a[idx] + "" + a[idx+1] + "" + a[jdx];
					}
					idx++;
				} else {
					if(a[numidx + idx] == '1') {
						solved += a[idx];
					} else {
						solved += a[idx] + "" + a[jdx];
					}
				}
				jdx++;
			}
			console.log(idx + " " + jdx);
			if(idx == numidx - 1) {
				if(a[a.length-1] == '1') {
					solved += a[idx];
				} else {
					solved += a[idx] + "" + a[jdx];
				}
			}
    }catch(e){      
      solved = "error"
    }    

    console.log(solved)
});


