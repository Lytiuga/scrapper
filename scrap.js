const puppeteer = require('puppeteer');

async function scrape(){
//return "test scrape function";
const browser = await puppeteer.launch({headless:false});
const page = await browser.newPage();
await page.goto ('http://www.lytiuga.com/bigskycode-test/index.html');
await page.click('body > div:nth-child(2) > div:nth-child(2) > p:nth-child(1) > a > img');

const result = await page.evaluate(() => {
  console.log("Trace inside the result ");
let title = document.querySelector('.firstHeading').innerText;
console.log("title= "+ title);
return title;

});
//await page.evaluate();
browser.close();
   return result;



      };






scrape();
scrape().then((value)=> {
  if (value === "Sheik Yerbouti"){
    console.log("");
    console.log("------------------------------  CONGRATULATIONS  ----------------------------------");
    console.log("");
    console.log("You are just now make fake click on the Record Store on the \"Sheik Yerbouti\" alboom pict,");
    console.log("this acrtion is opened the WikiPedia page, and you scraped the Page Title (alboom name) from it");
    console.log("you scraped data is "+value);
    console.log("");
    console.log("------------------------ Let's reptiloids bless you! ------------------------------");
    console.log("");
  }
});
