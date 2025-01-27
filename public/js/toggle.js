function hideTables(buttonName, alumni=false) {

    // Current students
    let btech_batches = ["btech20", "btech21", "btech22", "btech23"];
    let mtech_batches = ["mtech20", "mtech21", "mtech22", "mtech23"];
    let phd_batches = ["phd19", "phd20", "phd21", "phd22", "phd23"];

    // Alumni
    let btech_alumni = ["btech19"];
    let mtech_alumni = ["mtech19", "mtech20", "mtech21"];

    // B.Tech
    if (buttonName[0] === 'b') {
        if (!alumni) {
            for (const batch of btech_batches) 
                if (batch != buttonName) 
                    document.getElementById(batch).classList.remove("show");
        } else {
            for (const batch of btech_alumni) 
                if (batch != buttonName) 
                    document.getElementById(batch).classList.remove("show");
        }
    }

    // M.Tech
    else if (buttonName[0] === 'm') {
        if (!alumni) {
            for (const batch of mtech_batches) 
                if (batch != buttonName) 
                    document.getElementById(batch).classList.remove("show");
        } else {
            for (const batch of mtech_alumni) 
                if (batch != buttonName) 
                    document.getElementById(batch).classList.remove("show");
        }
    }

    // PhD
    else if (buttonName[0] === 'p') {
        for (const batch of phd_batches) 
            if (batch != buttonName) 
                document.getElementById(batch).classList.remove("show");
    }
}