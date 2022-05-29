import React from "react";
import { Link } from "react-router-dom";
import {FaFacebook,FaInstagram,FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return <footer className="footer p-10 bg-[#232946] text-[#b8c1ec]">
    <div className="mx-auto" >
    <Link to="/">
        <h2 className='text-2xl text-[#fffffe]'>Power Tools</h2>
        </Link>
    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
  </div> 
  <div >
    <span className="footer-title">Services</span> 
    <Link to="" className="link link-hover">Branding</Link> 
    <Link to="" className="link link-hover">Design</Link> 
    <Link to="" className="link link-hover">Marketing</Link> 
    <Link to="" className="link link-hover">Advertisement</Link>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <Link to="" className="link link-hover">About us</Link> 
    <Link to="" className="link link-hover">Contact</Link> 
    <Link to="" className="link link-hover">Jobs</Link> 
    <Link to="" className="link link-hover">Press kit</Link>
  </div> 
  <div className="flex gap-4 mx-auto">
    <span className="footer-title">Find us</span> 
    <Link to="" className="link link-hover text-2xl"><FaFacebook/></Link> 
    <Link to="" className="link link-hover text-2xl"><FaInstagram/></Link> 
    <Link to="" className="link link-hover text-2xl"> <FaTwitterSquare/> </Link>
  </div>
  </footer>;
};

export default Footer;
