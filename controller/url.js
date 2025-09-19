const { nanoid } = require("nanoid");
const URL = require("../models/url");


async function handleGenerateNewShortURL(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({ error: "url is required"});
    const shortID = nanoid();

    await URL.create({
        shortId: shortID,
        redirectUrl:body.url,
        visitHistory: [],
        createdBy: req.user._id,
    });

    return res.render('home',{
        id : shortID,
    })

    //  return res.json({ id: shortID});
}


async function handleGetAnalytics(req,res){
    const shortId = req.params.shortId;
   const result= await URL.findOne({shortId});
   return res.json({
    totalClicks:result.visitHistory.length,
    analytics: result.visitHistory,
   });
    
}

module.exports={
    handleGenerateNewShortURL,
    handleGetAnalytics,
};
// ShortId package used for shorrt non sequential unique ids
// nanoid can also be used for this purpose
