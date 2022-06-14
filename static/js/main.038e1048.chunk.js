(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{16:function(e,t,i){},17:function(e,t,i){},18:function(e,t,i){},20:function(e,t,i){"use strict";i.r(t);var s=i(7),n=i.n(s),a=(i(15),i(9)),r=i(2),c=i(3),l=i(5),d=i(4),o=i(1),m=i.n(o),b=(i(16),i(10)),h=(i(17),i(18),i(0)),w=function(e){var t=e.title,i=e.description,s=e.imgUrl,n=e.imdbUrl;return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-image",children:Object(h.jsx)("figure",{className:"image is-4by3",children:Object(h.jsx)("img",{src:s,alt:"Film logo"})})}),Object(h.jsxs)("div",{className:"card-content",children:[Object(h.jsxs)("div",{className:"media",children:[Object(h.jsx)("div",{className:"media-left",children:Object(h.jsx)("figure",{className:"image is-48x48",children:Object(h.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(h.jsx)("div",{className:"media-content",children:Object(h.jsx)("p",{className:"title is-8",children:t})})]}),Object(h.jsxs)("div",{className:"content",children:[i,Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:n,children:"IMDB"})]})]})]})},j=function(e){var t=e.movies;return Object(h.jsx)("div",{className:"movies",children:t.map((function(e){return Object(h.jsx)(w,Object(b.a)({},e),e.imdbId)}))})},p=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){var e;Object(r.a)(this,i);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={newtitle:"",newdescription:"",newimgUrl:"",newimdbUrl:"",newimdbId:"",isnewtitle:!1,isnewdescription:!1,isnewimgUrl:!1,isnewimdbUrl:!1,isnewimdbId:!1,isbutton:!0},e.re=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/,e.isButton=function(){e.state.newtitle&&e.state.newdescription&&e.state.newimdbId&&e.state.newimdbUrl&&e.state.newimgUrl&&e.setState({isbutton:!1})},e.handleSubmitForm=function(t){if(t.preventDefault(),e.state.newtitle||e.setState({isnewtitle:!0}),e.state.newdescription||e.setState({isnewdescription:!0}),e.state.newimgUrl||e.setState({isnewimgUrl:!0}),e.state.newimdbUrl||e.setState({isnewimdbUrl:!0}),e.state.newimdbId||e.setState({isnewimdbId:!0}),e.state.newtitle&&e.state.newdescription&&e.state.newimdbId&&e.state.newimdbUrl&&e.state.newimgUrl){var i={title:e.state.newtitle,description:e.state.newdescription,imgUrl:e.state.newimgUrl,imdbUrl:e.state.newimdbUrl,imdbId:e.state.newimdbId};e.props.addNewFilm(i)}e.setState({newtitle:""}),e.setState({newdescription:""}),e.setState({newimdbId:""}),e.setState({newimdbUrl:""}),e.setState({newimgUrl:""}),e.setState({isbutton:!0})},e.isCorrectUrlIMGHandler=function(t){var i=t.target,s=i.value,n=i.name;"newimgUrl"===n&&(e.setState((function(){e.re.test(s)?e.setState({newimgUrl:s}):e.setState({isnewimgUrl:!0})})),e.setState({isnewimgUrl:!1})),"newimdbUrl"===n&&(e.setState((function(){e.re.test(s)?e.setState({newimdbUrl:s}):e.setState({isnewimdbUrl:!0})})),e.setState({isnewimdbUrl:!1}))},e}return Object(c.a)(i,[{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"",children:Object(h.jsxs)("form",{onChange:this.isButton,onSubmit:this.handleSubmitForm,children:[Object(h.jsx)("div",{className:"notification",children:"Put the data below"}),Object(h.jsxs)("div",{className:"",children:[Object(h.jsx)("input",{className:"control mb-3",type:"text",placeholder:"title",value:this.state.newtitle,required:!0,onChange:function(t){e.setState({newtitle:t.target.value}),e.setState({isnewtitle:!1})}}),this.state.isnewtitle&&Object(h.jsx)("div",{className:"notification is-danger",children:"Title is empty"})]}),Object(h.jsxs)("div",{className:"",children:[Object(h.jsx)("input",{className:"control mb-3",type:"text",placeholder:"description",value:this.state.newdescription,required:!0,onChange:function(t){e.setState({newdescription:t.target.value}),e.setState({isnewdescription:!1})}}),this.state.isnewdescription&&Object(h.jsx)("div",{className:"notification is-danger",children:"Description is empty"})]}),Object(h.jsxs)("div",{className:"",children:[Object(h.jsx)("input",{name:"newimgUrl",className:"control mb-3",type:"text",placeholder:"imgUrl",required:!0,value:this.state.newimgUrl,onChange:this.isCorrectUrlIMGHandler}),this.state.isnewimgUrl&&Object(h.jsx)("div",{className:" notification is-danger mb-3",children:"Paste correct URL"})]}),Object(h.jsxs)("div",{className:"",children:[Object(h.jsx)("input",{name:"newimdbUrl",className:"control mb-3",type:"text",placeholder:"imdbUrl",value:this.state.newimdbUrl,required:!0,onChange:this.isCorrectUrlIMGHandler}),this.state.isnewimdbUrl&&Object(h.jsx)("div",{className:" notification is-danger mb-3",children:"Paste correct URL"})]}),Object(h.jsxs)("div",{className:"",children:[Object(h.jsx)("input",{className:"control mb-3",type:"text",placeholder:"imdbId",required:!0,value:this.state.newimdbId,onChange:function(t){e.setState({newimdbId:t.target.value}),e.setState({isnewimdbId:!1})}}),this.state.isnewimdbId&&Object(h.jsx)("div",{className:"notification is-danger",children:"New imdbId is empty"})]}),Object(h.jsx)("button",{className:"button is-primary mt-3",type:"submit",disabled:this.state.isbutton,children:"Add"})]})})}}]),i}(o.Component),u=i(8),g=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){var e;Object(r.a)(this,i);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={movies:u},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(a.a)(e.movies),[t])}}))},e}return Object(c.a)(i,[{key:"render",value:function(){var e=this.state.movies;return Object(h.jsxs)("div",{className:"page",children:[Object(h.jsx)("div",{className:"page-content",children:Object(h.jsx)(j,{movies:e})}),Object(h.jsx)("div",{className:"sidebar",children:Object(h.jsx)(p,{addNewFilm:this.addMovie})})]})}}]),i}(m.a.Component);n.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[20,1,2]]]);
//# sourceMappingURL=main.038e1048.chunk.js.map