/*数据类*/
function Data(simple_data){
	this.data=simple_data
}
Data.prototype={
	getName(){
		return this.data.productName
	},
	getImage(){
		return "http://localhost/img/"+this.data.prodctImage
	},
	getPrice(){
		return this.data.salePrice
	}
}
