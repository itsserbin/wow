const s=()=>({list:async function(){try{return(await axios.get(route("api.characteristics.list"))).data}catch(e){return console.error(e)}},fetch:async function(e){try{return(await axios.get(route("api.characteristics.index",e))).data}catch(t){return console.error(t)}},create:async function(e){try{return(await axios.post(route("api.characteristics.create"),e)).data}catch(t){return console.log(t)}},edit:async function(e){try{return(await axios.get(route("api.characteristics.edit",e))).data}catch(t){return console.log(t)}},destroy:async function(e){try{return(await axios.delete(route("api.characteristics.destroy",e))).data}catch(t){return console.log(t)}},update:async function(e,t){try{return(await axios.put(route("api.characteristics.update",e),t)).data}catch(r){return console.log(r)}}});export{s as C};
