/* Implement a cell type named StretchCell(inner, width, height) that conforms to the table cell interface described 
earlier in the chapter. It should wrap another cell (like UnderlinedCell does) and ensure that the resulting cell has 
at least the given width and height, even if the inner cell would naturally be smaller. */

function StretchCell(inner, width, height) {
	this.inner = inner;
	this.width = width;
	this.height = height;
};

StretchCell.prototype.minWidth = function() {
	return Math.max(this.inner.minWidth(), this.width);
};

StretchCell.prototype.minHeight = function() {
	return Math.max(this.inner.minHeight(), this.height);
};

StretchCell.prototype.draw = function() {
	return this.inner.draw(this.minWidth(), this.minHeight());
};
