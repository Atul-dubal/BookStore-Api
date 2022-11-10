const router = require("express").Router();
const BookModel = require("../BookModel/Model");
//const BookMod = require("../BookModel/Addbook_Model");


//Get All Data ✓✓✓

router.get("/", async (req, res)=> {
  console.log(req.url)
  let books;
  try {
    books = await BookModel.find();
    res.status(200).json({
      books
    });
  }
  catch(error) {
    console.log(error);
  }
});
var ToCheck = (arr, query)=> {
  return arr.filter((elm)=> {
    elm.toLowerCase() == query.toLowerCase()
  });
}
// Get Data By Id  ✓✓✓

router.post("/:val", async (req, res)=> {
  var books;
  var response = [];
  var val = req.params.val;
  try {
    books = await BookModel.find();
    books.map((ele)=> {
      const bookname = ele.BookName.toLowerCase()
      const newVal = val.toLowerCase()
      bookname.includes(newVal)? response.push(ele): null;
      //res.status(200).response;
    })
    //console.log(response);
    await res.status(200).json({
      response
    });
  }
  catch(error) {
    console.log(error);
  }
});

router.post("/try", (req, res)=> {
  console.log("Your Requested URL : "+req.url);
});
//Add New Data
router.post("/addbook", (req, res)=> {
  console.log("Your Requested URL : "+req.url)
  try {

    //BookMod.splice({"_id":{type:String}})
    let formdata = req.body;

    console.log(formdata)
    /*let RawData=
    {"BookName":"Ram Lakhan movie atul","Description":"Good","ImageUrl:"kssk","Price":2929}*/
    // console.log(formdata)
    // res.status(200).json({formdata});
    const newBook = new BookModel(formdata);

    newBook.save().then((re)=> {
      console.log(re);
      res.status(200).json({
        "msg": "book add successfully"
      });
    });
  }
  catch(error) {
    console.log(error);
  }
});


//Update Records ✓✓✓
router.put("/updatebook/:id", async(req, res)=> {
  let books;
  const id = req.params.id;
  const data = req.body;
  /*const RawData = {
    "BookName": " Ram Lakhan",
    "Description": "Awesome",
    "ImageUrl": "demo",
    "Price": 700
  };*/
  try {
    books = await BookModel.findByIdAndUpdate(id, data);
    await books.save().then(()=> {
      res.json({
        books
      });
    });
  }
  catch(error) {
    console.log(error);
  }
})


module.exports = router;