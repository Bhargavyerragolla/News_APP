
const Navbar = ({setCategory ,setCountry}) => {
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary"  data-bs-theme="dark" >
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4"> NewsInfo</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
               
        <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Select Country
  </button>
  <ul className="dropdown-menu">
    <li><div className="dropdown-item" onClick={()=>setCountry("in")}>India</div></li>
<li>  <div className="nav-link"onClick={()=>setCountry("za")} >Zimbawe</div></li>
<li>            <div className="nav-link"onClick={()=>setCountry("rs")} >Serbia</div></li>
<li>            <div className="nav-link"onClick={()=>setCountry("us")} >USA</div></li>
  </ul>
</div>

         
          <li className="nav-item">
            <div className="nav-link" onClick={()=>setCategory("business")} >business</div>
          </li>
          <li className="nav-item">
            <div className="nav-link"  onClick={()=>setCategory("entertainment")} >entertainment</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={()=>setCategory("general")} >general</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={()=>setCategory("health")} >health</div>
          </li>
          <li className="nav-item">
            <div className="nav-link"  onClick={()=>setCategory("science")} >science</div>
          </li>
          <li className="nav-item">
            <div className="nav-link"  onClick={()=>setCategory("sports")} >sports</div>
          </li>
          <li className="nav-item">
            <div className="nav-link"onClick={()=>setCategory("technology")} >technology</div>
          </li>
         
   
         
        </ul>
      </div>
    </div>
  </nav>



  )
}

export default Navbar
