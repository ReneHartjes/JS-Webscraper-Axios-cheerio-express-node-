const PORT  = 8000
const axios = require("axios")
const cheerio = require("cheerio")
const express = require("express")

const app = express()
const url = "https://www.amazon.de/-/en/KLIM-gaming-headset-headphones-microphone-red/dp/B01MTJ5CDP/ref=psdc_301129_t2_B07DKHX9SW"
const Urls = ["https://www.amazon.de/Franklin-Original-%C3%9Cbungsbrosch%C3%BCre-Standard-Exercises/dp/B00OJ8OORE/ref=sr_1_2_sspa?crid=1I6S9GEQ6LKC7&keywords=ball&qid=1662829927&sprefix=ball%2Caps%2C107&sr=8-2-spons&psc=1&smid=A2M9T8H8XISCP8&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyUkZTQkhITFpURU9CJmVuY3J5cHRlZElkPUEwMjgyMDE2MkREUU85SVhEMzQwNCZlbmNyeXB0ZWRBZElkPUEwNjAwNzM4VlBYRlFMN1FWT09FJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==","https://www.amazon.de/-/en/Jack-Jones-JJECorp-T-Shirt-Jjecorp/dp/B079BXLLHC/ref=sr_1_3_mod_primary_new?keywords=shirt&qid=1662829813&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=8-3&th=1&psc=1","https://www.amazon.de/-/en/KLIM-gaming-headset-headphones-microphone-red/dp/B01MTJ5CDP/ref=psdc_301129_t2_B07DKHX9SW","https://www.amazon.de/dp/B0878W5F4X/ref=sspa_dk_detail_4?psc=1&pd_rd_i=B0878W5F4X&pd_rd_w=C96te&content-id=amzn1.sym.f63cb723-41a5-4d60-97aa-9969c9663073&pf_rd_p=f63cb723-41a5-4d60-97aa-9969c9663073&pf_rd_r=31XBVMW8Y4TF08FS5S0A&pd_rd_wg=coVQa&pd_rd_r=c4ead3f7-869f-41d9-abf7-fc9a1a1c04a4&s=ce-de&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExVkVHSEkyQTZETDI5JmVuY3J5cHRlZElkPUEwNzYyNDAzMzdUNEg1NEgwR1FYWCZlbmNyeXB0ZWRBZElkPUExMDEzMTUwMlFSS0E4VTFVSEZaRSZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=","https://www.amazon.de/dp/B08GR786SC/ref=sspa_dk_detail_2?psc=1&pd_rd_i=B08GR786SC&pd_rd_w=C96te&content-id=amzn1.sym.f63cb723-41a5-4d60-97aa-9969c9663073&pf_rd_p=f63cb723-41a5-4d60-97aa-9969c9663073&pf_rd_r=31XBVMW8Y4TF08FS5S0A&pd_rd_wg=coVQa&pd_rd_r=c4ead3f7-869f-41d9-abf7-fc9a1a1c04a4&s=ce-de&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExVkVHSEkyQTZETDI5JmVuY3J5cHRlZElkPUEwNzYyNDAzMzdUNEg1NEgwR1FYWCZlbmNyeXB0ZWRBZElkPUEwMTM2NzAzMUtNSjBZTzJKNlAwWCZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="]


setInterval(()=>{
Urls.forEach(bla =>{


axios(bla).then(response =>{
    const html = response.data
    const $ = cheerio.load(html)
    console.log("----------------")
    $("#productTitle", html).each(function(){
        const text =  $(this).text()
    
         console.log(text)
     })
    $(".priceToPay", html).each(function(){
       const text =  $(this).text()
        const href = $(this).attr("href")
        console.log(text)
    })
    $("#priceblock_ourprice", html).each(function(){
        const text2 =  $(this).text()
       
         console.log(text2)
     })
    console.log("----------------")
})})
},3000)

app.listen(PORT,()=> console.log("SERVER RUNNING" + PORT) )

