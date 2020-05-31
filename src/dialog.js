$(".start").on("click",function(){
			$(".start").attr("disabled","disabled");
			function Wrap(obj){
				this.cls = obj.cls;
				this.width = obj.width;
				this.height = obj.height;
				this.left = obj.left;
				this.bgcolor = obj.bgcolor;
				this.addDom();
			}
			Wrap.prototype.addDom = function(){
				this.dom = document.createElement("div");
				this.dom.setAttribute("class",this.cls);
				this.dom.style.width = this.width + "px";
				this.dom.style.height = this.height + "px";
				this.dom.style.backgroundColor = this.bgcolor;
				$("body").append(this.dom);
			};
			function Headers(obj){
				this.cls = obj.cls;
				this.width = obj.width;
				this.height = obj.height;
				this.bgcolor = obj.bgcolor;
				this.addDoms();
			}
			Headers.prototype.addDoms = function(){
				this.dom = document.createElement("div");
				this.dom.setAttribute("class",this.cls);
				this.dom.style.width = this.width + "px";
				this.dom.style.height = this.height + "px";
				$(".wrap").append(this.dom);
			};
			function Titles(obj){
				this.cls = obj.cls;
				this.content = obj.content;
				this.size = obj.size;
				this.color = obj.color;
				this.addDomes();
			}
			Titles.prototype.addDomes = function(){
				this.dom = document.createElement("h4");
				this.dom.setAttribute("class",this.cls);
				this.dom.innerText = this.content;
				this.dom.style.height = this.height + "px";
				this.dom.style.fontSize = this.size;
				this.dom.style.color = this.color;
				$(".box_header").append(this.dom);
			};
			function Close(obj){
				this.cls = obj.cls;
				this.content = obj.content;
				this.size = obj.size;
				this.color = obj.color;
				this.weight = obj.weight;
				this.bgcolor = obj.bgcolor;
				this.addDomess();
			}
			Close.prototype.addDomess = function(){
				this.dom = document.createElement("button");
				this.dom.setAttribute("class",this.cls);
				this.dom.innerText = this.content;
				this.dom.style.height = this.height + "px";
				this.dom.style.fontSize = this.size;
				this.dom.style.fontWeight = this.weight;
				this.dom.style.color = this.color;
				this.dom.style.backgroundColor = this.bgcolor;
				$(".box_header").append(this.dom);
				this.dom.onclick = function(){
					$(".wrap").hide();
				};
			};
			function Bodys(obj){
				this.cls = obj.cls;
				this.width = obj.width;
				this.height = obj.height;
				this.size = obj.size;
				this.content = obj.content;
				this.addDomss();
			}
			Bodys.prototype.addDomss = function(){
				this.dom = document.createElement("div");
				this.dom.setAttribute("class",this.cls);
				this.dom.style.width = this.width + "px";
				this.dom.style.height = this.height + "px";
				this.dom.style.fontSize = this.size;
				this.dom.innerHTML = this.content;
				$(".wrap").append(this.dom);
			};
			function Footers(obj){
				this.cls = obj.cls;
				this.width = obj.width;
				this.height = obj.height;
				this.addDomess();
			}
			Footers.prototype.addDomess = function(){
				this.dom = document.createElement("div");
				this.dom.setAttribute("class",this.cls);
				this.dom.style.width = this.width + "px";
				this.dom.style.height = this.height + "px";
				$(".wrap").append(this.dom);
			};
			function Btn(obj){
				this.cls = obj.cls;
				this.width = obj.width;
				this.height = obj.height;
				this.content = obj.content;
				this.size = obj.size;
				this.color = obj.color;
				this.weight = obj.weight;
				this.bgcolor = obj.bgcolor;
				this.bdcolor = obj.bdcolor;
				this.addDomesss();
			}
			Btn.prototype.addDomesss = function(){
				this.dom = document.createElement("button");
				this.dom.setAttribute("class",this.cls);
				this.dom.innerText = this.content;
				this.dom.style.width = this.width + "px";
				this.dom.style.height = this.height + "px";
				this.dom.style.fontSize = this.size;
				this.dom.style.fontWeight = this.weight;
				this.dom.style.color = this.color;
				this.dom.style.backgroundColor = this.bgcolor;
				this.dom.style.borderColor = this.bdcolor;
				$(".box_footer").append(this.dom);
				$(".btn-default").on("click",function(){
					$(".wrap").hide();
				});
			};
			var obj1 = {
				cls:"wrap",
				width:"600",
				height:"200",
				bgcolor:"#fff"
			};
			var obj2 = {
				cls:"box_header",
				width:"570",
				height:"52",
			};
			var obj3 = {
				cls:"title",
				content:"这里是标题",
				size:"15",
				color:"#000"
			};
			var obj4 = {
				cls:"close",
				content:"x",
				size:"20",
				color:"#000",
				weight:600,
				bgcolor:"#f9f9f9"
			};
			var obj5 = {
				cls:"box_body",
				width:"570",
				height:"60",
				content:"春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。<br>雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流。",
				size:"13",
				color:"#000",
			};
			var obj6 = {
				cls:"box_footer",
				width:"570",
				height:"60",
			};
			var obj7 = {
				cls:"btn-default",
				content:"关闭",
				width:"52",
				height:"32",
				size:"13",
				color:"#353535",
				weight:400,
				bgcolor:"#f2f2f2",
				bdcolor:"#bfbfbf"
			};
			var obj8 = {
				cls:"btn-primary",
				content:"确定",
				width:"52",
				height:"32",
				size:"13",
				color:"#fff",
				weight:400,
				bgcolor:"#3280fc",
				bdcolor:"#1970fc"
			};
			new Wrap(obj1);
			new Headers(obj2);
			new Titles(obj3);
			new Close(obj4);
			new Bodys(obj5);
			new Footers(obj6);
			new Btn(obj7);
			new Btn(obj8);
	});