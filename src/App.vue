

<template>
  <div id="app">
    <h1>{{title}}</h1>
    <calculator></calculator>
  </div>
</template>

<script>
import Calculator from './components/Calculator';


export default {
  data(){
    return {
        title : 'floor calculator'
    }
  },
  components: {
    Calculator,
  }
}
</script>

<style>
  body{font-family: "PT Sans"}
  *{box-sizing: border-box}
  /*h4, h3{*/
    /*font-family: 'Uni Sans Heavy CAPS';*/
  /*}*/
  #app{max-width: 1200px;margin: 0 auto}
  /* css grid */
  .row, .flex{
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;

  }
  .flex.center, .row.center{
    justify-content: center;
    -webkit-justify-content: center;
    -webkit-box-pack:center;
  }
  .flex.middle, .row.middle{
    align-items: center;
    -webkit-box-align:start;
  }
  .flex.space-around, .row.space-around{
    justify-content: space-around;
  }
  .flex.space-between, .row.space-between{
    justify-content: space-between;
  }
  .center{text-align: center;}
  .row.column, .flex.column{
    flex-direction: column;
    -webkit-flex-direction: column;
    -webkit-box-orient:vertical;
  }
  .col-1{
    flex:0 8.33%;
    -ms-flex:0 8.33%;
    max-width: 8%;
  }
  .col-2{
    flex:0 16.6%;
    -ms-flex:0 16.6%;
    max-width: 16.6%;
  }
  .col-3{
    flex:0 25%;
    -ms-flex:0 25%;
    max-width: 25%;
  }
  .col-4{
    flex: 33.33%;
    -ms-flex:0 33.33%;
    max-width: 33%;
    flex-grow: 1;
    flex-basis: initial;
  }
  .col-5{
    flex:0 41.66%;
    -ms-flex:0 41.66%;
    max-width: 41.66%
  }
  .col-6{
    flex:0 50%;
    -ms-flex:0 50%;
  }
  .col-7{
    flex:0 58.33%;
    -ms-flex:0 58.33%;
    max-width: 58.33%
  }
  .col-8{
    flex:0 66.66%;
    -ms-flex:0 66.66%;
    max-width: 66.66%;
  }
  .col-9{
    flex:0 75%;
    -ms-flex:0 75%;
    max-width:75%;
  }
  .col-10{
    flex:0 83.33%;
    -ms-flex:0 83.33%;
    max-width: 83.33%;
  }
  .col-11{
    flex:0 91.66%;
    -ms-flex: 0 91.66%;
    max-width: 91.66%;
  }
  .col-12{
    flex:1;
    max-width: 100%;
  }

  .hidden{display:none;}

  .relative{position: relative;}

  .container{
    width: 95%;
    max-width: 1200px;
    margin:0 auto;

  }
  img{max-width: 100%}
  /* responsive rules */
  @media(min-width:1200px){
    .hidden-lg{display: none;}

  }
  @media(min-width:992px){
    .hidden-md{display: none;}
    .row-md, .flex-md{display: flex;}

  }
  @media(min-width:768px) and (max-width:991px){
    .hidden-sm{display: none;}
    .hidden-sm{display: none;}
    .column-sm{flex-direction: column;}
    .center-sm{text-align: center;}

    .col-1-sm{
      flex:0 8.33%;
      -ms-flex:0 8.33%;
      max-width: 8%;
    }
    .col-2-sm{
      flex:0 16.6%;
      -ms-flex:0 16.6%;
      max-width: 16.6%;
    }
    .col-3-sm{
      flex:0 25%;
      -ms-flex:0 25%;
      max-width: 25%;
    }
    .col-4-sm{
      flex:0 33.33%;
      -ms-flex:0 33.33%;
      max-width: 33.33%;
    }
    .col-5-sm{
      flex:0 41.66%;
      -ms-flex:0 41.66%;
      max-width: 41.66%
    }
    .col-6-sm{
      flex:0 50%;
      -ms-flex:0 50%;
      max-width: 50%;

    }
    .col-7-sm{
      flex:0 58.33%;
      -ms-flex:0 58.33%;
      max-width: 58.33%
    }
    .col-8-sm{
      flex:0 66.66%;
      -ms-flex:0 66.66%;
      max-width: 66.66%
    }
    .col-9-sm{
      flex:0 75%;
      -ms-flex:0 75%;
      max-width:75%;
    }
    .col-10-sm{
      flex:0 83.33%;
      -ms-flex:0 83.33%;
      max-width: 83.33%;
    }
    .col-11-sm{
      flex:0 91.66%;
      -ms-flex: 0 91.66%;
      max-width: 91.66%;
    }
    .col-12-sm{
      flex:1;
      -ms-flex:1;
      max-width: 100%;
    }

  }

  @media(max-width:767px){
    .hidden-xs{display: none;}
    .column-xs{flex-direction: column;}
    .center-xs{text-align: center;}

    .col-1-xs{
      flex:0 8.33%;
      -ms-flex:0 8.33%;
      max-width: 8%;
    }
    .col-2-xs{
      flex:0 16.6%;
      -ms-flex:0 16.6%;
      max-width: 16.6%;
    }
    .col-3-xs{
      flex:0 25%;
      -ms-flex:0 25%;
      max-width: 25%;
    }
    .col-4-xs{
      flex:0 33.33%;
      -ms-flex:0 33.33%;
      max-width: 33.33%;
    }
    .col-5-xs{
      flex:0 41.66%;
      -ms-flex:0 41.66%;
      max-width: 41.66%
    }
    .col-6-xs{
      flex:0 50%;
      -ms-flex:0 50%;
      max-width: 50%;
    }
    .col-7-xs{
      flex:0 58.33%;
      -ms-flex:0 58.33%;
      max-width: 58.33%;
    }
    .col-8-xs{
      flex:0 66.66%;
      -ms-flex:0 66.66%;
      max-width: 66.66%;
    }
    .col-9-xs{
      flex:0 75%;
      -ms-flex:0 75%;
      max-width:75%;
    }
    .col-10-xs{
      flex:0 83.33%;
      -ms-flex:0 83.33%;
      max-width: 83.33%;
    }
    .col-11-xs{
      flex:0 91.66%;
      -ms-flex: 0 91.66%;
      max-width: 91.66%;
    }
    .col-12-xs{
      flex:1;
      -ms-flex:1;
      max-width: 100%;
    }
  }


  /* ie10+ fix */
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    .hidden-md{display: none !important;}
    .row, .flex{
      display: table;
      width: 100%;
    }
    .flex.center, .row.center{
      text-align: center;
    }

    .center{text-align: center;}
    .row.column, .flex.column{flex-direction: column}
    .col-1{
      width:8%;
      display: inline-block;
    }
    .col-2{
      width: 16.6%;
      display: inline-block;
    }
    .col-3{
      width: 25%;
      display: inline-block;
    }
    .col-4{
      display: inline-block;
      width: 33%;
    }
    .col-5{
      display: inline-block;
      width:41.66%;
    }
    .col-6{
      display: inline-block;
      width:50%;
    }
    .col-7{
      display: inline-block;
      float:left;
    }
    .col-8{
      width: 66.66%;
      display: inline-block;
    }
    .col-9{
      display: inline-block;
      width:75%;
    }
    .col-10{
      display: inline-block;
      width: 83.33%;
    }
    .col-11{
      display: block;
      width: 91.66%;
      float:left;
    }
    .col-12{
      display: inline-block;
      width: 100%;
    }


  }

</style>
