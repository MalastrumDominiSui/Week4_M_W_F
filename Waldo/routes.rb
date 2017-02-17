require 'sinatra'
require './functions.rb'
require 'pry'



get '/' do
	erb :index
end

post '/' do
	xCor = params["waldoX"].to_i
	yCor = params["waldoY"].to_i
	if checkLocation(xCor, yCor, 1)
		erb :waldoYes
	else 
		erb :waldoNo
	end
end

post '/save' do
	score = params["time"]
	score = score.split(":")
	score = score.join()
	storeScore(score)
	@scorelist = liScores(readScores())
	erb :highscore
end