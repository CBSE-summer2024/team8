import {LitElement, html,css} from 'lit';

export class title extends LitElement {

   
    constructor(){
        super();
        this.attachShadow({ mode: "open"});

    }
    
  
    connectedCallback(){
        this.shadowRoot.innerHTML=`


        <div>
        <p>
        <h1> search for mart products </h1>
        </p>
        </div>

       

        `;
    }
   


}


customElements.define('search-title', title);
