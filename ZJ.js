/*显示组件类*/
function ZJ(title,pic,price,btn){
	this.btn=btn;
	this.init(title,pic,price)
	this.flag=false
	
}
ZJ.prototype={
	init(title,pic,price){
		this.odiv=document.createElement("div")
		this.ocenter=document.createElement("center")
		/*this.oinput=document.createElement("input")
		this.oinput.type="checkbox"*/
		this.oh3=document.createElement("h3")
		this.oh3.innerText=title
		this.oimg=document.createElement("img")
		this.oimg.src=pic
		this.oimg.style.width="100%"
		this.oh4=document.createElement("h4")
		this.oh4.innerText=price
		this.odiv.style.width="300px"
		this.odiv.style.height="500px"
		this.odiv.style.float="left"
		this.odiv.style.border="1px solid black"
		/*this.ocenter.appendChild(this.oinput)*/
		/*this.btn=new Btn();*/
		this.ocenter.appendChild(this.oh3)
		this.ocenter.appendChild(this.oimg)
		this.ocenter.appendChild(this.oh4)
		
		this.ocenter.appendChild(this.btn.odiv)
		
		this.odiv.appendChild(this.ocenter)
		
		document.body.appendChild(this.odiv)
		this.odiv.addEventListener("click",this.changbk.bind(this))
	},
	changbk(){
		this.flag=!this.flag
		/*if(this.flag){
			this.odiv.style.background="blue"
		}else{
			this.odiv.style.background="blue"
		}*/
		this.odiv.style.background=this.flag?"blue":"transparent"
		/*把json数据加了一条checked*/
		this.data.checked=this.flag;
		
	}
}
