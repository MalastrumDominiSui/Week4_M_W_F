require "pry"

def checkLocation(xInt, yInt)
	xMin = 530
	xMax = 557
	yMin = 358
	yMax = 400
	if ((xInt >= xMin && xInt <= xMax)&& (yInt >= yMin && yInt <= yMax))
		return true
	else
		return false
	end
end