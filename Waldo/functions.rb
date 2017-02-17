require "pry"
require "pry-nav"
require "CSV"

## function to open our file, read data and give us the data in arrays split by line
def readFile(file)
	file = File.open(file)
	data= file.read
	file.close
	return data.split("\n")
end

## function to get the data from Waldo file, split by comma, starting with 1 to skip the name (later may use name)
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

##  function, given x and y mouseclick, compares with min max from file on server, return true if click is within ranges
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

# gets the newTime e.g. 0345, and oldscoreData: e.g ["0057", "0145", "0300", "0434", "1045", "1234"]
# generates new top 10 list.
def newTop10(oldscoreDataArr, newTimeStr)
	if oldscoreDataArr.length < 10
		oldscoreDataArr.push(newTimeStr)
		newScoreDataArr = oldscoreDataArr.sort
		return newScoreDataArr
	else
		oldscoreDataArr.push(newTimeStr)
		oldscoreDataArr = 	oldscoreDataArr.sort
		oldscoreDataArr.pop
		newScoreDataArr = oldscoreDataArr
		return newScoreDataArr
	end

end

## read back current scores
def readScores()
	return readFile("scores.txt")
end


## function to compare current score data e.g. 0345, with new score, update the list
def storeScore(paramTime)
	currentScoreData = readFile("scores.txt")
	currentScoreData = newTop10(currentScoreData, paramTime)
	File.open("scores.txt", "w") do |f|
		currentScoreData.each do |j|
			f.write("#{j}\n")
		end
	end
end

## function to auto generate a list of list item for each score
def liScores(scores)
	scoresStr = ""
	i = 0
	while i < scores.length 
		scores[i] = scores[i].insert(2, ".")
		scoresStr += ("<li>" + scores[i] + "</li>")
		i+=1
	end
	return scoresStr
end

