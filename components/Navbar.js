'use client';
import 'bootstrap/dist/js/bootstrap.bundle';
import myNavbar from './navbar.module.css'

export default function Navbar() {

  const isWhite = true;

  return (
    <nav className={`${myNavbar.myNavbar  } navbar navbar-expand-lg border-0`}>
      <div className="container-fluid px-5">
        <a className="navbar-brand" href="#">
          <img className={myNavbar.navbarLogo} src={isWhite ? 'https://images.news.avaya.com/EloquaImages/clients/AvayaInc/%7Beb4801b9-7de8-4474-9c6b-cf49f3da2aff%7D_event-logo-center.png' : 'https://images.news.avaya.com/EloquaImages/clients/AvayaInc/%7B239c2ec0-4085-485c-912b-141d46908513%7D_event-logo-center-red.png'} alt="logo engage" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Why Attend</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Hotel</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Agenda
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Agenda at a Glance</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Sun - June 18</a></li>
                <li><a className="dropdown-item" href="#">Mon - June 19</a></li>
                <li><a className="dropdown-item" href="#">Tue - June 20</a></li>
                <li><a className="dropdown-item" href="#">Wed - June 21</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Speakers
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Featured Guests</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Keynote Speakers</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sponsors</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">IAUG</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">FAQ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Meetings & Tours</a>
            </li>
          </ul>
          <button type="button" className="btn btn-primary btn-lg ms-3"><b>Register Now</b></button>
         </div>
      </div>
    </nav>
  )
}