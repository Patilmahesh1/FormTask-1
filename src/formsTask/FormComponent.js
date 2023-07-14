import React, { useState } from 'react'

function FormComponent() {

    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        contact: "",
        mobile: "",
        email: ""
    })
    // console.log([data]);

    const [array, setArray] = useState([])

    // const dispatch = useDispatch()
    // const form = useSelector((state) => state.form.value)

    const handleChange = (e) => {
        const { name, value } = e.target
        setData((prev) => ({ ...prev, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setArray([...array, data])
        // dispatch(form1(data))
        setData({
            firstname: "",
            lastname: "",
            contact: "",
            mobile: "",
            email: ""
        })
    }
    // console.log(form);
    console.log([...array]);


    return (
        <>
            <form onSubmit={handleSubmit} style={{boxShadow:"2px 6px 6px grey",width:"900px",margin:"0 auto",height:"300px",marginBottom:"20px"}} >
                <div class="row my-4">
                    <div class="col-md-4 offset-md-2" >
                        <label class="form-label"><strong>FirstName</strong></label>
                        <input type="text" class="form-control" name='firstname' value={data.firstname}
                            onChange={handleChange}
                        />
                    </div>
                    <div class="col-md-4" >
                        <label class="form-label"><strong>LastName</strong></label>
                        <input type="text" class="form-control" name='lastname' value={data.lastname}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div class="row my-4">
                    <div class="col-md-4 offset-md-2" >
                        <label class="form-label"><strong>How should we contact you?</strong></label>
                        <select class="form-control" name='contact' onClick={handleChange}>
                            <option>--select-One--</option>
                            <option value="mobile" onClick={handleChange}>mobile</option>
                            <option value="email" onClick={handleChange} >email</option>
                        </select>
                    </div>
                    {data.contact === "mobile" && <div class="col-md-4" >
                        <label class="form-label"><strong>Phone</strong></label>
                        <input type="number" class="form-control" name='mobile' value={data.mobile}
                            onChange={handleChange}
                        />
                    </div> || data.contact === "email" && <div class="col-md-4" >
                        <label class="form-label"><strong>Email</strong></label>
                        <input type="email" class="form-control" name='email' value={data.email}
                            onChange={handleChange}
                        />
                    </div>}
                </div>
                <div class="row my-4 col-md-6 offset-md-3">
                    <button type='submit' class="btn btn-primary btn-block">Submit</button>
                </div>
            </form>
            {array.map((item, i) => {
                return <ul key={i}>
                    <li>{item.firstname}</li>
                    <li>{item.lastname}</li>
                    <li>{item.email} {item.mobile}</li>
                </ul>
            })}
        </>
    )
}

export default FormComponent

