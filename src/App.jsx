
import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { message } from 'antd';

function App() {

  const [loading, setLoading] = useState(false);
  const [cars,setCars] = useState([]);
  const [openpost, setOpenpost] = useState(false);
  const [opendelete, setOpendelete] = useState(false);
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [model, setModel] = useState([]);
  const [location, setLocation] = useState([]);
  const [city, setCity] = useState([]);
  const [id, setId] = useState([null])
  const url = 'https://autoapi.dezinfeksiyatashkent.uz/api/cars';
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNTczNzkzNTUtZDNjYi00NzY1LTgwMGEtNDZhOTU1NWJiOWQyIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImlhdCI6MTcxNTAwNjI0OCwiZXhwIjoxNzQ2NTQyMjQ4fQ.uMRbDZduB_z8LXgdTho8kBggg9Zrz6SNCwqmFcas10E';

  ///////////////////get//////////////////////////////////
  const getCars = () =>{
    setLoading(true)
    axios({
      url:url,
      method:`GET`
    })
    .then((res) =>{
      setCars(res.data.data)
      setLoading(false)
    })
    .catch((err) =>{
      console.log(err);
    })   
}
useEffect(()=>{
  getCars()
},[])
/////////////////////////////////get//////////////////////////////
  const getCategory = () =>{
    axios({
      url:'https://autoapi.dezinfeksiyatashkent.uz/api/categories',
      method:`GET`
    })
    .then((res) =>{
      setCategory(res?.data?.data)
    })
    .catch((err) =>{
      console.log(err);
    })
  }
//////////////////////////////////////////////////get////////////
  const getBrands = () =>{
    axios({
      url:'https://autoapi.dezinfeksiyatashkent.uz/api/brands',
      method:`GET`
    })
    .then((res) =>{
      setBrand(res.data.data)
     })
    .catch((err) =>{
      console.log(err);
    })
  }
  ///////////////////////////////////get////////////////////////
  const getModels = () =>{
    axios({
      url:'https://autoapi.dezinfeksiyatashkent.uz/api/models',
      method:`GET`
    })
    .then((res) =>{
      setModel(res.data.data)
     })
    .catch((err) =>{
      console.log(err);
    })
  }
   ///////////////////get//////////////////////////////////
   const getLocations = () =>{
    axios({
      url:'https://autoapi.dezinfeksiyatashkent.uz/api/locations',
      method:`GET`
    })
    .then((res) =>{
      setLocation(res.data.data)
    })
    .catch((err) =>{
      console.log(err);
    })   
}
  ///////////////////get//////////////////////////////////
  const getCities = () =>{
    axios({
      url:'https://autoapi.dezinfeksiyatashkent.uz/api/cities',
      method:`GET`
    })
    .then((res) =>{
      setCity(res.data.data)
    })
    .catch((err) =>{
      console.log(err);
    })   
}
useEffect(() =>{
  getCities()
  getCategory()
  getBrands()
  getModels()
  getLocations()
},[])

/////////////////////////////////post//////////////////////////////////
const [brandId, setBrandId]=useState("")
const [modelId, setModelId]=useState("")
const [locationId, setLocationId]=useState("")
const [cityId, setCityId]=useState("")
const [categoryId, setCategoryId]=useState("")
const [year, setYear] = useState("")
const [seconds, setSeconds] = useState("")
const [images, setImages] = useState(null);
const [picture, setPicture] = useState(null)
const [speed, setSpeed] = useState("")
const [people, setPeople] = useState("")
const [trans, setTrans] = useState("")
const [motor, setMotor] = useState("")
const [side, setSide] = useState("")
const [petrol, setPetrol] = useState("")
const [limit, setLimit] = useState("")
const [deposit, setDeposit] = useState("")
const [protection, setProtection] = useState("")
const [aed, setAed] = useState("")
const [usd, setUsd] = useState("")
const [aedsale, setAedsale] = useState("")
const [usdsale, setUsdsale] = useState("")
const [inclusive, setInclusive] = useState("")
const [cover, setCover] = useState("")
const [color, setColor] = useState("")


console.log(brandId)
  const postCars = (e) =>{
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("brand_id",brandId)
    formData.append("model_id",modelId)
    formData.append("city_id",cityId)
    formData.append("color",color)
    formData.append("year",year)
    formData.append("seconds",seconds)
    formData.append("category_id",categoryId)
    formData.append("images",images)
    formData.append("images",picture)
    formData.append("max_speed",speed)
    formData.append("max_people",people)
    formData.append("transmission",trans)
    formData.append("motor",motor)
    formData.append("drive_side",side)
    formData.append("petrol",petrol)
    formData.append("limitperday",limit)
    formData.append("deposit",deposit)
    formData.append("premium_protection",protection)
    formData.append("price_in_aed",aed)
    formData.append("price_in_usd",usd)
    formData.append("price_in_aed_sale",aedsale)
    formData.append("price_in_usd_sale",usdsale)
    formData.append("location_id",locationId)
    formData.append("inclusive",inclusive)
    formData.append("cover",cover)
console.log(formData)
    const headers = {
      Authorization: `Bearer ${token}`,
  };
    axios({
      url:url,
      method:`POST`,
      data:formData,
      headers:headers,
    })
    .then((res) =>{
      setLoading(false);
      message.success("joylandi");
      getCars();
      closepostModal();
    })
    .catch((err) =>{
      console.log(err);
      setLoading(false);
      message.error("xatolik bor");
      closepostModal()
    })
  }
  ////////////////////////////delete/////////////////////////////
  const deleteCars = (e) =>{
    e.preventDefault();
    const headers = {
      Authorization: `Bearer ${token}`,
    }
    axios({
      url:`https://autoapi.dezinfeksiyatashkent.uz/api/cars/${id}`,
      method: 'DELETE',
      headers: headers,
    })
    .then((res)=>{
      message.success("Deleted")
      getCars();
      closedeleteModal()
    })
    .catch((err)=>{
      message.error("You can't delete")
      console.log(err);
      closedeleteModal()
    })
  }
  ////////////////////////////modal///////////////////////////////
  const openpostModal = () =>{
    setOpenpost(true)
  }
  const closepostModal = () =>{
    setOpenpost(false)
  }

  const opendeleteModal = (id) =>{
    setId(id)
    setOpendelete(true)
  }
  const closedeleteModal = () =>{
    setOpendelete(false)
  }

  return (
    <div className="cars">
      <h1>Cars</h1>
       {loading? <div>loading...</div> :
        <div>
          <button type="submit" onClick={openpostModal} className="post__btn">Add cars</button>
        <table>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Color</th>
            <th>City</th>
            <th>Action</th>
          </tr>
          {
            cars && cars.map((item,index) =>(
          <tr key={index}>
            <td>{item?.brand?.title}</td>
            <td>{item?.model?.name}</td>
            <td>{item?.color}</td>
            <td>{item?.city?.name}</td>
            <td>
              <button id="edit__btn">Edit</button>
              <button id="delete__btn" type="submit" onClick={()=>opendeleteModal(item?.id)}>Delete</button>
            </td>
          </tr>
            )
            )
          }
        </table>
        </div>
}
     {
       openpost? 
      <form   id="post">
        <h1>Post cars</h1>
        <label>Brands</label>
        <select id="brand_id" onChange={(e)=> setBrandId(e?.target?.value)}>
          {brand && brand.map((item,index) =>(
                    <option value={item?.id}>{item?.title}</option>
          ))}
         </select><br/>
        <label>Model</label><br/>
        <select id="model_id" onChange={(e)=> setModelId(e?.target?.value)}>
          {model && model.map((item,index) =>(
                    <option value={item?.id}>{item?.name}</option>
          ))}
         </select><br/>
        <label>City</label><br/>
        <select id="city_id" onChange={(e)=> setCityId(e?.target?.value)}>
          {city && city.map((item,index) =>(
                    <option value={item?.id}>{item?.name}</option>
          ))}
         </select><br/>
         <label>Category</label><br/>
        <select id="category_id" onChange={(e)=> setCategoryId(e?.target?.value)}>
          {category && category.map((item,index) =>(
                    <option value={item?.id}>{item.name_en}</option>
          ))}
         </select><br/>
         <label>Location</label><br/>
        <select id="location_id" onChange={(e)=> setLocationId(e?.target?.value)}>
          {location && location.map((item,index) =>(
                    <option value={item?.id}>{item?.name}</option>
          ))}
         </select><br/>
        <label>Color</label><br/>
        <input onChange={(e)=>setColor(e?.target?.value)} type="text" required/><br/>
        <label>Year</label><br/>
        <input onChange={(e)=>setYear(e?.target?.value)} type="text" required/><br/>
        <label>Seconds</label><br/>
        <input onChange={(e)=>setSeconds(e?.target?.value)} type="text" required/><br/>
        <label>Max_speed</label><br/>
        <input onChange={(e)=>setSpeed(e?.target?.value)} type="text" required/><br/>
        <label>Max_people</label><br/>
        <input onChange={(e)=>setPeople(e?.target?.value)} type="text" required/><br/>
        <label>Transmission</label><br/>
        <input onChange={(e)=>setTrans(e?.target?.value)} type="text" required/><br/>
        <label>Motor</label><br/>
        <input onChange={(e)=>setMotor(e?.target?.value)} type="text" required/><br/>
        <label>Drive_side</label><br/>
        <input onChange={(e)=>setSide(e?.target?.value)} type="text" required/><br/>
        <label>Petrol</label><br/>
        <input onChange={(e)=>setPetrol(e?.target?.value)} type="text" required/><br/>
        <label>Limitperday</label><br/>
        <input onChange={(e)=>setLimit(e?.target?.value)} type="text" required/><br/>
        <label>Deposit</label><br/>
        <input onChange={(e)=>setDeposit(e?.target?.value)} type="text" required/><br/>
        <label>Premium_protection</label><br/>
        <input onChange={(e)=>setProtection(e?.target?.value)} type="text" required/><br/>
        <label>Price_in_aed</label><br/>
        <input onChange={(e)=>setAed(e?.target?.value)} type="text" required/><br/>
        <label>Price_in_usd</label><br/>
        <input onChange={(e)=>setUsd(e?.target?.value)} type="text" required/><br/>
        <label>Price_in_usd_sale</label><br/>
        <input onChange={(e)=>setUsdsale(e?.target?.value)} type="text" required/><br/>
        <label>Price_in_aed_sale</label><br/>
        <input onChange={(e)=>setAedsale(e?.target?.value)} type="text" required/><br/>
        <label>Inclusive</label><br/>
        <input onChange={(e)=>setInclusive(e?.target?.value)} type="boolean" required/><br/>
        <label>Cover image</label><br/>
        <input onChange={(e)=>setCover(e?.target?.files[0])} type="file" required/><br/>
        <label>Upload car images</label><br/>
        <input  onChange={(e)=>setPicture(e?.target?.files[0])} type="file" required/><br/>
        <label>Upload car images</label><br/>
        <input onChange={(e)=>setImages(e?.target?.files[0])} type="file" required/><br/>
        <button id="ok__btn" type="button" onClick={postCars}>Post</button>
        <button id="cencel__btn" type="submit" onClick={closepostModal}>Cancel</button>
      </form> : " "
     }

     {
       opendelete?
       <form id="post" onSubmit={deleteCars}>
         <h3>Really delete this machine?</h3>
         <button id="ok__btn" type="submit">OK</button>
         <button id="cencel__btn" type="submit" onClick={closedeleteModal}>No</button>
       </form>
       : " "
     }
    </div>
  )
}

export default App
