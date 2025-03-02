// // src/index.ts
import {express,dotenv}  from "@/libraries";
//import {getPostSlugs,getPostBySlug,markdownToHtml} from '@/utils'

/*
 * Load up and parse configuration details from
 * the `.env` file to the `process.env`
 * object of Node.js
 */
dotenv.config();

/*
 * Create an Express application and get the
 * value of the PORT environment variable
 * from the `process.env`
 */
const app = express();
const port = process.env.PORT || 3000;

/* Define a route for the root path ("/")
 using the HTTP GET method */
 app.get("/", (req, res) => {
  const message = 
  "<h1>Express + PostGresSql + Sequleize TypeScript Server</h1>"
  // const posts = getPostSlugs()
  // const content = getPostBySlug(posts[0]).content
  // const content1 = content.replace(/(^|\W)`([^`\n]+)`(\W|$)/g, '$1<code>$2</code>$3')  
  // const html  = markdownToHtml(content1)
  // .then(n=>res.send(n))
         


  
    res.send(message);
});

/* Start the Express app and listen
 for incoming requests on the specified port */
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});




