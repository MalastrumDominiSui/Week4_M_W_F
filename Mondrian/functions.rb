require "pry"
require "CSV"
require "JSON"

def addMondToCSV(params)
	mondJSON = JSON.parse(params["mond"])
	##mondJSON is a JSON with 4 objects e.g {row1 => ["white", "yellow", "red", "blue"]}
	i = 0
	mondrianNewCSV = []

	while i < mondJSON.length
		mondrianNewCSV[i] = mondJSON[i].to_s
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