(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c0a51"],{4351:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-md-6"},[o("h3",{staticClass:"text-center"},[t._v("Skapa träningslogg")]),o("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmitForm(e)}}},[o("div",{staticClass:"form-group"},[o("label",[t._v("Datum")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.logg.date,expression:"logg.date"}],staticClass:"form-control",attrs:{type:"date",required:""},domProps:{value:t.logg.date},on:{input:function(e){e.target.composing||t.$set(t.logg,"date",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[t._v("Häst")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.logg.name,expression:"logg.name"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.logg.name},on:{input:function(e){e.target.composing||t.$set(t.logg,"name",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[t._v("Träningstyp")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.logg.type,expression:"logg.type"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.logg.type},on:{input:function(e){e.target.composing||t.$set(t.logg,"type",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[t._v("Värmning")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.logg.warm,expression:"logg.warm"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.logg.warm},on:{input:function(e){e.target.composing||t.$set(t.logg,"warm",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[t._v("Antal intervaller ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.logg.interv,expression:"logg.interv"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.logg.interv},on:{input:function(e){e.target.composing||t.$set(t.logg,"interv",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[t._v("Tid")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.logg.time,expression:"logg.time"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.logg.time},on:{input:function(e){e.target.composing||t.$set(t.logg,"time",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[t._v("Noteringar")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.logg.notes,expression:"logg.notes"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.logg.notes},on:{input:function(e){e.target.composing||t.$set(t.logg,"notes",e.target.value)}}})]),t._m(0)])])])},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-group"},[o("button",{staticClass:"btn btn-danger btn-block"},[t._v("Lägg till")])])}],n=o("bc3a"),s=o.n(n),l={data:function(){return{logg:{date:"",name:"",type:"",warm:"",interv:"",time:"",notes:""}}},methods:{handleSubmitForm:function(){var t=this,e="api/create-Logg";s.a.post(e,this.logg).then((function(){t.$router.push("/view"),t.logg={date:"",name:"",type:"",warm:"",interv:"",time:"",notes:""}})).catch((function(t){console.log(t)}))}}},i=l,g=o("2877"),m=Object(g["a"])(i,a,r,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0c0a51.55f9d305.js.map