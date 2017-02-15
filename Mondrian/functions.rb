require "pry"
require "CSV"
require "JSON"

def addMondToCSV(params)
	mondArray = JSON.parse(params["mond"])
	##mondArray is an 4x4 array of strings here
	i = 0
	mondrianNewCSV = []

	while i < mondArray.length
		mondrianNewCSV[i] = mondArray[i].to_s
		i+=1
	end

	puts mondrianNewCSV

	CSV.open("mondrians.csv", "a") do |csv|
		csv << mondrianNewCSV
	end
end


# TEST OF THIS FUNCTION
# someParams = {"mond"=> "[[\"white\",\"red\",\"white\",\"red\"],[\"blue\",\"red\",\"yellow\",\"blue\"],[\"white\",\"yellow\",\"blue\",\"white\"],[\"red\",\"blue\",\"yellow\",\"red\"]]"}

# puts addMondToCSV(someParams)

# OUTPUT = "[""white"", ""red"", ""white"", ""red""]","[""blue"", ""red"", ""yellow"", ""blue""]","[""white"", ""yellow"", ""blue"", ""white""]","[""red"", ""blue"", ""yellow"", ""red""]"