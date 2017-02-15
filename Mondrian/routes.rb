require "pry"
require "sinatra"
require "JSON"
require "./functions.rb"

get "/" do
	erb :index
end

post "/" do
	@mondArray = JSON.parse(params["mond"])
	addMondToCSV(params)
end