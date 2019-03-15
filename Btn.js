/*按钮类*/
function Btn(){
	this.values=0;
	
	this.init()
}
Btn.prototype={
	init(){
		/*把加号文本框减号放在界面上*/
		this.odiv=document.createElement("div")
		this.oadd=document.createElement("button")
		this.oadd.innerText="+"
		this.oadd.addEventListener("click",this.add.bind(this))
		this.otext=document.createElement("input")
		this.otext.type="text"
		this.otext.value=0
		this.osub=document.createElement("button")
		this.osub.innerText="-"
		this.osub.addEventListener("click",this.sub.bind(this))
		this.odiv.appendChild(this.oadd)
		this.odiv.appendChild(this.otext)
		this.odiv.appendChild(this.osub)
		document.body.appendChild(this.odiv)
		/*document.body.appendChild(this.oadd)
		document.body.appendChild(this.otext)
		document.body.appendChild(this.osub)*/
	},
	add(e){
		if(this.values>0){
			e.stopPropagation()
		}
		this.values++;
		this.otext.value=this.values
	
		/*this.data.productNum=this.values*/
	},
	sub(e){
		if(this.values!=1){
			e.stopPropagation()
		}
		this.values--;
		if(this.values<0){
			this.values=0
		}
		this.otext.value=this.values;
		
		/*this.data.productNum=this.values*/
	}
}
