import{e as n,f as d}from"./app.d33e4a32.js";import{S as r,W as p,U as s,K as u,Z as c}from"./___vite-browser-external_commonjs-proxy.2503c6f8.js";const g=c(" Upload images "),v={__name:"UploadImagesModal",props:["isActive","images"],emits:["closeModal","uploadImages","loadMoreImages"],setup(i,{emit:l}){const a=i;function m(o){l("uploadImages",o)}return(o,e)=>(r(),p(d,{"is-active":a.isActive,onCloseModal:e[0]||(e[0]=t=>o.$emit("closeModal")),"submit-button-text":"Ok","cancel-button-text":"Load more",onSubmitForm:e[1]||(e[1]=t=>o.$emit("closeModal")),onClickCancel:e[2]||(e[2]=t=>o.$emit("loadMoreImages"))},{title:s(()=>[g]),content:s(()=>[u(n,{multiple:!0,id:"uploadImages",label:"Upload images",onUpload:m,images:a.images},null,8,["images"])]),_:1},8,["is-active"]))}};export{v as _};
