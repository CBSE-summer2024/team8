import {LitElement, html,css} from 'lit';

export class searchElement extends LitElement {

    constructor(){
        super();
        this.attachShadow({ mode: "open"});

    }
    connectedCallback(){
        this.shadowRoot.innerHTML=`

        
        <ion-icon name="search"></ion-icon>

        <input class="input " type ="search " placeholder="seach for id , product name">


        `;
    }
   


}


customElements.define('search-component', searchElement);
