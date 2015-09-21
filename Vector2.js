var Vector2 = function() {
	
	this.x = 0;
	this.y = 0;
	
};

Vector2.prototype.set = function() {
	this.x = x;
	this.y = y;
}

Vector2.prototype.normalize = function() {
		var length = (this.x * this.x) + (this.y * this.y);
	if(length !=0)
	{
		this.x = this.x / Math.sqrt(length);
		this.y = this.y / Math.sqrt(length);
	}
}
