require "pry"
require "CSV"


def readFile(file)
	file = File.open(file)
	data= file.read
	file.close
	return data.split("\n")
end

def getXYMinMax(data)
	minMaxArr = []
	data = data[1].split(",")
	i = 1
	while i < data.length 
		minMaxArr[i-1] = data[i].to_i		
		i+=1
	end

	return minMaxArr
end

def checkLocation(xInt, yInt, waldoNum)
	waldoData = readFile("waldos.txt")
	minMaxVals = getXYMinMax(waldoData)

	xMin = minMaxVals[0]
	xMax = minMaxVals[1]
	yMin = minMaxVals[2]
	yMax = minMaxVals[3]

	if ((xInt >= xMin && xInt <= xMax)&& (yInt >= yMin && yInt <= yMax))
		return true
	else
		return false
	end
end

