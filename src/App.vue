

<template>
  <div id="floor-calculator">
    <h1 v-if="title">{{title}}</h1>
    <calculator></calculator>
  </div>
</template>

<script>
import Calculator from './components/Calculator';
export default {
  data(){
    return {
        title : '',

    }
  },
  components: {
    Calculator,
  }
}
</script>

<style>
  *{box-sizing: border-box}
  #floor-calculator{
    font-family: "PT Sans";
    max-width: 1200px;margin: 0 auto;
    padding-top: 40px;
  }
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
  .calc-col-1{
    flex:0 8.33%;
    -ms-flex:0 8.33%;
    max-width: 8%;
  }
  .calc-col-2{
    flex:0 16.6%;
    -ms-flex:0 16.6%;
    max-width: 16.6%;
  }
  .calc-col-3{
    flex:0 25%;
    -ms-flex:0 25%;
    max-width: 25%;
  }
  .calc-col-4{
    flex: 33.33%;
    -ms-flex:0 33.33%;
    max-width: 33%;
    flex-grow: 1;
    flex-basis: initial;
  }
  .calc-col-5{
    flex:0 41.66%;
    -ms-flex:0 41.66%;
    max-width: 41.66%
  }
  .calc-col-6{
    flex:0 50%;
    -ms-flex:0 50%;
  }
  .calc-col-7{
    flex:0 58.33%;
    -ms-flex:0 58.33%;
    max-width: 58.33%
  }
  .calc-col-8{
    flex:0 66.66%;
    -ms-flex:0 66.66%;
    max-width: 66.66%;
  }
  .calc-col-9{
    flex:0 75%;
    -ms-flex:0 75%;
    max-width:75%;
  }
  .calc-col-10{
    flex:0 83.33%;
    -ms-flex:0 83.33%;
    max-width: 83.33%;
  }
  .calc-col-11{
    flex:0 91.66%;
    -ms-flex: 0 91.66%;
    max-width: 91.66%;
  }
  .calc-col-12{
    flex:1;
    max-width: 100%;
  }

  .hidden{display:none;}

  .relative{position: relative;}

  .calc-container{
    width: 95%;
    max-width: 1200px;
    margin:0 auto;

  }
  img{max-width: 100%}
  /* responsive rules */

  @media(min-width:768px) and (max-width:991px){

    .calc-col-1-sm{
      flex:0 8.33%;
      -ms-flex:0 8.33%;
      max-width: 8%;
    }
    .calc-col-2-sm{
      flex:0 16.6%;
      -ms-flex:0 16.6%;
      max-width: 16.6%;
    }
    .calc-col-3-sm{
      flex:0 25%;
      -ms-flex:0 25%;
      max-width: 25%;
    }
    .calc-col-4-sm{
      flex:0 33.33%;
      -ms-flex:0 33.33%;
      max-width: 33.33%;
    }
    .calc-col-5-sm{
      flex:0 41.66%;
      -ms-flex:0 41.66%;
      max-width: 41.66%
    }
    .calc-col-6-sm{
      flex:0 50%;
      -ms-flex:0 50%;
      max-width: 50%;

    }
    .calc-col-7-sm{
      flex:0 58.33%;
      -ms-flex:0 58.33%;
      max-width: 58.33%
    }
    .calc-col-8-sm{
      flex:0 66.66%;
      -ms-flex:0 66.66%;
      max-width: 66.66%
    }
    .calc-col-9-sm{
      flex:0 75%;
      -ms-flex:0 75%;
      max-width:75%;
    }
    .calc-col-10-sm{
      flex:0 83.33%;
      -ms-flex:0 83.33%;
      max-width: 83.33%;
    }
    .calc-col-11-sm{
      flex:0 91.66%;
      -ms-flex: 0 91.66%;
      max-width: 91.66%;
    }
    .calc-col-12-sm{
      flex:1;
      -ms-flex:1;
      max-width: 100%;
    }

  }

  @media(max-width:767px){
    .hidden-xs{display: none;}
    .column-xs{flex-direction: column;}
    .center-xs{text-align: center;}

    .calc-col-1-xs{
      flex:0 8.33%;
      -ms-flex:0 8.33%;
      max-width: 8%;
    }
    .calc-col-2-xs{
      flex:0 16.6%;
      -ms-flex:0 16.6%;
      max-width: 16.6%;
    }
    .calc-col-3-xs{
      flex:0 25%;
      -ms-flex:0 25%;
      max-width: 25%;
    }
    .calc-col-4-xs{
      flex:0 33.33%;
      -ms-flex:0 33.33%;
      max-width: 33.33%;
    }
    .calc-col-5-xs{
      flex:0 41.66%;
      -ms-flex:0 41.66%;
      max-width: 41.66%
    }
    .calc-col-6-xs{
      flex:0 50%;
      -ms-flex:0 50%;
      max-width: 50%;
    }
    .calc-col-7-xs{
      flex:0 58.33%;
      -ms-flex:0 58.33%;
      max-width: 58.33%;
    }
    .calc-col-8-xs{
      flex:0 66.66%;
      -ms-flex:0 66.66%;
      max-width: 66.66%;
    }
    .calc-col-9-xs{
      flex:0 75%;
      -ms-flex:0 75%;
      max-width:75%;
    }
    .calc-col-10-xs{
      flex:0 83.33%;
      -ms-flex:0 83.33%;
      max-width: 83.33%;
    }
    .calc-col-11-xs{
      flex:0 91.66%;
      -ms-flex: 0 91.66%;
      max-width: 91.66%;
    }
    .calc-col-12-xs{
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
    .calc-col-1{
      width:8%;
      display: inline-block;
    }
    .calc-col-2{
      width: 16.6%;
      display: inline-block;
    }
    .calc-col-3{
      width: 25%;
      display: inline-block;
    }
    .calc-col-4{
      display: inline-block;
      width: 33%;
    }
    .calc-col-5{
      display: inline-block;
      width:41.66%;
    }
    .calc-col-6{
      display: inline-block;
      width:50%;
    }
    .calc-col-7{
      display: inline-block;
      float:left;
    }
    .calc-col-8{
      width: 66.66%;
      display: inline-block;
    }
    .calc-col-9{
      display: inline-block;
      width:75%;
    }
    .calc-col-10{
      display: inline-block;
      width: 83.33%;
    }
    .calc-col-11{
      display: block;
      width: 91.66%;
      float:left;
    }
    .calc-col-12{
      display: inline-block;
      width: 100%;
    }


  }

  .calc-btn{
    display: inline-block;
    font-size: 16px;
    color:#fff;
    padding: 15px 22px;
    text-align: center;
    border-radius: 12px;
    border:none;
    box-shadow: none;
    margin-right: 10px;
  }
  .next{
    background: #5ec19e;
  }
  .prev{
    background: #c0c0c0;
  }

</style>
