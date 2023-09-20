import getExpeditiousCache from "express-expeditious"

const config = {
    namespace:"expresscache", // todo: el nombre o la key donde guardaremos en memoria
    defaultTtl: "20 days",
    statusCodeExpires: {
        404: "5 minutes",
        500: 0 
    }
}
// update

const cacheInit = getExpeditiousCache(config)

export default cacheInit