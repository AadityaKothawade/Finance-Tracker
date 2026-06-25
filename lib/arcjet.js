import arcjet, { tokenBucket } from "@arcjet/next";

const aj = arcjet({
    key : process.env.ARCJET_KEY,
    characteristics : ["userId"], 
    rules:[
        tokenBucket({
            mode : "LIVE",
            refillRate:15,
            interval:3600,  // hourly interval
            capacity:15,

        })
    ]
});

export default aj;