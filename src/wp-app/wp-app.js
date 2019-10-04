import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-layout.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/paper-icon-button/paper-icon-button.js'


/**
 * @customElement
 * @polymer
 */
class WpApp extends PolymerElement {
  static get template() {
    return html`
      <style >
        :host {
      
        }
        .grid {
        display: grid;
        justify-content: space-between;
        align-content: space-between;
        grid-template-columns: auto auto auto;
        margin-bottom:100px;
        }

        app-header {
        background-color:white;
        box-shadow: 0px 5px 4px -3px rgba(0, 0, 0, 0.2);
        }

        iron-image {
        width: auto;
        height: auto;
        
        left:100px;
      
        }
        .sidebar{
          box-shadow: 0 3px 5px 0 rgba(0,0,0,0.2);
          height: 100%;
          width: 20px;
          position: fixed;
          z-index: 1;
          top: 0;
          left: 0;
          background-color: white;
          overflow-x: hidden;
          padding-top: 20px;
          
        }
        .content{
          position:absolute;
          height:auto;
          width:80%;
          background-color:#FDFDFD;
          top: 15%;
          left: 7%;
          padding-top:20px;
          padding-left:20px;

        }

        .simplecard{
          background-color:#F9FBFB;
         
          padding:2% 2% 2% 2%;
          
        }
        .simplecard h3{
          color:#3EBCB3;
          font-weight: lighter;

        }
        .simplecard p{
          color:#A6A6A6;
          font-size:14px;
          line-height: 1.6;
        }
        .simplecard button{
          color: #3EBCB3;
          padding: 10px 28px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 14px;
          margin: 2px 2px;
          cursor: pointer;
          font-weight: bold;
          background-color: white;
          border: 1px solid #3EBCB3;
          border-radius:5px;
        }

        .card{
          background-color:white;
          width:260px;
          height:240px;
          padding:40px;
          margin-top:20%;
          transition: 0.3s;
          border-radius: .3em;
          color:black;
        }
        .card:hover{
          box-shadow: 0 4px 30px 0 rgba(0,0,0,0.1);
          color:#3EBCB3;


        }
        
        
       
        .crdtitle iron-image {
        width: 55px;
        margin-top:5px;
        height: 55px;
        border-radius:60px;
        left:0;
        content:url("/images/crdlog.png");
        
      }


        .crdtitle p{
        margin-left:10px;
        display:inline-block;
        width:165px;
        left:0; 


        }

        .crddetails{
         margin-top:20px;
         margin-bottom:30px; 
         font-size:14px;
         color:#A6A6A6;
         line-height: 1.6;
        }
        
        #spn{
          font-size:18px;
          font-weight:bold;
        }
        .crdbtn{
          color: #3EBCB3;
          padding: 7px 36px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 14px;
          margin: 4px 4px;
          cursor: pointer;
          background-color: white;
          border: 1px solid #3EBCB3;
          border-radius:3px;
        }
        #navbtn{
          margin-right:10%;
          width:50px;
          height:50px;
        }

        #navbtn1{
          margin-right:10px;
          width:50px;
          height:50px;
        }

        .footer{ text-align:center; color:#A6A6A6; margin-bottom:70px; }

        .fico{
          width:50px;
          height:50px;
          margin-right:30px;
        }

        .links{
          color:#A6A6A6;
          
        }
        .links span{
        margin:10px;
        display: inline-block;
        }

        .slider{
          background-color:#3EBCB3;
          height:60px;
          width:3px;
          margin-top:90px;
          margin-left:17px;
          position:fixed;
        }

      </style>


      <iron-ajax 
          auto
          url="/data/products.json"
          handle-as="json"
          last-response="{{products}}">
      </iron-ajax>


       <div class="sidebar">
              <div class="slider"></div>
       </div>

          <app-header slot="header">
            <app-toolbar >
              <div main-title="" id="head" >
               <iron-image src="/images/logo_c.png"></iron-image>
              </div>
              <paper-icon-button id="navbtn1" src="/images/notif.svg"></paper-icon-button>
              <paper-icon-button id="navbtn" src="/images/accnt.svg"></paper-icon-button>

            </app-toolbar>

          </app-header>

<div class="content">
<p style="font-weight:lighter;font-size:37px;">Content Store</p>

<div class="simplecard">
<h3>Got bulk orders or almost similar orders? Fill the order brief in an excel sheet</h3>
<p>If you're wondering about an easy way to place orders in large numbers we provide a way customized just for that.<br>
Download our excel sheet, and fill the order brief in a prescribed format and submit. In case you need any help,<a href="#" style="color:#A6A6A6;"> we <br> are just a click away to assist you in placing your order.</a>
</p>
<button>Order via Excel Sheet</button>
</div>


<div class="grid">

<template is="dom-repeat"  items="[[products]]">
        <div>     
           <div class="card" >
             <div class="crdtitle">
              <iron-image sizing="cover" alt="Card Image" ></iron-image>
              
              <p><span id="spn">[[item.title]]</span><br>
                
                  from &#8377;[[item.price]]</p>
              
             </div>

             
             <div class="crddetails">[[item.details]]</div>
             <button class="crdbtn">Order</button>
           </div>  

            </div>
        </template>
  



</div>




<div class="footer">
              <paper-icon-button class="fico" src="/images/twitter.png"></paper-icon-button>
              <paper-icon-button class="fico" src="/images/linkedin.png"></paper-icon-button>
              <paper-icon-button class="fico" src="/images/instagram.png"></paper-icon-button>
              <paper-icon-button class="fico" src="/images/facebook.png"></paper-icon-button>

<br>
<p>Copyright @ 2019 White Panda Media Pvt. Ltd.<br>
  All rights reserved
</p>

<p>
  <a href="#privacy" class="links">Privacy Policy <span>|</span></a>
  <a href="#tos" class="links">Terms of service  <span>|</span></a>
  <a href="#agreement" class="links">Service Agreement <span>|</span></a>
  <a href="#contact" class="links">Contact us</a>
</p>

</div>






</div>


      
    `;

    
  }

  

}


window.customElements.define('wp-app', WpApp);
