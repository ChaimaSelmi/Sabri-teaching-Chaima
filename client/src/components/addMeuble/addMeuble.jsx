import React , {useState} from 'react'

const AddMeuble = ({id}) =>{
    console.log(id)
    React.useEffect(() => {
        if(id !== undefined){
            setName(id)
            setButton("Modifier")
        }
      });
    const [name , setName] = useState("");
    const [color , setColor] = useState("");
    const [image , setImage] = useState("");
    const [quantity , setQuantity] = useState("");
    const [button , setButton] = useState("Ajouter");

    const handleChange = (e)=>{
        switch (e.target.name) {
            case "name":
                setName(e.taget.value)
                break;

            case "color":
                setColor(e.taget.value)
                break;

            case "image":
                setImage(e.taget.value)
                break;

            case "quantity":
                setQuantity(e.taget.value)
                break;
                
            default:
                break;
        }
    }
    return(
        <form className="page-wrap container">
            <div className="form-group row">
                <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Nom</label>
                <div className="col-sm-10">
                    <input type="text" name="name" value={name} className="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg" onChange={handleChange}/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Color</label>
                <div className="col-sm-10">
                    <input type="text" name="color" value={color} className="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg" onChange={handleChange}/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Image</label>
                <div className="col-sm-10">
                    <input type="text" name="image" value={image} className="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg" onChange={handleChange}/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Quantité</label>
                <div className="col-sm-10">
                    <input type="text" name="quantity" value={quantity} className="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg" onChange={handleChange}/>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-2">
                <button type="submit" className="btn btn-primary">{button}</button>
                </div>
            </div>
        </form>
    )
}
export default AddMeuble;