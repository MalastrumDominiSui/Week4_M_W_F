require 'sinatra'
require './functions.rb'
require 'pry'



get '/' do
	erb :index
end

post '/' do
	xCor = params["waldoX"].to_i
	yCor = params["waldoY"].to_i
	if checkLocation(xCor, yCor)
		erb :waldoYes
	else 
		erb :waldoNo
	end
end